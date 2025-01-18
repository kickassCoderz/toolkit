import { createFileRoute } from '@tanstack/react-router'
import { BookmarkIcon, CircleAlertIcon, MoonIcon, SunIcon } from 'lucide-react'

import { Button } from '~shared/design-system/button'
import { Callout } from '~shared/design-system/callout'
import { CardBody, CardHeader, CardRoot } from '~shared/design-system/card'
import { Icon } from '~shared/design-system/icon'
import { IconButton } from '~shared/design-system/icon-button'
import {
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from '~shared/design-system/tabs'
import { Heading } from '~shared/design-system/typography/heading'
import { Link } from '~shared/design-system/typography/link'
import { Text } from '~shared/design-system/typography/text'
import { css } from '~styled-system/css'
import { HStack, Stack } from '~styled-system/jsx'
import { container, stack } from '~styled-system/patterns'

export const Route = createFileRoute('/playground/')({
  component: RouteComponent,
})

const rootStyles = container({
  py: '12',
  display: 'flex',
  flexDirection: 'column',
  gap: '12',
})

function RouteComponent() {
  return (
    <main className={rootStyles}>
      <header>
        <hgroup className={stack({ gap: '2' })}>
          <Heading size="4xl">Playground</Heading>
          <Text highContrast={false} size="lg">
            Explore and experiment with the components in the Kickass UI design
            system.
          </Text>
        </hgroup>
      </header>
      <Stack direction="row" gap="10" css={{ position: 'relative' }}>
        <Stack gap="12">
          <PlaygroundSection title="Avatar">
            <TabsRoot defaultValue="colors" size="md" orientation="horizontal">
              <TabsList>
                <TabsTrigger value="colors">Theme colors</TabsTrigger>
                <TabsTrigger value="sizes">All sizes</TabsTrigger>
                <TabsIndicator />
              </TabsList>
              <TabsContent value="colors"></TabsContent>
              <TabsContent value="sizes"></TabsContent>
            </TabsRoot>
          </PlaygroundSection>
          <PlaygroundSection title="Button">
            <TabsRoot defaultValue="colors" size="md" orientation="horizontal">
              <TabsList>
                <TabsTrigger value="colors">Theme colors</TabsTrigger>
                <TabsTrigger value="sizes">All sizes</TabsTrigger>
                <TabsTrigger value="radius">All radius</TabsTrigger>
                <TabsIndicator />
              </TabsList>
              <TabsContent value="colors">
                <Stack gap="4" css={{ paddingX: '4' }}>
                  <Stack>
                    <Heading size="md">Accent</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <Button variant="solid">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="soft">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="surface">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="outlined">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="ghost">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                    </HStack>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <Button highContrast variant="solid">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button highContrast variant="soft">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button highContrast variant="surface">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button highContrast variant="outlined">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button highContrast variant="ghost">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                    </HStack>
                  </Stack>
                  <Stack>
                    <Heading size="md">Neutral</Heading>
                    <HStack css={{ colorPalette: 'neutral', flexWrap: 'wrap' }}>
                      <Button variant="solid">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="soft">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="surface">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="outlined">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="ghost">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                    </HStack>
                    <HStack css={{ colorPalette: 'neutral', flexWrap: 'wrap' }}>
                      <Button highContrast variant="solid">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button highContrast variant="soft">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button highContrast variant="surface">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button highContrast variant="outlined">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button highContrast variant="ghost">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                    </HStack>
                  </Stack>
                </Stack>
              </TabsContent>
              <TabsContent value="sizes">
                <Stack gap="4" css={{ paddingX: '4' }}>
                  <Stack>
                    <Heading size="md">XS</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <Button variant="solid" size="xs">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="soft" size="xs">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="surface" size="xs">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="outlined" size="xs">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="ghost" size="xs">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                    </HStack>
                  </Stack>
                  <Stack>
                    <Heading size="md">SM</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <Button variant="solid" size="sm">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="soft" size="sm">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="surface" size="sm">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="outlined" size="sm">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                    </HStack>
                  </Stack>
                  <Stack>
                    <Heading size="md">MD</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <Button variant="solid" size="md">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="soft" size="md">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="surface" size="md">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="outlined" size="md">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="ghost" size="md">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                    </HStack>
                  </Stack>
                  <Stack>
                    <Heading size="md">LG</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <Button variant="solid" size="lg">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="soft" size="lg">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="surface" size="lg">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="outlined" size="lg">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="ghost" size="lg">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                    </HStack>
                  </Stack>
                </Stack>
              </TabsContent>
              <TabsContent value="radius">
                <Stack gap="4" css={{ paddingX: '4' }}>
                  <Stack>
                    <Heading size="md">None</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <Button variant="solid" radius="none">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="soft" radius="none">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="surface" radius="none">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="outlined" radius="none">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="ghost" radius="none">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                    </HStack>
                  </Stack>
                  <Stack>
                    <Heading size="md">Rounded</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <Button variant="solid" radius="rounded">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="soft" radius="rounded">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="surface" radius="rounded">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="outlined" radius="rounded">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="ghost" radius="rounded">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                    </HStack>
                  </Stack>
                  <Stack>
                    <Heading size="md">Full</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <Button variant="solid" radius="full">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="soft" radius="full">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="surface" radius="full">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="outlined" radius="full">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                      <Button variant="ghost" radius="full">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                        Bookmark
                      </Button>
                    </HStack>
                  </Stack>
                </Stack>
              </TabsContent>
            </TabsRoot>
          </PlaygroundSection>
          <PlaygroundSection title="Icon Button">
            <TabsRoot defaultValue="colors" size="md" orientation="horizontal">
              <TabsList>
                <TabsTrigger value="colors">Theme colors</TabsTrigger>
                <TabsTrigger value="sizes">All sizes</TabsTrigger>
                <TabsTrigger value="radius">All radius</TabsTrigger>
                <TabsIndicator />
              </TabsList>
              <TabsContent value="colors">
                <Stack gap="4" css={{ paddingX: '4' }}>
                  <Stack>
                    <Heading size="md">Accent</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <IconButton variant="solid">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="soft">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="surface">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="outlined">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="ghost">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                    </HStack>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <IconButton highContrast variant="solid">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton highContrast variant="soft">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton highContrast variant="surface">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton highContrast variant="outlined">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton highContrast variant="ghost">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                    </HStack>
                  </Stack>
                  <Stack>
                    <Heading size="md">Neutral</Heading>
                    <HStack css={{ colorPalette: 'neutral', flexWrap: 'wrap' }}>
                      <IconButton variant="solid">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="soft">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="surface">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="outlined">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="ghost">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                    </HStack>
                    <HStack css={{ colorPalette: 'neutral', flexWrap: 'wrap' }}>
                      <IconButton highContrast variant="solid">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton highContrast variant="soft">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton highContrast variant="surface">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton highContrast variant="outlined">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton highContrast variant="ghost">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                    </HStack>
                  </Stack>
                </Stack>
              </TabsContent>
              <TabsContent value="sizes">
                <Stack gap="4" css={{ paddingX: '4' }}>
                  <Stack>
                    <Heading size="md">XS</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <IconButton variant="solid" size="xs">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="soft" size="xs">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="surface" size="xs">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="outlined" size="xs">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="ghost" size="xs">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                    </HStack>
                  </Stack>
                  <Stack>
                    <Heading size="md">SM</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <IconButton variant="solid" size="sm">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="soft" size="sm">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="surface" size="sm">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="outlined" size="sm">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="ghost" size="sm">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                    </HStack>
                  </Stack>
                  <Stack>
                    <Heading size="md">MD</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <IconButton variant="solid" size="md">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="soft" size="md">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="surface" size="md">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="outlined" size="md">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="ghost" size="md">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                    </HStack>
                  </Stack>
                  <Stack>
                    <Heading size="md">LG</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <IconButton variant="solid" size="lg">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="soft" size="lg">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="surface" size="lg">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="outlined" size="lg">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="ghost" size="lg">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                    </HStack>
                  </Stack>
                </Stack>
              </TabsContent>
              <TabsContent value="radius">
                <Stack gap="4" css={{ paddingX: '4' }}>
                  <Stack>
                    <Heading size="md">None</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <IconButton variant="solid" radius="none">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="soft" radius="none">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="surface" radius="none">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="outlined" radius="none">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="ghost" radius="none">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                    </HStack>
                  </Stack>
                  <Stack>
                    <Heading size="md">Rounded</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <IconButton variant="solid" radius="rounded">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="soft" radius="rounded">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="surface" radius="rounded">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="outlined" radius="rounded">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="ghost" radius="rounded">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                    </HStack>
                  </Stack>
                  <Stack>
                    <Heading size="md">Full</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <IconButton variant="solid" radius="full">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="soft" radius="full">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="surface" radius="full">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="outlined" radius="full">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                      <IconButton variant="ghost" radius="full">
                        <Icon>
                          <BookmarkIcon />
                        </Icon>
                      </IconButton>
                    </HStack>
                  </Stack>
                </Stack>
              </TabsContent>
            </TabsRoot>
          </PlaygroundSection>
          <PlaygroundSection title="Callout">
            <TabsRoot defaultValue="colors" size="md" orientation="horizontal">
              <TabsList>
                <TabsTrigger value="colors">Theme colors</TabsTrigger>
                <TabsTrigger value="sizes">All sizes</TabsTrigger>
                <TabsIndicator />
              </TabsList>
              <TabsContent value="colors">
                <Stack gap="4" css={{ paddingX: '4' }}>
                  <Stack>
                    <Heading size="md">Accent</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <Callout
                        variant="solid"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        variant="soft"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        variant="outlined"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        variant="surface"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                    </HStack>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <Callout
                        highContrast
                        variant="solid"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        highContrast
                        variant="soft"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        highContrast
                        variant="outlined"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        highContrast
                        variant="surface"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                    </HStack>
                  </Stack>
                  <Stack css={{ colorPalette: 'neutral' }}>
                    <Heading size="md">Neutral</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <Callout
                        variant="solid"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        variant="soft"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        variant="outlined"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        variant="surface"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                    </HStack>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <Callout
                        highContrast
                        variant="solid"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        highContrast
                        variant="soft"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        highContrast
                        variant="outlined"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        highContrast
                        variant="surface"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                    </HStack>
                  </Stack>
                </Stack>
              </TabsContent>
              <TabsContent value="sizes">
                <Stack gap="4" css={{ paddingX: '4' }}>
                  <Stack>
                    <Heading size="md">SM</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <Callout
                        variant="solid"
                        size="sm"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        variant="soft"
                        size="sm"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        variant="outlined"
                        size="sm"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        variant="surface"
                        size="sm"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                    </HStack>
                  </Stack>
                  <Stack>
                    <Heading size="md">MD</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <Callout
                        variant="solid"
                        size="md"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        variant="soft"
                        size="md"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        variant="outlined"
                        size="md"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        variant="surface"
                        size="md"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                    </HStack>
                  </Stack>
                  <Stack>
                    <Heading size="md">LG</Heading>
                    <HStack css={{ flexWrap: 'wrap' }}>
                      <Callout
                        variant="solid"
                        size="lg"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        variant="soft"
                        size="lg"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        variant="outlined"
                        size="lg"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                      <Callout
                        variant="surface"
                        size="lg"
                        title="Invalid fields"
                        icon={
                          <Icon>
                            <CircleAlertIcon />
                          </Icon>
                        }
                      >
                        Your form has some errors. Please fix them and try
                        again.
                      </Callout>
                    </HStack>
                  </Stack>
                </Stack>
              </TabsContent>
            </TabsRoot>
          </PlaygroundSection>
        </Stack>

        <CardRoot
          variant="surface"
          size="md"
          css={{
            flexShrink: '0',
            height: 'fit',
            position: 'sticky',
            top: '20',
            left: '0',
            boxShadow: '4',
          }}
        >
          <CardHeader>
            <Heading size="lg">Theme Panel</Heading>
          </CardHeader>
          <CardBody>
            <Stack gap="8">
              <Stack>
                <Heading as="h3" size="md" weight="medium">
                  Theme
                </Heading>
                <HStack>
                  <IconButton>
                    <Icon>
                      <BookmarkIcon />
                    </Icon>
                  </IconButton>
                  <IconButton>
                    <Icon>
                      <BookmarkIcon />
                    </Icon>
                  </IconButton>
                  <IconButton>
                    <Icon>
                      <BookmarkIcon />
                    </Icon>
                  </IconButton>
                  <IconButton>
                    <Icon>
                      <BookmarkIcon />
                    </Icon>
                  </IconButton>
                  <IconButton>
                    <Icon>
                      <BookmarkIcon />
                    </Icon>
                  </IconButton>
                  <IconButton>
                    <Icon>
                      <BookmarkIcon />
                    </Icon>
                  </IconButton>
                  <IconButton>
                    <Icon>
                      <BookmarkIcon />
                    </Icon>
                  </IconButton>
                  <IconButton>
                    <Icon>
                      <BookmarkIcon />
                    </Icon>
                  </IconButton>
                </HStack>
              </Stack>
              <Stack>
                <Heading as="h3" size="md" weight="medium">
                  Color scheme
                </Heading>
                <HStack>
                  <Button
                    fullWidth
                    variant="outlined"
                    css={{ colorPalette: 'neutral' }}
                  >
                    <Icon>
                      <SunIcon />
                    </Icon>
                    Light
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    css={{ colorPalette: 'neutral' }}
                  >
                    <Icon>
                      <MoonIcon />
                    </Icon>
                    Dark
                  </Button>
                </HStack>
              </Stack>
            </Stack>
          </CardBody>
        </CardRoot>
      </Stack>
    </main>
  )
}

type PlaygroundSectionProperties = Readonly<{
  title: string
  children: React.ReactNode
}>

function PlaygroundSection({ title, children }: PlaygroundSectionProperties) {
  return (
    <article>
      <header
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'panel',
          px: '4',
          py: '3',
          borderRadius: 'lg',
        })}
      >
        <Heading size="3xl">{title}</Heading>
        <Link>View in docs</Link>
      </header>
      {children}
    </article>
  )
}
