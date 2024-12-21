// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import _0x3188ef from 'axios';
const model = ["bella", "echilling", "adam", "prabowo", "thomas_shelby", "michi_jkt48", "jokowi", "megawati", 'nokotan', "boboiboy", "yanzgpt"];
const tts = (_0x3564ef, _0x35fb59) => {
  return new Promise(async (_0x12f1b5, _0x3b15a3) => {
    if (!model.includes(_0x35fb59)) {
      return _0x3b15a3(new Error("Invalid voice model."));
    }
    try {
      const _0x5209e7 = await _0x3188ef.get("https://api.yanzbotz.live/api/tts/voice-over", {
        'params': {
          'query': _0x3564ef,
          'model': _0x35fb59,
          'apiKey': 'yanzdev'
        },
        'responseType': "arraybuffer"
      });
      _0x12f1b5(_0x5209e7.data);
    } catch (_0x3a4897) {
      console.error("Error details:", _0x3a4897.response ? _0x3a4897.response.data : _0x3a4897.message);
      _0x3b15a3(new Error("Failed to generate voice-over. Check the console for details."));
    }
  });
};
let handler = async (_0x410b3b, {
  conn: _0x49bb6f,
  text: _0x249b47,
  args: _0x573b8a,
  usedPrefix: _0x4c2e5c,
  command: _0x1b9243
}) => {
  if (!_0x249b47 && !(_0x410b3b.quoted && _0x410b3b.quoted.text)) {
    if (!_0x249b47) {
      return _0x410b3b.reply("Reply with message or type .prince Assalamualaikum");
    }
  }
  if (!_0x249b47 && _0x410b3b.quoted && _0x410b3b.quoted.text) {
    _0x249b47 = _0x410b3b.quoted.text;
  }
  const _0x1ec55f = [];
  for (let _0x56dda2 = 0x0; _0x56dda2 < _0x249b47.length; _0x56dda2 += 0x1f4) {
    const _0x5cc202 = _0x249b47.slice(_0x56dda2, _0x56dda2 + 0x1f4);
    _0x1ec55f.push(_0x5cc202);
  }
  _0x410b3b.react('⏳');
  try {
    for (const _0x4dda50 of _0x1ec55f) {
      const _0x246452 = await tts(_0x4dda50, "thomas_shelby");
      await _0x49bb6f.sendMessage(_0x410b3b.chat, {
        'audio': _0x246452,
        'mimetype': "audio/mp4",
        'ptt': true
      }, {
        'quoted': _0x410b3b
      });
    }
  } catch (_0x82cf48) {
    _0x410b3b.reply("An error occurred while generating the voice-over. Check the console for details.");
    console.error("Detailed error:", _0x82cf48);
  }
  _0x410b3b.react('✅');
};
handler.help = ["prince <query>", "aivoice"];
handler.tags = ["study"];
handler.command = ["prince", "aivoice"];
export default handler;