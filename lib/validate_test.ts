import { assert } from "../test_deps.ts";
import validate from "./validate.ts";

Deno.test("validate retuns", () => {
  assert(validate("18591404-6"));
  assert(validate("24225112-1"));
  assert(validate("10980661-7"));
  assert(validate("17116316-1"));
  assert(validate("13463387-5"));
  assert(validate("23455756-4"));
  assert(validate("16961522-5"));
  assert(validate("20141432-6"));
  assert(validate("19497051-k"));
  assert(validate("23870961-k"));
  assert(validate("185914046"));
  assert(validate("242251121"));
  assert(validate("109806617"));
  assert(validate("171163161"));
  assert(validate("134633875"));
  assert(validate("234557564"));
  assert(validate("169615225"));
  assert(validate("201414326"));
  assert(validate("19497051k"));
  assert(validate("23870961k"));
  assert(validate(185914046));
  assert(validate(242251121));
  assert(validate(109806617));
  assert(validate(171163161));
  assert(validate(134633875));
  assert(validate(234557564));
  assert(validate(169615225));
  assert(validate(201414326));
  assert(validate("18.591.404-6"));
  assert(validate("24.225112-1"));
  assert(validate("10.980.661-7"));
  assert(!validate(Infinity));
  assert(!validate("18591404-5"));
  assert(!validate("24225112-K"));
  assert(!validate("10980661-0"));
  assert(!validate("17116316-2"));
  assert(!validate("13463387-K"));
  assert(!validate("23455756-8"));
  assert(!validate("16961522-3"));
  assert(!validate("20141432-9"));
  assert(!validate("19497051-3"));
  assert(!validate("23870961-1"));
  assert(!validate("dummyvalue"));
});
