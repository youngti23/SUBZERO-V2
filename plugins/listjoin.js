// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

let handler = async (_0x2a6081, {
  conn: _0x230890,
  text: _0x13e887,
  usedPrefix: _0x53d68e,
  command: _0x278e98
}) => {
  try {
    const _0x279900 = _0x2a6081.chat;
    const _0x12d6ea = await _0x230890.groupMetadata(_0x279900);
    const _0x4df205 = _0x12d6ea.subject;
    const _0x1ac8b5 = await _0x230890.groupRequestParticipantsList(_0x279900);
    console.log("Raw Response:", _0x1ac8b5);
    if (!_0x1ac8b5 || _0x1ac8b5.length === 0) {
      _0x230890.reply(_0x2a6081.chat, "*No pending join requests found in group " + _0x4df205 + '.*', _0x2a6081);
    } else {
      const _0x226bf4 = {
        '92': "Pakistan 🇵🇰",
        "234": "Nigeria 🇳🇬",
        "254": "Kenya 🇰🇪",
        '1': "USA 🇺🇸",
        '44': "UK 🇬🇧",
        "212": "Morocco 🇲🇦",
        '233': "Ghana 🇬🇭",
        "255": "Tanzania 🇹🇿",
        "242": "Congo 🇨🇬",
        "276": "South Africa 🇿🇦",
        '91': "India 🇮🇳",
        '62': "Indonesia 🇮🇩",
        "880": "Bangladesh 🇧🇩",
        "201": "Egypt 🇪🇬",
        "252": "Somalia 🇸🇴",
        "263": "Zimbabwe 🇿🇼",
        "277": "South Africa 🇿🇦",
        "947": "Sri Lanka 🇱🇰",
        "966": "Saudi Arabia 🇸🇦",
        "971": "UAE 🇦🇪",
        "393": "San Marino 🇸🇲",
        '358': "Finland 🇫🇮"
      };
      let _0x511138 = {};
      _0x1ac8b5.forEach((_0x41d0c7, _0xc681d1) => {
        let _0x3bf575 = _0x41d0c7.jid || _0x41d0c7.user;
        let _0x2c1ea2 = _0x3bf575.replace("@s.whatsapp.net", '');
        let _0x4c755a = _0x2c1ea2.substring(0, 2);
        if (_0x2c1ea2.startsWith("923")) {
          _0x4c755a = '92';
        }
        if (_0x2c1ea2.startsWith("234")) {
          _0x4c755a = "234";
        }
        if (_0x2c1ea2.startsWith("254")) {
          _0x4c755a = "254";
        }
        if (_0x2c1ea2.startsWith('1')) {
          _0x4c755a = '1';
        }
        if (_0x2c1ea2.startsWith('44')) {
          _0x4c755a = '44';
        }
        if (_0x2c1ea2.startsWith('212')) {
          _0x4c755a = "212";
        }
        if (_0x2c1ea2.startsWith("233")) {
          _0x4c755a = "233";
        }
        if (_0x2c1ea2.startsWith("255")) {
          _0x4c755a = "255";
        }
        if (_0x2c1ea2.startsWith("242")) {
          _0x4c755a = "242";
        }
        if (_0x2c1ea2.startsWith("276")) {
          _0x4c755a = '276';
        }
        if (_0x2c1ea2.startsWith('91')) {
          _0x4c755a = '91';
        }
        if (_0x2c1ea2.startsWith('62')) {
          _0x4c755a = '62';
        }
        if (_0x2c1ea2.startsWith('880')) {
          _0x4c755a = '880';
        }
        if (_0x2c1ea2.startsWith("201")) {
          _0x4c755a = "201";
        }
        if (_0x2c1ea2.startsWith('252')) {
          _0x4c755a = "252";
        }
        if (_0x2c1ea2.startsWith("263")) {
          _0x4c755a = "263";
        }
        if (_0x2c1ea2.startsWith("277")) {
          _0x4c755a = "277";
        }
        if (_0x2c1ea2.startsWith('947')) {
          _0x4c755a = '947';
        }
        if (_0x2c1ea2.startsWith("966")) {
          _0x4c755a = "966";
        }
        if (_0x2c1ea2.startsWith("971")) {
          _0x4c755a = "971";
        }
        if (_0x2c1ea2.startsWith("393")) {
          _0x4c755a = "393";
        }
        if (_0x2c1ea2.startsWith("358")) {
          _0x4c755a = '358';
        }
        if (!_0x511138[_0x4c755a]) {
          _0x511138[_0x4c755a] = [];
        }
        _0x511138[_0x4c755a].push('*' + (_0xc681d1 + 1) + ".* " + _0x2c1ea2);
      });
      let _0x2c8ce1 = "*Total Pending Join Requests for Group: " + _0x4df205 + ": " + _0x1ac8b5.length + "*\n";
      if (_0x511138['92']) {
        _0x2c8ce1 += "\n*Pakistan 🇵🇰:*\n";
        _0x2c8ce1 += _0x511138['92'].join("\n");
        delete _0x511138['92'];
      }
      for (let _0x948087 in _0x511138) {
        _0x2c8ce1 += "\n*" + (_0x226bf4[_0x948087] || "Others 🌍") + ":*\n";
        _0x2c8ce1 += _0x511138[_0x948087].join("\n");
      }
      _0x230890.reply(_0x2a6081.chat, _0x2c8ce1, _0x2a6081);
    }
  } catch (_0x1afe05) {
    console.error("Error fetching group participants:", _0x1afe05);
    _0x230890.reply(_0x2a6081.chat, "*Error:* Could not fetch the list of pending join requests. Please try again later.", _0x2a6081);
  }
};
handler.help = ["listjoin"];
handler.tags = ['group'];
handler.command = /^(listjoin|joinlist)$/i;
export default handler;