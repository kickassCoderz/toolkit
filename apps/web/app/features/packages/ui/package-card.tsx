import { DownloadIcon, StarIcon, UsersIcon } from "lucide-react";

import { CardBody, CardFooter, CardHeader, CardRoot } from "~shared/design-system/card";
import { Icon } from "~shared/design-system/icon";
import { Heading } from "~shared/design-system/typography/heading";
import { Text } from "~shared/design-system/typography/text";

import type { PackageStat } from "../models";

type PackageCardProperties = Readonly<{
    title: React.ReactNode;
    description: React.ReactNode;
    stats: Array<PackageStat>;
}>;

export function PackageCard({ title, description }: PackageCardProperties) {
    return (
        <CardRoot size="md">
            <CardHeader>
                <Heading size="xl" weight="medium">
                    {title}
                </Heading>
            </CardHeader>
            <CardBody>
                <Text size="md" highContrast={false} css={{ lineClamp: 2 }}>
                    {description}
                </Text>
            </CardBody>
            <CardFooter
                css={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Text
                    size="sm"
                    weight="medium"
                    css={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "1",
                    }}
                >
                    <Icon>
                        <StarIcon />
                    </Icon>
                    1.4k
                </Text>
                <Text
                    size="sm"
                    weight="medium"
                    css={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "1",
                    }}
                >
                    <Icon>
                        <DownloadIcon />
                    </Icon>
                    1.4k
                </Text>
                <Text
                    size="sm"
                    weight="medium"
                    css={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "1",
                    }}
                >
                    <Icon>
                        <UsersIcon />
                    </Icon>
                    1.4k
                </Text>
            </CardFooter>
        </CardRoot>
    );
}
