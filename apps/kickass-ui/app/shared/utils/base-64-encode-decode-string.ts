// From https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem.
function base64ToBytes(base64String: string) {
    const binString = atob(base64String);
    return Uint8Array.from(binString, (m) => m.codePointAt(0) ?? 0);
}

// From https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem.
function bytesToBase64(bytes: Uint8Array) {
    const binString = String.fromCodePoint(...bytes);
    return btoa(binString);
}

// Quick polyfill since Firefox and Opera do not yet support isWellFormed().
// encodeURIComponent() throws an error for lone surrogates, which is essentially the same.
function isWellFormed(stringToCheck: string) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- maybe not available on older browsers
    if (stringToCheck.isWellFormed === undefined) {
        // Use the older encodeURIComponent().
        try {
            encodeURIComponent(stringToCheck);
            return true;
        } catch {
            return false;
        }
    } else {
        // Use the newer isWellFormed() feature.
        return stringToCheck.isWellFormed();
    }
}

export function encodeStringToBase64(stringToEncode: string) {
    if (!isWellFormed(stringToEncode)) {
        throw new Error(`Cannot process a string: [${stringToEncode}]`);
    }

    const encoded = new TextEncoder().encode(stringToEncode);

    return bytesToBase64(encoded);
}

export function decodeBase64ToString(base64ToDecode: string) {
    const decoded = base64ToBytes(base64ToDecode);

    return new TextDecoder().decode(decoded);
}
