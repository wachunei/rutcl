export type FormatOptions = Record<string, unknown>;

/** formats a rut */
function format(
  dirtyRut: string | number,
  options?: FormatOptions,
): string {
  // TODO
  return "1.234.456-K";
}

export default format;
