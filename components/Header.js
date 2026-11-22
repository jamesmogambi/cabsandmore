"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { ChevronDown, ShoppingCart } from "lucide-react";
import { useUser, SignInButton, SignUpButton } from "@clerk/nextjs";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import MobileSideNav from "./MobileSideNav";
import UserDropDownMenu from "./UserDropDownMenu";
import useServicesStore from "@/store/servicesStore";
import { cn } from "@/lib/utils";

const navLinkClass =
  "inline-flex h-10 items-center rounded-md px-3 text-[15px] font-semibold text-titledark transition-colors hover:text-lightgreen focus:text-lightgreen focus:outline-none";

const megaMenuLinkClass =
  "block rounded-md px-2.5 py-1.5 text-sm text-titledark transition-colors hover:bg-stonelight hover:text-lightgreen";

function ServiceColumn({ title, items, buildHref }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="flex min-w-0 flex-col">
      <p className="px-2.5 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-lightgreen">
        {title}
      </p>
      <ul className="max-h-64 space-y-0.5 overflow-y-auto pr-1">
        {items.map((service) => (
          <li key={service.id}>
            <NavigationMenuLink asChild>
              <Link href={buildHref(service.id)} className={megaMenuLinkClass}>
                {service.name}
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const pathname = usePathname();
  const services = useServicesStore((state) => state.services);

  const displayServices = useMemo(() => {
    const groups = {
      delivery: [],
      "provider-service": [],
      "video-consulting-services": [],
      transport: [],
    };
    const activeGroups = {
      delivery: [],
      "provider-service": [],
      "video-consulting-services": [],
      transport: [],
    };

    services.forEach((service) => {
      let key = null;
      if (service.category === "delivery") key = "delivery";
      else if (service.category === "provider-service")
        key = "provider-service";
      else if (service.category === "video-consulting-services")
        key = "video-consulting-services";
      else if (service.category === "transport") key = "transport";
      if (!key) return;

      groups[key].push(service);
      if (service.status === "Active") activeGroups[key].push(service);
    });

    const hasActive = Object.values(activeGroups).some(
      (arr) => arr.length > 0,
    );
    return hasActive ? activeGroups : groups;
  }, [services]);

  const userName =
    user?.firstName ||
    user?.emailAddresses?.[0]?.emailAddress?.split("@")[0] ||
    "User";
  const userInitials = userName.slice(0, 2).toUpperCase();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1140px] items-center gap-3 px-4">
        <div className="flex flex-1 items-center">
          <Link
            href="/"
            aria-label="Cabs&More home"
            className="flex flex-shrink-0 items-center"
          >
            <Logo size="md" variant="dark" />
          </Link>
        </div>

        <NavigationMenu className="hidden flex-none md:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link
                href="/"
                className={cn(
                  navLinkClass,
                  pathname === "/" && "text-lightgreen",
                )}
              >
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-10 bg-transparent px-3 text-[15px] font-semibold text-titledark hover:bg-transparent hover:text-lightgreen data-[state=open]:bg-transparent data-[state=open]:text-lightgreen">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[640px] max-w-[80vw] p-5">
                  <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    <ServiceColumn
                      title="Ride Service"
                      items={displayServices.transport}
                      buildHref={(id) => `/booking/${id}`}
                    />
                    <ServiceColumn
                      title="Delivery"
                      items={displayServices.delivery}
                      buildHref={(id) => `/stores/${id}`}
                    />
                    <ServiceColumn
                      title="Home & Other"
                      items={displayServices["provider-service"]}
                      buildHref={(id) => `/service-booking/${id}`}
                    />
                    <ServiceColumn
                      title="Video Consulting"
                      items={displayServices["video-consulting-services"]}
                      buildHref={(id) => `/consulting/${id}`}
                    />
                  </div>
                  <div className="mt-3 border-t border-neutral-100 pt-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/coupon-deals/coupon-lists"
                        className="inline-flex items-center rounded-md bg-stonelight px-3 py-2 text-sm font-semibold text-titledark transition-colors hover:bg-lightgreen hover:text-white"
                      >
                        View all coupon deals
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="/about-us"
                className={cn(
                  navLinkClass,
                  pathname === "/about-us" && "text-lightgreen",
                )}
              >
                About Us
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="/blog"
                className={cn(
                  navLinkClass,
                  (pathname === "/blog" ||
                    pathname.startsWith("/blog/")) &&
                    "text-lightgreen",
                )}
              >
                Blog
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="/contact-us"
                className={cn(
                  navLinkClass,
                  pathname === "/contact-us" && "text-lightgreen",
                )}
              >
                Contact Us
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-center justify-end gap-1.5">
          <div className="hidden items-center gap-1.5 md:flex">
            {!isLoaded ? null : !isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="px-3 text-[15px] font-semibold text-titledark hover:bg-transparent hover:text-lightgreen"
                  >
                    Log in
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button
                    size="sm"
                    className="rounded-full bg-lightgreen px-4 text-[15px] font-semibold text-white hover:bg-[#1fa855]"
                  >
                    Sign up
                  </Button>
                </SignUpButton>
              </>
            ) : (
              <>
                <Menubar className="border-none bg-transparent p-0">
                  <MenubarMenu>
                    <MenubarTrigger className="flex items-center gap-1.5 rounded-full px-2 py-1.5 text-[15px] font-semibold text-titledark hover:bg-stonelight data-[state=open]:bg-stonelight">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lightgreen/10 text-[11px] font-bold uppercase text-lightgreen">
                        {userInitials}
                      </span>
                      <span className="hidden max-w-[120px] truncate lg:inline">
                        {userName}
                      </span>
                      <ChevronDown className="h-4 w-4" />
                    </MenubarTrigger>
                    <UserDropDownMenu />
                  </MenubarMenu>
                </Menubar>

                <Link
                  href="/check-out"
                  aria-label="Open cart"
                  className="relative flex h-9 w-9 items-center justify-center rounded-full text-titledark transition-colors hover:bg-stonelight hover:text-lightgreen"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute right-0.5 top-0.5 h-2 w-2 rounded-full bg-lightgreen" />
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden">
            <MobileSideNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;