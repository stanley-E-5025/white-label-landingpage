import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "features",
      href: "/features",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Pricing",
          href: "/pricing",
          items: [],
        },

        {
          title: "features",
          href: "/features",
          items: [],
        },

        {
          title: "About",
          href: "/about",
          items: [],
        },
      ],
    },
  ],
};
