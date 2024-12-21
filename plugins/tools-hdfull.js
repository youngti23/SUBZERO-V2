// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import _0x84c401 from 'node-fetch';
import _0x2c3236 from '../lib/uploadFile.js';
let handler = async (_0xfb0659, {
  conn: _0x34c530
}) => {
  let _0x4fed29 = _0xfb0659.quoted ? _0xfb0659.quoted : _0xfb0659;
  let _0x42f38d = (_0x4fed29.msg || _0x4fed29).mimetype || '';
  if (!_0x42f38d) {
    throw "✳️ Reply with an image or video to enhance.";
  }
  try {
    _0xfb0659.react('⏳');
    let _0x5b0295 = await _0x4fed29.download();
    if (!_0x5b0295) {
      throw "❎ Failed to download the file. Please try again.";
    }
    let _0x3b38fa = await _0x2c3236(_0x5b0295);
    if (!_0x3b38fa) {
      throw "❎ Failed to upload the file. Please try again.";
    }
    let _0x775b53 = await _0x84c401("https://bk9.fun/tools/enhance?url=" + encodeURIComponent(_0x3b38fa));
    if (!_0x775b53.ok) {
      let _0x100c33 = await _0x775b53.text();
      throw "❎ BK9 API Error: " + (_0x100c33 || _0x775b53.statusText);
    }
    let _0x438356 = _0x775b53.headers.get("content-type");
    if (_0x438356 && _0x438356.includes("image")) {
      let _0x20b0ad = await _0x775b53.buffer();
      _0xfb0659.react('✅');
      _0x34c530.sendFile(_0xfb0659.chat, _0x20b0ad, "enhanced.jpg", "✅ Enhanced image generated successfully!", _0xfb0659);
    } else {
      let _0x282005 = await _0x775b53.json();
      if (!_0x282005.status) {
        throw "❎ BK9 API Error: " + (_0x282005.err || "Unknown error");
      }
      _0xfb0659.react('✅');
      _0xfb0659.reply("❎ No enhanced image available.");
    }
  } catch (_0x539015) {
    console.error("Error:", _0x539015);
    _0xfb0659.reply(_0x539015.message || "❎ Failed to enhance the image. Please try again.");
  }
};
handler.help = ["Enhance", "hdfull", "fullhd"];
handler.tags = ["tools"];
handler.command = ['Enhance', 'hdfull', 'fullhd'];
export default handler;