import {
    amber,
    blue,
    brown,
    crimson,
    cyan,
    grass,
    green,
    indigo,
    iris,
    jade,
    lime,
    mint,
    orange,
    pink,
    plum,
    purple,
    red,
    ruby,
    sky,
    teal,
    tomato,
    violet,
    yellow,
} from "../base-color-scales/accent";
import { mauve, olive, sage, sand, slate } from "../base-color-scales/neutral";
import { createKickassUITheme } from "../utils/create-kickass-ui-theme";

////////// MAUVE NEUTRAL COLOR //////////
export const tomatoTheme = createKickassUITheme({
    name: "tomato",
    accentColor: tomato,
    neutralColor: mauve,
});

export const redTheme = createKickassUITheme({
    name: "red",
    accentColor: red,
    neutralColor: mauve,
});

export const rubyTheme = createKickassUITheme({
    name: "ruby",
    accentColor: ruby,
    neutralColor: mauve,
});

export const crimsonTheme = createKickassUITheme({
    name: "crimson",
    accentColor: crimson,
    neutralColor: mauve,
});

export const pinkTheme = createKickassUITheme({
    name: "pink",
    accentColor: pink,
    neutralColor: mauve,
});

export const plumTheme = createKickassUITheme({
    name: "plum",
    accentColor: plum,
    neutralColor: mauve,
});

export const purpleTheme = createKickassUITheme({
    name: "purple",
    accentColor: purple,
    neutralColor: mauve,
});

export const violetTheme = createKickassUITheme({
    name: "violet",
    accentColor: violet,
    neutralColor: mauve,
});
////////// MAUVE NEUTRAL COLOR //////////

////////// SLATE NEUTRAL COLOR //////////
export const irisTheme = createKickassUITheme({
    name: "iris",
    accentColor: iris,
    neutralColor: slate,
});

export const indigoTheme = createKickassUITheme({
    name: "indigo",
    accentColor: indigo,
    neutralColor: slate,
});

export const blueTheme = createKickassUITheme({
    name: "blue",
    accentColor: blue,
    neutralColor: slate,
});

export const skyTheme = createKickassUITheme({
    name: "sky",
    accentColor: sky,
    neutralColor: slate,
});

export const cyanTheme = createKickassUITheme({
    name: "cyan",
    accentColor: cyan,
    neutralColor: slate,
});
////////// SLATE NEUTRAL COLOR //////////

////////// SAGE NEUTRAL COLOR //////////
export const mintTheme = createKickassUITheme({
    name: "mint",
    accentColor: mint,
    neutralColor: sage,
});

export const tealTheme = createKickassUITheme({
    name: "teal",
    accentColor: teal,
    neutralColor: sage,
});

export const jadeTheme = createKickassUITheme({
    name: "jade",
    accentColor: jade,
    neutralColor: sage,
});

export const greenTheme = createKickassUITheme({
    name: "green",
    accentColor: green,
    neutralColor: sage,
});
////////// SAGE NEUTRAL COLOR //////////

////////// OLIVE NEUTRAL COLOR //////////
export const grassTheme = createKickassUITheme({
    name: "grass",
    accentColor: grass,
    neutralColor: olive,
});

export const limeTheme = createKickassUITheme({
    name: "lime",
    accentColor: lime,
    neutralColor: olive,
});
////////// OLIVE NEUTRAL COLOR //////////

////////// SAND NEUTRAL COLOR //////////
export const yellowTheme = createKickassUITheme({
    name: "yellow",
    accentColor: yellow,
    neutralColor: sand,
});

export const amberTheme = createKickassUITheme({
    name: "amber",
    accentColor: amber,
    neutralColor: sand,
});

export const orangeTheme = createKickassUITheme({
    name: "orange",
    accentColor: orange,
    neutralColor: sand,
});

export const brownTheme = createKickassUITheme({
    name: "brown",
    accentColor: brown,
    neutralColor: sand,
});
////////// SAND NEUTRAL COLOR //////////

export const allThemes = {
    ...tomatoTheme,
    ...redTheme,
    ...rubyTheme,
    ...crimsonTheme,
    ...pinkTheme,
    ...plumTheme,
    ...purpleTheme,
    ...violetTheme,
    ...irisTheme,
    ...indigoTheme,
    ...blueTheme,
    ...skyTheme,
    ...cyanTheme,
    ...mintTheme,
    ...tealTheme,
    ...jadeTheme,
    ...greenTheme,
    ...grassTheme,
    ...limeTheme,
    ...yellowTheme,
    ...amberTheme,
    ...orangeTheme,
    ...brownTheme,
};
