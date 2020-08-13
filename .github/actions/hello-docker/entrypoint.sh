#!/bin/sh -l

# simulating error
# non-zero exit code
if [ true ]
then
  echo 'error'
  exit 1
fi


# Equivalent logic in "actions/hello/index.js"
#? core.debug("Debug message");
#? core.warning("Warning message");
#? core.error("Error message");

echo "::debug ::Debug Message"
echo "::warning ::Warning Message"
echo "::error ::Error Message"

#? core.setSecret("Nandu");

echo "::add-mask::$1"
#? we need this argument to be our input
echo "Hello $1"


#? const time = new Date();
#? core.setOutput("time", time.toTimeString());

time=$(date)
echo "::set-output name=time::$time"

#? core.startGroup("Logging github object");
#? console.log(JSON.stringify(github, null, "\t"));
#? core.endGroup();


echo "::group::Some expandable logs"
echo "some stuff"
echo "some stuff"
echo "some stuff"
echo "some stuff"
echo "::endgroup::"

#? core.exportVariable("HELLO", "hello");

echo "::set-env name=HELLO::hello"
