//Prince Md 
import { spawn } from "child_process";
import { format } from "util";
let handler = async (_0x2abb8c, {
  conn: _0xe58aec,
  usedPrefix: _0x4f8082,
  command: _0x696286
}) => {
  const _0x1514a1 = "ðŸ“œ Please reply to a sticker with the command *" + (_0x4f8082 + _0x696286) + "*";
  if (!_0x2abb8c.quoted) {
    throw _0x1514a1;
  }
  let _0xbbca78 = _0x2abb8c.quoted;
  if (/sticker/.test(_0xbbca78.mediaType)) {
    try {
      let _0x40378b = await _0xbbca78.download();
      if (!_0x40378b) {
        throw "Failed to download the sticker.";
      }
      let _0x5ac741 = [];
      const _0x58a4f9 = [...(global.support.gm ? ["gm"] : global.support.magick ? ["magick"] : []), "convert", "webp:-", "png:-"];
      const _0x3b444d = spawn(_0x58a4f9[0], _0x58a4f9.slice(1));
      _0x3b444d.on("error", _0x4ace03 => _0x2abb8c.reply("Error: " + format(_0x4ace03)));
      _0x3b444d.stdout.on("data", _0x373dc2 => _0x5ac741.push(_0x373dc2));
      _0x3b444d.stderr.on("data", _0xf94cdd => _0x2abb8c.reply("stderr: " + _0xf94cdd.toString()));
      let _0x4eb2b4 = global.vidcap;
      _0x3b444d.on("exit", _0x3699d3 => {
        if (_0x3699d3 === 0) {
          _0xe58aec.sendFile(_0x2abb8c.chat, Buffer.concat(_0x5ac741), "sticker.png", _0x4eb2b4, _0x2abb8c);
        } else {
          _0x2abb8c.reply("Process exited with code " + _0x3699d3);
        }
      });
      _0x3b444d.stdin.write(_0x40378b);
      _0x3b444d.stdin.end();
    } catch (_0x551163) {
      _0x2abb8c.reply("An error occurred: " + (_0x551163.message || _0x551163));
    }
  } else {
    throw "The replied message is not a sticker.";
  }
};
handler.help = ["toimg (reply)"];
handler.tags = ["sticker"];
handler.command = /^toimg$/i;
export default handler;