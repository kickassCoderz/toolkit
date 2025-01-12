import {
    type AnySchema,
    createRouter as createTanStackRouter,
    parseSearchWith,
    stringifySearchWith,
} from "@tanstack/react-router";

import {
    decodeBase64ToString,
    encodeStringToBase64,
} from "~shared/utils/base-64-encode-decode-string";

import { routeTree } from "./routeTree.gen";

export function createRouter() {
    const router = createTanStackRouter({
        routeTree,
        parseSearch: parseSearchWith(
            (value) => JSON.parse(decodeBase64ToString(value)) as AnySchema
        ),
        stringifySearch: stringifySearchWith((value) =>
            encodeStringToBase64(JSON.stringify(value))
        ),
    });

    return router;
}

declare module "@tanstack/react-router" {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- Module augmentation for type inference
    interface Register {
        router: ReturnType<typeof createRouter>;
    }
}
