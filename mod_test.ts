import { assert } from "./test_deps.ts";
import { clean, format, getDigit, validate } from "./mod.ts";

Deno.test("mod should export lib functions", () => {
  assert(clean);
  assert(format);
  assert(getDigit);
  assert(validate);
});
