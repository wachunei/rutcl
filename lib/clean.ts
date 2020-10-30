/** cleans a rut into a string */
function clean(dirtyRut: string | number): string {
  const rutString = typeof dirtyRut === "number" ? String(dirtyRut) : dirtyRut;
  return rutString.replace(/[^0-9kK]+/g, "").replace(/^0+/, "").toUpperCase();
}

export default clean;
