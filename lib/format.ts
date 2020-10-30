import clean from "./clean.ts";

export type FormatOptions = Record<string, unknown>;

/** formats a rut */
function format(
  dirtyRut: string | number,
  options?: FormatOptions,
): string {
  const cleanRut = clean(dirtyRut);
  // TODO
  return cleanRut;
}

export default format;
