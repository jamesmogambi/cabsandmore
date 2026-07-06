// components/MobileSideNav.jsx
import React, { useMemo } from "react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menubar, MenubarMenu } from "./ui/menubar";
import { MenubarTrigger } from "@radix-ui/react-menubar";
import UserDropDownMenu from "./UserDropDownMenu";
import LoginModal from "./Modals/LoginModal";
import useServicesStore from "@/store/servicesStore";
import { useUser, useAuth, SignInButton, SignUpButton } from "@clerk/nextjs";

const MobileSideNav = () => {
  // Use Clerk hooks
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useAuth();

  // Get services from store
  const services = useServicesStore((state) => state.services);
  const loading = useServicesStore((state) => state.loading);

  // Group services by category (same logic as Header)
  const groupedServices = useMemo(() => {
    const groups = {
      delivery: [],
      "provider-service": [],
      "video-consulting-services": [],
      transport: [],
    };

    services.forEach((service) => {
      if (service.category === "delivery") {
        groups.delivery.push(service);
      } else if (service.category === "provider-service") {
        groups["provider-service"].push(service);
      } else if (service.category === "video-consulting-services") {
        groups["video-consulting-services"].push(service);
      } else if (service.category === "transport") {
        groups.transport.push(service);
      }
    });

    return groups;
  }, [services]);

  // Get active services for display
  const activeGroupedServices = useMemo(() => {
    const groups = {
      delivery: [],
      "provider-service": [],
      "video-consulting-services": [],
      transport: [],
    };

    services.forEach((service) => {
      if (service.status === "Active") {
        if (service.category === "delivery") {
          groups.delivery.push(service);
        } else if (service.category === "provider-service") {
          groups["provider-service"].push(service);
        } else if (service.category === "video-consulting-services") {
          groups["video-consulting-services"].push(service);
        } else if (service.category === "transport") {
          groups.transport.push(service);
        }
      }
    });

    return groups;
  }, [services]);

  // For display purposes, use active services if available, otherwise all services
  const displayServices = useMemo(() => {
    const hasActive = Object.values(activeGroupedServices).some(
      (arr) => arr.length > 0,
    );
    return hasActive ? activeGroupedServices : groupedServices;
  }, [activeGroupedServices, groupedServices]);

  // Get user display name
  const userDisplayName =
    user?.firstName ||
    user?.emailAddresses?.[0]?.emailAddress?.split("@")[0] ||
    "User";

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-green-500 w-7 h-7" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-[#363D42] border-none opacity-80">
        <ul className="border-white text-xl text-white font-medium space-y-4">
          {/* Home */}
          <li>
            <SheetClose asChild>
              <Link href="/">Home</Link>
            </SheetClose>
          </li>

          {/* Services Dropdown */}
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span className="flex flex-row cursor-pointer">
                  Service <ChevronDown />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white rounded-[5px] border-slate-200 w-40">
                {/* Transport/Ride Services */}
                {displayServices.transport &&
                  displayServices.transport.length > 0 && (
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <span>Ride Service</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className="bg-white rounded-[5px] border-slate-200 max-h-40 overflow-y-auto">
                          {displayServices.transport.map((service) => (
                            <DropdownMenuItem key={service.id}>
                              <SheetClose asChild>
                                <Link href={`/booking/${service.id}`}>
                                  {service.name}
                                </Link>
                              </SheetClose>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  )}

                {/* Delivery Services */}
                {displayServices.delivery &&
                  displayServices.delivery.length > 0 && (
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <span>Delivery Service</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className="bg-white rounded-[5px] border-slate-200 max-h-40 overflow-y-auto">
                          {displayServices.delivery.map((service) => (
                            <DropdownMenuItem key={service.id}>
                              <SheetClose asChild>
                                <Link href={`/stores/${service.id}`}>
                                  {service.name}
                                </Link>
                              </SheetClose>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  )}

                {/* Provider/Other Services */}
                {displayServices["provider-service"] &&
                  displayServices["provider-service"].length > 0 && (
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <span>Other Service</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className="bg-white rounded-[5px] border-slate-200 max-h-40 overflow-y-auto">
                          {displayServices["provider-service"].map(
                            (service) => (
                              <DropdownMenuItem key={service.id}>
                                <SheetClose asChild>
                                  <Link href={`/service-booking/${service.id}`}>
                                    {service.name}
                                  </Link>
                                </SheetClose>
                              </DropdownMenuItem>
                            ),
                          )}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  )}

                {/* Video Consulting Services */}
                {displayServices["video-consulting-services"] &&
                  displayServices["video-consulting-services"].length > 0 && (
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <span>Video Consulting</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className="bg-white rounded-[5px] border-slate-200 max-h-40 overflow-y-auto">
                          {displayServices["video-consulting-services"].map(
                            (service) => (
                              <DropdownMenuItem key={service.id}>
                                <SheetClose asChild>
                                  <Link href={`/consulting/${service.id}`}>
                                    {service.name}
                                  </Link>
                                </SheetClose>
                              </DropdownMenuItem>
                            ),
                          )}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  )}

                {/* Coupon Deals */}
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <SheetClose asChild>
                      <Link href="/">
                        Coupon Deals
                      </Link>
                    </SheetClose>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          {/* About Us */}
          <li>
            <SheetClose asChild>
              <Link href="/about-us">About Us</Link>
            </SheetClose>
          </li>

          {/* Contact Us */}
          <li>
            <SheetClose asChild>
              <Link href="/contact-us">Contact Us</Link>
            </SheetClose>
          </li>

          {/* Authentication - Not Signed In */}
          {!isLoaded ? (
            <li>
              <span className="text-white">Loading...</span>
            </li>
          ) : !isSignedIn ? (
            <>
              <li>
                <SignInButton mode="modal">
                  <span className="flex flex-row items-center gap-1 cursor-pointer">
                    Login
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </span>
                </SignInButton>
              </li>
              <li>
                <SignUpButton mode="modal">
                  <span className="cursor-pointer">Sign Up</span>
                </SignUpButton>
              </li>
            </>
          ) : (
            <>
              {/* User Menu - Signed In */}
              <li>
                <Menubar className="border-none">
                  <MenubarMenu>
                    <MenubarTrigger className="flex justify-center items-center gap-1 text-white cursor-pointer -ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{userDisplayName}</span>
                      <ChevronDown className="h-7 w-7" />
                    </MenubarTrigger>
                    <UserDropDownMenu />
                  </MenubarMenu>
                </Menubar>
              </li>

              {/* Cart */}
              <li>
                <SheetClose asChild>
                  <Link href="/check-out" className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7"
                    >
                      <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                    <span>4</span>
                  </Link>
                </SheetClose>
              </li>
            </>
          )}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideNav;
