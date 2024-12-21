// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import _0x5e8a47 from 'node-fetch';
import '@whiskeysockets/baileys';
let cooldown = new Map();
let handler = async (_0x2062af, {
  conn: _0x442ce4,
  args: _0x2e65f5
}) => {
  const _0x1cc826 = Date.now();
  const _0xa8fb25 = cooldown.get(_0x2062af.sender);
  if (_0x2062af.sender !== '923092668108@s.whatsapp.net' && _0xa8fb25 && _0x1cc826 - _0xa8fb25 < 300000) {
    const _0x5329f4 = 300000 - (_0x1cc826 - _0xa8fb25);
    const _0x46718f = Math.floor(_0x5329f4 / 60000);
    const _0x440dc0 = (_0x5329f4 % 60000 / 1000).toFixed(0);
    return _0x442ce4.reply(_0x2062af.chat, "Please wait " + _0x46718f + " minute(s) and " + _0x440dc0 + " second(s) before requesting again.", _0x2062af);
  }
  if (!_0x2e65f5[0]) {
    return _0x442ce4.reply(_0x2062af.chat, "Please provide a phone number.\n*Example:* *.getpair 263719647303*", _0x2062af);
  }
  const _0xc4e686 = encodeURIComponent(_0x2e65f5[0]);
  const _0x14ca6d = "https://short-pair-for-heorku.onrender.com/pair?phone=" + _0xc4e686;
  _0x2062af.reply("*Wait getting your pair code*");
  try {
    const _0x5a843b = await _0x5e8a47(_0x14ca6d);
    if (!_0x5a843b.ok) {
      const _0x11dcfc = await _0x5a843b.text();
      throw new Error("Network response was not ok: " + _0x5a843b.statusText + ". Response: " + _0x11dcfc);
    }
    const _0x2b474c = await _0x5a843b.json();
    if (_0x2b474c.code) {
      const _0x595ba5 = _0x2b474c.code;
      const _0x18063e = "\n*⛲Pairing Code⛲*\n\n💬 A verification code has been sent to your phone number. Please check your phone and copy this code to pair it and get your Prince bot session ID.\n\n*🔢 Code:* `" + _0x595ba5 + "`\n*_Copy it from below_*";
      const _0x49cd1f = {
        url: "https://envs.sh/wlR.jpg"
      };
      const _0x145ebb = {
        image: _0x49cd1f,
        caption: _0x18063e
      };
      await _0x442ce4.sendMessage(_0x2062af.chat, _0x145ebb);
      await _0x442ce4.reply(_0x2062af.chat, '' + _0x595ba5, _0x2062af);
      cooldown.set(_0x2062af.sender, _0x1cc826);
    } else if (_0x2b474c.error) {
      _0x442ce4.reply(_0x2062af.chat, "Error: " + _0x2b474c.error, _0x2062af);
    } else {
      _0x442ce4.reply(_0x2062af.chat, "Unexpected response structure: " + JSON.stringify(_0x2b474c), _0x2062af);
    }
  } catch (_0x4a4794) {
    _0x442ce4.reply(_0x2062af.chat, "Error: " + _0x4a4794.message, _0x2062af);
  }
};
handler.help = ['shortpair', "shortcode"];
handler.tags = ["tools"];
handler.command = ["shortpair", "shortcode", "pair"];
handler.owner = false;
handler['private'] = true;
export default handler;