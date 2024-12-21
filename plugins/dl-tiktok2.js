// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import _0x541913 from 'node-fetch';
let handler = async (_0x44a051, {
  conn: _0x9b9a07,
  args: _0x440891,
  usedPrefix: _0x4bbda3,
  command: _0xebf693
}) => {
  if (!_0x440891[0]) {
    throw "✳️ " + mssg.useCmd + "\n *" + (_0x4bbda3 + _0xebf693) + "* paste the TikTok link here.";
  }
  _0x44a051.react(rwait);
  try {
    let _0x1d6dfe = await _0x541913("https://bk9.fun/download/tiktok?url=" + encodeURIComponent(_0x440891[0]));
    if (!_0x1d6dfe.ok) {
      throw "❎ API returned an error (" + _0x1d6dfe.status + " " + _0x1d6dfe.statusText + ').';
    }
    let _0x33d3ef = await _0x1d6dfe.json();
    console.log(_0x33d3ef);
    if (!_0x33d3ef.status || !_0x33d3ef.BK9) {
      throw "❎ No downloadable content found.";
    }
    let _0x52f3a1 = _0x33d3ef.BK9.BK9;
    let _0x449db6 = _0x33d3ef.BK9.desc || "No description provided.";
    let _0xd47652 = _0x33d3ef.BK9.nickname || "Anonymous";
    let _0xd50a29 = _0x33d3ef.BK9.likes_count || 0;
    let _0x3e3f3d = _0x33d3ef.BK9.comment_count || 0;
    let _0x58eb4f = _0x33d3ef.BK9.music_info?.["title"] || "No music title available.";
    let _0x201bc0 = _0x33d3ef.BK9.music_info?.["audio_url"] || null;
    let _0x32f39b = _0x33d3ef.BK9.BK9.includes("mp4") ? null : _0x33d3ef.BK9.BK9;
    if (_0x52f3a1) {
      _0x44a051.reply("⏳ Media: Video");
      let _0x2c7e4a = "╭◉ *PRINCE MD TIKTOK DL*◉\n╠ ○🎥 *Video by*: " + _0xd47652 + " \n╠ ○👍 *Likes*: " + _0xd50a29 + " \n╠ ○💬 *Comments*: " + _0x3e3f3d + " \n╠ ○🎵 *Music*: " + _0x58eb4f + " \n╠ ○📝 *Description*: " + _0x449db6 + "\n╚•";
      await _0x9b9a07.sendFile(_0x44a051.chat, _0x52f3a1, "tiktok.mp4", _0x2c7e4a, _0x44a051);
    }
    if (_0x201bc0 && _0x32f39b) {
      _0x44a051.reply("⏳ Media: Audio+Images");
      let _0x5d6942 = "╭◉ *PRINCE MD TIKTOK DL*◉\n╠ ○🎥 *Video by*: " + _0xd47652 + " \n╠ ○👍 *Likes*: " + _0xd50a29 + " \n╠ ○💬 *Comments*: " + _0x3e3f3d + " \n╠ ○🎵 *Music*: " + _0x58eb4f + " \n╠ ○📝 *Description*: " + _0x449db6 + "\n╚•";
      await _0x9b9a07.sendFile(_0x44a051.chat, _0x32f39b, "image.jpg", _0x5d6942, _0x44a051);
      await _0x9b9a07.sendFile(_0x44a051.chat, _0x201bc0, "audio.mp3", _0x5d6942, _0x44a051);
    }
    if (_0x201bc0 && !_0x32f39b) {
      _0x44a051.reply("⏳ Media: Audio");
      let _0x48d737 = "╭◉ *PRINCE MD TIKTOK DL*◉\n╠ ○🎥 *Audio by*: " + _0xd47652 + " \n╠ ○👍 *Likes*: " + _0xd50a29 + " \n╠ ○💬 *Comments*: " + _0x3e3f3d + " \n╠ ○🎵 *Music*: " + _0x58eb4f + " \n╠ ○📝 *Description*: " + _0x449db6 + "\n╚•";
      await _0x9b9a07.sendFile(_0x44a051.chat, _0x201bc0, "audio.mp3", _0x48d737, _0x44a051);
    }
  } catch (_0x18621c) {
    console.error(_0x18621c);
    _0x44a051.reply("❎ An error occurred: " + _0x18621c.message);
  }
};
handler.help = ["tiktok2 <link tiktok>"];
handler.tags = ["downloader"];
handler.command = ["tt2", "ttdl2", "tiktok2", "ttvideo", "ttvid"];
export default handler;