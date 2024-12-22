function sendOrUpdateMessage(config) {
  const {
    WEBHOOK_URL,
    MESSAGE_ID,
    API_URL,
    SEARCH_TERM,
    EMBED_TITLE,
    IMAGE_URL
  } = config;

  try {
    const response = UrlFetchApp.fetch(API_URL);
    const json = JSON.parse(response.getContentText());

    const targetItem = json.data.find(item => item.configData.id === SEARCH_TERM);
    if (!targetItem) {
      console.log(`${SEARCH_TERM} not found.`);
      return;
    }

    const value = targetItem.value;
    const embed = {
      title: `**${EMBED_TITLE}**`,
      description: `**Current RAP**: ${value}`,
      image: {
        url: IMAGE_URL
      },
      color: 16711680 // Red
    };

    // Checks for message ID. Will send new message without.
    const options = {
      method: MESSAGE_ID ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      payload: JSON.stringify({
        embeds: [embed]
      })
    };

    // Send or update the message
    const url = MESSAGE_ID ? `${WEBHOOK_URL}/messages/${MESSAGE_ID}` : WEBHOOK_URL;
    const result = UrlFetchApp.fetch(url, options);
    const resultJson = JSON.parse(result.getContentText());

    if (!MESSAGE_ID) {
      // Log the message ID after the first run
      console.log("Message sent. Message ID: " + resultJson.id);
    } else {
      console.log("Message updated.");
    }
  } catch (e) {
    console.error("Error: " + e.message);
  }
}
