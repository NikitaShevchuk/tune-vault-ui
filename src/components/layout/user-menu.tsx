import { Button } from "@material-tailwind/react";
import Image from "next/image";

import { useUser } from "src/hooks";
import { ProfileMenu } from "src/components/layout/profile-menu";
import Link from "next/link";
import { apiBaseUrl } from "src/constants";

export function UserMenu() {
  const { isLoading, error } = useUser();

  if (isLoading) {
    return (
      <div className="animate-pulse bg-gray-300 w-[36px] h-[36px] rounded-full" />
    );
  }

  if (error?.response?.status === 401) {
    return (
      <Link href={`${apiBaseUrl}/auth`} target="_blank">
        <Button
          variant="gradient"
          size="sm"
          color="teal"
          className="hidden text-blue-gray-100 lg:inline-block"
        >
          Sign in
        </Button>
      </Link>
    );
  }

  if (error) {
    return (
      <Image
        src="https://cdn.discordapp.com/embed/avatars/0.png"
        width={36}
        height={36}
        alt="Avatar placeholder"
        className="rounded-full"
      />
    );
  }

  return <ProfileMenu />;
}
