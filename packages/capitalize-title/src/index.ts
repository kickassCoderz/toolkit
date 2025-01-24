const SPECIALS = [
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

const CONJUNCTIONS = ["for", "and", "nor", "but", "or", "yet", "so"];

const ARTICLES = ["a", "an", "the"];

const PREPOSITIONS = [
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

const lowerCase = new Set([...CONJUNCTIONS, ...ARTICLES, ...PREPOSITIONS]);

const word = String.raw`[^\s'’\(\)!?;:"-]`;
const regex = new RegExp(
    `(?:(?:(\\s?(?:^|[.\\(\\)!?;:"-])\\s*)(${word}))|(${word}))(${word}*[’']*${word}*)`,
    "g"
);

function convertToRegExp(specialWords: Array<string>): Array<[RegExp, string]> {
    return specialWords.map((s) => [new RegExp(`\\b${s}\\b`, "gi"), s]);
}

function parseMatch(match: string): string | undefined {
    const firstCharacter = match[0];

    if (!firstCharacter) {
        return undefined;
    }

    const parensRegexp = new RegExp(/[()]/);

    const firstCharacterHasParens = parensRegexp.test(firstCharacter);

    if (firstCharacterHasParens) {
        // parens shouldn't be replaced
        return undefined;
    }

    const whitespaceRegexp = new RegExp(/\s/);

    // test if first character is whitespace
    const firstCharacterHasWhitespace = whitespaceRegexp.test(firstCharacter);

    if (firstCharacterHasWhitespace) {
        // if whitespace - trim and return
        return match.slice(1);
    }

    return match;
}

function replacer(
    match: string,
    lead = "",
    forced: string | undefined,
    lower: string | undefined,
    rest: string,
    offset: number,
    originalString: string
) {
    const isLastWord = match.length + offset >= originalString.length;
    const parsedMatch = parseMatch(match);

    if (!parsedMatch) {
        return match;
    }

    if (!forced) {
        const fullLower = lower ? lower + rest : rest;

        if (lowerCase.has(fullLower) && !isLastWord) {
            return parsedMatch;
        }
    }

    return lead + (lower ?? forced ?? "").toUpperCase() + rest;
}

export type CapitalizeTitleOptions = {
    /**
     * An array of special words to escape.
     */
    special?: Array<string> | undefined;
};

/**
 * Capitalizes a string according to the {@link http://www.chicagomanualofstyle.org/ | Chicago Manual of Style}.
 *
 * @param stringToCapitalize - The string to capitalize.
 * @param options - The options to use. {@link CapitalizeTitleOptions.special | special} is an array of special words to escape.
 * @returns The capitalized string.
 */
export function capitalizeTitle(
    stringToCapitalize: string,
    options: CapitalizeTitleOptions = {}
): string {
    let capitalizedString = stringToCapitalize.toLowerCase().replaceAll(regex, replacer);

    const customSpecials = options.special ?? [];
    const specialsToReplace = [...SPECIALS, ...customSpecials];
    const replaceRegExp = convertToRegExp(specialsToReplace);

    for (const [pattern, s] of replaceRegExp) {
        capitalizedString = capitalizedString.replace(pattern, s);
    }

    return capitalizedString;
}
