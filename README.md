Prerequisites
-------------

* a Mac (these instructions were written for OS X)
* Homebrew
* [Docker](https://www.docker.com)

Steps
-----

1. Install GNU Make.
1. Install npm (using Homebrew) and serverless (using npm):

        make setup

    NB. See [How to Install npm & Manage npm Versions](https://docs.npmjs.com/getting-started/installing-node)
    for installation instructions for other operating systems. 

1. Deploy each of your functions:

        make deploy

Resources
---------

* https://serverless.com/blog/serverless-express-rest-api/
* https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-creating-lambda-state-machine.html
* https://docs.aws.amazon.com/step-functions/latest/dg/concepts-states.html
* https://aws.amazon.com/step-functions/faqs/
* https://states-language.net/spec.html
* https://serverless.com/blog/how-test-serverless-applications/
* https://medium.com/a-man-with-no-server/running-aws-lambda-and-api-gateway-locally-serverless-offline-3c64b3e54772
