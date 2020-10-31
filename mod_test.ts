import { assert, assertEquals } from "./test_deps.ts";
import { clean, format, getDigit, isValid, validate } from "./mod.ts";

Deno.test("mod should export lib functions", () => {
  assert(clean);
  assert(format);
  assert(getDigit);
  assert(validate);
  assert(isValid);
});

Deno.test("mod should run cli with expected exit code", async () => {
  const baseCommand = ["deno", "run", "mod.ts", "--quiet"];

  const cases: ((string | number)[] | number)[][] = [
    [[], 2],
    [["--no-method"], 2],
    [["--validate"], 2],
    [["--validate", "123456785"], 0],
    [["--validate", "123456789"], 1],
    [["--validate", 123456789], 1],
    [["--get-digit", 18591404], 0],
    [["--clean", "0018*591.404*6"], 0],
    [["--format", "0018*591.404*6"], 0],
    [["--format", "0018*591.404*6"], 0],
  ];

  for (const [cmd, exitCode] of cases) {
    const p = Deno.run({
      cmd: [...baseCommand, ...cmd as string[]],
    });
    const { code } = await p.status();
    p.close();
    assertEquals(code, exitCode);
  }
});
