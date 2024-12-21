// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

const handler = async (_0x3d8341, {
  conn: _0x900e9f,
  args: _0xaf296f,
  groupMetadata: _0x3e6cea,
  participants: _0x3ae11e,
  usedPrefix: _0x1de2d8,
  command: _0x248953,
  isBotAdmin: _0x402bcb,
  isSuperAdmin: _0x217c08
}) => {
  if (!_0xaf296f[0]) {
    return _0x3d8341.reply("Please specify the number prefix to list or kick. Use " + (_0x1de2d8 + _0x248953) + " 92*");
  }
  if (isNaN(_0xaf296f[0])) {
    return _0x3d8341.reply("Invalid input. Use numbers only. Example: " + (_0x1de2d8 + _0x248953) + " 92*");
  }
  const _0x39c14d = _0xaf296f[0].replace(/[+]/g, '');
  const _0x1aa00c = _0x3ae11e.map(_0x1b0b7e => _0x1b0b7e.id).filter(_0x216fe5 => _0x216fe5 !== _0x900e9f.user.jid && _0x216fe5.startsWith(_0x39c14d || _0x39c14d));
  const _0xa378fc = global.db.data.settings[_0x900e9f.user.jid] || {};
  if (_0x1aa00c == '') {
    return _0x3d8341.reply("No participants found with the prefix +" + _0x39c14d + '*');
  }
  const _0x1a9b46 = _0x1aa00c.map(_0x343d0d => "⭔ @" + _0x343d0d.replace(/@.+/, ''));
  const _0x5bbec3 = _0x58f3ed => new Promise(_0x1fcb9c => setTimeout(_0x1fcb9c, _0x58f3ed));
  switch (_0x248953) {
    case "listanum":
    case "listnum":
      const _0x286e0c = {
        mentions: _0x1aa00c
      };
      _0x900e9f.reply(_0x3d8341.chat, "List of numbers starting with +" + _0x39c14d + ":\n\n" + _0x1a9b46.join`\n`, _0x3d8341, _0x286e0c);
      break;
    case "kicknum":
      if (!_0xa378fc.restrict) {
        return _0x3d8341.reply("The bot restrict feature is disabled. Enable it using (#enable restrict) to use this command.");
      }
      if (!_0x402bcb) {
        return _0x3d8341.reply("The bot must be an admin to remove participants.");
      }
      _0x900e9f.reply(_0x3d8341.chat, "Kicking users with the prefix +" + _0x39c14d + ". Please wait...", _0x3d8341);
      const _0x1872b0 = _0x3d8341.chat.split`-`[0] + '@s.whatsapp.net';
      const _0x132d8b = _0x3ae11e.map(_0x3be3c9 => _0x3be3c9.id).filter(_0x5ca3c7 => _0x5ca3c7 !== _0x900e9f.user.jid && _0x5ca3c7.startsWith(_0x39c14d || _0x39c14d));
      for (const _0x323724 of _0x132d8b) {
        const _0x2d1fa2 = '@' + _0x323724.split('@')[0] + " could not be removed.";
        if (_0x323724 !== _0x1872b0 && _0x323724 !== global.conn.user.jid && _0x323724 !== global.owner + "@s.whatsapp.net" && _0x323724.startsWith(_0x39c14d || _0x39c14d) && _0x323724 !== _0x217c08 && _0x402bcb && _0xa378fc.restrict) {
          await _0x5bbec3(2000);
          const _0x386ac5 = await _0x900e9f.groupParticipantsUpdate(_0x3d8341.chat, [_0x323724], "remove");
          if (_0x386ac5[0].status === "404") {
            _0x3d8341.reply(_0x2d1fa2, _0x3d8341.chat, {
              'mentions': _0x900e9f.parseMention(_0x2d1fa2)
            });
          }
          await _0x5bbec3(10000);
        } else {
          return _0x3d8341.reply("Unable to remove the participant. Ensure the bot has the required permissions.");
        }
      }
      break;
  }
};
handler.help = ['kicknum', 'listnum'];
handler.tags = ["group"];
handler.command = /^(listanum|kicknum|listnum)$/i;
handler.group = handler.botAdmin = handler.admin = true;
handler.fail = null;
export default handler;