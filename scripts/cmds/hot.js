 module.exports = {
  config: {
    name: "hot",
    aliases: ["lm10"],
    version: "1.0",
    author: "Otineyyyy your dadddy👾😉",
    countDown: 5,
    role: 0,
    shortDescription: "send you video of hot",
    longDescription: "",
    category: "18+",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
   var link = [ "https://i.imgur.com/z0kyrlb.mp4",

"https://i.imgur.com/17nXn9K.mp4",

"https://i.imgur.com/nj23cCe.mp4",

"https://i.imgur.com/lMpmBFb.mp4",

"https://i.imgur.com/85iuBp2.mp4",

"https://i.imgur.com/E9gbTEZ.mp4",

"https://i.imgur.com/R3XHTby.mp4",

"https://i.imgur.com/qX2HUXp.mp4",

"https://i.imgur.com/R3XHTby.mp4",

"https://i.imgur.com/MYn0ese.mp4",

 "https://i.imgur.com/yipoKec.mp4",

"https://i.imgur.com/0tFSIWT.mp4",

"https://i.imgur.com/BzP6eD8.mp4",

"https://i.imgur.com/aDlwRWy.mp4",

"https://i.imgur.com/l3c86M3.mp4",

"https://i.imgur.com/lfjT7bx.mp4",

"https://i.imgur.com/Zp5sci1.mp4",


"https://i.imgur.com/S6rHOc1.mp4",

"https://i.imgur.com/cAHRfq3.mp4",

"https://i.imgur.com/zzqEWkN.mp4",

"https://i.imgur.com/fL1igWD.mp4",

"https://i.imgur.com/ZRt0bGT.mp4",

"https://i.imgur.com/fAKWP0W.mp4",

"https://i.imgur.com/FbnZI40.mp4",

"https://i.imgur.com/wkLsGAj.mp4"
]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '「 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬」',attachment: await global.utils.getStreamFromURL(img)
})
}
     }
