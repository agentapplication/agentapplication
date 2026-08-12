# Agent Applications

**A Reference Architecture for Building and Operating AI Agent Systems**

[agentapplication.io](https://agentapplication.io) publishes the Agent
Applications working paper and the examples, concept pages, and companion work
around it. The current paper is [Working Draft
0.9](https://agentapplication.io/paper), dated August 2026.

An **Agent Application** uses one or more persistent, tool-using AI agents to
produce or maintain durable results. A request, schedule, or outside event can
start the work. The application sets the available tools, permissions, policies,
and other guardrails. Within those limits, the agent inspects the current state
and chooses what to do next. Its workspace and results remain available across
sessions.

The paper presents a vendor-neutral architecture for the complete system. It
follows an Agent Project through release and deployment, then explains how the
resulting instances retain work and change over time. It also defines the
responsibilities of Agent Application Frameworks, Platforms, and Stores, and
places authority enforcement outside the model. Frameworks retain their native
project and release formats, while shared protocols and future contracts sit at
the boundaries between systems.

Application developers can use the paper's build-and-operate method to design a
system and assign its capabilities. Framework authors can compare their harness
with the capability model. Platform, security, and governance teams can use the
lifecycle and trust views to decide where state, authority, evidence, and
recovery belong. The same model gives technology buyers and standards
contributors a basis for comparing products and locating interoperability
boundaries.

## Repository contents

- The full paper, [*Agent Applications: A Reference Architecture for Building
  and Operating AI Agent Systems*](https://agentapplication.io/paper)
- A [build-and-operate method](https://agentapplication.io/paper#9-a-build-and-operate-method)
  and [capability model](https://agentapplication.io/paper#12-1-a-capability-model-for-agent-applications)
- A sourced comparison of how current harnesses expose the capabilities
- A short [overview](https://agentapplication.io/)
- A minimal [Hello World Agent Application](https://agentapplication.io/examples/hello-world)
- Concise pages for the framework, project, instance, workspace, artifact,
  widget, lineage, and platform concepts
- Planned companion documents and possible future contracts

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
npm run generate:llms
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
