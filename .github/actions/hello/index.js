const core = require("@actions/core");
const github = require("@actions/github");

try {
  // simulate an error by throwing an error
  throw new Error("testing action and workflow fail state");
  const name = core.getInput("who-to-greet");
  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  console.log(JSON.stringify(github, null, "\t"));
} catch (e) {
  // to make github aware that our action has failed call
  core.setFailed(e.message);
}
