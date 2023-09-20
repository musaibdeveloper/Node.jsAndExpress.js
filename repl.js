// REPL(Read Evalute Print Loop)

const repl = require("repl");

const any = repl.start("$ ");

any.on("exit", () => {
  console.log("Exiting the console");
});
