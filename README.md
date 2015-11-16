# load-module
Loads a node javascript file to client

The idea is that each module loaded should work exactly like a node module works.
A module should remember its scope and all the required modules, including the
variable. All without declaring dependencies prior to loading.
