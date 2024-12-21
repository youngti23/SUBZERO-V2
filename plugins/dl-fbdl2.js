// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import { igdl } from 'ruhend-scraper';
const handler = async (_0x2b58ac, {
  text: _0x201c37,
  conn: _0x59378a,
  args: _0x1900bf,
  usedPrefix: _0x203099,
  command: _0x16abc4
}) => {
  if (!_0x1900bf[0x0]) {
    return _0x59378a.reply(_0x2b58ac.chat, "Enter a Facebook link", _0x2b58ac);
  }
  await _0x2b58ac.react('⏳');
  let _0x336df9;
  try {
    _0x336df9 = await igdl(_0x1900bf[0x0]);
  } catch (_0x391c42) {
    await _0x2b58ac.react('❌');
    return _0x59378a.reply(_0x2b58ac.chat, "Error fetching data. Check the link.", _0x2b58ac);
  }
  let _0x2fed83 = _0x336df9.data;
  if (!_0x2fed83 || _0x2fed83.length === 0x0) {
    await _0x2b58ac.react('❌');
    return _0x59378a.reply(_0x2b58ac.chat, "No results found.", _0x2b58ac);
  }
  let _0x59d947;
  try {
    _0x59d947 = _0x2fed83.find(_0x26c565 => _0x26c565.resolution === "720p (HD)") || _0x2fed83.find(_0x293bbe => _0x293bbe.resolution === "360p (SD)");
  } catch (_0x35baa6) {
    await _0x2b58ac.react('❌');
    return _0x59378a.reply(_0x2b58ac.chat, "Error processing the data.", _0x2b58ac);
  }
  if (!_0x59d947) {
    await _0x2b58ac.react('❌');
    return _0x59378a.reply(_0x2b58ac.chat, "No suitable resolution found.", _0x2b58ac);
  }
  let _0x45fcbc = _0x59d947.url;
  try {
    await _0x59378a.sendMessage(_0x2b58ac.chat, {
      'video': {
        'url': _0x45fcbc
      },
      'caption': null,
      'fileName': "fb.mp4",
      'mimetype': 'video/mp4'
    }, {
      'quoted': _0x2b58ac
    });
    await _0x2b58ac.react('✅');
  } catch (_0x307e70) {
    await _0x2b58ac.react('❌');
    return _0x59378a.reply(_0x2b58ac.chat, "Error sending the video.", _0x2b58ac);
  }
};
handler.command = /^(fb2)$/i;
export default handler;