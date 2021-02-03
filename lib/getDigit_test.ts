import { assertEquals } from "../test_deps.ts";
import getDigit from "./getDigit.ts";

Deno.test("getDigit returns expected digit", () => {
  assertEquals(getDigit(5513831), "1");
  assertEquals(getDigit("5513831"), "1");
  assertEquals(getDigit("9.895.234"), "9");
  assertEquals(getDigit("13356201"), "K");
  assertEquals(getDigit(10989392), "7");
  assertEquals(getDigit("16327681"), "K");
  assertEquals(getDigit(16327681), "K");
  assertEquals(getDigit("13_356_201"), "K");
  assertEquals(getDigit("12328326"), "0");
});
