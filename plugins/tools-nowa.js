let handler = async (_0x5314b3, {
  conn: _0x2378cd,
  text: _0x4ff67c,
  usedPrefix: _0x283969,
  command: _0x594b59
}) => {
  let _0x57e383 = /x/g;
  if (!_0x4ff67c) {
    throw "*Input Number*";
  }
  if (!_0x4ff67c.match(_0x57e383)) {
    throw "*" + mssg.example + ": " + (_0x283969 + _0x594b59) + " " + _0x5314b3.sender.split("@")[0] + "x*";
  }
  _0x5314b3.reply("*⏳ Wait getting your numbers...*");
  let _0x10f508 = _0x4ff67c.match(_0x57e383).length;
  let _0x485b2f = Math.pow(10, _0x10f508);
  let _0x242382 = [];
  for (let _0x3b6d08 = 0; _0x3b6d08 < _0x485b2f; _0x3b6d08++) {
    let _0x29d820 = [..._0x3b6d08.toString().padStart(_0x10f508, "0")];
    let _0x50efbc = _0x4ff67c.replace(_0x57e383, () => _0x29d820.shift()) + "@s.whatsapp.net";
    if (await _0x2378cd.onWhatsApp(_0x50efbc).then(_0x26ea05 => (_0x26ea05[0] || {}).exists)) {
      let _0x45837b = await _0x2378cd.fetchStatus(_0x50efbc)["catch"](_0xdb1027 => {});
      const _0x4af041 = {
        "exists": true,
        "jid": _0x50efbc,
        ..._0x45837b
      };
      _0x242382.push(_0x4af041);
    } else {
      const _0x8b4a43 = {
        "exists": false,
        "jid": _0x50efbc
      };
      _0x242382.push(_0x8b4a43);
    }
  }
  let _0x4bb3c6 = _0x242382.filter(_0xc056ce => _0xc056ce.exists);
  let _0x1378dd = {};
  _0x4bb3c6.forEach(_0x34fa8b => {
    let _0x1acb5f = new Date(_0x34fa8b.setAt);
    let _0x2a987f = _0x1acb5f.getFullYear();
    if (!_0x1378dd[_0x2a987f]) {
      _0x1378dd[_0x2a987f] = [];
    }
    const _0x5cd69f = {
      "jid": _0x34fa8b.jid,
      "status": _0x34fa8b.status || '',
      "setAt": _0x34fa8b.setAt
    };
    _0x1378dd[_0x2a987f].push(_0x5cd69f);
  });
  let _0x1d5dbc = '';
  for (let _0x5c74ed in _0x1378dd) {
    if (_0x5c74ed >= 2009 && _0x5c74ed <= 2015) {
      _0x1d5dbc += " `⭕---" + _0x5c74ed + "`---⭕ \n\n";
      _0x1d5dbc += _0x1378dd[_0x5c74ed].map((_0x3abcbd, _0x4cf216) => "*" + (_0x4cf216 + 1) + ". No:* wa.me/" + _0x3abcbd.jid.split("@")[0] + "\n*Bio:* " + _0x3abcbd.status + "\n*Date:* " + formatDate(_0x3abcbd.setAt)).join("\n\n");
      _0x1d5dbc += "\n\n*Total Registered in " + _0x5c74ed + ":* *" + _0x1378dd[_0x5c74ed].length + " ✅*\n\n";
    }
  }
  if (!_0x1d5dbc) {
    _0x1d5dbc += "*No users found in the specified date range.*\n\n";
  } else {
    _0x1d5dbc += "╔═════ஜ۩۞۩ஜ═════╗\n     ⛲ᴘʀɪɴᴄᴇ ᴍᴅ ⛲\n╚═════ஜ۩۞۩ஜ═════╝ ";
  }
  _0x5314b3.reply(_0x1d5dbc);
};
handler.help = ["nowa <number>"];
handler.tags = ["main"];
handler.command = /^nowa$/i;
handler.owner = true;
export default handler;
function formatDate(_0x57275d, _0x5cf191 = "id") {
  let _0x4d8b0c = new Date(_0x57275d);
  const _0x26dbd4 = {
    "timeZone": "Asia/Karachi"
  };
  return _0x4d8b0c.toLocaleDateString(_0x5cf191, _0x26dbd4);
}