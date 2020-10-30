import clean from "../lib/clean.ts";
import getDigit from "../lib/getDigit.ts";
import format from "../lib/format.ts";
import validate from "../lib/validate.ts";

import { parse } from "../deps.ts";

// deno-lint-ignore ban-types
const methods: { [key: string]: Function } = {
  clean,
  "get-digit": getDigit,
  format,
  validate,
};

const log = import.meta.main ? console.log : () => {};

function logErrorMsg(message?: string) {
  log(`${message || "An error has ocurred"} ☄️`);
}

function logNoInputMsg() {
  log("Please enter a function 🦕");
}

function logResultMsg(functionName: string, argument: string, result: string) {
  log(`${functionName}(${argument}) has returned ${result}`);
}

function cli(denoArgs: string[]): number {
  if (denoArgs.length === 0) {
    logNoInputMsg();
    return 2;
  }

  const { _, ...flags } = parse(denoArgs, { "--": false });
  const [functionName, ...optionsNames] = Object.keys(flags);
  const argument = flags[functionName];
  const options = optionsNames.map((name) => flags[name]);

  if (!methods[functionName]) {
    logErrorMsg(`Error: function ${functionName} does not exist`);
    return 2;
  }

  try {
    const result = methods[functionName](argument);
    const exitCode = typeof result === "boolean" ? Number(result) : 0;
    logResultMsg(functionName, argument, result);
    return exitCode;
  } catch (err) {
    logErrorMsg(err);
    return 2;
  }
}

export default cli;
