const TikTok = async _0x463781 => {
  try {
    const _0x2d1c7b = await fetch("https://api.yanzbotz.live/api/downloader/tiktok?url=" + encodeURIComponent(_0x463781) + "&apiKey=yanzdev");
    const _0x2da140 = await _0x2d1c7b.json();
    return _0x2da140.result;
  } catch (_0x3a6e2c) {
    console.error("Error", _0x3a6e2c);
    throw _0x3a6e2c;
  }
};
let handler = async (_0x517081, {
  conn: _0x475b77,
  args: _0x5a4f33,
  usedPrefix: _0x4485c2,
  command: _0x4dcb8b
}) => {
  const _0x6971ed = _0x5a4f33[0];
  if (!_0x6971ed) {
    return _0x517081.reply("*🟢Example*\n *.tiktok* past your link");
  }
  _0x517081.react("⏳");
  try {
    let _0x2a7478 = await TikTok(_0x6971ed);
    let _0x5036b8 = _0x2a7478.type;
    let _0x54b989 = "╭━━⊱𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗟 \n";
    _0x54b989 += "🎗️ *" + mssg.type + ":* " + _0x5036b8 + "\n";
    _0x54b989 += "🎗️ *" + mssg.name + ":* " + _0x2a7478.name + "\n";
    _0x54b989 += "🎗️ *" + mssg.username + ":* " + _0x2a7478.username + "\n";
    _0x54b989 += "🎗️ *" + mssg.views + ":* " + _0x2a7478.views + "\n";
    _0x54b989 += "🎗️ *" + mssg.likes + ":* " + _0x2a7478.likes + "\n";
    _0x54b989 += "🎗️ *" + mssg.comments + ":* " + _0x2a7478.comments + "\n";
    _0x54b989 += "🎗️ *" + mssg.favorite + ":* " + _0x2a7478.favorite + "\n";
    _0x54b989 += "🎗️ *" + mssg.shares + ":* " + _0x2a7478.shares + "\n";
    _0x54b989 += "🎗️ *" + mssg.desc + ":* " + _0x2a7478.description + "\n╰━━━━━━━━━━━━━━━━━";
    _0x475b77.sendMessage(_0x517081.chat, {
      "text": "📥 *" + mssg.media + ":* " + _0x5036b8
    }, {
      "quoted": _0x517081
    });
    if (_0x5036b8 === "image") {
      let _0x6df282 = _0x2a7478.image;
      const _0x4bfec1 = {
        "text": _0x54b989
      };
      _0x475b77.sendMessage(_0x517081.chat, _0x4bfec1, {
        "quoted": _0x517081
      });
      for (let _0x129411 = 0; _0x129411 < _0x6df282.length; _0x129411++) {
        const _0x257a14 = {
          "url": _0x6df282[_0x129411]
        };
        await _0x475b77.sendMessage(_0x517081.chat, {
          "image": _0x257a14,
          "caption": "*🎗️image:* " + (_0x129411 + 1)
        }, {
          "quoted": _0x517081
        });
        _0x475b77.sendFile(_0x517081.chat, _0x2a7478.sound, "tiktok.mp3", '', _0x517081, null, {
          "mimetype": "audio/mp4"
        });
      }
    }
    if (_0x5036b8 === "video") {
      let _0x137773 = _0x2a7478.video["no-watermark"];
      const _0x2215fb = {
        "url": _0x137773
      };
      const _0x4f1a8f = {
        video: _0x2215fb,
        "caption": _0x54b989
      };
      await _0x475b77.sendMessage(_0x517081.chat, _0x4f1a8f, {
        "quoted": _0x517081
      });
    }
  } catch (_0x5ec21e) {
    _0x517081.reply('' + mssg.error);
  }
  _0x517081.react("✅");
};
handler.help = ["tiktok"];
handler.tags = ["tools"];
handler.command = /^(tiktok|tt|tiktokdl|tiktokslide|tiktoknowm|tiktokvid|ttdl)$/i;
export default handler;