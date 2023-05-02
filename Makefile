
default: ts

prepare: license readme ts

ts:
	tsc

publish: prepare
	npm publish

readme:
	readmix --compile --markdown README.rx

license:
	readmix --compile --markdown LICENSE.rx

clean:
	@rm -rf dist
