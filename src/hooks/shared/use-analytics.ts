"use client";

import useSWR from "swr";

import { HttpService } from "src/utils";
import { apiBaseUrl } from "src/constants";
import { Analytics } from "src/models/analytics";

export function useAnalytics() {
  const { data, isLoading, error } = useSWR(
    `${apiBaseUrl}/analytics`,
    (url) => new HttpService().get<Analytics>(url),
    { revalidateOnFocus: true },
  );

  const analytics = data?.data;
  const response = data;

  return { analytics, isLoading, error, response };
}
