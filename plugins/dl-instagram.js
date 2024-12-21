// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import _0x4aba5e from 'node-fetch';
let handler = async (_0x584d98, {
  conn: _0x442b77,
  args: _0x2923f4,
  usedPrefix: _0x3a6de4,
  command: _0x3f6145
}) => {
  if (!_0x2923f4[0]) {
    throw "✳️ " + mssg.useCmd + "\n *" + (_0x3a6de4 + _0x3f6145) + "* past insta link here";
  }
  _0x584d98.react(rwait);
  try {
    let _0x44919b = await _0x4aba5e('https://bk9.fun/download/instagram2?url=' + encodeURIComponent(_0x2923f4[0]));
    if (!_0x44919b.ok) {
      throw "❎ " + mssg.error;
    }
    let _0x31d3ee = await _0x44919b.json();
    for (let _0x206259 of _0x31d3ee.BK9) {
      _0x442b77.sendFile(_0x584d98.chat, _0x206259.url, "igdl.jpg", '' + vidcap, _0x584d98);
    }
  } catch (_0x1244f1) {
    _0x584d98.reply("❎ " + mssg.error);
  }
};
handler.help = ["instagram <link ig>"];
handler.tags = ["downloader"];
handler.command = ['ig', "igdl", "instagram", "igimg", "igvid"];
export default handler;