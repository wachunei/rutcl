export { default as clean } from "./lib/clean.ts";
export { default as isValid } from "./lib/isValid.ts";
export { default as validate } from "./lib/validate.ts";
export { default as getDigit } from "./lib/getDigit.ts";
export { default as format } from "./lib/format.ts";
import cli from "./cli/cli.ts";

if (import.meta.main) Deno.exit(cli(Deno.args));
