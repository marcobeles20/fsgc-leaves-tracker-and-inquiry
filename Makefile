# Lint
lint:
	$(MAKE) yaml-lint

## YAML
yaml-lint:
	yamllint --config-file=.yamllint.yaml .