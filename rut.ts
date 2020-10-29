// TODO(wachunei): change to interfaces once we have the options
export type ValidateOptions = Record<string, unknown>;
export type FormatOptions = Record<string, unknown>;

/** cleans a rut into a string */
export function clean(dirtyRut: string | number): string {
  const rutString = typeof dirtyRut === "number" ? String(dirtyRut) : dirtyRut;
  return rutString.replace(/^0+|[^0-9kK]+/g, "").toUpperCase();
}

/** validates a rut */
export function validate(
  dirtyRut: string | number,
  options: ValidateOptions,
): boolean {
  // TODO
  return false;
}

/** gets a valid verification digit */
export function getDigit(dirtyPartialRut: string | number): string {
  // TODO
  return "0";
}

/** formats a rut */
export function format(
  dirtyRut: string | number,
  options: FormatOptions,
): string {
  // TODO
  return "1.234.456-K";
}
