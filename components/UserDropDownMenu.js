"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  ShoppingBasket,
  Wallet,
  MapPin,
  Ticket,
  Settings,
  LogOut,
} from "lucide-react";
import { useAuth } from "@clerk/nextjs";

import {
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "./ui/menubar";

const items = [
  { name: "Profile", href: "/home/profile", icon: User },
  { name: "All Orders", href: "/home/orders", icon: ShoppingBasket },
  { name: "Manage Wallet", href: "/home/wallet", icon: Wallet },
  { name: "Addresses", href: "/home/address", icon: MapPin },
  { name: "My Coupons", href: "/home/my-coupons", icon: Ticket },
  { name: "Manage Account", href: "/home/manage-account", icon: Settings },
];

const UserDropDownMenu = () => {
  const router = useRouter();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <MenubarContent className="w-64 rounded-xl border-slate-200 p-1.5">
      <div className="px-2.5 py-2">
        <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
          My account
        </p>
      </div>

      {items.map((item) => {
        const Icon = item.icon;
        return (
          <MenubarItem
            key={item.name}
            className="rounded-md px-2.5 py-2 text-[15px] focus:bg-lightgreen focus:text-white"
          >
            <Link href={item.href} className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-stonelight text-lightgreen">
                <Icon className="h-4 w-4" />
              </span>
              <span>{item.name}</span>
            </Link>
          </MenubarItem>
        );
      })}

      <MenubarSeparator className="my-1.5 bg-neutral-100" />

      <MenubarItem
        onSelect={handleSignOut}
        className="rounded-md px-2.5 py-2 text-[15px] text-red-600 focus:bg-red-50 focus:text-red-600"
      >
        <span className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-red-50 text-red-600">
            <LogOut className="h-4 w-4" />
          </span>
          <span>Sign out</span>
        </span>
      </MenubarItem>
    </MenubarContent>
  );
};

export default UserDropDownMenu;