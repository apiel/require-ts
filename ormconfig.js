
// if ./dist/config.js does not exsit
// then either do exec('npm run build')
// or use ts.api:

const ts = require("typescript");

const options = ts.getDefaultCompilerOptions();
const realHost = ts.createCompilerHost(options, true);

let outputCode;
const host = {
  ...realHost,
  writeFile: (fileName, data) => (outputCode = data),
};

const program = ts.createProgram(["./config.ts"], {}, host);
const emitResult = program.emit();
const cfg = eval(outputCode);

console.log("cfg", cfg);
