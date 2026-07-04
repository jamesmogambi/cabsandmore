"use client";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./ui/menubar";

import { ChevronDown } from "lucide-react";
import MobileSideNav from "./MobileSideNav";
import UserDropDownMenu from "./UserDropDownMenu";
import LoginModal from "./Modals/LoginModal";
import OTPVerificationModal from "./Modals/OTPVerificationModal";
import Logo from "./Logo";

// Import Clerk hooks
import { useUser, useAuth, SignInButton, SignUpButton } from "@clerk/nextjs";

const deliveryServices = [
  {
    name: "Food Delivery",
  },
  {
    name: "Grocery Delivery",
  },
  {
    name: "Food Delivery",
  },
  {
    name: "Grocery Delivery",
  },
  {
    name: "Food Delivery",
  },
  {
    name: "Grocery Delivery",
  },
  {
    name: "Food Delivery",
  },
  {
    name: "Grocery Delivery",
  },
  {
    name: "Food Delivery",
  },
  {
    name: "Grocery Delivery",
  },
  {
    name: "Food Delivery",
  },
  {
    name: "Grocery Delivery",
  },
  {
    name: "Food Delivery",
  },
  {
    name: "Grocery Delivery",
  },
  {
    name: "Food Delivery",
  },
  {
    name: "Grocery Delivery",
  },
  {
    name: "Food Delivery",
  },
  {
    name: "Grocery Delivery",
  },
  {
    name: "Food Delivery",
  },
  {
    name: "Grocery Delivery",
  },
  {
    name: "Food Delivery",
  },
  {
    name: "Grocery Delivery",
  },
  {
    name: "Food Delivery",
  },
  {
    name: "Grocery Delivery",
  },
  {
    name: "Food Delivery",
  },
  {
    name: "Grocery Delivery",
  },
  {
    name: "Food Delivery",
  },
  {
    name: "Grocery Delivery",
  },
  {
    name: "Food Delivery",
  },
  {
    name: "Grocery Delivery",
  },
  {
    name: "Food Delivery",
  },
  {
    name: "Grocery Delivery",
  },
  {
    name: "Food Delivery",
  },
  {
    name: "Grocery Delivery",
  },
];

const handyServices = [
  {
    name: "Flower Gardening",
  },
  {
    name: "Pet Care",
  },
  {
    name: "Barber",
  },
  {
    name: "Pet Trainer",
  },
  {
    name: "Baby Care",
  },
];

const Header = () => {
  // Use Clerk hooks
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useAuth();

  return (
    <div className="w-full p-6 pb-2 flex flex-row border-b-[1px] border-neutral-300 justify-around items-center">
      <Link href="/">
        <Logo />
      </Link>

      <NavigationMenu className="hidden md:flex ">
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()}  text-black   `}
              >
                <span className="text-base">Home</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Menubar className="border-none">
              <MenubarMenu>
                <MenubarTrigger className="text-black text-base  cursor-pointer">
                  <span className=" text-black text-base "> Service</span>{" "}
                  <ChevronDown className="h-4 w-5" />{" "}
                </MenubarTrigger>
                <MenubarContent className="bg-white rounded-[5px] text-black border-slate-200 w-64 text-xl  ">
                  <MenubarSub>
                    <MenubarSubTrigger className="cursor-pointer text-xl md:text-base rounded-[5px] focus:bg-neutral-100 data-[state=open]:bg-neutral-100 data-[state=open]:text-lightgreen focus:text-lightgreen ">
                      Ride Service
                    </MenubarSubTrigger>
                    <MenubarSubContent className="bg-white rounded-[5px] border-slate-200 w-48">
                      <MenubarItem className="focus:bg-neutral-100 rounded-[5px] text-base focus:text-lightgreen">
                        <Link href="/booking">Bike Ride</Link>
                      </MenubarItem>
                      <MenubarItem className="focus:bg-neutral-100 rounded-[5px] text-base focus:text-lightgreen">
                        <Link href="/booking">Taxi Ride</Link>
                      </MenubarItem>
                      <MenubarItem className="focus:bg-neutral-100 rounded-[5px] text-base focus:text-lightgreen">
                        <Link href="/booking">Courier Service</Link>
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSub>
                    <MenubarSubTrigger className="cursor-pointer rounded-[5px] text-base data-[state=open]:bg-neutral-100 data-[state=open]:text-lightgreen focus:bg-neutral-100  focus:text-lightgreen">
                      Delivery Service
                    </MenubarSubTrigger>
                    <MenubarSubContent className="bg-white rounded-[5px] overflow-auto max-h-44 border-slate-200 w-48">
                      {deliveryServices.map((i, k) => (
                        <MenubarItem
                          className="focus:bg-neutral-100 rounded-[5px] text-base focus:text-lightgreen"
                          key={k}
                        >
                          <Link href={`/stores/${i.name}`}>{i.name}</Link>
                        </MenubarItem>
                      ))}
                    </MenubarSubContent>
                  </MenubarSub>

                  <MenubarSub>
                    <MenubarSubTrigger className="cursor-pointer rounded-[5px] text-base focus:bg-neutral-100 data-[state=open]:bg-neutral-100 focus:text-lightgreen data-[state=open]:text-lightgreen">
                      Other Service
                    </MenubarSubTrigger>
                    <MenubarSubContent className="bg-white rounded-[5px] overflow-auto max-h-44  border-slate-200 w-48">
                      {handyServices.map((i, k) => (
                        <MenubarItem
                          key={k}
                          className="focus:bg-neutral-100 rounded-[5px] text-base focus:text-lightgreen"
                        >
                          <Link href={`service-booking/${i.name}`}>
                            {i.name}
                          </Link>
                        </MenubarItem>
                      ))}
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem className="focus:bg-neutral-100 rounded-[5px] text-base focus:text-lightgreen">
                    <Link href="/coupon-deals/coupon-lists">Coupon Deal</Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about-us" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} text-black`}
              >
                <span className="text-base">About Us</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact-us" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} text-base text-black`}
              >
                <span className="text-base">Contact Us</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Show login/signup when not authenticated */}
          {!isLoaded ? (
            // Loading state
            <NavigationMenuItem>
              <NavigationMenuLink className="text-black">
                <span className="text-base">Loading...</span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ) : !isSignedIn ? (
            <>
              <NavigationMenuItem>
                <SignInButton mode="modal">
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-black cursor-pointer`}
                  >
                    <span className="text-base">Login</span>{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </NavigationMenuLink>
                </SignInButton>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <SignUpButton mode="modal">
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-black cursor-pointer`}
                  >
                    <span className="text-base">Sign Up</span>
                  </NavigationMenuLink>
                </SignUpButton>
              </NavigationMenuItem>
            </>
          ) : (
            // Show user menu when authenticated
            <>
              <NavigationMenuItem>
                <Menubar className="border-none">
                  <MenubarMenu>
                    <MenubarTrigger className="text-black text-base cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="text-black text-base">
                        {user?.firstName ||
                          user?.emailAddresses?.[0]?.emailAddress?.split(
                            "@",
                          )[0] ||
                          "User"}
                      </span>{" "}
                      <ChevronDown className="h-4 w-5" />{" "}
                    </MenubarTrigger>

                    <UserDropDownMenu />
                  </MenubarMenu>
                </Menubar>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/check-out" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-black`}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-5 h-5"
                      >
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                      </svg>
                    </span>
                    <span className="text-base ml-1">4</span>{" "}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </>
          )}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="md:hidden">
        <MobileSideNav />
      </div>
    </div>
  );
};

export default Header;
