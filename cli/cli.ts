import clean from "../lib/clean.ts";
import getDigit from "../lib/getDigit.ts";
import format from "../lib/format.ts";
import validate from "../lib/validate.ts";

import { parse } from "../deps.ts";

type Flags = Record<string, boolean | string>;

const booleanFlags = ["quiet"];

// deno-lint-ignore ban-types
const methods: { [key: string]: Function } = {
  clean,
  "get-digit": getDigit,
  format,
  validate,
};

function logErrorMsg(message?: string) {
  console.log(`${message || "An error has ocurred"} ☄️`);
}

function logNoInputMsg() {
  console.log("Please enter a valid function 🦕");
}

function logResultMsg(functionName: string, argument: string, result: string) {
  console.log(`${functionName}(${argument}) has returned ${result}`);
}

function areFlagsValid(flags: Flags) {
  const keys = Object.keys(flags);
  const emptyFlags = keys.filter((key: string) => {
    return !booleanFlags.includes(key) && flags[key] === true;
  });
  return emptyFlags.length === 0 && keys.length !== 0;
}

function cli(denoArgs: string[]): number {
  const { _, quiet, ...flags } = parse(denoArgs, { "--": false });

  if (!areFlagsValid(flags)) {
    quiet || logNoInputMsg();
    return 2;
  }

  const [functionName, ...optionsNames] = Object.keys(flags);
  const argument = flags[functionName];
  const options = optionsNames.map((name) => flags[name]);

  if (!methods[functionName]) {
    quiet || logErrorMsg(`Error: function ${functionName} does not exist`);
    return 2;
  }

  try {
    const result = methods[functionName](argument);
    const exitCode = typeof result === "boolean" ? Number(result) : 0;
    quiet || logResultMsg(functionName, argument, result);
    return exitCode;
  } catch (err) {
    quiet || logErrorMsg(err);
    return 2;
  }
}

export default cli;
