const conjunctions = ["for", "and", "nor", "but", "or", "yet", "so"];

const articles = ["a", "an", "the"];

const prepositions = [
    "aboard",
    "about",
    "above",
    "across",
    "after",
    "against",
    "along",
    "amid",
    "among",
    "anti",
    "around",
    "as",
    "at",
    "before",
    "behind",
    "below",
    "beneath",
    "beside",
    "besides",
    "between",
    "beyond",
    "but",
    "by",
    "concerning",
    "considering",
    "despite",
    "down",
    "during",
    "except",
    "excepting",
    "excluding",
    "following",
    "for",
    "from",
    "in",
    "inside",
    "into",
    "like",
    "minus",
    "near",
    "of",
    "off",
    "on",
    "onto",
    "opposite",
    "over",
    "past",
    "per",
    "plus",
    "regarding",
    "round",
    "save",
    "since",
    "than",
    "through",
    "to",
    "toward",
    "towards",
    "under",
    "underneath",
    "unlike",
    "until",
    "up",
    "upon",
    "versus",
    "via",
    "with",
    "within",
    "without",
];

const lowerCase = new Set([...conjunctions, ...articles, ...prepositions]);

const specials = [
    "ZEIT",
    "ZEIT Inc.",
    "Vercel",
    "Vercel Inc.",
    "CLI",
    "API",
    "HTTP",
    "HTTPS",
    "JSX",
    "DNS",
    "URL",
    "now.sh",
    "now.json",
    "vercel.app",
    "vercel.json",
    "CI",
    "CD",
    "CDN",
    "package.json",
    "package.lock",
    "yarn.lock",
    "GitHub",
    "GitLab",
    "CSS",
    "Sass",
    "JS",
    "JavaScript",
    "TypeScript",
    "HTML",
    "WordPress",
    "Next.js",
    "Node.js",
    "Webpack",
    "Docker",
    "Bash",
    "Kubernetes",
    "SWR",
    "TinaCMS",
    "UI",
    "UX",
    "TS",
    "TSX",
    "iPhone",
    "iPad",
    "watchOS",
    "iOS",
    "iPadOS",
    "macOS",
    "PHP",
    "composer.json",
    "composer.lock",
    "CMS",
    "SQL",
    "C",
    "C#",
    "GraphQL",
    "GraphiQL",
    "JWT",
    "JWTs",
];

const word = String.raw`[^\s'’\(\)!?;:"-]`;
const regex = new RegExp(
    `(?:(?:(\\s?(?:^|[.\\(\\)!?;:"-])\\s*)(${word}))|(${word}))(${word}*[’']*${word}*)`,
    "g"
);

function convertToRegExp(specials) {
    return specials.map((s) => [new RegExp(`\\b${s}\\b`, "gi"), s]);
}

function parseMatch(match) {
    const firstCharacter = match[0];

    // test first character
    if (/\s/.test(firstCharacter)) {
        // if whitespace - trim and return
        return match.slice(1);
    }
    if (/[()]/.test(firstCharacter)) {
        // if parens - this shouldn't be replaced
        return null;
    }

    return match;
}

export function capitalizeTitle(stringToCapitalize, options = {}) {
    stringToCapitalize = stringToCapitalize
        .toLowerCase()
        .replaceAll(regex, (m, lead = "", forced, lower, rest, offset, string) => {
            const isLastWord = m.length + offset >= string.length;

            const parsedMatch = parseMatch(m);
            if (!parsedMatch) {
                return m;
            }
            if (!forced) {
                const fullLower = lower + rest;

                if (lowerCase.has(fullLower) && !isLastWord) {
                    return parsedMatch;
                }
            }

            return lead + (lower || forced).toUpperCase() + rest;
        });

    const customSpecials = options.special || [];
    const replace = [...specials, ...customSpecials];
    const replaceRegExp = convertToRegExp(replace);

    for (const [pattern, s] of replaceRegExp) {
        stringToCapitalize = stringToCapitalize.replace(pattern, s);
    }

    return stringToCapitalize;
}

// const conjunctions = ["for", "and", "nor", "but", "or", "yet", "so"];

// const articles = ["a", "an", "the"];

// const prepositions = [
//     "aboard",
//     "about",
//     "above",
//     "across",
//     "after",
//     "against",
//     "along",
//     "amid",
//     "among",
//     "anti",
//     "around",
//     "as",
//     "at",
//     "before",
//     "behind",
//     "below",
//     "beneath",
//     "beside",
//     "besides",
//     "between",
//     "beyond",
//     "but",
//     "by",
//     "concerning",
//     "considering",
//     "despite",
//     "down",
//     "during",
//     "except",
//     "excepting",
//     "excluding",
//     "following",
//     "for",
//     "from",
//     "in",
//     "inside",
//     "into",
//     "like",
//     "minus",
//     "near",
//     "of",
//     "off",
//     "on",
//     "onto",
//     "opposite",
//     "over",
//     "past",
//     "per",
//     "plus",
//     "regarding",
//     "round",
//     "save",
//     "since",
//     "than",
//     "through",
//     "to",
//     "toward",
//     "towards",
//     "under",
//     "underneath",
//     "unlike",
//     "until",
//     "up",
//     "upon",
//     "versus",
//     "via",
//     "with",
//     "within",
//     "without",
// ];

// const lowerCase = new Set([...conjunctions, ...articles, ...prepositions]);

// const specials = [
//     "ZEIT",
//     "ZEIT Inc.",
//     "Vercel",
//     "Vercel Inc.",
//     "CLI",
//     "API",
//     "HTTP",
//     "HTTPS",
//     "JSX",
//     "DNS",
//     "URL",
//     "now.sh",
//     "now.json",
//     "vercel.app",
//     "vercel.json",
//     "CI",
//     "CD",
//     "CDN",
//     "package.json",
//     "package.lock",
//     "yarn.lock",
//     "GitHub",
//     "GitLab",
//     "CSS",
//     "Sass",
//     "JS",
//     "JavaScript",
//     "TypeScript",
//     "HTML",
//     "WordPress",
//     "Next.js",
//     "Node.js",
//     "Webpack",
//     "Docker",
//     "Bash",
//     "Kubernetes",
//     "SWR",
//     "TinaCMS",
//     "UI",
//     "UX",
//     "TS",
//     "TSX",
//     "iPhone",
//     "iPad",
//     "watchOS",
//     "iOS",
//     "iPadOS",
//     "macOS",
//     "PHP",
//     "composer.json",
//     "composer.lock",
//     "CMS",
//     "SQL",
//     "C",
//     "C#",
//     "GraphQL",
//     "GraphiQL",
//     "JWT",
//     "JWTs",
// ];

// const word = String.raw`[^\s'’\(\)!?;:"-]`;
// const regex = new RegExp(
//     `(?:(?:(\\s?(?:^|[.\\(\\)!?;:"-])\\s*)(${word}))|(${word}))(${word}*[’']*${word}*)`,
//     "g"
// );

// function convertToRegExp(specials: Array<string>): Array<[RegExp, string]> {
//     return specials.map((s) => [new RegExp(`\\b${s}\\b`, "gi"), s]);
// }

// function parseMatch(match: string): string | null {
//     const firstCharacter = match[0];

//     // test first character
//     if (/\s/.test(firstCharacter)) {
//         // if whitespace - trim and return
//         return match.slice(1);
//     }
//     if (/[()]/.test(firstCharacter)) {
//         // if parens - this shouldn't be replaced
//         return null;
//     }

//     return match;
// }

// export function capitalizeTitle(
//     stringToCapitalize: string,
//     options: { special?: Array<string> } = {}
// ) {
//     stringToCapitalize = stringToCapitalize
//         .toLowerCase()
//         .replaceAll(regex, (m, lead = "", forced, lower, rest, offset, string) => {
//             const isLastWord = m.length + offset >= string.length;

//             const parsedMatch = parseMatch(m);
//             if (!parsedMatch) {
//                 return m;
//             }
//             if (!forced) {
//                 const fullLower = lower + rest;

//                 if (lowerCase.has(fullLower) && !isLastWord) {
//                     return parsedMatch;
//                 }
//             }

//             return lead + (lower || forced).toUpperCase() + rest;
//         });

//     const customSpecials = options.special || [];
//     const replace = [...specials, ...customSpecials];
//     const replaceRegExp = convertToRegExp(replace);

//     for (const [pattern, s] of replaceRegExp) {
//         stringToCapitalize = stringToCapitalize.replace(pattern, s);
//     }

//     return stringToCapitalize;
// }
