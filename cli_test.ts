import { assertEquals } from "./test_deps.ts";

import cli from "./cli.ts";

Deno.test("cli takes arguments", () => {
  assertEquals(cli([]), 1);
  assertEquals(cli(["--validate"]), 1);
  assertEquals(cli(["--validate", "123"]), 0);
});
