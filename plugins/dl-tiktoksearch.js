import _0x2d68a5 from 'axios';
const {
  proto,
  generateWAMessageFromContent,
  generateWAMessageContent
} = (await import('@whiskeysockets/baileys'))["default"];
let handler = async (_0x110710, {
  conn: _0x86d5,
  text: _0x16fb8a
}) => {
  if (!_0x16fb8a) {
    return _0x86d5.reply(_0x110710.chat, "🌸 What do you want to search on TikTok?", _0x110710);
  }
  async function _0x45adb5(_0x1505e8) {
    const _0x2a9f30 = {
      url: _0x1505e8
    };
    const _0x432882 = {
      video: _0x2a9f30
    };
    const _0x1fbea1 = {
      'upload': _0x86d5.waUploadToServer
    };
    const {
      videoMessage: _0x2367fe
    } = await generateWAMessageContent(_0x432882, _0x1fbea1);
    return _0x2367fe;
  }
  function _0x2101ae(_0x388379) {
    for (let _0x47828f = _0x388379.length - 1; _0x47828f > 0; _0x47828f--) {
      const _0x428366 = Math.floor(Math.random() * (_0x47828f + 1));
      [_0x388379[_0x47828f], _0x388379[_0x428366]] = [_0x388379[_0x428366], _0x388379[_0x47828f]];
    }
  }
  try {
    await _0x110710.react('⏳');
    const _0x5d8965 = {
      mediaUrl: null,
      mediaType: 0x1,
      showAdAttribution: true,
      title: "TikTok Search",
      body: "Powered by Subzero Bot",
      previewType: 0x0,
      thumbnail: null,
      'sourceUrl': "https://example.com"
    };
    const _0x5f1713 = {
      externalAdReply: _0x5d8965
    };
    const _0x16052b = {
      'contextInfo': _0x5f1713
    };
    _0x86d5.reply(_0x110710.chat, "🌸 Downloading your video...", _0x110710, _0x16052b);
    let _0x3a75fe = [];
    let {
      data: _0x551136
    } = await _0x2d68a5.get("https://apis-starlights-team.koyeb.app/starlight/tiktoksearch?text=" + _0x16fb8a);
    let _0x18b31f = _0x551136.data;
    _0x2101ae(_0x18b31f);
    let _0x305232 = _0x18b31f.splice(0, 7);
    for (let _0x3ef56c of _0x305232) {
      const _0x2b3362 = {
        text: null
      };
      const _0x4f6032 = {
        text: "Powered by Pince Bot"
      };
      const _0x127ff0 = {
        'buttons': []
      };
      _0x3a75fe.push({
        'body': proto.Message.InteractiveMessage.Body.fromObject(_0x2b3362),
        'footer': proto.Message.InteractiveMessage.Footer.fromObject(_0x4f6032),
        'header': proto.Message.InteractiveMessage.Header.fromObject({
          'title': '' + _0x3ef56c.title,
          'hasMediaAttachment': true,
          'videoMessage': await _0x45adb5(_0x3ef56c.nowm)
        }),
        'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject(_0x127ff0)
      });
    }
    const _0x3c12b9 = {
      deviceListMetadata: {},
      'deviceListMetadataVersion': 0x2
    };
    const _0x536ce3 = {
      text: "🌸 Results for: " + _0x16fb8a
    };
    const _0x54dfd3 = {
      hasMediaAttachment: false
    };
    const _0x1d837a = {
      cards: [..._0x3a75fe]
    };
    const _0x28efdb = generateWAMessageFromContent(_0x110710.chat, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': _0x3c12b9,
          'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
            'body': proto.Message.InteractiveMessage.Body.create(_0x536ce3),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': "🔎 TikTok - Search"
            }),
            'header': proto.Message.InteractiveMessage.Header.create(_0x54dfd3),
            'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject(_0x1d837a)
          })
        }
      }
    }, {
      'quoted': _0x110710
    });
    await _0x110710.react('✅');
    await _0x86d5.relayMessage(_0x110710.chat, _0x28efdb.message, {
      'messageId': _0x28efdb.key.id
    });
  } catch (_0x59b1a0) {
    await _0x86d5.reply(_0x110710.chat, "❌ An error occurred: " + _0x59b1a0.toString(), _0x110710);
  }
};
handler.help = ["tiktoksearch <query>"];
handler.register = false;
handler.tags = ["downloader"];
handler.command = ['tiktoksearch', "tiktoks"];
export default handler;
