import { Badge } from "@kickass-coderz/kaui-react/components/badge";
import "./index.css";

import { Button } from "@kickass-coderz/kaui-react/components/button";
import { css, cva } from "@kickass-coderz/kaui-react/styled-system/css";
import { Container } from "@kickass-coderz/kaui-react/styled-system/jsx";

const boxStyles = css({
    width: "20",
    height: "20",
    backgroundColor: "accent.9",
});

const myButtonStyles = cva({
    base: {
        paddingY: "2",
        paddingX: "4",
    },
    variants: {
        variant: {
            primary: {
                backgroundColor: "accent.9",
                color: "accent.contrast",
            },
            secondary: {
                backgroundColor: "accent.5",
                color: "accent.11",
            },
        },
    },
});

// const MyButton = styled(SlotableButton, myButtonStyles, {
//     defaultProps: {
//         variant: "primary",
//         type: "button",
//     },
// });

function App() {
    return (
        <Container
            css={{
                width: "full",
                height: "viewportHeight",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "4",
            }}
        >
            <div className={boxStyles}>B</div>
            <Button>BUTTON</Button>
            <Button highContrast variant="soft">
                Button
            </Button>
            <Badge variant="surface" size="xs" radius="full">
                Badge
            </Badge>
            {/* <Button
                type="button"
                variant="solid"
                highContrast={false}
                radius="rounded"
                size="md"
                render={<span data-drek />}
            >
                Click me
            </Button> */}
            {/* <MyButton variant="primary" render={<span />}>
                Button
            </MyButton>
            <MyButton variant="secondary">Button</MyButton> */}
        </Container>
    );
}

export default App;
