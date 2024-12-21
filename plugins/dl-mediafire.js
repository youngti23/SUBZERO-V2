import _0x3d7a35 from 'axios';
import _0x4b4e4e from 'cheerio';
let handler = async (_0x3d8e8a, {
  conn: _0x40a4aa,
  args: _0x223056,
  usedPrefix: _0x2cfe47,
  command: _0x508bca
}) => {
  if (!_0x223056[0x0]) {
    throw "❌ Please provide a Mediafire link.";
  }
  try {
    let _0x44ec81 = await mediafireDl(_0x223056[0x0]);
    let {
      name: _0x528e01,
      size: _0x27bc7f,
      date: _0x372404,
      mime: _0x6f9d9b,
      link: _0x5da177
    } = _0x44ec81;
    let _0x38ef30 = ("\n> ┏ 📂 *File Information* \n> ┣━━━━━━━━━━━━━━\n> ┣ 📄 *Name*: " + (_0x528e01 || "N/A") + "\n> ┣ 💾 *Size*: " + (_0x27bc7f || "N/A") + "\n> ┣ 📅 *Date*: " + (_0x372404 || 'N/A') + "\n> ┣ 📝 *MIME Type*: " + (_0x6f9d9b || "N/A")).trim();
    await _0x40a4aa.sendMessage(_0x3d8e8a.chat, {
      'text': _0x38ef30,
      'contextInfo': {
        'mentionedJid': [_0x3d8e8a.sender],
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '120363199257221654@newsletter',
          'newsletterName': global.author,
          'serverMessageId': -0x1
        },
        'forwardingScore': 0x3e7,
        'externalAdReply': {
          'mediaUrl': null,
          'mediaType': 0x1,
          'description': null,
          'title': "Mediafire Downloader 📥",
          'body': "Super Bot WhatsApp 🤖",
          'previewType': 0x0,
          'thumbnail': null,
          'sourceUrl': null
        }
      }
    });
    await _0x40a4aa.sendFile(_0x3d8e8a.chat, _0x5da177, _0x528e01, '', _0x3d8e8a, null, {
      'mimetype': _0x6f9d9b,
      'asDocument': true
    });
  } catch (_0x440611) {
    await _0x40a4aa.sendMessage(_0x3d8e8a.chat, {
      'text': "⚠️ An error occurred. Please report this issue using #report " + (_0x2cfe47 + _0x508bca) + '.'
    });
    console.log("Error with command " + (_0x2cfe47 + _0x508bca) + ':', _0x440611);
  }
};
handler.help = ["mediafire"].map(_0x5301bd => _0x5301bd + " <url>");
handler.tags = ['downloader'];
handler.command = /^(mediafire|mediafiredl|dlmediafire|md|mdl)$/i;
handler.register = false;
handler.limit = false;
export default handler;
async function mediafireDl(_0x42bef9) {
  const _0x140946 = await _0x3d7a35.get("https://www-mediafire-com.translate.goog/" + _0x42bef9.replace('https://www.mediafire.com/', '') + "?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp");
  const _0x382001 = _0x4b4e4e.load(_0x140946.data);
  const _0x12a4da = _0x382001('#downloadButton').attr("href");
  const _0xae4d42 = _0x382001("body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div").attr("title")?.["replaceAll"](" ", '')["replaceAll"]("\n", '') || "Unknown";
  const _0x3dd027 = _0x382001("body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span").text() || "Unknown";
  const _0x41c5c0 = _0x382001("#downloadButton").text().replace('Download', '').replace('(', '').replace(')', '').replace("\n", '').replaceAll(" ", '') || "Unknown";
  let _0x159e36 = '';
  if (_0x12a4da) {
    const _0x58c2c4 = await _0x3d7a35.head(_0x12a4da);
    _0x159e36 = _0x58c2c4.headers["content-type"];
  }
  return {
    'name': _0xae4d42,
    'size': _0x41c5c0,
    'date': _0x3dd027,
    'mime': _0x159e36,
    'link': _0x12a4da
  };
}