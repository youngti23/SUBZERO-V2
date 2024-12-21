// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

const linkRegex = /https:/i;
export async function before(_0x2c1475, {
  conn: _0x41fd9f,
  isAdmin: _0x435e15,
  isBotAdmin: _0xf2e2e,
  text: _0x44f4f3
}) {
  if (_0x2c1475.isBaileys && _0x2c1475.fromMe) {
    return true;
  }
  if (!_0x2c1475.isGroup) {
    return false;
  }
  const _0x36519e = global.db.data.chats[_0x2c1475.chat];
  const _0x5e1976 = _0x2c1475.key.participant;
  const _0x2d9180 = _0x2c1475.key.id;
  const _0x27ffe0 = '@' + _0x2c1475.sender.split`@`[0];
  const _0x5aa4ce = linkRegex.exec(_0x2c1475.text);
  if (_0x36519e.antiLink2 && _0x5aa4ce && !_0x435e15) {
    if (_0xf2e2e) {
      const _0x4de559 = "https://chat.whatsapp.com/" + (await this.groupInviteCode(_0x2c1475.chat));
      if (_0x2c1475.text.includes(_0x4de559)) {
        return true;
      }
      if (_0x2c1475.text.includes("https://www.youtube.com/")) {
        return true;
      }
      if (_0x2c1475.text.includes("https://youtu.be/")) {
        return true;
      }
      await this.sendMessage(_0x2c1475.chat, {
        'text': "*⭕ʀᴜʟᴇs ᴠɪᴏʟᴀᴛɪᴏɴ ʟɪɴᴋ ᴅᴇᴛᴇᴄᴛᴇᴅ ʙʏᴇ ʙʏᴇ 👋🏻*, " + _0x27ffe0 + '.',
        'mentions': [_0x2c1475.sender]
      }, {
        'quoted': _0x2c1475
      });
      await _0x41fd9f.sendMessage(_0x2c1475.chat, {
        'delete': {
          'remoteJid': _0x2c1475.chat,
          'fromMe': false,
          'id': _0x2d9180,
          'participant': _0x5e1976
        }
      });
      const _0x2e97aa = await _0x41fd9f.groupParticipantsUpdate(_0x2c1475.chat, [_0x2c1475.sender], "remove");
      if (_0x2e97aa[0]?.["status"] === '404') {
        return;
      }
    } else {
      return _0x2c1475.reply("I don't have admin rights to enforce the anti-link rule.");
    }
  }
  return true;
}