import clean from "./lib/clean.ts";
import getDigit from "./lib/getDigit.ts";
import format from "./lib/format.ts";
import validate from "./lib/validate.ts";

import { parse } from "./deps.ts";

function logErrorMsg() {
  console.log("An error has ocurred ☄️");
}

function logNoInputMsg() {
  console.log("Please enter a function 🦕");
}

function logResultMsg(functionName: string, argument: string, result: string) {
  console.log(`${functionName}(${argument}) has returned ${result}`);
}

function cli(denoArgs: string[]) {
  if (denoArgs.length === 0) {
    logNoInputMsg();
    return;
  }
  const { _, ...flags } = parse(denoArgs, { "--": false });
  const [functionName, ...optionsNames] = Object.keys(flags);
  const argument = flags[functionName];
  const options = optionsNames.map((name) => flags[name]);

  let result;
  try {
    switch (functionName) {
      case "clean":
        result = clean(argument);
        break;
      case "get-digit":
        result = getDigit(argument);
        break;
      case "format":
        result = format(argument);
        break;
      case "validate":
        result = String(validate(argument));
        break;
      default:
        result = "";
        break;
    }
  } catch {
    result = "";
  }

  if (result) logResultMsg(functionName, argument, result);
  else logErrorMsg();
}

export default cli;
