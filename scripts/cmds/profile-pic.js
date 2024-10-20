module.exports = {
  config: {
    name: "profile-pic",
    aliases: ["lm10"],
    version: "1.0",
    author: "Otineyyyy your dadddy👾😉",
    countDown: 5,
    role: 0,
    shortDescription: "send you pic of messi",
    longDescription: "",
    category: "profile-pic",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
   var link = [ "https://i.imgur.com/xTbH2Zr.jpeg",

"https://i.imgur.com/1xqQZlk.jpeg",

"https://i.imgur.com/bt6Os9Q.jpeg",

"https://i.imgur.com/WyHwzq7.jpeg",

"https://i.imgur.com/VBrDaZ7.jpeg",

"https://i.imgur.com/XRMNLeb.jpeg",

"https://i.imgur.com/VmkmCq4.jpeg",

"https://i.imgur.com/7Ht17jo.jpeg",

"https://i.imgur.com/xHJGcWh.jpeg",

"https://i.imgur.com/eRZDL1u.jpeg",

 "https://i.imgur.com/MJbJHwC.jpeg",

"https://i.imgur.com/Z5PAZKC.jpeg",

"https://i.imgur.com/kV9EolL.jpeg",

"https://i.imgur.com/iCrNyVc.jpeg",

"https://i.imgur.com/bfXuyVc.jpeg",

"https://i.imgur.com/gH0zx8P.jpeg",

"https://i.imgur.com/hw2ZIcv.jpeg",
]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '「 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬」',attachment: await global.utils.getStreamFromURL(img)
})
}
     }
