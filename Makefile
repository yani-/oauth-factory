package:
	@find src -name '*.js' | xargs -I file rm file
	@find src -name '*.ts' | xargs tsc 
	@find src -name '*.js' | xargs -I file mv file lib/