// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import 'fs';
import 'path';
import _0x46171c from 'axios';
import _0x32d65b from 'moment-timezone';
import 'crypto';
let handler = async function (_0x5b1b49, {
  conn: _0x5331ab,
  __dirname: _0x303ba0,
  args: _0x896265
}) {
  let _0x63d16 = process.uptime() * 1000;
  let _0x3d2ce5 = clockString(_0x63d16);
  let _0x5c5cba = _0x5b1b49.quoted ? _0x5b1b49.quoted.sender : _0x5b1b49.mentionedJid && _0x5b1b49.mentionedJid[0] ? _0x5b1b49.mentionedJid[0] : _0x5b1b49.fromMe ? _0x5331ab.user.jid : _0x5b1b49.sender;
  if (!(_0x5c5cba in global.db.data.users)) {
    throw "✳️ The user is not found in my database";
  }
  let _0x516212 = _0x5331ab.getName(_0x5c5cba);
  let _0x1d182b = ucapan();
  try {
    await _0x5b1b49.react('⏳');
    const [, _0x3e6fee, _0x1894f9] = "https://github.com/mrfrank-ofc/SUBZERO-V2".match(/github\.com\/([^/]+)\/([^/]+)/);
    const _0x1810f5 = await _0x46171c.get("https://api.github.com/repos/" + _0x3e6fee + '/' + _0x1894f9);
    if (_0x1810f5.status === 200) {
      const _0x1886bd = _0x1810f5.data;
      let _0x44bc77 = "𝗛𝗘𝗬!👋🏻 *" + _0x516212 + "*                         " + _0x1d182b + "\n\n╭◉🪀 *`𝗦𝗨𝗕𝗭𝗘𝗥𝗢-𝗕𝗢𝗧`*\n💻𝗡𝗔𝗠𝗘: ```" + _0x1886bd.name + "```\n⭐𝗦𝗧𝗔𝗥𝗦: ```" + _0x1886bd.stargazers_count + "```\n💌𝗙𝗢𝗥𝗞𝗦: ```" + _0x1886bd.forks_count + "```\n⏰𝗨𝗣𝗧𝗜𝗠𝗘: ```" + _0x3d2ce5 + "```\n╚•\n 𝗗𝗘𝗩: https://wa.me/263719637303\n╚•\n 𝗨𝗥𝗟: " + _0x1886bd.html_url + "\n╚•\n 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡: ```" + _0x1886bd.description + "```\n╚•";
      await _0x5b1b49.react('✅');
      const _0x437000 = {
        newsletterJid: "120363199257221654@newsletter",
        newsletterName: global.author,
        serverMessageId: -1
      };
      await _0x5331ab.sendFile(_0x5b1b49.chat, "./lib/source/hm.jpg", "Menu.png", _0x44bc77, _0x5b1b49, null, {
        'quoted': _0x5b1b49,
        'contextInfo': {
          'mentionedJid': [_0x5b1b49.sender],
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': _0x437000,
          'forwardingScore': 0x3e7
        }
      });
    }
  } catch (_0xa43461) {
    console.error(_0xa43461);
  }
};
handler.help = ["script"];
handler.tags = ["main"];
handler.command = ['sc', "repo", "script", "git", "github"];
export default handler;
function clockString(_0xc6fdc4) {
  let _0x32e553 = isNaN(_0xc6fdc4) ? '--' : Math.floor(_0xc6fdc4 / 86400000);
  let _0x19658f = isNaN(_0xc6fdc4) ? '--' : Math.floor(_0xc6fdc4 / 3600000) % 24;
  let _0x13f71b = isNaN(_0xc6fdc4) ? '--' : Math.floor(_0xc6fdc4 / 60000) % 60;
  let _0x58be07 = isNaN(_0xc6fdc4) ? '--' : Math.floor(_0xc6fdc4 / 1000) % 60;
  return [_0x32e553, "d ", _0x19658f, "h ", _0x13f71b, "m ", _0x58be07, "s "].map(_0x2e67b0 => _0x2e67b0.toString().padStart(2, 0)).join('');
}
function ucapan() {
  const _0x31c003 = _0x32d65b.tz('Asia/Karachi').format('HH');
  let _0x2e0db1 = "happy early in the day☀️";
  if (_0x31c003 >= 4) {
    _0x2e0db1 = "𝙂𝙊𝙊𝘿 𝙈𝙊𝙍𝙉𝙄𝙉𝙂 🌥️";
  }
  if (_0x31c003 >= 10) {
    _0x2e0db1 = "𝙂𝙊𝙊𝘿 𝙉𝙊𝙊𝙉 🌞";
  }
  if (_0x31c003 >= 15) {
    _0x2e0db1 = "𝙂𝙊𝙊𝘿 𝘼𝙁𝙏𝙀𝙍𝙉𝙊𝙊𝙉 🌇";
  }
  if (_0x31c003 >= 18) {
    _0x2e0db1 = "𝙂𝙊𝙊𝘿 𝙉𝙄𝙂𝙃𝙏 🌌";
  }
  return _0x2e0db1;
}