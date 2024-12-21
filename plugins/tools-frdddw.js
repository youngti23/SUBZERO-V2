import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
let handler = async (_0x216db2, {
  conn: _0x36509d,
  text: _0x2e7d08,
  usedPrefix: _0x22437b,
  command: _0x5cba44,
  args: _0x5d9abb
}) => {
  let [_0xe464f4, ..._0x46accf] = _0x5d9abb;
  const _0x1c90de = _0x46accf.join(" ");
  if (!_0xe464f4) {
    throw "Usage: " + _0x22437b + _0x5cba44 + " <targetJid1,targetJid2,...> [<text> | <media>]";
  }
  let _0x4e1ba9 = _0xe464f4.split(",").map(_0x49d033 => _0x49d033.includes("@") ? _0x49d033 : _0x49d033 + "@s.whatsapp.net");
  if (_0x4e1ba9.length > 5) {
    throw "You can only forward to a maximum of 5 targets at once.";
  }
  for (let _0x39e1fa of _0x4e1ba9) {
    if (_0x216db2.quoted) {
      try {
        const _0x1ef777 = _0x216db2.quoted.fakeObj.message;
        if (!_0x1ef777) {
          throw "No message found to forward.";
        }
        const _0x374c43 = {
          userJid: _0x36509d.user.id
        };
        const _0x11b497 = generateWAMessageFromContent(_0x39e1fa, _0x1ef777, _0x374c43);
        await _0x36509d.relayMessage(_0x39e1fa, _0x11b497.message, {
          "messageId": _0x11b497.key.id
        });
      } catch (_0x3915c6) {
        await _0x216db2.reply("Failed to forward media to " + _0x39e1fa + ": " + _0x3915c6.message);
      }
    } else {
      if (_0x1c90de) {
        const _0x5befb7 = {
          text: _0x1c90de
        };
        const _0x490c32 = {
          userJid: _0x36509d.user.id
        };
        const _0x21da4f = generateWAMessageFromContent(_0x39e1fa, _0x5befb7, _0x490c32);
        await _0x36509d.relayMessage(_0x39e1fa, _0x21da4f.message, {
          "messageId": _0x21da4f.key.id
        });
      } else {
        throw "No media or text to forward.";
      }
    }
  }
};
handler.help = ["forward <targetJid1,targetJid2,...> [<text> | <media>]"];
handler.tags = ["tools"];
handler.command = /^(forward|frd)$/i;
export default handler;