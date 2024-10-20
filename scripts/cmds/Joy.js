 module.exports = {
 config: {
	 name: "Joy",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "Joy") {
 return message.reply({
 body: "জয় বস কাজে বিজি আছেন",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/XXANp1W.jpeg")
 });
 }
 }
}
