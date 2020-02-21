# Inkdrop Plugin Template

This template repository provides an easy way to start working on a new [Inkdrop](https://inkdrop.app/) plugin with all batteries included.

See [Auto Reload](https://my.inkdrop.app/plugins/auto-reload) for a plugin based on this template.

## Getting Started

1. Create a new repository by clicking the "Use this template" button. It is recommended to name the repository `inkdrop-hello-world` for a plugin called `hello-world`.
2. Edit the `README.md`, `LICENSE` and `package.json` files and make sure the data inside them is correct. Don't modify the "Build Status" badge url's in the readme just yet, that's done in step 5.
3. Create a new Azure DevOps project and create a build pipeline for it. Specify that the code is hosted on GitHub and when asked select the repository you created in step 1.
4. Rename the build pipeline to "Build" by going to `Pipelines > Builds`, selecting the newly created pipeline, clicking on the three dots on the top-right and selecting "Rename/move".
5. With the "Build" pipeline history open, look in the url bar and copy the value of `definitionId` to the Build Status badge's `definitionId` just underneath the title in this readme. Also replace all instances of "jmerle/inkdrop-hello-world" in the Build Status badge's urls with your Azure DevOps username and the correct Azure DevOps project name.
6. Remove everything from the next horizontal line and above from this README and start reading the [Contributing Guide](./CONTRIBUTING.md) to learn how to set-up a development environment and how to publish new releases.

---

# Hello World plugin for Inkdrop

[![Build Status](https://dev.azure.com/jmerle/inkdrop-hello-world/_apis/build/status/Build?branchName=master)](https://dev.azure.com/jmerle/inkdrop-hello-world/_build/latest?definitionId=1&branchName=master)
[![Latest release](https://img.shields.io/github/v/release/jmerle/inkdrop-hello-world)](https://my.inkdrop.app/plugins/hello-world)
[![License](https://img.shields.io/github/license/jmerle/inkdrop-hello-world)](https://github.com/jmerle/inkdrop-hello-world/blob/master/LICENSE)

Short description about the plugin.

## Install

```
ipm install hello-world
```

## Usage

Plugin usage, supported by screenshots where useful.

## Changelog

See the [GitHub releases](https://github.com/jmerle/inkdrop-hello-world/releases) for an overview of what changed in each update.

## Contributing

All contributions are welcome. Please read the [Contributing Guide](https://github.com/jmerle/inkdrop-hello-world/blob/master/CONTRIBUTING.md) first as it contains information regarding the tools used by the project and instructions on how to set up a development environment.
