// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import _0x2c6ed1 from 'node-fetch';
let handler = async (_0x39d62d, {
  conn: _0x5b212d,
  args: _0x2b8032,
  usedPrefix: _0x3c51f1,
  command: _0x1ed571
}) => {
  if (!_0x2b8032[0]) {
    throw "✳️ " + mssg.useCmd + "\n *" + (_0x3c51f1 + _0x1ed571) + "* paste the Facebook link here.";
  }
  _0x39d62d.react(rwait);
  try {
    let _0x3debc5 = await _0x2c6ed1("https://bk9.fun/download/fb?url=" + encodeURIComponent(_0x2b8032[0]));
    if (!_0x3debc5.ok) {
      throw "❎ " + mssg.error;
    }
    let _0x77bbde = await _0x3debc5.json();
    if (!_0x77bbde.status) {
      throw "❎ " + mssg.error;
    }
    let {
      thumb: _0x5413e1,
      title: _0x2eb949,
      desc: _0x559808,
      sd: _0x596fa6,
      hd: _0x2e772a
    } = _0x77bbde.BK9;
    let _0xee0372 = "*🎥 Video Details:*\n\n📌 *Title:* " + _0x2eb949 + "\n📝 *Description:* " + (_0x559808 || "No description available.") + "\n\nChoose a video quality to download:";
    await _0x5b212d.sendFile(_0x39d62d.chat, _0x5413e1, "thumbnail.jpg", _0xee0372, _0x39d62d);
    let _0x1fcbde = _0x2e772a || _0x596fa6;
    if (!_0x1fcbde) {
      throw "❎ No video URL available for download.";
    }
    await _0x5b212d.sendFile(_0x39d62d.chat, _0x1fcbde, "fbvideo.mp4", "🎬 Here is your video in " + (_0x2e772a ? 'HD' : 'SD') + " quality.", _0x39d62d);
  } catch (_0x7f44c9) {
    _0x39d62d.reply("❎ " + mssg.error + "\n\nError: " + _0x7f44c9.message);
  }
};
handler.help = ["facebook <link fb>"];
handler.tags = ["downloader"];
handler.command = ['fb', "fbdl", 'facebook', "fbvid"];
handler.diamond = false;
export default handler;