import * as React from "react";
import { NavigationMenu, Separator } from "radix-ui";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const Navbar = () => {
  return (
    <NavigationMenu.Root className="center relative z-20 flex h-10 w-screen justify-between px-20">
      <NavigationMenu.Sub className="h-10 list-none content-center">
        <NavigationMenu.Link href={"/"} className="flex gap-x-2.5">
          <Image
            src={"/logo.svg"}
            alt="CastingCore logo"
            width={50}
            height={50}
            className="brightness-0 invert"
          />
          <div className="block text-xl font-bold text-zinc-100">
            CastingCore
            <span className="block text-xs font-thin">
              Where Talent Meets the Spothlight
            </span>
          </div>
        </NavigationMenu.Link>
      </NavigationMenu.Sub>

      <NavigationMenu.List className="center m-0 flex list-none rounded-md bg-white/25 p-1 shadow-[0_2px_10px] backdrop-blur-md">
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/models">
            <NavigationMenu.Trigger className="group flex cursor-pointer items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] leading-none font-medium text-white outline-none select-none">
              Models{" "}
              <CaretDownIcon
                className="relative top-px text-white transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
          </NavigationMenu.Link>

          <NavigationMenu.Content className="data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left absolute top-0 left-0 w-full sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-2.5 p-5.5 sm:w-125 sm:grid-cols-[1fr_1fr]">
              <NavbarListItem href="/models/males" title="Males">
                Find the best males in the modelling business.
              </NavbarListItem>
              <NavbarListItem href="/models/females" title="Females">
                Find the best females in the modelling business.
              </NavbarListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <Separator.Root
          className="my-1.75 bg-white data-[orientation=horizontal]:h-px data-[orientation=vertical]:w-px"
          orientation="vertical"
        />

        <NavigationMenu.Item>
          <NavigationMenu.Link href="/jobs">
            <NavigationMenu.Trigger className="group flex cursor-pointer items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] leading-none font-medium text-white outline-none select-none">
              Jobs{" "}
              <CaretDownIcon
                className="relative top-px text-white transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
          </NavigationMenu.Link>

          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="two m-0 grid list-none gap-x-2.5 p-5.5 sm:w-125 sm:grid-cols-[1fr_1fr]">
              <NavbarListItem title="Males" href="/jobs/males">
                Find only jobs for males.
              </NavbarListItem>
              <NavbarListItem title="Females" href="/jobs/females">
                Find only jobs for females.
              </NavbarListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <Separator.Root
          className="my-1.75 bg-white data-[orientation=horizontal]:h-px data-[orientation=vertical]:w-px"
          orientation="vertical"
        />

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="block rounded px-3 py-2 text-[15px] leading-none font-medium text-white no-underline outline-none select-none"
            href="about-us"
          >
            About us
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <Separator.Root
          className="my-1.75 bg-white data-[orientation=horizontal]:h-px data-[orientation=vertical]:w-px"
          orientation="vertical"
        />

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="block rounded px-3 py-2 text-[15px] leading-none font-medium text-white no-underline outline-none select-none"
            href="contact"
          >
            Contact
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=hidden]:animate-fade-out data-[state=visible]:animate-fade-in top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white/25 backdrop-blur-md" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <NavigationMenu.Sub>
        <NavigationMenu.List className="center m-0 flex list-none rounded-md bg-white/25 p-1 shadow-[0_2px_10px] backdrop-blur-md">
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="block rounded px-3 py-2 text-[15px] leading-none font-medium text-white no-underline outline-none select-none"
              href="sign-up"
            >
              Sign up
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <Separator.Root
            className="my-1.75 bg-white data-[orientation=horizontal]:h-px data-[orientation=vertical]:w-px"
            orientation="vertical"
          />

          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="block rounded px-3 py-2 text-[15px] leading-none font-medium text-white no-underline outline-none select-none"
              href="sign-in"
            >
              Sign in
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Sub>

      <div className="absolute top-full left-0 flex w-full justify-center perspective-[2000px]">
        <NavigationMenu.Viewport className="data-[state=closed]:animate-scale-out data-[state=open]:animate-scale-in relative mt-2.5 h-(--radix-navigation-menu-viewport-height) w-full origin-[top_center] overflow-hidden rounded-md bg-white/25 backdrop-blur-md transition-[width,height] duration-300 sm:w-(--radix-navigation-menu-viewport-width)" />
      </div>
    </NavigationMenu.Root>
  );
};

type NavbarListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string;
};

const NavbarListItem = React.forwardRef<HTMLAnchorElement, NavbarListItemProps>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(
            "block rounded-md p-3 text-[15px] leading-none text-white no-underline transition-colors outline-none select-none",
            className,
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-1.25 leading-[1.2] font-medium text-white">
            {title}
          </div>
          <p className="leading-[1.4] text-slate-300">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  ),
);

NavbarListItem.displayName = "NavbarListItem";

export default Navbar;
