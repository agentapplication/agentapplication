# Durable notebook

A one-user research notebook: notes survive a restart, and two users do not
share a workspace.

Walkthrough: [Hello World](https://agentapplication.io/examples/hello-world).

## 1. Framework

Install [Goose](https://goose-docs.ai/docs/getting-started/installation) and
run `goose configure`.

## 2. Agent Project

The paper groups an Agent Project by parts. Goose stores
natural-language instructions in `AGENTS.md`, computer-code tools in
`tools/`, evaluations in `evals/`, package metadata in `package.json`,
and platform configuration in `karta.toml`. `recipe.yaml` is the Goose
recipe for `goose run`. There are no skills or system integrations in
this app.

## 3. Local testing

Run Goose in this folder. Do not copy the project for a second user.

```sh
goose session --with-builtin developer
```

Say: "Remember that the launch moved to September 18." Exit. Run
`goose session --with-builtin developer` again in the same folder:
"Prepare a launch briefing." `notes.md` and `briefing.md` should still
be here.

One-shot:

```sh
goose run --with-builtin developer --recipe recipe.yaml \
  --params task="Remember that the launch moved to September 18."
```

Two example users, Ada and Bea, need separate instances. Two folders on the
same disk are not isolation: the agent can see the whole filesystem. Each
user needs a dedicated virtual filesystem. That is platform work.

## 4. Platform

[Karta](https://karta.sh) is one platform that deploys this Goose project and
gives each user an instance with its own virtual filesystem.

```sh
npm install -g @karta.sh/cli
karta login
karta setup --enable --method git
karta deploy
karta open
```
