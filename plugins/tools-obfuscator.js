// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import _0x4a6159 from 'javascript-obfuscator';
let handler = async (_0x17462c, {
  conn: _0x134e0f,
  text: _0x56a602
}) => {
  if (!_0x56a602 && !_0x17462c.quoted) {
    return _0x17462c.reply("*ENTER THE CODE YOU WANT TO OBFUSCATE*");
  }
  let _0x5a4c12 = _0x56a602 || _0x17462c.quoted?.["text"];
  function _0x587ead(_0x20e889) {
    const _0x293409 = {
      compact: true,
      'controlFlowFlattening': true,
      controlFlowFlatteningThreshold: 0.75,
      'deadCodeInjection': true,
      stringArray: true,
      'stringArrayThreshold': 0.75,
      'transformObjectKeys': true,
      simplify: false,
      numbersToExpressions: true
    };
    return _0x4a6159.obfuscate(_0x20e889, _0x293409).getObfuscatedCode();
  }
  let _0xf6af61 = await _0x587ead(_0x5a4c12);
  const _0x4bf868 = {
    text: _0xf6af61
  };
  _0x134e0f.sendMessage(_0x17462c.chat, _0x4bf868, {
    'quoted': _0x17462c
  });
};
handler.command = /^(obfuscate|obfuscator|obs|ob)$/i;
export default handler;