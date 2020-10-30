import clean from "./clean.ts";
import getDigit from "./getDigit.ts";

export type ValidateOptions = Record<string, unknown>;

export class InvalidRUTException extends Error {
  data?: string | number;

  constructor(message: string, data?: string | number) {
    super(message);
    this.data = data;
  }
}

/** validates a rut */
function validate(
  dirtyRUT: string | number,
  options?: ValidateOptions,
): void {
  if (typeof dirtyRUT === "number" && !Number.isFinite(dirtyRUT)) {
    throw new InvalidRUTException("RUT is not a valid number", dirtyRUT);
  }
  const cleanRUT = clean(dirtyRUT);
  const partialRUT = cleanRUT.slice(0, cleanRUT.length - 1);
  const lastDigit = cleanRUT.slice(-1);
  const verificationDigit = getDigit(partialRUT);
  if (verificationDigit !== lastDigit) {
    throw new InvalidRUTException("RUT is not valid", dirtyRUT);
  }
}
export default validate;
