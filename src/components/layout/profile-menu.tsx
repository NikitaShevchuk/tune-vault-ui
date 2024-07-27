import {
  Menu,
  MenuHandler,
  Button,
  Avatar,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import React from "react";

import { PowerIcon } from "@heroicons/react/24/solid";
import { useLogout, useUser } from "src/hooks";
import Image from "next/image";

const profileMenuItems = [
  {
    label: "Add Tune Vault bot",
    imageUrl:
      "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6918e57475a843f59f_icon_clyde_black_RGB.svg",
    href: "https://discord.com/oauth2/authorize?client_id=1223715026460868738&permissions=8&scope=applications.commands+bot",
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

export function ProfileMenu() {
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { logout } = useLogout();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="rounded-full p-0 m-0"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt={user?.globalName}
            className="border border-gray-900 p-0.5"
            src={`https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}.png`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <Typography className="font-bold text-center py-1">
          {user?.username}
        </Typography>

        {profileMenuItems.map(({ label, icon, imageUrl, href }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={isLastItem ? () => logout() : closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {icon
                ? React.createElement(icon, {
                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                    strokeWidth: 2,
                  })
                : null}
              {imageUrl ? (
                <Image
                  width={16}
                  height={16}
                  className="h-4 w-4"
                  src={imageUrl}
                  alt="Discord Logo"
                />
              ) : null}
              <Typography
                as={href ? "a" : "span"}
                target={href ? "_blank" : undefined}
                href={href}
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "gray"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
