// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

export async function before(_0x121896, {
  conn: _0x1aa503,
  isAdmin: _0xa6e13a,
  isBotAdmin: _0x12f55a,
  isOwner: _0x4ee257,
  isROwner: _0x3d1078
}) {
  if (_0x121896.fromMe) {
    return true;
  }
  if (_0x4ee257 || _0x3d1078) {
    return false;
  }
  if (_0x121896.isGroup) {
    return false;
  }
  const _0x52c167 = global.allowed || [];
  if (_0x52c167.includes(_0x121896.sender.split('@')[0])) {
    return false;
  }
  let _0x7af18c = global.db.data.settings[this.user.jid] || {};
  if (!_0x7af18c.pmspam) {
    return true;
  }
  if (!_0x121896.text) {
    return true;
  }
  const _0x54ce3b = _0x121896.text;
  const _0xc01e73 = Date.now();
  if (!global.spamCounter) {
    global.spamCounter = {};
  }
  const _0x4d4601 = {
    'lastMessage': '',
    lastTimestamp: 0x0,
    'messages': {}
  };
  const _0x443f16 = global.spamCounter[_0x121896.sender] || _0x4d4601;
  if (_0x54ce3b === _0x443f16.lastMessage && _0xc01e73 - _0x443f16.lastTimestamp > 120000) {
    _0x443f16.lastTimestamp = _0xc01e73;
    global.spamCounter[_0x121896.sender] = _0x443f16;
    return true;
  }
  if (_0x54ce3b.length >= 1000) {
    const _0x3db406 = {
      text: '🩵'
    };
    await _0x1aa503.sendMessage(_0x121896.chat, _0x3db406);
    await this.updateBlockStatus(_0x121896.chat, "block");
    return true;
  }
  _0x443f16.messages[_0x54ce3b] = (_0x443f16.messages[_0x54ce3b] || 0) + 1;
  _0x443f16.lastMessage = _0x54ce3b;
  _0x443f16.lastTimestamp = _0xc01e73;
  global.spamCounter[_0x121896.sender] = _0x443f16;
  if (_0x443f16.messages[_0x54ce3b] >= 6) {
    const _0x315c4a = {
      text: '🩵'
    };
    await _0x1aa503.sendMessage(_0x121896.chat, _0x315c4a);
    await this.updateBlockStatus(_0x121896.chat, "block");
    delete global.spamCounter[_0x121896.sender];
    return true;
  }
  return true;
}