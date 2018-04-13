import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [

  {
    path: "/",
    title: "Welcome",
    logoSrc: "static/catalog_logo.svg",
    content: pageLoader(() => import("./WELCOME.md"))
  },
  {
    title: "Brand",
    pages: [
        {
          path: '/brand/story',
          title: 'Story',
          content: pageLoader(() => import("./brand/story.md"))
        },
        {
          path: '/brand/voice',
          title: 'Voice',
          content: pageLoader(() => import("./brand/voice.md"))
        },
        {
          path: '/brand/visual-identity',
          title: 'Visual Identity',
          content: pageLoader(() => import("./brand/visual-identity.md"))
        },
        {
          path: '/brand/brand-assets',
          title: 'Brand Assets',
          content: pageLoader(() => import("./brand/brand-assets.md"))
        }
        // Other subpages of 'Basics'
      ]
  },
  {
    path: "/color",
    title: "Color",
    content: pageLoader(() => import("./color.md"))
  },
  {
    path: "/typography",
    title: "Typography",
    content: pageLoader(() => import("./typography.md"))
  },
  {
    path: "/imagery",
    title: "Imagery",
    content: pageLoader(() => import("./imagery.md"))
  },
  {
    path: "/iconography",
    title: "Iconography",
    content: pageLoader(() => import("./iconography.md"))
  },
  {
    path: "/pattern-library",
    title: "Pattern Library",
    content: pageLoader(() => import("./pattern-library.md"))
  }
];

ReactDOM.render(
  <Catalog title="Catalog" pages={pages} />,
  document.getElementById("catalog")
);
