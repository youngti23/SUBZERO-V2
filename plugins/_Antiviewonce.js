// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import { downloadContentFromMessage } from '@whiskeysockets/baileys';
let handler = _0x53d375 => _0x53d375;
handler.before = async function (_0x43adea, {
  conn: _0x522383,
  isAdmin: _0xe3dc8a,
  isBotAdmin: _0x10f2c6,
  isOwner: _0x3662f8,
  isROwner: _0xb9e593
}) {
  let _0x14bc83;
  let _0x6b8ef1;
  let _0xf5690a;
  let _0x29d28d = global.db.data.settings[this.user.jid] || {};
  if (_0x29d28d.viewonce && !_0x3662f8 && !_0xb9e593) {
    if (_0x43adea.mtype === "viewOnceMessageV2" || _0x43adea.mtype === "viewOnceMessageV2Extension") {
      _0x6b8ef1 = _0x43adea.mtype === "viewOnceMessageV2" ? _0x43adea.message.viewOnceMessageV2.message : _0x43adea.message.viewOnceMessageV2Extension.message;
      _0xf5690a = Object.keys(_0x6b8ef1)[0x0];
      if (_0xf5690a === "imageMessage" || _0xf5690a === "videoMessage") {
        _0x14bc83 = await downloadContentFromMessage(_0x6b8ef1[_0xf5690a], _0xf5690a === "imageMessage" ? 'image' : "video");
      } else {
        if (_0xf5690a === "audioMessage") {
          _0x14bc83 = await downloadContentFromMessage(_0x6b8ef1[_0xf5690a], "audio");
        } else {
          return;
        }
      }
      let _0x259ba4 = Buffer.from([]);
      for await (const _0x1b3816 of _0x14bc83) {
        _0x259ba4 = Buffer.concat([_0x259ba4, _0x1b3816]);
      }
      const _0x512cc1 = formatFileSize(_0x6b8ef1[_0xf5690a].fileLength);
      const _0x46e275 = ("\n*🌠PRINCE MD ANTI VIEW ONCE 🌠*\n*Type:* " + (_0xf5690a === 'imageMessage' ? "Image 📸" : _0xf5690a === "videoMessage" ? "Video 📹" : "Voice Message 🎙️") + "\n*Size:* `" + _0x512cc1 + "`\n*User:* *@" + _0x43adea.sender.split('@')[0x0] + "*\n" + (_0x6b8ef1[_0xf5690a].caption ? "*Caption:* " + _0x6b8ef1[_0xf5690a].caption : '') + "\n").trim();
      if (_0xf5690a === 'imageMessage' || _0xf5690a === "videoMessage") {
        return await _0x522383.sendFile(_0x522383.user.id, _0x259ba4, _0xf5690a === 'imageMessage' ? "error.jpg" : 'error.mp4', _0x46e275, _0x43adea, false, {
          'mentions': [_0x43adea.sender]
        });
      }
      if (_0xf5690a === "audioMessage") {
        await _0x522383.reply(_0x522383.user.id, _0x46e275, _0x43adea, {
          'mentions': [_0x43adea.sender]
        });
        await _0x522383.sendMessage(_0x522383.user.id, {
          'audio': _0x259ba4,
          'fileName': "error.mp3",
          'mimetype': "audio/mpeg",
          'ptt': true
        }, {
          'quoted': _0x43adea
        });
      }
    }
  }
};
export default handler;
function formatFileSize(_0x423c58) {
  const _0x338541 = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB'];
  const _0x1ca158 = parseInt(Math.floor(Math.log(_0x423c58) / Math.log(0x400)));
  return Math.round(0x64 * (_0x423c58 / Math.pow(0x400, _0x1ca158))) / 0x64 + " " + _0x338541[_0x1ca158];
}