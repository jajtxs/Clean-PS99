function runMessage() {
  sendOrUpdateMessage({
    WEBHOOK_URL: "https://discord.com/api/webhooks/x", // Paste your webhook
    MESSAGE_ID: "", // Set the message ID after you run the first time
    API_URL: "https://petsgo.biggamesapi.io/api/rap", // Use this exact link
    SEARCH_TERM: "Santa Egg", // Exact item name in API, link above
    EMBED_TITLE: "Santa Egg", // Discord embed title
    IMAGE_URL: "https://ps99.biggamesapi.io/image/x" // Roblox decal ID
  });
}

function runGargantuanGiftMessage() {
  sendOrUpdateMessage({
    WEBHOOK_URL: "https://discord.com/api/webhooks/x",
    MESSAGE_ID: "",
    API_URL: "https://ps99.biggamesapi.io/api/rap",
    SEARCH_TERM: "2024 Gargantuan Christmas Present",
    EMBED_TITLE: "2024 Gargantuan Christmas Present",
    IMAGE_URL: "https://ps99.biggamesapi.io/image/117601296319615"
  });
}
