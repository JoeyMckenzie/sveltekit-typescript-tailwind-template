# Sveltekit Tailwind Typescript Template

This projects is an enhancement of the templated project that is generated when scaffolding a sveltekit project. In addition to the tools that the original template brings, this template also includes:

- [TypeScript](https://www.typescriptlang.org/) by default
- [Yarn](https://yarnpkg.com/) as a package manager
- [Tailwind CSS](https://tailwindcss.com/)
- [Husky](https://github.com/typicode/husky) git hooks for formatting, testing, and commit message verification
- [Commitlint](https://commitlint.js.org/#/) to enforce semantic commit messages
- [Dev containers](https://containers.dev/) for platform agnostic local development and ease of portability

The template builds upon the sveltekit template included tools in ESLint, Prettier, and Playwright. The motivation for using this template is to simply save time with a development-ready sveltekit project with batteries included.

## Getting started

The simplest way to get up and running with the template is using [degit](https://github.com/Rich-Harris/degit). In a terminal of your choice, install degit and clone the project (without git history):

```bash
yarn add --global degit # or, npm install -g degit
degit JoeyMcKenzie/sveltekit-typescript-tailwind-template path-to/your-project
```

Once cloned, simply install dependencies and run:

```bash
yarn install
yarn dev
```

That's it!

## Using dev containers

If you'd prefer to use Docker with dev containers (my personal preference), first install the dev containers CLI:

```bash
yarn add --global @devcontainers/cli # or, npm install -g @devcontainers/cli
```

For ease of integration, add the [remote containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) to your VS Code installation as well. Next, open the project:

```bash
code path-to/your-project
```

Either:

- Open the project in a container through VS Code using `ctrl` + `shift` + `p` and select `Dev Containers: Open Folder in Container...`
- Build the container locally with `devcontainer build --workspace-folder .` and use the above command to attach your local workspace to the container
