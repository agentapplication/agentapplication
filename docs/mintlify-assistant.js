if (!window.agentApplicationMintlifyAssistant) {
  window.agentApplicationMintlifyAssistant = (async () => {
    await import("https://widget.mintlify.com/v1/embed.js");
    await window.MintlifyAssistant.init({
      id: "mint_widget_adf0cb3c-d1d2-41f6-ad8f-59e6e6426c1a",
    });
  })().catch((error) => {
    console.error("Unable to load the Mintlify assistant widget", error);
  });
}
