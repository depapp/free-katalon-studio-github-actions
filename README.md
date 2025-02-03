# Free Katalon Studio on Github Actions
Execute Katalon Studio project on Github Actions with No Cost

## Usage
```yaml
uses: depapp/free-katalon-studio-github-actions@v2.8.2
with:
  testSuitePath: 'Test Suites/Web/TS - Login'
  browserType: 'Chrome'
  executionProfile: 'default'
```
change the `testSuitePath`, `browserType`, `executionProfile` values to your own.