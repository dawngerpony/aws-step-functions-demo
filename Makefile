FUNCTIONS = "step1 step2 my-service1 my-service2"
AWS_REGION = "eu-west-1"

setup:
	brew update
	brew install node
	npm install -g serverless

deploy:
	for fn in $(FUNCTIONS); do cd $$fn && serverless deploy -v; done

offline:
	sls offline start -r $(AWS_REGION) --noTimeout

uninstall:
	for fn in $(FUNCTIONS); do \
		cd $$fn && serverless remove \
	done
