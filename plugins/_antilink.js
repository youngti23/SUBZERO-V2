// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i;
export async function before(_0x134060, {
  conn: _0x4a0cee,
  isAdmin: _0x27754e,
  isBotAdmin: _0x4d25d5
}) {
  if (_0x134060.fromMe) {
    return true;
  }
  if (!_0x134060.isGroup) {
    return false;
  }
  const _0xc30abe = process.env.ANTI_LINK === "true";
  const _0x49474e = global.db.data.chats[_0x134060.chat] || {};
  const _0x3de67d = linkRegex.exec(_0x134060.text);
  if (_0x49474e.isBanned) {
    return true;
  }
  if ((_0x49474e.antiLink || _0xc30abe) && _0x3de67d && !_0x27754e) {
    try {
      if (_0x4d25d5) {
        const _0x442651 = 'https://chat.whatsapp.com/' + (await this.groupInviteCode(_0x134060.chat));
        if (_0x134060.text.includes(_0x442651)) {
          return true;
        }
      }
      await _0x4a0cee.reply(_0x134060.chat, "⭕ᴀɴᴛɪʟɪɴᴋ ᴅᴇᴛᴇᴄᴛᴇᴅ ʙʏ ʙʏᴇ👋🏻 *@" + _0x134060.sender.split('@')[0] + "*  " + (_0x4d25d5 ? '' : "\n\nɴᴇᴇᴅ ᴀᴅᴍɪɴɪsᴛʀᴀᴛɪᴏɴ ᴛᴏ ᴋɪᴄᴋ ᴛʜɪs sʜɪᴛ🤬"), null, {
        'mentions': [_0x134060.sender]
      });
      await _0x4a0cee.sendMessage(_0x134060.chat, {
        'delete': _0x134060.key
      });
      if (_0x4d25d5 && (_0x49474e.antiLink || _0xc30abe)) {
        await _0x4a0cee.groupParticipantsUpdate(_0x134060.chat, [_0x134060.sender], "remove");
      }
    } catch (_0x16e452) {
      console.error("Error handling message:", _0x16e452);
    }
  }
  return true;
}