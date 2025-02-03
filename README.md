# Free Katalon Studio on Github Actions
Execute Katalon Studio project on Github Actions with No Cost

## Usage
```yaml
    - uses: depapp/free-katalon-studio-github-actions@v2.8.4
      with:
        testSuitePath: 'Test Suites/Verify Operations'
        browserType: 'Chrome'
        executionProfile: 'default'
```
change the `testSuitePath`, `browserType`, `executionProfile` values to your own.

Github Actions configuration file example for https://github.com/katalon-studio-samples/calculator-bdd-tests project:
```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: macos-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v4
    - name: Execute Katalon Studio project on Github Actions with No Cost
      uses: depapp/free-katalon-studio-github-actions@v2.8.4
      with:
        testSuitePath: 'Test Suites/Verify Operations'
        browserType: 'Chrome'
        executionProfile: 'default'
```
