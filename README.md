# Free Katalon Studio
Execute Katalon Studio project on Github Actions with No Cost

## Usage
```yaml
uses: depapp/free-katalon-studio-github-actions@v1.4.1
with:
  testSuitePath: 'Test Suites/Web/TS - Login'
  browserType: 'Chrome'
  executionProfile: 'default'
```
change the `testSuitePath`, `browserType`, `executionProfile` values to your own.