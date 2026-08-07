# Agent Applications

[agentapplication.io](https://agentapplication.io) is the home of the Agent
Applications working paper and the open work that follows from it.

An **Agent Application** is a software system whose primary unit of execution
is one or more persistent, tool-using agents operating in durable workspaces to
accomplish work over time and produce or maintain durable artifacts.

Products such as ChatGPT, Claude, Gemini, Lovable, Replit Agent, OpenClaw,
Lightfield, and Manus already fit this broad pattern. The paper gives the
category a name, defines its main architectural layers, and identifies the
boundaries where shared contracts may be useful.

## What is in this repository?

- The full [Agent Applications working paper](https://agentapplication.io/paper)
- The [Agent Project and Release Specification](https://agentapplication.io/specifications/agent-project-and-release),
  Working Draft 0.1, the paper's first normative companion
- A short [overview](https://agentapplication.io/)
- A minimal [Hello World Agent Application](https://agentapplication.io/examples/hello-world)
- Concise pages for the framework, project, instance, workspace, artifact,
  widget, lineage, and platform concepts
- The planned sequence of companion papers and open contracts

The Mintlify site lives in [`docs/`](docs/). The repository layout follows the
same broad pattern as [Agent Skills](https://github.com/agentskills/agentskills):
project and contribution material at the root, with the published documentation
kept in its own directory.

## Local development

Install the [Mintlify CLI](https://www.mintlify.com/docs/installation), then run:

```sh
npm run dev
```

To validate the site without starting the preview server:

```sh
npm run validate
npm run check-links
```

## Contributing

The paper is a working draft. Counterexamples, prior art, sharper definitions,
implementation experience, and documentation improvements are welcome.

- Start open-ended proposals and architecture questions in
  [GitHub Discussions](https://github.com/agentapplication/agentapplication/discussions).
- Report concrete problems through
  [GitHub Issues](https://github.com/agentapplication/agentapplication/issues).
- Submit specific edits and examples as
  [pull requests](https://github.com/agentapplication/agentapplication/pulls).

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before preparing a pull request.

You can also send review notes to
[amol@agentapplication.io](mailto:amol@agentapplication.io?subject=Agent%20Applications%20paper%20review).

## License

This repository is licensed under the [MIT License](LICENSE).
