import { assertEquals } from "../test_deps.ts";
import cli from "./cli.ts";

Deno.test("cli takes arguments", () => {
  assertEquals(cli(["--quiet"]), 2);
  assertEquals(cli(["--quiet", "--validate"]), 2);
  assertEquals(cli(["--quiet", "--is-valid"]), 2);
  assertEquals(cli(["--quiet", "--clean"]), 2);
  assertEquals(cli(["--quiet", "--format"]), 2);
  assertEquals(cli(["--quiet", "--get-digit"]), 2);
});

Deno.test("cli executes functions", () => {
  assertEquals(cli(["--quiet", "--validate", "18591404-6"]), 0);
  assertEquals(cli(["--quiet", "--validate", "12456778-6"]), 1);
  assertEquals(cli(["--quiet", "--is-valid", "18591404-6"]), 0);
  assertEquals(cli(["--quiet", "--is-valid", "12456778-6"]), 1);
  assertEquals(cli(["--quiet", "--clean", "12*345*2678*k"]), 0);
  assertEquals(cli(["--quiet", "--clean", "000.24453.2-6"]), 0);
  assertEquals(cli(["--quiet", "--get-digit", "9.895.234"]), 0);
  assertEquals(cli(["--quiet", "--get-digit", "133562012"]), 0);
  assertEquals(cli(["--quiet", "--format", "1243532123-6"]), 0);
  assertEquals(cli(["--quiet", "--format", "1231421412-6"]), 0);
  assertEquals(cli(["--quiet", "--validate", "18591404-3"]), 1);
  assertEquals(cli(["--quiet", "--validate", "12456778-3"]), 1);
  assertEquals(cli(["--quiet", "--is-valid", "18591404-5"]), 1);
  assertEquals(cli(["--quiet", "--is-valid", "12456778-3"]), 1);
});
