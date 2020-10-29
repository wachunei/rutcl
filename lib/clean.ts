/** cleans a rut into a string */
function clean(dirtyRut: string | number): string {
  const rutString = typeof dirtyRut === "number" ? String(dirtyRut) : dirtyRut;
  return rutString.replace(/^0+|[^0-9kK]+/g, "").toUpperCase();
}

export default clean;
