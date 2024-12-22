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

import _0x1b963b from 'node-fetch';
let handler = async (_0x28df35, {
  conn: _0x165715,
  args: _0x268ae0,
  usedPrefix: _0x154132,
  command: _0x88a3a9
}) => {
  if (!_0x268ae0[0x0]) {
    throw "✳️ " + mssg.useCmd + "\n *" + (_0x154132 + _0x88a3a9) + "* paste the TikTok link here.";
  }
  _0x28df35.react(rwait);
  try {
    let _0x395ad2 = await _0x1b963b("https://bk9.fun/download/tiktok2?url=" + encodeURIComponent(_0x268ae0[0x0]));
    if (!_0x395ad2.ok) {
      throw "❎ API returned an error (" + _0x395ad2.status + " " + _0x395ad2.statusText + ').';
    }
    let _0x1e3ce7 = await _0x395ad2.json();
    console.log(_0x1e3ce7);
    if (!_0x1e3ce7.status || !_0x1e3ce7.result) {
      throw "❎ No downloadable content found.";
    }
    let _0xff03e6 = _0x1e3ce7.result;
    let _0x4f07f1 = _0xff03e6.nickname || 'Anonymous';
    let _0x3081b4 = _0xff03e6.description || "No description provided.";
    let _0x2cec3d = _0xff03e6.thumbnail || '';
    let _0x21dfc8 = _0xff03e6.video.noWatermark || null;
    let _0x1825db = _0xff03e6.audio || null;
    let _0x4b7410 = _0xff03e6.played || 'N/A';
    let _0x512b65 = _0xff03e6.commented || "N/A";
    let _0x1ef318 = _0xff03e6.song || "No music title available.";
    let _0x585cb0 = _0xff03e6.played || "N/A";
    let _0x33bc65 = _0xff03e6.shared || "N/A";
    let _0x1e76d8 = _0xff03e6.saved || 'N/A';
    if (_0x21dfc8) {
      _0x28df35.reply("☘️Media: video");
      let _0xb66aaf = "╭◉ *SUBZERO MD TIKTOK DL*◉\n╠ ○🌼 *Video by*: " + _0x4f07f1 + " \n╠ ○🌼 *Likes*: " + _0x4b7410 + " \n╠ ○🌼 *Comments*: " + _0x512b65 + "\n╠ ○🌼 *Played*: " + _0x585cb0 + "\n╠ ○🌼 *Shared*: " + _0x33bc65 + "\n╠ ○🌼 *Saved*: " + _0x1e76d8 + "\n╠ ○🌼 *Music*: " + _0x1ef318 + "\n╠ ○🌼 *Description*: " + _0x3081b4 + "\n╚•";
      await _0x165715.sendFile(_0x28df35.chat, _0x21dfc8, "tiktok.mp4", _0xb66aaf, _0x28df35);
      return;
    }
    if (_0x1825db && !_0x21dfc8) {
      _0x28df35.reply("☘️Media: audio");
      let _0x1a2368 = "╭◉ *SUBZERO MD TIKTOK DL*◉\n╠ ○🌼 *Audio by*: " + _0x4f07f1 + " \n╠ ○🌼 *Likes*: " + _0x4b7410 + " \n╠ ○🌼 *Comments*: " + _0x512b65 + "\n╠ ○🌼 *Played*: " + _0x585cb0 + "\n╠ ○🌼 *Shared*: " + _0x33bc65 + "\n╠ ○🌼 *Saved*: " + _0x1e76d8 + "\n╠ ○🌼 *Music*: " + _0x1ef318 + " \n╠ ○🌼 *Description*: " + _0x3081b4 + "\n╚•";
      await _0x165715.sendFile(_0x28df35.chat, _0x1825db, "audio.mp3", _0x1a2368, _0x28df35);
    }
    if (_0x1825db && _0x2cec3d) {
      _0x28df35.reply("☘️Media: audio + image");
      let _0xeff937 = "╭◉ *SUBZERO MD TIKTOK DL*◉\n╠ ○🌼 *Audio by*: " + _0x4f07f1 + " \n╠ ○🌼 *Likes*: " + _0x4b7410 + " \n╠ ○🌼 *Comments*: " + _0x512b65 + " \n╠ ○🌼 *Played*: " + _0x585cb0 + "\n╠ ○🌼 *Shared*: " + _0x33bc65 + "\n╠ ○🌼 *Saved*: " + _0x1e76d8 + "\n╠ ○🌼 *Music*: " + _0x1ef318 + "  \n╠ ○🌼 *Description*: " + _0x3081b4 + "\n╚•";
      await _0x165715.sendFile(_0x28df35.chat, _0x1825db, "audio.mp3", _0xeff937, _0x28df35);
      await _0x165715.sendFile(_0x28df35.chat, _0x2cec3d, 'thumbnail.jpg', "Thumbnail for " + _0x4f07f1, _0x28df35);
    }
    if (_0x2cec3d && !_0x1825db && !_0x21dfc8) {
      _0x28df35.reply("☘️Media: image");
      await _0x165715.sendFile(_0x28df35.chat, _0x2cec3d, 'thumbnail.jpg', "Thumbnail for " + _0x4f07f1, _0x28df35);
    }
  } catch (_0x56d7eb) {
    console.error(_0x56d7eb);
    _0x28df35.reply("❎ An error occurred: " + _0x56d7eb.message);
  }
};
handler.help = ["tiktok3 <link tiktok>"];
handler.tags = ["downloader"];
handler.command = ["tt3", "ttdl3", "tiktok3", 'ttvideo3', 'ttvid3'];
export default handler;
