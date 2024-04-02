import parser from "./parser.cjs";

export const parse = parser.parse as (
  input: string,
  options?: unknown
) => Array<string>;
export const SyntaxError = parser.SyntaxError as (
  message: string,
  expected: Array<string>,
  found: string,
  location: { offset: number; line: number; column: number }
) => void;
