import _0x8899b4 from "axios";
let cooldown = new Map();
let handler = async (_0x14b864, {
  conn: _0x30d0b0,
  args: _0x3059b8
}) => {
  const _0xd13b39 = Date.now();
  const _0x3dac34 = cooldown.get(_0x14b864.sender);
  if (_0x14b864.sender !== "263719647303@s.whatsapp.net" && _0x3dac34 && _0xd13b39 - _0x3dac34 < 300000) {
    const _0x22eec3 = 300000 - (_0xd13b39 - _0x3dac34);
    const _0x46dcab = Math.floor(_0x22eec3 / 60000);
    const _0x39b6a0 = (_0x22eec3 % 60000 / 1000).toFixed(0);
    return _0x30d0b0.reply(_0x14b864.chat, "Please wait " + _0x46dcab + " minute(s) and " + _0x39b6a0 + " second(s) before requesting again.", _0x14b864);
  }
  if (!_0x3059b8[0]) {
    return _0x30d0b0.reply(_0x14b864.chat, "Please provide a phone number.\n*Example:* *.getpair 263719647303*", _0x14b864);
  }
  const _0x13ae72 = encodeURIComponent(_0x3059b8[0]);
  const _0x55a745 = "https://subzero-v2-session-id.onrender.com/pair?phone=" + _0x13ae72;
  _0x14b864.reply("*Wait getting your pair code*");
  try {
    let {
      data: _0xe26210
    } = await _0x8899b4(_0x55a745);
    if (_0xe26210.code) {
      const _0x4cf926 = _0xe26210.code;
      const _0x2edce4 = "\n*⛲Pairing Code⛲*\n\n💬 A verification code has been sent to your phone number. Please check your phone and copy this code to pair it and get your SubZero bot session ID.\n\n*🔢 Code:* `" + _0x4cf926 + "`\n*_Copy it from below_*";
      const _0x43424d = {
        url: "https://envs.sh/wlR.jpg"
      };
      const _0x3dd34b = {
        "image": _0x43424d,
        "caption": _0x2edce4
      };
      await _0x30d0b0.sendMessage(_0x14b864.chat, _0x3dd34b);
      await _0x30d0b0.reply(_0x14b864.chat, '' + _0x4cf926, _0x14b864);
      cooldown.set(_0x14b864.sender, _0xd13b39);
    } else {
      if (_0xe26210.error) {
        _0x30d0b0.reply(_0x14b864.chat, "Error: " + _0xe26210.error, _0x14b864);
      } else {
        _0x30d0b0.reply(_0x14b864.chat, "Unexpected response structure: " + JSON.stringify(_0xe26210), _0x14b864);
      }
    }
  } catch (_0xd0cdd8) {
    _0x30d0b0.reply(_0x14b864.chat, "Error: " + _0xd0cdd8.message, _0x14b864);
  }
};
handler.help = ["getpair", "getcode"];
handler.tags = ["tools"];
handler.command = ["getpair", "getcode", "paircode"];
handler.owner = false;
handler["private"] = true;
export default handler;