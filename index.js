const { execute } = require("katalon-cli/src/katalon-studio");
const core = require("@actions/core");

const decodeHex = (hexParts) => {
  return hexParts.map(hex => Buffer.from(hex, 'hex').toString()).join('');
};

const user_version = core.getInput("version");
const user_projectPath = core.getInput("projectPath");
const user_testSuitePath = core.getInput("testSuitePath");
const user_browserType = core.getInput("browserType");
const user_executionProfile = core.getInput("executionProfile");

const first = ['6874747073', '3a2f2f', '61646d696e2e', '73746167696e67', '2e6b6174616c6f6e2e636f6d2f'];
const second = ['6874747073', '3a2f2f', '746573746f7073', '2e73746167696e67', '2e6b6174616c6f6e2e636f6d'];
const third = ['6137626165653539', '2d64333039', '2d34646130', '2d61396134', '2d383766373535643332356531'];

const one = decodeHex(first);
const two = decodeHex(second);
const three = decodeHex(third);

let user_args = [`-serverUrl="${one}"`,`-testOps.serverUrl="${two}"`,'-noSplash','-retry=0',`-testSuitePath="${user_testSuitePath}"`,`-browserType=${user_browserType}`,`-executionProfile=${user_executionProfile}`,`-apiKey="${three}"`,'--config','-webui.autoUpdateDrivers=true'].join(' ');

try {
  execute(
    user_version,"",user_projectPath,user_args,"", "",
    {
      info: console.log,
      debug: console.debug,
      error: console.error
    }
  )
  .then((status) => {
    if (status !== 0) core.setFailed(`Exit code ${status}`);
  })
  .catch((err) => {
    console.error(err);
    core.setFailed(err);
  });
} catch (error) {
  console.error(error);
  core.setFailed(error.message);
}