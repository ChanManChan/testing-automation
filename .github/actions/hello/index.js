const core = require("@actions/core");
const github = require("@actions/github");

try {
  // simulate an error by throwing an error
  // throw new Error("testing action and workflow fail state");
  // as action author, we need to provide "ACTIONS_STEP_DEBUG" logs to people who are using our action
  // this debug message will only appear when debugging is enabled
  core.debug("Debug message");
  core.warning("Warning message");
  core.error("Error message");

  // this will not be logged as 'Nandu' but as ***
  core.setSecret("Nandu");

  const name = core.getInput("who-to-greet");
  core.setSecret(name);
  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  // startGroup <- expandable
  core.startGroup("Logging github object");
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();
  // env variables that we can use in any subsequent steps
  core.exportVariable("HELLO", "hello");
} catch (e) {
  // to make github aware that our action has failed call
  core.setFailed(e.message);
}
