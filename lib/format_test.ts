import { assertEquals } from "../test_deps.ts";
import format from "./format.ts";

Deno.test("format return expected", () => {
  assertEquals(format(123456789), "12.345.678-9");
  assertEquals(format("123456789"), "12.345.678-9");
  assertEquals(format("12.345.678-k"), "12.345.678-K");
  assertEquals(format("12*345*678*k"), "12.345.678-K");
  assertEquals(format("0012.345.678-9"), "12.345.678-9");
  assertEquals(format("0000012345678K"), "12.345.678-K");
});
