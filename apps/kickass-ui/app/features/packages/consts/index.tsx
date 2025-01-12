import type { Package } from "../models";

export const FEATURED_PACKAGES: Array<Package> = [
    {
        id: 1,
        title: "React Hooks",
        description: (
            <>
                A collection of React hooks.
                <br />
                Typed,tested and ready to use.
            </>
        ),
        stats: [
            { type: "stars", value: 1400 },
            { type: "downloads", value: 1400 },
            { type: "contributors", value: 1400 },
        ],
    },
    {
        id: 2,
        title: "Kickass UI",
        description:
            "Component library optimized for fast development, easy maintenance, and accessibility. Build high-quality web apps with breeze.",
        stats: [
            { type: "stars", value: 1400 },
            { type: "downloads", value: 1400 },
            { type: "contributors", value: 1400 },
        ],
    },
    {
        id: 3,
        title: "Data Service",
        description: (
            <>
                Streamline data fetching, caching, and updating with a single service. No more
                any&apos;s and typecasting.
            </>
        ),
        stats: [
            { type: "stars", value: 1400 },
            { type: "downloads", value: 1400 },
            { type: "contributors", value: 1400 },
        ],
    },
    {
        id: 4,
        title: "Control Flows",
        description: "Simplify the complexity of conditional rendering.",
        stats: [
            { type: "stars", value: 1400 },
            { type: "downloads", value: 1400 },
            { type: "contributors", value: 1400 },
        ],
    },
];
