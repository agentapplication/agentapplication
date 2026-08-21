# Durable notebook

The smallest Agent Application in this repository: one persistent notebook
agent, one durable workspace, and work that continues across runs.

This is a project sketch, not a harness. Point your framework at
`instructions.md`, register `save-note.ts` as a `save_note` tool with one
string argument, route instances by authenticated user id, and keep each
user's files across sessions.

`evals/persistence.yaml` is the behavior to test. Ada's note survives
suspension. Bea cannot see it.

The write-up is at
[agentapplication.io/examples/hello-world](https://agentapplication.io/examples/hello-world).
