import { assertEquals } from "./test_deps.ts";
import { clean } from "./rut.ts";

Deno.test("clean return expected", () => {
  assertEquals(clean(123456789), "123456789");
  assertEquals(clean("123456789"), "123456789");
  assertEquals(clean("12.345.678-k"), "12345678K");
  assertEquals(clean("12*345*678*k"), "12345678K");
  assertEquals(clean("0012.345.678-9"), "123456789");
  assertEquals(clean("0000012345678K"), "12345678K");
});
