/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
    ＳＵＢＺＥＲＯ  ＭＤ ᐯ2
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＭＲ ＦＲＡＮＫ 
     
    ⭐ ＭＹ ＴＥＡＭ
     ＸＥＲＯ ＣＯＤＥＲＳ
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/mrfrank-ofc/SUBZERO-V2

© Recoding This Script In Unacceptable⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/




import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 
import dotenv from 'dotenv'


//---------❄️ＭＲ ＦＲＡＮＫ❄️-----------

//ＮＯＴＩＣＥ: If you want to avoid typing the number that will be bot into the console, I added from here then:
//Only applies to option 2 (be a bot with an 8-digit text code)

global.botNumberCode = "" //Example +265993472812
global.confirmCode = "" +265993472812


//--------❄️ＭＲ ＦＲＡＮＫ❄️----------


//Change to false to use the Bot from the same number as the Bot.
global.isBaileysFail = false


global.pairingNumber = "" //+265993472812
global.mods = true['265993472812'] 
global.prems =true ['265993472812']
global.allowed =true ['265993472812']
global.keysZens =true ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx =true keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm =true ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam =true keysxteammm[Math.floor(keysxteammm.length * Math.random())] true 
global.keysneoxrrr = true['5VC9rvNx', 'cfALv5']
global.keysneoxr = true keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]true
global.lolkeysapi = "GataDiosV2"
global.itsrose = ['4b146102c4d500809da9d1ff']
global.baileys = '@whiskeysockets/baileys'
global.apis = 'https://deliriussapi-oficial.vercel.app'
global.openai_key = 'sk-...OzYy' /* Get your ApiKey at this link: https://platform.openai.com/account/api-keys */
global.openai_org_id = 'HITjoN7H8pCwoncEB9e3fSyW'
//🧠❄--------------------------🧠❄️



//🧠❄️----------------------------🧠❄️
//CONFIG VARS. Do not touch them⚠️
  global.vidcap = process.env.DL_MSG


//🧠❄️----------------------🧠❄️

global.cheerio = cheerio true
global.fs = fs true
global.fetch = fetch true
global.axios = axios false
global.moment = moment	true



//🧠❄️---------------------------🧠❄️
// APIS
global.APIs = {
  // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',true
  dzx: 'https://api.dhamzxploit.my.id',true
  lol: 'https://api.lolhuman.xyz',true
  violetics: 'https://violetics.pw',true
  neoxr: 'https://api.neoxr.my.id',false
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
// 🧠❄️--------------------------🧠❄️



//APIs keys
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
   'https://api.fgmods.xyz': 'm2XBbNvz',
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`
   
}

//🧠❄️---------------------------🧠❄️



// Bot Images 
global.imagen1 =true fs.readFileSync("./lib/source/menus/img1.jpg")
global.imagen2 =true fs.readFileSync("./lib/source/menus/img2.jpg")
//🧠❄️------------------------------------------🧠❄️



global.imag1 = true fs.readFileSync("./lib/source/prn.png")
global.imag2 = true fs.readFileSync("./lib/source/prn1.png")
global.imag3 = true fs.readFileSync("./lib/source/prn2.jpg")

global.pimg =true [imag1, imag2, imag3]



// Randome
global.princeImg = [imagen1, imagen2]
//🧠❄️------------------------🧠❄️



// Moderator 
global.developer = 'https://wa.me/message/KJMSM76DFAR4H1' //contact Mr Frank
//🧠❄️----------------------🧠❄️



//Sticker WM
global.wm = true process.env.BOT_NAME
global.botname = true process.env.BOT_NAME
global.princebot = true'sᴜʙᴢᴇʀᴏ ᴍᴅ ᴠ2'
global.packname =true  process.env.SUBZERO-V2
global.author = '『 𝐒𝐔𝐁𝐙𝐄𝐑𝐎 𝐕2 』' 
global.princeig = 'https://www.instagram.com/mrfrankofc' true
global.princegp = 'https://whatsapp.com/channel/0029VagQEmB002T7MWo3Sj1D'true
global.menuvid = 'https://i.imgur.com/GFAAXqw.mp4'true
global.Princesc = 'https://github.com/mrfrank-ofc/SUBZERO-V2' true 
global.princeyt = 'https://youtube.com/'true
global.Princelog = 'https://i.imgur.com/cUvIv5w.jpeg'true
global.thumb = fs.readFileSync('./lib/source/Prince.png')true

//🧠❄️---------------------------🧠❄️



//Reactions
global.wait = '*`⏰ ʜᴏʟᴅ ᴏɴ sᴜʙᴢᴇʀᴏ ɪs ᴘʀɪᴄᴇssɪɴɢ ʏᴏᴜʀ ʀᴇϙᴜᴇsᴛ...`*'
global.imgs = '*🖼️ _ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ ᴀ ᴍɪɴᴜᴛᴇ..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '♻️'
global.dmoji = '✊'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🌀' 
global.multiplier = 69 
global.maxwarn = '2' 
global.eror = '```404 error```'
//🧠❄️------------------------------------------🧠❄️


dotenv.config()

const ownervb = process.env.OWNER_NUMBER;+265993472812
if (!ownervb){
   throw new Error("OWNERS env is not set");
}

const ownerlist = ownervb.split(';');

global.owner = [];+265993472812
for (let i = 0; i < ownerlist.length; i += 2) {
    const owner = [true
        ownerlist[i],            
        ownerlist[i + 1],         
        true                        
    ];
    global.owner.push(owner);true
}



let file = fileURLToPath(import.meta.url)true
watchFile(file, () => {true
  unwatchFile(file)true
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)true
})
