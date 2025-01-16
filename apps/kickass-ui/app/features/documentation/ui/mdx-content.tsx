import { capitalizeTitle } from "@kickass-coderz/capitalize-title";
import { Link as RouterLink } from "@tanstack/react-router";
import * as runtime from "react/jsx-runtime";

import { Button } from "~shared/design-system/button";
import {
    TableBody,
    TableCell,
    TableColumnHeaderCell,
    TableHeader,
    TableRoot,
    TableRow,
} from "~shared/design-system/table";
import { Code } from "~shared/design-system/typography/code";
import { Em } from "~shared/design-system/typography/em";
import { Heading } from "~shared/design-system/typography/heading";
import { Link } from "~shared/design-system/typography/link";
import { Strong } from "~shared/design-system/typography/strong";
import { Text } from "~shared/design-system/typography/text";

function isString(value: unknown): value is string {
    return typeof value === "string";
}

type HeadingProperties = Readonly<{
    children: React.ReactNode;
    id?: string;
}>;

const sharedComponents = {
    h1: ({ id, children, ...rest }: HeadingProperties) => (
        <Heading as="h1" id={id} {...rest}>
            {id ? (
                <Link asChild highContrast css={{ colorPalette: "neutral" }}>
                    <RouterLink to="." hash={id}>
                        {isString(children) ? capitalizeTitle(children) : children}
                    </RouterLink>
                </Link>
            ) : isString(children) ? (
                capitalizeTitle(children)
            ) : (
                children
            )}
        </Heading>
    ),
    h2: ({ id, children, ...rest }: HeadingProperties) => {
        return (
            <Heading as="h2" id={id} size="3xl" css={{ mt: "12", mb: "3" }} {...rest}>
                {id ? (
                    <Link asChild highContrast css={{ colorPalette: "neutral" }}>
                        <RouterLink to="." hash={id}>
                            {isString(children) ? capitalizeTitle(children) : children}
                        </RouterLink>
                    </Link>
                ) : isString(children) ? (
                    capitalizeTitle(children)
                ) : (
                    children
                )}
            </Heading>
        );
    },
    h3: ({ id, children, ...rest }: HeadingProperties) => (
        <Heading as="h3" size="2xl" id={id} css={{ mt: "10", mb: "2" }} {...rest}>
            {id ? (
                <Link asChild highContrast css={{ colorPalette: "neutral" }}>
                    <RouterLink to="." hash={id}>
                        {isString(children) ? capitalizeTitle(children) : children}
                    </RouterLink>
                </Link>
            ) : isString(children) ? (
                capitalizeTitle(children)
            ) : (
                children
            )}
        </Heading>
    ),
    h4: ({ id, children, ...rest }: HeadingProperties) => (
        <Heading as="h4" id={id} size="xl" css={{ mt: "8", mb: "3" }} {...rest}>
            {id ? (
                <Link asChild highContrast css={{ colorPalette: "neutral" }}>
                    <RouterLink to="." hash={id}>
                        {isString(children) ? capitalizeTitle(children) : children}
                    </RouterLink>
                </Link>
            ) : isString(children) ? (
                capitalizeTitle(children)
            ) : (
                children
            )}
        </Heading>
    ),
    h5: ({ id, children, ...rest }: HeadingProperties) => (
        <Heading as="h5" size="lg" id={id} {...rest}>
            {id ? (
                <Link asChild highContrast css={{ colorPalette: "neutral" }}>
                    <RouterLink to="." hash={id}>
                        {isString(children) ? capitalizeTitle(children) : children}
                    </RouterLink>
                </Link>
            ) : isString(children) ? (
                capitalizeTitle(children)
            ) : (
                children
            )}
        </Heading>
    ),
    h6: ({ id, children, ...rest }: HeadingProperties) => (
        <Heading as="h6" size="md" id={id} {...rest}>
            {id ? (
                <Link asChild highContrast css={{ colorPalette: "neutral" }}>
                    <RouterLink to="." hash={id}>
                        {isString(children) ? capitalizeTitle(children) : children}
                    </RouterLink>
                </Link>
            ) : isString(children) ? (
                capitalizeTitle(children)
            ) : (
                children
            )}
        </Heading>
    ),
    a: ({ href, children }: { readonly href: string; readonly children: React.ReactNode }) => (
        <Link>{children}</Link>
    ),
    p: ({ children }: { readonly children: React.ReactNode }) => (
        <Text size="md" css={{ mb: "4" }}>
            {children}
        </Text>
    ),
    em: Em,
    strong: Strong,
    code: Code,
    // code: ({ children }: { readonly children: React.ReactNode }) => <Code>{children}</Code>,
    table: ({ children }: { readonly children: React.ReactNode }) => (
        <TableRoot variant="surface" css={{ my: "6" }}>
            {children}
        </TableRoot>
    ),
    thead: ({ children }: { readonly children: React.ReactNode }) => (
        <TableHeader>{children}</TableHeader>
    ),
    tr: ({ children }: { readonly children: React.ReactNode }) => <TableRow>{children}</TableRow>,
    tbody: ({ children }: { readonly children: React.ReactNode }) => (
        <TableBody>{children}</TableBody>
    ),
    th: ({ children }: { readonly children: React.ReactNode }) => (
        <TableColumnHeaderCell>{children}</TableColumnHeaderCell>
    ),
    td: ({ children }: { readonly children: React.ReactNode }) => <TableCell>{children}</TableCell>,
    button: Button,

    // Add your global components here
};

const useMDXComponent = (code: string) => {
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    const function_ = new Function(code);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    return function_({ ...runtime }).default;
};

type MDXProperties = {
    readonly code: string;
    readonly components?: Record<string, React.ComponentType>;
};

export function MDXContent({ code, components }: MDXProperties) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const Component = useMDXComponent(code);
    return <Component components={{ ...sharedComponents, ...components }} />;
}
