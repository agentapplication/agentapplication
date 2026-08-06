# Agent Applications documentation

This directory contains the Mintlify source for
[agentapplication.io](https://agentapplication.io).

## Development

From the repository root, run:

```sh
npm run dev
```

The local preview opens at `http://localhost:3000` or the next available port.

Validate the site with:

```sh
npm run validate
npm run check-links
```

`llms-full.txt` is generated from the navigation order in `docs.json`. After
changing the navigation or page content, refresh it from the repository root:

```sh
npm run generate:llms
```

Mintlify should be configured to publish from this `docs/` directory.
