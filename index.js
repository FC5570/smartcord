const phin = require("phin");

/**
 * the chat function
 * @param text: The message to send to the chatbot
 * @param options: The options object containing the botName, ownerName and the userName
 */
module.exports = {
  async chat(text, options) {
    if (!text) throw new Error("Please specify some text");
    if (!options.botName) throw new Error("Please specify a botName");
    if (!options.ownerName) throw new Error("Please specify an ownerName");
    if (!options.userName) throw new Error("userName musn't be empty");

    const data = await phin({
      url: `https://api.affiliateplus.xyz/api/chatbot?message=${text}&botname=${options.botName}&ownername=${options.ownerName}&user=${options.userName}`,
      method: "get",
      parse: "json",
    });
    return data.body.message;
  },
};
