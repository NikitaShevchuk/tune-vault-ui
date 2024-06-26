"use client";

import useSWR from "swr";
import type { User } from "discord.js";
import React from "react";
import useSWRMutation from "swr/mutation";

import { DISCORD_AUTH_URL } from "@/app/after-auth/constants";
import { HttpService } from "@/utils";
import { apiBaseUrl } from "@/constants";

const getAccessToken = () => {
  if (typeof window === "undefined") {
    return { accessToken: null, tokenType: null };
  }

  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  const accessToken = params.get("access_token");
  const tokenType = params.get("token_type");
  const expiresIn = params.get("expires_in");

  return { accessToken, tokenType, expiresIn };
};

export function useSaveAuthToken() {
  const { tokenType, accessToken, expiresIn } = getAccessToken();

  const { data, isLoading, error } = useSWR(
    DISCORD_AUTH_URL,
    (url) =>
      new HttpService({ transformToCamelCase: true }).get<User>(url, {
        headers: {
          Authorization: `${tokenType} ${accessToken}`,
        },
      }),
    { revalidateOnFocus: false, shouldRetryOnError: false }
  );

  const {
    isMutating,
    trigger,
    error: tokenSaveError,
  } = useSWRMutation("/discord/auth", () =>
    new HttpService().post<User>(
      `${apiBaseUrl}/discord/auth`,
      {
        token: accessToken,
      },
      { headers: { Authorization: `${tokenType} ${accessToken}` } }
    )
  );

  // Save auth token
  React.useEffect(() => {
    if (isLoading || error || !accessToken) {
      return;
    }
    document.cookie = `token=${accessToken}; path=/; max-age=${expiresIn}; samesite=strict`;
    trigger().then((res) => {
      if (res.status === 200) {
        location.hash = "";
      }
    });
  }, [isLoading, error, accessToken]);

  return { user: data?.data, isLoading: isLoading || isMutating, error: tokenSaveError || error };
}
