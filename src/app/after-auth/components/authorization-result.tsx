"use client";

import { Alert, Avatar, Spinner, Typography } from "@material-tailwind/react";

import React from "react";
import { Card } from "src/components/shared/card";
import { useUser } from "src/hooks";

export function AuthorizationResult() {
  const { error, isLoading, user } = useUser();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen gap-4">
        <Spinner color="blue-gray" />
        <Typography className="text-blue-gray-100 text-xl font-bold">
          Loading...
        </Typography>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <Alert color="red" className="w-fit h-fit">
          <Typography className="text-blue-gray-100 text-lg font-semibold">
            Failed to authenticate with Discord!
          </Typography>
        </Alert>
      </div>
    );
  }

  return (
    <div className="flex items-center h-full flex-col justify-center">
      <Card className="flex items-center gap-4 flex-col justify-center">
        <div className="flex items-center justify-center h-fit gap-2">
          <Avatar
            className="rounded-full w-8 h-8"
            src={`https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}.png`}
            alt="Avatar"
            placeholder={"https://cdn.discordapp.com/embed/avatars/0.png"}
          />
          <Typography className="text-blue-gray-100 text-xl font-bold">
            {user?.globalName}
          </Typography>
          <Typography className="text-blue-gray-100 text-xl">
            ({user?.username})
          </Typography>
        </div>
        <Alert color="green" className="w-fit">
          <Typography className="text-blue-gray-100 text-lg font-semibold">
            You have successfully authenticated with Discord!
          </Typography>
        </Alert>
      </Card>
    </div>
  );
}
