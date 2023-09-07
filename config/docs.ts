import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Guides",
      href: "/guides",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
        },
        {
          title: "Authentication",
          href: "/docs/authentication",
        },
        {
          title: "No Code",
          href: "/docs/nocode",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Endpoints",
          href: "/docs/endpoints",
        },
        {
          title: "Types",
          href: "/docs/types",
        },
      ],
    },
  ],
}
