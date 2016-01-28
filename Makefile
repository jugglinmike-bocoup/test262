OUT_DIR ?= test
SRC_DIR ?= src
UPSTREAM ?= https://github.com/jugglinmike/test262.git
MAINTAINER ?= goyakin@microsoft.com

.PHONY: build
build: build-static build-cases

.PHONY: build-static
build-static:
	cp -r $(SRC_DIR)/static $(OUT_DIR)

.PHONY: build-cases
build-cases:
	./tools/generation/compile.py \
		--no-clobber $(SRC_DIR)/static \
		-o $(OUT_DIR) \
		$(SRC_DIR)/cases/

.PHONY: clean
clean:
	rm -rf $(OUT_DIR) $(OUT_DIR).tmp

.PHONY: deploy
deploy: clean build
	ssh-add -:
	mv $(OUT_DIR) $(OUT_DIR).tmp
	git checkout master
	
	rm -r $(OUT_DIR)
	mv $(OUT_DIR).tmp $(OUT_DIR)
	git add --all $(OUT_DIR)
	git commit -m 'Re-build from source'
	
	git push $(UPSTREAM) master
	git checkout -

github-deploy-key:
	ssh-keygen -t rsa -b 4096 -C $(MAINTAINER) -f github-deploy-key

# This requires the "travis" Ruby gem to be installed
# Source: https://docs.travis-ci.com/user/encrypting-files/
github-deploy-key.enc: github-deploy-key
	travis login
	travis encrypt-file github-deploy-key
