// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import _0x363460 from 'yt-search';
import { youtube } from 'btch-downloader';
const handler = async (_0xabf385, {
  conn: _0x2ace27,
  text: _0x523a57,
  usedPrefix: _0x12b87f,
  command: _0x49184f
}) => {
  if (!_0x523a57) {
    return _0xabf385.reply("🍀 Please provide a query.\nExample: *" + (_0x12b87f + _0x49184f) + " Naat Shareef*");
  }
  await _0xabf385.reply(wait);
  try {
    const _0x48de81 = await _0x363460(_0x523a57);
    const _0x3f58c5 = _0x48de81.videos[0];
    if (!_0x3f58c5) {
      return _0xabf385.reply("❌ No results found! Please try again with a different query.");
    }
    if (_0x3f58c5.seconds >= 3600) {
      return _0xabf385.reply("❌ Video duration exceeds 1 hour. Please choose a shorter video!");
    }
    let _0x1d9fd7;
    try {
      _0x1d9fd7 = await youtube(_0x3f58c5.url);
    } catch (_0x3ac8f7) {
      return _0xabf385.reply("⚠️ Failed to fetch audio. Please try again later.");
    }
    const _0x2e9b46 = {
      url: _0x1d9fd7.mp3
    };
    const _0x5288e1 = {
      audio: _0x2e9b46,
      mimetype: "audio/mpeg",
      contextInfo: {}
    };
    _0x5288e1.contextInfo.mentionedJid = [_0xabf385.sender];
    _0x5288e1.contextInfo.isForwarded = true;
    _0x5288e1.contextInfo.forwardedNewsletterMessageInfo = {};
    _0x5288e1.contextInfo.forwardingScore = 0x3e7;
    _0x5288e1.contextInfo.externalAdReply = {};
    _0x5288e1.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = '120363199257221654@newsletter';
    _0x5288e1.contextInfo.forwardedNewsletterMessageInfo.newsletterName = global.author;
    _0x5288e1.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = -1;
    _0x5288e1.contextInfo.externalAdReply.title = _0x3f58c5.title;
    _0x5288e1.contextInfo.externalAdReply.body = "PRINCE-BOT";
    _0x5288e1.contextInfo.externalAdReply.thumbnailUrl = _0x3f58c5.image;
    _0x5288e1.contextInfo.externalAdReply.sourceUrl = _0x3f58c5.url;
    _0x5288e1.contextInfo.externalAdReply.mediaType = 0x1;
    _0x5288e1.contextInfo.externalAdReply.showAdAttribution = true;
    _0x5288e1.contextInfo.externalAdReply.renderLargerThumbnail = true;
    await _0x2ace27.sendMessage(_0xabf385.chat, _0x5288e1, {
      'quoted': _0xabf385
    });
  } catch (_0x209175) {
    _0xabf385.reply("❌ An error occurred: " + _0x209175.message);
  }
};
handler.help = ["playvoice"];
handler.tags = ["downloader"];
handler.command = /^playvoice$/i;
export default handler;