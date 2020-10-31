import { parse } from "../deps.ts";
import clean from "../lib/clean.ts";
import getDigit from "../lib/getDigit.ts";
import format from "../lib/format.ts";
import validate, { InvalidRUTException } from "../lib/validate.ts";

let isQuiet = false;

// deno-lint-ignore ban-types
const methods: { [key: string]: Function } = {
  clean,
  "get-digit": getDigit,
  "is-valid": validate,
  format,
  validate,
};

const ERROR: Record<string, string> = {
  NO_FUNCTION: "Please enter a valid function 🦕",
  NO_INPUT: "Please enter a valid function input 🦕",
  GENERIC: "An error has ocurred ☄️",
};

const SUCCESS: Record<string, string> = {
  VALID: "RUT is valid ✅",
};

const RESPONSE: Record<string, string> = {
  "is-valid": SUCCESS.VALID,
  validate: SUCCESS.VALID,
};

// deno-lint-ignore no-explicit-any
function log(...args: any[]): void {
  if (!isQuiet) {
    console.log(...args);
  }
}

// deno-lint-ignore no-explicit-any
function logError(message?: string, ...args: any[]): void {
  if (!isQuiet) {
    console.error(message, ...args);
  }
}

function cli(denoArgs: string[]): number {
  const { _, quiet, ...flags } = parse(denoArgs, { "--": false });
  const method = Object.keys(methods).find((method) => flags[method]);

  isQuiet = !!quiet;

  if (!method) {
    logError(ERROR.NO_FUNCTION);
    return 2;
  }

  if (flags[method] === true) {
    logError(ERROR.NO_INPUT);
    return 2;
  }

  // const options = { ...flags, [method]: undefined };
  const argument = flags[method];

  try {
    const result = methods[method](argument);
    if (result) {
      log(result);
      return 0;
    }

    if (RESPONSE[method]) {
      log(RESPONSE[method]);
    }

    return 0;
  } catch (err) {
    logError(`${err.message}${err instanceof InvalidRUTException ? " ❌" : ""}`);
    return 1;
  }
}

export default cli;
