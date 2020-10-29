import clean from "./clean.ts";
import getDigit from "./getDigit.ts";

export type ValidateOptions = Record<string, unknown>;

/** validates a rut */
function validate(
  dirtyRut: string | number,
  options?: ValidateOptions,
): boolean {
  const cleanRut = clean(dirtyRut);
  const partialRut = cleanRut.slice(0, cleanRut.length - 1);
  const lastDigit = cleanRut.slice(-1);
  const verificationDigit = getDigit(partialRut);
  return verificationDigit === lastDigit;
}
export default validate;
