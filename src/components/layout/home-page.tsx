"use client";

import { ServerIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

import { Analytics } from "src/models/analytics";
import { Card } from "src/components/shared/card";

interface AnalyticsItemProps {
  value: number;
  title: string;
  icon: React.ReactNode;
}

function AnalyticsItem({ title, value, icon }: AnalyticsItemProps) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <div>
        <Typography variant="small" className="whitespace-nowrap">
          {title}
        </Typography>
        <Typography className="leading-[25px] font-medium" variant="h4">
          {value}
        </Typography>
      </div>
    </div>
  );
}

interface Props {
  analytics: Analytics;
}

export function HomePage({ analytics: { totalUsers, totalGuilds } }: Props) {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Card className="flex-col p-12 flex items-center justify-center gap-8">
        <Typography variant="h3">
          Effortlessly play music on your favorite Discord server!
        </Typography>
        <div className="flex justify-center gap-4">
          <AnalyticsItem
            title="Total Users"
            value={totalUsers}
            icon={
              <UserIcon className="w-12 h-12 p-1.5 rounded-lg text-teal-200 bg-teal-500 bg-opacity-25" />
            }
          />
          <AnalyticsItem
            title="Total Servers"
            value={totalGuilds}
            icon={
              <ServerIcon className="w-12 h-12 p-1.5 rounded-lg text-teal-200 bg-teal-500 bg-opacity-25" />
            }
          />
          <Link href="https://discord.com/oauth2/authorize?client_id=1223715026460868738&permissions=8&scope=applications.commands+bot">
            <Button color="teal" size="lg">
              <div className="flex gap-2 items-center">
                <Image
                  width={20}
                  height={20}
                  src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg"
                  alt="Discord logo"
                />
                Add Tune Vault bot
              </div>
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
