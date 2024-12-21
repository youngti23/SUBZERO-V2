// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import _0x11e3c3 from 'axios';
import 'cheerio';
const handler = async (_0x44b6d0, {
  conn: _0x143fdd,
  usedPrefix: _0x3e8ca0,
  command: _0x220e28,
  text: _0x4334f5
}) => {
  if (!_0x4334f5) {
    return _0x143fdd.reply(_0x44b6d0.chat, "⚠️ *Please enter the APK name*", _0x44b6d0, {
      'contextInfo': {
        'externalAdReply': {
          'mediaUrl': null,
          'mediaType': 0x1,
          'description': null,
          'body': "What are you looking for, dummy?",
          'previewType': 0x0,
          'thumbnail': princeImg.getRandom(),
          'sourceUrl': "https://github.com/PRINCE-GDS/prince-ds"
        }
      }
    });
  }
  _0x44b6d0.react('⌛');
  try {
    const _0x23f3d2 = await fetch("https://deliriussapi-oficial.vercel.app/download/apk?query=" + _0x4334f5);
    const _0x47d49f = await _0x23f3d2.json();
    if (!_0x47d49f.status || !_0x47d49f.data) {
      return _0x143fdd.reply(_0x44b6d0.chat, "⚠️ Could not find the requested APK. Try another name.", _0x44b6d0);
    }
    const _0xca046f = _0x47d49f.data;
    const _0x1c4b1f = "≪DOWNLOADED APKs🚀≫\n\n┏━━━━━━━━━━━━━━━━━━━━━━• \n┃💫 " + mssg.name + ": " + _0xca046f.name + "\n┃👤 " + mssg.dev + ": " + _0xca046f.developer + "\n┃🕒 " + mssg.aploud + ": " + _0xca046f.publish + "\n┃💪 " + mssg.size + ": " + _0xca046f.size + "\n┗━━━━━━━━━━━━━━━━━━━━━━━•\n\n> *⏳ Please wait a moment while your APK is being sent...*";
    await _0x143fdd.sendFile(_0x44b6d0.chat, _0xca046f.image, "error,jpg", _0x1c4b1f, _0x44b6d0, null);
    if (_0xca046f.size.includes('GB') || parseFloat(_0xca046f.size.replace(" MB", '')) > 0x3e7) {
      return await _0x44b6d0.reply("*The APK is too large.*");
    }
    await _0x143fdd.sendMessage(_0x44b6d0.chat, {
      'document': {
        'url': _0xca046f.download
      },
      'mimetype': "application/vnd.android.package-archive",
      'fileName': _0xca046f.name + ".apk",
      'caption': null
    }, {
      'quoted': _0x44b6d0
    });
    await _0x44b6d0.react('✅');
  } catch (_0x5c3469) {
    try {
      const _0x2a3676 = await search(_0x4334f5);
      const _0x442db4 = await download(_0x2a3676[0x0].id);
      let _0x5699a2 = "≪DOWNLOADED APKs🚀≫\n\n┏━━━━━━━━━━━━━━━━━━━━━━• \n┃💫 " + mssg.name + ": " + _0x442db4.name + "\n┃📦 " + mssg.dev + ": " + _0x442db4["package"] + "\n┃🕒 " + mssg.aploud + ": " + _0x442db4.lastup + "\n┃💪 " + mssg.size + ": " + _0x442db4.size + "\n┗━━━━━━━━━━━━━━━━━━━━━━━•\n\n> *⏳ Please wait a moment while your APK is being sent...*";
      await _0x143fdd.sendFile(_0x44b6d0.chat, _0x442db4.icon, 'akp.jpg', _0x5699a2, _0x44b6d0, false);
      if (_0x442db4.size.includes('GB') || _0x442db4.size.replace(" MB", '') > 0x3e7) {
        return await _0x44b6d0.reply("*The APK is too large.*");
      }
      await _0x143fdd.sendMessage(_0x44b6d0.chat, {
        'document': {
          'url': _0x442db4.dllink
        },
        'mimetype': "application/vnd.android.package-archive",
        'fileName': _0x442db4.name + '.apk',
        'caption': null
      }, {
        'quoted': _0x44b6d0
      });
      _0x44b6d0.react('✅');
      handler.limit = 0x2;
    } catch (_0x17092f) {
      _0x44b6d0.react('❌');
      console.log(_0x17092f);
      handler.limit = false;
    }
  }
};
handler.help = ['apk', 'apkmod'];
handler.tags = ["downloader"];
handler.command = /^(apkmod|apk|modapk|dapk2|aptoide|aptoidedl)$/i;
handler.register = false;
export default handler;
async function searchApk(_0x4b8a43) {
  const _0xecc24 = await _0x11e3c3.get('' + apkpureApi + encodeURIComponent(_0x4b8a43));
  const _0x55dc3b = _0xecc24.data;
  return _0x55dc3b.results;
}
async function downloadApk(_0x2e268a) {
  const _0x104567 = await _0x11e3c3.get('' + apkpureDownloadApi + _0x2e268a);
  const _0x11be68 = _0x104567.data;
  return _0x11be68;
}