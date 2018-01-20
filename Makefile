setup:
	brew update
	brew install node
	npm install -g serverless

deploy:
	cd step1 && serverless deploy -v
	cd step2 && serverless deploy -v
