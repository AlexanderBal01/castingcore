import * as React from "react";
import { NavigationMenu } from "radix-ui";
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

      <NavigationMenu.List className="center m-0 flex list-none rounded-md bg-white p-1 shadow-[0_2px_10px]">
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/models">
            <NavigationMenu.Trigger className="group flex items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] leading-none font-medium text-blue-600 outline-none select-none hover:bg-blue-300 hover:text-white focus:shadow-[0_0_0_2px] focus:shadow-blue-900">
              Models{" "}
              <CaretDownIcon
                className="text-violet10 relative top-px transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
          </NavigationMenu.Link>

          <NavigationMenu.Content className="data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left absolute top-0 left-0 w-full sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-2.5 p-5.5 sm:w-125 sm:grid-cols-[0.75fr_1fr]">
              <NavbarListItem href="/models/males" title="Males">
                Find the best males in the modelling business.
              </NavbarListItem>
              <NavbarListItem href="/models/females" title="Females">
                Find the most Beautiful females in the modelling business.
              </NavbarListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group text-violet11 hover:bg-violet3 focus:shadow-violet7 flex items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] leading-none font-medium outline-none select-none focus:shadow-[0_0_0_2px]">
            Jobs{" "}
            <CaretDownIcon
              className="text-violet10 relative top-px transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-2.5 p-5.5 sm:w-150 sm:grid-flow-col sm:grid-rows-3">
              <NavbarListItem
                title="Introduction"
                href="/primitives/docs/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </NavbarListItem>
              <NavbarListItem
                title="Getting started"
                href="/primitives/docs/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </NavbarListItem>
              <NavbarListItem
                title="Styling"
                href="/primitives/docs/guides/styling"
              >
                Unstyled and compatible with any styling solution.
              </NavbarListItem>
              <NavbarListItem
                title="Animation"
                href="/primitives/docs/guides/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </NavbarListItem>
              <NavbarListItem
                title="Accessibility"
                href="/primitives/docs/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </NavbarListItem>
              <NavbarListItem
                title="Releases"
                href="/primitives/docs/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </NavbarListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block rounded px-3 py-2 text-[15px] leading-none font-medium no-underline outline-none select-none focus:shadow-[0_0_0_2px]"
            href="https://github.com/radix-ui"
          >
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=hidden]:animate-fade-out data-[state=visible]:animate-fade-in top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <NavigationMenu.List className="center m-0 flex list-none rounded-md bg-white p-1 shadow-[0_2px_10px]">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group text-violet11 hover:bg-violet3 focus:shadow-violet7 flex items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] leading-none font-medium outline-none select-none focus:shadow-[0_0_0_2px]">
            Models{" "}
            <CaretDownIcon
              className="text-violet10 relative top-px transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left absolute top-0 left-0 w-full sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-2.5 p-5.5 sm:w-125 sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="from-purple9 to-indigo9 focus:shadow-violet7 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6.25 no-underline outline-none select-none focus:shadow-[0_0_0_2px]"
                    href="/"
                  >
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="white"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="mt-4 mb-1.75 text-[18px] leading-[1.2] font-medium text-white">
                      Radix Primitives
                    </div>
                    <p className="text-mauve4 text-[14px] leading-[1.3]">
                      Unstyled, accessible components for React.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <NavbarListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </NavbarListItem>
              <NavbarListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </NavbarListItem>
              <NavbarListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </NavbarListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group text-violet11 hover:bg-violet3 focus:shadow-violet7 flex items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] leading-none font-medium outline-none select-none focus:shadow-[0_0_0_2px]">
            Overview{" "}
            <CaretDownIcon
              className="text-violet10 relative top-px transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-2.5 p-5.5 sm:w-150 sm:grid-flow-col sm:grid-rows-3">
              <NavbarListItem
                title="Introduction"
                href="/primitives/docs/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </NavbarListItem>
              <NavbarListItem
                title="Getting started"
                href="/primitives/docs/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </NavbarListItem>
              <NavbarListItem
                title="Styling"
                href="/primitives/docs/guides/styling"
              >
                Unstyled and compatible with any styling solution.
              </NavbarListItem>
              <NavbarListItem
                title="Animation"
                href="/primitives/docs/guides/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </NavbarListItem>
              <NavbarListItem
                title="Accessibility"
                href="/primitives/docs/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </NavbarListItem>
              <NavbarListItem
                title="Releases"
                href="/primitives/docs/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </NavbarListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block rounded px-3 py-2 text-[15px] leading-none font-medium no-underline outline-none select-none focus:shadow-[0_0_0_2px]"
            href="https://github.com/radix-ui"
          >
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=hidden]:animate-fade-out data-[state=visible]:animate-fade-in top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="absolute top-full left-0 flex w-full justify-center perspective-[2000px]">
        <NavigationMenu.Viewport className="data-[state=closed]:animate-scale-out data-[state=open]:animate-scale-in relative mt-2.5 h-(--radix-navigation-menu-viewport-height) w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,height] duration-300 sm:w-(--radix-navigation-menu-viewport-width)" />
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
            "block rounded-md p-3 text-[15px] leading-none text-blue-600 no-underline transition-colors outline-none select-none hover:bg-blue-300 hover:text-white focus:shadow-[0_0_0_2px] focus:shadow-blue-900",
            className,
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="text-violet12 mb-1.25 leading-[1.2] font-medium">
            {title}
          </div>
          <p className="text-mauve11 leading-[1.4]">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  ),
);

NavbarListItem.displayName = "NavbarListItem";

export default Navbar;
