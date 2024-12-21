// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

const linkRegex = /https?:\/\/[^\s]+/gi;
export async function before(_0x99e49c, {
  conn: _0x520664,
  isAdmin: _0x448dda,
  isBotAdmin: _0x885643
}) {
  if (_0x99e49c.isBaileys && _0x99e49c.fromMe) {
    return true;
  }
  if (!_0x99e49c.isGroup) {
    return false;
  }
  const _0x88759b = global.db.data.chats[_0x99e49c.chat];
  const _0x3f52a1 = _0x99e49c.key.participant;
  const _0x44e154 = _0x99e49c.key.id;
  const _0x30de38 = linkRegex.test(_0x99e49c.text);
  if (_0x88759b.antdeletelinks && _0x30de38 && !_0x448dda) {
    if (_0x885643) {
      await _0x520664.sendMessage(_0x99e49c.chat, {
        'delete': {
          'remoteJid': _0x99e49c.chat,
          'fromMe': false,
          'id': _0x44e154,
          'participant': _0x3f52a1
        }
      });
    } else {
      return _0x99e49c.reply("I don't have admin rights to delete links.");
    }
  }
  return true;
}