// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import _0x4b4cd3 from 'node-fetch';
let handler = async (_0x3c2106, {
  args: _0x1d5236,
  usedPrefix: _0x10db42,
  command: _0x30dd07
}) => {
  if (!_0x1d5236[0]) {
    throw "✳️ Please provide a query.\nExample: *" + (_0x10db42 + _0x30dd07) + " Hi*";
  }
  _0x3c2106.react('⏳');
  try {
    let _0x1e7926 = await _0x4b4cd3('https://bk9.fun/ai/gemini?q=' + encodeURIComponent(_0x1d5236.join(" ")));
    if (!_0x1e7926.ok) {
      throw "❎ Failed to fetch response from Gemini. Please try again.";
    }
    let _0x1c6d2c = await _0x1e7926.json();
    if (!_0x1c6d2c.status) {
      throw "❎ Error: " + (_0x1c6d2c.err || "Unknown error");
    }
    _0x3c2106.react('✅');
    _0x3c2106.reply(_0x1c6d2c.BK9 || "❎ No response available.");
  } catch (_0x1afd5e) {
    console.error("Error:", _0x1afd5e);
    _0x3c2106.reply("❎ Failed to process your request. Please try again.");
  }
};
handler.help = ["gemini <query>"];
handler.tags = ["study"];
handler.command = ["gemini"];
export default handler;