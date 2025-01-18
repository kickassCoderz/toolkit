import { linkOptions } from "@tanstack/react-router";
import { BookTextIcon, Gamepad2Icon, HomeIcon, ImagesIcon } from "lucide-react";

import { docs } from "~site-content";

import { createDocumentationNavigationData } from "../utils/create-documentation-navigation-data";

export const DOCUMENTATION_NAVIGATION_DATA = createDocumentationNavigationData(docs);

export const DOCUMENTATION_ROOT_LINK_OPTIONS =
    DOCUMENTATION_NAVIGATION_DATA[0]?.[1][0]?.linkOptions ??
    linkOptions({
        to: "/documentation/$",
        params: {
            _splat: "overview/introduction",
        },
    });

export const MAIN_NAVIGATION_DATA = [
    {
        title: "Home",
        icon: HomeIcon,
        linkOptions: linkOptions({
            to: "/",
            activeOptions: {
                exact: true,
            },
            activeProps: {
                "data-active": "",
            },
        }),
    },
    {
        title: "Documentation",
        icon: BookTextIcon,
        linkOptions: DOCUMENTATION_ROOT_LINK_OPTIONS,
    },

    {
        title: "Showcase",
        icon: ImagesIcon,
        linkOptions: linkOptions({
            to: "/showcase",
            activeOptions: {
                exact: true,
            },
            activeProps: {
                "data-active": "",
            },
        }),
    },
    {
        title: "Playground",
        icon: Gamepad2Icon,
        linkOptions: linkOptions({
            to: "/playground",
            activeOptions: {
                exact: true,
            },
            activeProps: {
                "data-active": "",
            },
        }),
    },
];
