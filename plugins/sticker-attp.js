// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import _0x68be34 from 'node-fetch';
import { sticker } from '../lib/sticker.js';
let handler = async (_0x5be775, {
  conn: _0x3d26d7,
  text: _0x2fd6c2,
  args: _0x47faf1,
  usedPrefix: _0x153b37,
  command: _0x116c59
}) => {
  if (!_0x2fd6c2) {
    throw "*[❗] Please provide the text for the sticker*\n\n*—◉ Example:*\n*" + (_0x153b37 + _0x116c59) + " YourTextHere*";
  }
  let _0x423362 = encodeURIComponent(_0x2fd6c2);
  try {
    let _0x1ac752 = await _0x68be34("https://bk9.fun/maker/text2gif?q=" + _0x423362);
    if (!_0x1ac752.ok) {
      throw "❎ An error occurred while fetching the GIF.";
    }
    let _0x1b04c4 = await _0x1ac752.buffer();
    let _0x4307d2 = await sticker(_0x1b04c4, null, global.packname || "Sticker Pack", global.author || "Author");
    const _0x4a881b = {
      sticker: _0x4307d2
    };
    await _0x3d26d7.sendMessage(_0x5be775.chat, _0x4a881b, {
      'quoted': _0x5be775
    });
  } catch (_0x16ae73) {
    console.error(_0x16ae73);
    _0x5be775.reply("❎ An error occurred: " + (_0x16ae73.message || "Unknown error"));
  }
};
handler.help = ["atp <text>", "attp <text>"];
handler.tags = ['sticker'];
handler.command = ["text2sticker", "attp", "atp"];
export default handler;