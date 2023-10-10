const inUpperCase = (char: string) => char !== char.toLowerCase();

export const startsWithUpperCase = (string: string) => inUpperCase(string.charAt(0));
