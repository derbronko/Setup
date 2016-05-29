# Setup
by [derBronko](http://www.derbronko.com)

What is Setup?
-------------
Setup is a small, lightweight project to speed up the initial work to rock a new project.
It comes with a basic build process via Grunt (npm based), Typescript and SCSS to provide
a modern web.
You should be focused on your new great stuff, not to think about the right project structure.

I would love to hear your thoughts!

How to setup Setup?
------------------
There are a few thinks, you have to do:

- install Node with NPM
- create a new folder
- paste the content of this repo into this folder
- change the project name from "Setup" to your project name in typings.json and package.json
- go to your project path with cmd
- type "npm install" and push return

That´s it, Setup is now installed. Should not take more than 2 minutes.

How to work with Setup?
-------
- You could use every markup language or create dynamic content.
- just include your compiled js files and the main.css from assets/prod/[styles/scripts]
- start the grunt watchers or build manually
- make your work on your style


Are there rules?
-------
No, not rules in it actual meaning.
But here are some advices for you:
####  General
- You can do everything you want
- Replace all the "Setup"-names with your project name
- Use assets/dev as dir for your files and include the output from assets/prod

#### CSS/SCSS 
- use the variables.scss as central place for declare vars, to find the declaration as fast as possible
- import new scss files in the imports.scss
- if you need more css-files than one, you have to edit the grunt-tasks. In the initial setup will only the main.scss become compiled.

#### Scripts 
- put external libaries in the "external"-dir to get a clean structure
- implement augmentations for external libaries to provide a passing build
  
  
  
Have fun! Create wonderful things!
-----
I would love to hear about all the crazy and wonderful stuff you have created with Setup!
Please let me now, wirte me a line at mail(a)derbronko.de


