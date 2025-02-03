const { execute } = require("katalon-cli/src/katalon-studio");
const core = require("@actions/core");

const user_version = getInput("version");
const user_projectPath = getInput("projectPath");
const user_testSuitePath = getInput("testSuitePath");
const user_browserType = getInput("browserType");
const user_executionProfile = getInput("executionProfile");

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
        logError(`Exit code ${status}.`);
      }
    })
    .catch((err) => {
      console.error(err);
      logError(err);
    });
} catch (error) {
  console.error(error);
  logError(error.message);
}