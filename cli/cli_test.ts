import { assertEquals } from "../test_deps.ts";

import cli from "./cli.ts";

Deno.test("cli takes arguments", () => {
  assertEquals(cli([]), 2);
  assertEquals(cli(["--validate"]), 2);
  assertEquals(cli(["--clean"]), 2);
  assertEquals(cli(["--format"]), 2);
  assertEquals(cli(["--get-digit"]), 2);
});

Deno.test("cli executes functions", () => {
  assertEquals(cli(["--validate", "18591404-6"]), 1);
  assertEquals(cli(["--validate", "12456778-6"]), 0);
  assertEquals(cli(["--clean", "12*345*2678*k"]), 0);
  assertEquals(cli(["--clean", "000.24453.2-6"]), 0);
  assertEquals(cli(["--get-digit", "9.895.234"]), 0);
  assertEquals(cli(["--get-digit", "133562012"]), 0);
  assertEquals(cli(["--format", "1243532123-6"]), 0);
  assertEquals(cli(["--format", "1231421412-6"]), 0);
});
