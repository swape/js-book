---
layout: ../../layouts/normal.astro
title: 'Node'
---

# Node

You can run JavaScript on browser and on serverside.
But now we are going to focus on serverside.

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
In older versions of node, the import syntax was not supported. But now it is.

Example:

```javascript
import http from 'http'
```

But we are getting back to that later.

## NPM

Node Package Manager is a package manager for JavaScript.
Some of the packages are included when you install node, but most of them are not. So you have to install them yourself.

## Installation of Node

You can download Node from [nodejs.org](https://nodejs.org/)
and follow the installation guide. There are different ways to install node on different operating systems.
I like the `nvm` (Node Version Manager) for installing node on my computer.
But to start with, you can just download the installer from the website.

## Setting up a project in node

You can create a new project by running `npm init` in your terminal.
Init will ask you some questions about your project and create a `package.json` file for you.

In this file you can see the name of the project, version, description, entry point, test command, git repository, keywords, author, license and dependencies.

You can also add a `scripts` object to the `package.json` file. This is where you can add your own commands to run in the terminal.

Many frontend projects use node to run a server and to build the project. You can add these commands to the `scripts` object.

Example:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My first project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

If you like to deep dive into all the options you can add to the `package.json` file, you can read the documentation [here](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)

## Installing dependencies

After you have run `npm init` or made the package.json file yourself, you can install dependencies by running `npm install` in the terminal.

## Dependencies

Dependencies are packages that your project needs to run.
You can add those packages to the `dependencies` object in the `package.json` file.

Easiest way to install a package is to run `npm install package-name` in the terminal. You just need to replace `package-name` with the name of the package you want to install. In the example above, we installed `express`.

You can also install dependencies only for development by running `npm install package-name --save-dev` or `npm install package-name -D` in the terminal.

When you add `-D` or `--save-dev` to the command, the package will be added to the `devDependencies` object in the `package.json` file.
