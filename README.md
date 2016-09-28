# javascript e2e assignment

##Pre-requirements
    - node.js should be installed from https://nodejs.org
    - to run a local Selenium Server, you will need to have the Java Development Kit (JDK) installed. Check this by running java -version from the command line. If is not installed you will find a lot of guides for your OS how to do it and how to add to the PATH environment variable.

##Instalation
    - Run `npm i` in the root directory and that's it

##How to run tests
    - Run `npm run test` in the root directory

##Why Nightwatch.js
    - use Selenium
    - I didn't use it earlier (study purposes)
    - support for Page Object Pattern methodology embedded
    - written in Node.js so it well integrated with the front-end stack
    - tests can be run in parallel, sequentially, with different environments etc.
    - tests can be run on various browsers (in contrast to Jest)

##Further steps
    - integration with CI
    - separate directory for commands
    - extend Nightwatch with custom commands
    - use `before()` and `after()` hooks
    - performance if needed
    - maybe in some cases use XPath selectors
    - use amazing features of Nightwatch
    - tests on various browsers