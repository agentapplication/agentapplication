# Contributing to Agent Applications

Thank you for helping improve the Agent Applications paper and the open work
around it.

## Where to participate

- [GitHub Discussions](https://github.com/agentapplication/agentapplication/discussions)
  are for open-ended proposals, questions, boundary cases, prior art, and early
  ideas that would benefit from discussion before an edit is written.
- [GitHub Issues](https://github.com/agentapplication/agentapplication/issues)
  are for concrete errors, missing evidence, broken links, and other problems
  with a clear resolution.
- [Pull requests](https://github.com/agentapplication/agentapplication/pulls)
  are for focused edits, examples, and corrections that are ready for review.

## Useful contributions

### Add or challenge a product

The [overview](https://agentapplication.io/) lists products the definition
currently includes. A useful first contribution is a pull request that adds a
row with a source, or a
[discussion](https://github.com/agentapplication/agentapplication/discussions/1)
that argues a row should come out.

### Review the category definition

The paper is most useful if its boundaries survive contact with real products.
Good reviews include:

- A product or architecture that the definition wrongly includes or excludes
- A claim that fails in a concrete implementation
- Prior art that already names or solves a problem treated as open
- A term that conflicts with established usage in another field

### Improve the documentation

Typos, clearer explanations, better examples, and corrections to cited product
behavior are welcome. The Mintlify site lives in [`docs/`](docs/).

### Propose an open contract

Proposals should begin with an interoperability problem encountered by at least
two independent implementations. Describe the systems involved, the boundary
that needs to stay stable, and why a shared contract is preferable to a local
integration.

## Before opening a pull request

1. Keep the change focused on one subject.
2. Explain the problem and the evidence behind the change.
3. Update the paper and its shorter concept pages together when a definition
   changes.
4. Run the documentation checks:

   ```sh
   npm run validate
   npm run check-links
   ```

5. If AI tools materially helped produce the contribution, describe how they
   were used in the pull request.

For open-ended proposals, start a GitHub Discussion before investing in a large
change.

## License

By contributing, you agree that your contribution will be licensed under the
[MIT License](LICENSE).
