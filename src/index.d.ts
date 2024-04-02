export declare const parse: (input: string, options?: unknown) => Array<string>;
export declare const SyntaxError: (message: string, expected: Array<string>, found: string, location: {
    offset: number;
    line: number;
    column: number;
}) => void;
