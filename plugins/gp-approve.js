// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

let handler = async (_0x5efdea, {
  conn: _0xca521e,
  args: _0x42d8e8,
  usedPrefix: _0x66cbcd,
  command: _0x1ed7a8,
  isBotAdmin: _0x57d9b0
}) => {
  if (!_0x57d9b0) {
    return _0x5efdea.reply("The bot must be an admin to approve join requests.");
  }
  const _0x35bf46 = async _0x1f0733 => {
    try {
      const _0x38eee0 = await _0xca521e.groupRequestParticipantsUpdate(_0x5efdea.chat, [_0x1f0733], 'approve');
      console.log("Approval Response:", _0x38eee0);
      return '*' + _0x1f0733.replace("@s.whatsapp.net", '') + "* approved.";
    } catch (_0x34f953) {
      console.error("Error approving " + _0x1f0733 + ':', _0x34f953);
      return "Failed to approve *" + _0x1f0733.replace("@s.whatsapp.net", '') + '*.';
    }
  };
  const _0x724de5 = _0x19235a => new Promise(_0x527572 => setTimeout(_0x527572, _0x19235a));
  if (_0x1ed7a8 === "approve") {
    if (!_0x42d8e8[0]) {
      return _0x5efdea.reply("Please specify the country code prefix to approve. Example: " + (_0x66cbcd + _0x1ed7a8) + " 92");
    }
    if (isNaN(_0x42d8e8[0])) {
      return _0x5efdea.reply("Invalid input. Use numbers only.");
    }
    const _0x1277bf = _0x42d8e8[0].replace(/[+]/g, '');
    const _0x53c4d8 = await _0xca521e.groupRequestParticipantsList(_0x5efdea.chat);
    if (!_0x53c4d8 || _0x53c4d8.length === 0) {
      return _0x5efdea.reply("No pending join requests found.");
    }
    const _0x12ed1a = _0x53c4d8.map(_0x66dd2 => _0x66dd2.jid || _0x66dd2.user).filter(_0x58be9f => _0x58be9f.startsWith(_0x1277bf));
    if (_0x12ed1a.length === 0) {
      return _0x5efdea.reply("No pending join requests found with the prefix +" + _0x1277bf + '.');
    }
    let _0x398eaa = [];
    for (let _0x172c48 = 0; _0x172c48 < _0x12ed1a.length; _0x172c48++) {
      const _0x3fa0a5 = await _0x35bf46(_0x12ed1a[_0x172c48]);
      _0x398eaa.push(_0x3fa0a5);
      if (_0x172c48 < _0x12ed1a.length - 1) {
        await _0x724de5(3000);
      }
    }
    _0xca521e.reply(_0x5efdea.chat, "Join request approval results:\n\n" + _0x398eaa.join("\n"), _0x5efdea);
  }
  if (_0x1ed7a8 === "approveall") {
    const _0x404638 = await _0xca521e.groupRequestParticipantsList(_0x5efdea.chat);
    if (!_0x404638 || _0x404638.length === 0) {
      return _0x5efdea.reply("No pending join requests found.");
    }
    let _0x106ab9 = [];
    for (let _0x4122ad = 0; _0x4122ad < _0x404638.length; _0x4122ad++) {
      const _0xf29004 = _0x404638[_0x4122ad].jid || _0x404638[_0x4122ad].user;
      const _0x24235c = await _0x35bf46(_0xf29004);
      _0x106ab9.push(_0x24235c);
      if (_0x4122ad < _0x404638.length - 1) {
        await _0x724de5(3000);
      }
    }
    _0xca521e.reply(_0x5efdea.chat, "Join request approval results:\n\n" + _0x106ab9.join("\n"), _0x5efdea);
  }
};
handler.help = ["approve", "approveall"];
handler.tags = ["group"];
handler.command = /^(approve|approveall)$/i;
handler.group = handler.botAdmin = true;
handler.fail = null;
export default handler;