import _0x4f5cee from '../lib/uploadFile.js';
import _0x3f0ce6 from '../lib/uploadImage.js';
import _0x1eed52 from 'node-fetch';
let handler = async _0x369a68 => {
  let _0x19e828 = _0x369a68.quoted ? _0x369a68.quoted : _0x369a68;
  let _0x7c4ddc = (_0x19e828.msg || _0x19e828).mimetype || '';
  if (!_0x7c4ddc) {
    return conn.reply(_0x369a68.chat, "🌸 Please reply to an *Image* or *Video*.", _0x369a68);
  }
  await _0x369a68.react('⏳');
  try {
    conn.reply(_0x369a68.chat, "🌸 Converting the image to a URL...", _0x369a68, {
      'contextInfo': {
        'externalAdReply': {
          'mediaUrl': null,
          'mediaType': 0x1,
          'showAdAttribution': true,
          'title': "PRINCE BOT",
          'body': "Powered by Prince Bot",
          'previewType': 0x0,
          'thumbnail': null,
          'sourceUrl': "https://example.com"
        }
      }
    });
    let _0x464bb8 = await _0x19e828.download();
    let _0x4cf41d = /image\/(png|jpe?g|gif)|video\/mp4/.test(_0x7c4ddc);
    let _0x5cd935 = await (_0x4cf41d ? _0x3f0ce6 : _0x4f5cee)(_0x464bb8);
    let _0x2720d1 = await (await _0x1eed52('' + _0x5cd935)).buffer();
    let _0x2b7ac5 = "乂  *LINK DETAILS*  乂\n\n";
    _0x2b7ac5 += "*» Link* : " + _0x5cd935 + "\n\n";
    _0x2b7ac5 += "*» Shortened* : " + (await shortUrl(_0x5cd935)) + "\n";
    _0x2b7ac5 += "*» Size* : " + formatBytes(_0x464bb8.length) + "\n";
    _0x2b7ac5 += "*» Expiration* : " + (_0x4cf41d ? "Does not expire" : 'Unknown') + "\n\n";
    _0x2b7ac5 += "> *Powered by Prince Bot*";
    await conn.sendFile(_0x369a68.chat, _0x2720d1, "thumbnail.jpg", _0x2b7ac5, _0x369a68);
    await _0x369a68.react('✅');
  } catch (_0x60552a) {
    await conn.reply(_0x369a68.chat, "🌸 An error occurred.", _0x369a68);
    await _0x369a68.react('❌');
  }
};
handler.help = ["tourl"];
handler.tags = ["tools"];
handler.command = ['tourl', "url"];
export default handler;
function formatBytes(_0x2f163c) {
  if (_0x2f163c === 0) {
    return "0 B";
  }
  const _0x54a97b = ['B', 'KB', 'MB', 'GB', 'TB'];
  const _0x592109 = Math.floor(Math.log(_0x2f163c) / Math.log(1024));
  return (_0x2f163c / 1024 ** _0x592109).toFixed(2) + " " + _0x54a97b[_0x592109];
}
async function shortUrl(_0x237ce5) {
  let _0x3203eb = await _0x1eed52("https://tinyurl.com/api-create.php?url=" + _0x237ce5);
  return await _0x3203eb.text();
}