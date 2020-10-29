export { default as clean } from "./lib/clean.ts";
export { default as validate } from "./lib/validate.ts";
export { default as getDigit } from "./lib/getDigit.ts";
export { default as format } from "./lib/format.ts";

import cli from "./cli.ts";

if (import.meta.main) {
  cli(Deno.args);
}
