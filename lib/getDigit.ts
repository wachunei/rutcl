import clean from "./clean.ts";

/** gets a valid verification digit */
function getDigit(dirtyPartialRut: string | number): string {
  const cleanPartialRut = clean(dirtyPartialRut);
  const sum = cleanPartialRut.split("").reverse().reduce(
    (acc, curr, index) => acc + (Number(curr) * ((index % 6) + 2)),
    0,
  );
  const digit = 11 - (sum % 11);
  return digit === 10 ? "K" : String(digit);
}

export default getDigit;
