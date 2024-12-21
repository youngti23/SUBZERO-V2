import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
const {
  proto,
  generateWAMessage,
  areJidsSameUser,
  prepareWAMessageMedia
} = (await import("@whiskeysockets/baileys"))["default"];
let handler = async (_0xf1bc80, {
  conn: _0x518bd6,
  args: _0x3d67b9,
  usedPrefix: _0x58664c,
  command: _0x223fa1
}) => {
  console.log("Handler triggered");
  let _0xbd90eb = _0xf1bc80.text;
  if (_0xf1bc80.quoted) {
    _0xbd90eb = _0xf1bc80.quoted.text;
  }
  if (!_0xbd90eb) {
    console.log("No text input");
    return _0xf1bc80.reply("Hi, can anyone help Prince❣️-GPT?\nPlease input questions!! ");
  }
  try {
    const _0x32b85c = {
      deviceListMetadata: {},
      deviceListMetadataVersion: 0x2
    };
    const _0x45b184 = {
      showAdAttribution: true,
      containsAutoReply: true
    };
    const _0x7936c7 = {
      text: "ᴘʀɪɴᴄᴇ-ᴍᴅ"
    };
    const _0xb537e6 = {
      upload: _0x518bd6.waUploadToServer
    };
    const _0x52ee0a = await generateWAMessageFromContent(_0xf1bc80.chat, {
      "viewOnceMessage": {
        "message": {
          "messageContextInfo": _0x32b85c,
          "interactiveMessage": proto.Message.InteractiveMessage.create({
            "contextInfo": {
              "forwardingScore": 0x1,
              "isForwarded": true,
              "businessMessageForwardInfo": {
                "businessOwnerJid": "923092668108@s.whatsapp.net"
              },
              "forwardedNewsletterMessageInfo": {
                "newsletterJid": "120363199257221654@newsletter",
                "serverMessageId": 0xa7,
                "newsletterName": "Prince Dev❣️"
              },
              "mentionedJid": [_0xf1bc80.sender, "0@s.whatsapp.net"],
              "externalAdReply": _0x45b184
            },
            "body": proto.Message.InteractiveMessage.Body.create({
              "text": "𝗛𝗲𝗹𝗹𝗼👋🏻 \n*@" + _0xf1bc80.sender.split("@")[0] + "*\n\n𝗕𝗲𝗳𝗼𝗿𝗲 𝗣𝗿𝗶𝗻𝗰𝗲-𝗚𝗽𝘁 𝗔𝗻𝘀𝘄𝗲𝗿𝘀🔍\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗰𝗵𝗼𝗼𝘀𝗲 𝗼𝗻𝗲 𝗼𝗳 𝘁𝗵𝗲 𝗺𝗼𝗱𝗲𝗹𝘀 𝗯𝗲𝗹𝗼𝘄!!"
            }),
            "footer": proto.Message.InteractiveMessage.Footer.create(_0x7936c7),
            "header": proto.Message.InteractiveMessage.Header.create({
              ...(await prepareWAMessageMedia({
                "image": {
                  "url": "https://i.imgur.com/bzOeLCD.png"
                }
              }, _0xb537e6)),
              "title": '',
              "subtitle": '',
              "hasMediaAttachment": false
            }),
            "nativeFlowMessage": proto.Message.InteractiveMessage.NativeFlowMessage.create({
              "buttons": [{
                "name": "single_select",
                "buttonParamsJson": JSON.stringify({
                  "title": "𝗟𝗶𝘀𝘁 𝗺𝗼𝗱𝗲𝗹 𝗔𝗶",
                  "sections": [{
                    "title": "𝗟𝗶𝘀𝘁 𝗺𝗼𝗱𝗲𝗹 𝗔𝗶",
                    "rows": [{
                      "title": "Prince-GPT-4",
                      "id": ".gettingwait " + _0xbd90eb + "|yanzgpt-revolution-25b-v2.0",
                      "description": "Advance Revolution"
                    }, {
                      "title": "Prince-GPT-Normal",
                      "id": ".gettingwait " + _0xbd90eb + "|yanzgpt-legacy-72b-v2.0",
                      "description": "To Get Normal Answer "
                    }]
                  }]
                })
              }]
            })
          })
        }
      }
    }, {
      "quoted": _0xf1bc80
    });
    console.log("Message generated:", _0x52ee0a);
    await _0x518bd6.relayMessage(_0xf1bc80.chat, _0x52ee0a.message, {
      "messageId": _0x52ee0a.key.id,
      "quoted": _0xf1bc80
    });
  } catch (_0x5031f9) {
    console.error("Error generating or sending message:", _0x5031f9);
  }
};
handler.help = ["gdsai"];
handler.tags = ["tools"];
handler.command = ["gdsai"];
export default handler;