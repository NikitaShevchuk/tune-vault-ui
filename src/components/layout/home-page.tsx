"use client";

import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export function HomePage() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-8">
      <Typography variant="h3">
        Effortlessly play music on your favorite Discord server!
      </Typography>
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
  );
}
