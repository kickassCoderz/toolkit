import { Button } from "@kickass-coderz/kaui-react/components/button";
import "./index.css";

import { css } from "@kickass-coderz/kaui-react/system/css";

import { HStack, Stack } from "@kickass-coderz/kaui-react/system/jsx";

const box = css({
    width: "10",
    height: "10",
    backgroundColor: "accent.9",
});
function App() {
    return (
        <div>
            <div className={box}></div>
            <Button size="xs">Extra Small</Button>
            <Button>Default</Button>
            <Button variant="soft" size="lg">
                Soft
            </Button>
            {/* <Stack>
                <HStack>
                    <Button
                        highContrast={false}
                        size="lg"
                        radius="rounded"
                        justify="center"
                        fullWidth={false}
                        variant="solid"
                    >
                        Button
                    </Button>
                    <Button
                        highContrast={false}
                        size="lg"
                        radius="rounded"
                        justify="center"
                        fullWidth={false}
                        variant="soft"
                    >
                        Button
                    </Button>
                    <Button
                        highContrast={false}
                        size="lg"
                        radius="rounded"
                        justify="center"
                        fullWidth={false}
                        variant="outlined"
                    >
                        Button
                    </Button>
                    <Button
                        highContrast={false}
                        size="lg"
                        radius="rounded"
                        justify="center"
                        fullWidth={false}
                        variant="surface"
                    >
                        Button
                    </Button>
                    <Button
                        highContrast={false}
                        size="lg"
                        radius="rounded"
                        justify="center"
                        fullWidth={false}
                        variant="ghost"
                    >
                        Button
                    </Button>
                </HStack>
                <HStack>
                    <Button
                        highContrast
                        size="lg"
                        radius="rounded"
                        justify="center"
                        fullWidth={false}
                        variant="solid"
                    >
                        Button
                    </Button>
                    <Button
                        highContrast
                        size="lg"
                        radius="rounded"
                        justify="center"
                        fullWidth={false}
                        variant="soft"
                    >
                        Button
                    </Button>
                    <Button
                        highContrast
                        size="lg"
                        radius="rounded"
                        justify="center"
                        fullWidth={false}
                        variant="outlined"
                    >
                        Button
                    </Button>
                    <Button
                        highContrast
                        size="lg"
                        radius="rounded"
                        justify="center"
                        fullWidth={false}
                        variant="surface"
                    >
                        Button
                    </Button>
                    <Button
                        highContrast
                        size="lg"
                        radius="rounded"
                        justify="center"
                        fullWidth={false}
                        variant="ghost"
                    >
                        Button
                    </Button>
                </HStack>
            </Stack> */}
        </div>
    );
}

export default App;
