import { createHashRouter } from "react-router-dom";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./components/HomePage";
import { ScholarshipPage } from "./components/ScholarshipPage";
import { ApplicationPage } from "./components/ApplicationPage";
import { BiographyPage } from "./components/BiographyPage";
import { AboutPage } from "./components/AboutPage";
import { GalleryPage } from "./components/GalleryPage";
import { ContactPage } from "./components/ContactPage";

export const router = createHashRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
        { index: true, Component: HomePage },
        { path: "about", Component: AboutPage },
        { path: "biography/:id", Component: BiographyPage },
        { path: "gallery", Component: GalleryPage },
        { path: "scholarship", Component: ScholarshipPage },
                { path: "contact", Component: ContactPage },
                { path: "apply", Component: ApplicationPage },
      ],
    },
  ],
  {
  }
);
