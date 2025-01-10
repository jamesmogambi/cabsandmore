import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ChevronDown, Mail, Menu } from "lucide-react";
import Link from "next/link";

import { deliveryServices, handyServices } from "@/data/service";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menubar, MenubarMenu } from "./ui/menubar";
import { MenubarTrigger } from "@radix-ui/react-menubar";
import UserDropDownMenu from "./UserDropDownMenu";
import LoginModal from "./Modals/LoginModal";

const authenticated = true;

const MobileSideNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-green-500 w-7 h-7" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-[#363D42] border-none opacity-80 "
      >
        <ul className=" border-white text-xl text-white font-medium space-y-4">
          <li>
            <SheetClose asChild>
              <Link href="/">Home</Link>
            </SheetClose>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span className="flex flex-row">
                  Service <ChevronDown />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white rounded-[5px]  border-slate-200 w-40 ">
                {/* <DropdownMenuGroup>
                  <DropdownMenuItem>Item 1</DropdownMenuItem>
                </DropdownMenuGroup> */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Ride Service</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="bg-white rounded-[5px]  border-slate-200 ">
                      <DropdownMenuItem>
                        {/* <Mail className="mr-2 h-4 w-4" /> */}
                        <SheetClose asChild>
                          <Link href="/booking">Bike Ride</Link>
                        </SheetClose>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <SheetClose asChild>
                          <Link href="/booking">Taxi Ride</Link>
                        </SheetClose>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <SheetClose asChild>
                          <Link href="/booking">Courier Service</Link>
                        </SheetClose>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Delivery Service</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="bg-white rounded-[5px]  border-slate-200 max-h-40 overflow-scroll ">
                      {deliveryServices.map((i, k) => (
                        <DropdownMenuItem key={k}>
                          <SheetClose asChild>
                            <Link href={`/stores/${i.name}`}>{i.name}</Link>
                          </SheetClose>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Other Service</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="bg-white rounded-[5px]  border-slate-200 max-h-40 overflow-scroll ">
                      {handyServices.map((i, k) => (
                        <DropdownMenuItem key={k}>
                          <SheetClose asChild>
                            <Link href={`/service-booking/${i.name}`}>
                              {i.name}
                            </Link>
                          </SheetClose>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link href="/coupon-deals/coupon-lists">Coupon Deals</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <SheetClose asChild>
              <Link href="/contact-us">Contact Us</Link>
            </SheetClose>
          </li>
          {!authenticated && (
            <li>
              <LoginModal>
                <Link href="" className="flex flex-row items-center gap-1">
                  Login{"   "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </Link>
              </LoginModal>
            </li>
          )}

          {authenticated && (
            <>
              <li>
                <Menubar className="border-none">
                  <MenubarMenu>
                    <MenubarTrigger className="  flex justify-center items-center gap-1 text-white  cursor-pointer -ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-7 h-7"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className=" "> James</span>{" "}
                      <ChevronDown className="h-7 w-7" />{" "}
                    </MenubarTrigger>

                    <UserDropDownMenu />
                  </MenubarMenu>
                </Menubar>
              </li>

              <li>
                <Link href="/check-out" className="flex">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-7 h-7"
                    >
                      <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                  </span>
                  <span className=" ml-1">4</span>{" "}
                </Link>
              </li>
            </>
          )}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideNav;
