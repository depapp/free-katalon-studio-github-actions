const { execute } = require("katalon-cli/src/katalon-studio");
const core = require("@actions/core");

const user_version = core.getInput("version");
const user_projectPath = core.getInput("projectPath");
const user_testSuitePath = core.getInput("testSuitePath");
const user_browserType = core.getInput("browserType");
const user_executionProfile = core.getInput("executionProfile");

let user_args = `-serverUrl="https://admin.staging.katalon.com/" -testOps.serverUrl="https://testops.staging.katalon.com" -noSplash -retry=0 -testSuitePath="${user_testSuitePath}" -browserType=${user_browserType} -executionProfile=${user_executionProfile} -apiKey="a7baee59-d309-4da0-a9a4-87f755d325e1" --config -webui.autoUpdateDrivers=true`;

try {
  execute(user_version, "", user_projectPath, user_args, "", "", {
    info: function (message) {
      console.log(message);
    },
    debug: function (message) {
      console.log(message);
    },
    error: function (message) {
      console.error(message);
    },
  })
    .then((status) => {
      if (status !== 0) {
        core.setFailed(`Exit code ${status}.`);
      }
    })
    .catch((err) => {
      console.error(err);
      core.setFailed(err);
    });
} catch (error) {
  console.error(error);
  core.setFailed(error.message);
}