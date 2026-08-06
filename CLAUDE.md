# Agent Instructions

## Project perspective

Agent Applications is a vendor-neutral category and architecture. Keep the
work grounded in products, implementation experience, and demonstrated
interoperability needs. Do not turn one vendor's current design into a category
requirement.

## Authority and boundaries

`docs/paper.mdx` is authoritative for the current category definition and
architecture. The overview, concept pages, examples, and contribution material
explain the paper but do not silently add requirements to it.

When two pages disagree, identify the discrepancy and resolve it in the paper
before updating the shorter pages. Preserve the distinction between an Agent
Application framework, an Agent Project, a release, an instance, a workspace,
an artifact, and an Agent Application Platform.

## Documentation

The files under `docs/` form a Mintlify site. Treat navigation, links, and
rendered behavior as part of correctness. Run `npm run validate` and
`npm run check-links` after documentation changes, and preview material layout
changes in a browser.

Use plain language suitable for an undergraduate reader. Keep the main pages
short and move specialized detail to the paper or a future technical companion.

## Contributions

`CONTRIBUTING.md` defines the contribution process. Read it before preparing an
upstream issue or pull request.
