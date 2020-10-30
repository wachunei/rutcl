import validate from "./validate.ts";

function isValid(dirtyRut: string | number): boolean {
  try {
    validate(dirtyRut);
    return true;
  } catch (error) {
    return false;
  }
}

export default isValid;
