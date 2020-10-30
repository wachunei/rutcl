import clean from "./clean.ts";

/** formats a rut */
function format(
  dirtyRut: string | number,
): string {
  const cleanRut = clean(dirtyRut);
  const verificationDigit = cleanRut.slice(-1);
  const digits = cleanRut.slice(0, -1).split(/(?=(?:...)*$)/).join(".");
  return `${digits}-${verificationDigit}`;
}

export default format;
