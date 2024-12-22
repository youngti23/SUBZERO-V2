/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
    ＳＵＢＺＥＲＯ  ＭＤ ᐯ2
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＭＲ ＦＲＡＮＫ 
     
    ⭐ ＭＹ ＴＥＡＭ
     ＸＥＲＯ ＣＯＤＥＲＳ
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/mrfrank-ofc/SUBZERO-V2

© Recoding This Script In Unacceptable⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/


import _0x5e1647 from 'path';
import { toAudio } from './converter.js';
import _0x583173 from 'chalk';
import _0x41dd93 from 'node-fetch';
import _0x129b3f from 'awesome-phonenumber';
import _0x25baf5 from 'fs';
import _0x30ec98 from 'util';
import { fileTypeFromBuffer } from 'file-type';
import { format } from 'util';
import { fileURLToPath } from 'url';
import _0x48a5d6 from './store.js';
const __dirname = _0x5e1647.dirname(fileURLToPath(import.meta.url));
const {
  default: _makeWaSocket,
  makeWALegacySocket,
  proto,
  downloadContentFromMessage,
  jidDecode,
  areJidsSameUser,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  WAMessageStubType,
  extractMessageContent,
  prepareWAMessageMedia
} = (await import("@whiskeysockets/baileys"))["default"];
export function makeWASocket(_0x11ac04, _0x6f3d2b = {}) {
  let _0x357de8 = (global.opts.legacy ? makeWALegacySocket : _makeWaSocket)(_0x11ac04);
  let _0xbf48d3 = Object.defineProperties(_0x357de8, {
    'chats': {
      'value': {
        ...(_0x6f3d2b.chats || {})
      },
      'writable': true
    },
    'decodeJid': {
      'value'(_0x2e9e65) {
        if (!_0x2e9e65 || typeof _0x2e9e65 !== "string") {
          return !!(_0x2e9e65 !== null && _0x2e9e65 !== undefined) && _0x2e9e65 || null;
        }
        return _0x2e9e65.decodeJid();
      }
    },
    'logger': {
      'get'() {
        return {
          'info'(..._0x476c86) {
            console.log(_0x583173.bold.bgRgb(0x33, 0xcc, 0x33)("INFO "), '[' + _0x583173.rgb(0xff, 0xff, 0xff)(new Date().toUTCString()) + ']:', _0x583173.cyan(format(..._0x476c86)));
          },
          'error'(..._0x4b7d06) {
            console.log(_0x583173.bold.bgRgb(0xf7, 0x26, 0x21)("ERROR "), '[' + _0x583173.rgb(0xff, 0xff, 0xff)(new Date().toUTCString()) + ']:', _0x583173.rgb(0xff, 0x26, 0x0)(format(..._0x4b7d06)));
          },
          'warn'(..._0x3cf40b) {
            console.log(_0x583173.bold.bgRgb(0xff, 0x99, 0x0)("WARNING "), '[' + _0x583173.rgb(0xff, 0xff, 0xff)(new Date().toUTCString()) + ']:', _0x583173.redBright(format(..._0x3cf40b)));
          },
          'trace'(..._0x4a02bc) {
            console.log(_0x583173.grey("TRACE "), '[' + _0x583173.rgb(0xff, 0xff, 0xff)(new Date().toUTCString()) + ']:', _0x583173.white(format(..._0x4a02bc)));
          },
          'debug'(..._0x1b4028) {
            console.log(_0x583173.bold.bgRgb(0x42, 0xa7, 0xf5)("DEBUG "), '[' + _0x583173.rgb(0xff, 0xff, 0xff)(new Date().toUTCString()) + ']:', _0x583173.white(format(..._0x1b4028)));
          }
        };
      },
      'enumerable': true
    },
    'getFile': {
      async 'value'(_0x364390, _0xd36017 = false) {
        let _0x376d8c;
        let _0x1a774f;
        const _0x5bde51 = Buffer.isBuffer(_0x364390) ? _0x364390 : _0x364390 instanceof ArrayBuffer ? _0x364390.toBuffer() : /^data:.*?\/.*?;base64,/i.test(_0x364390) ? Buffer.from(_0x364390.split`,`[0x1], 'base64') : /^https?:\/\//.test(_0x364390) ? await (_0x376d8c = await _0x41dd93(_0x364390)).buffer() : _0x25baf5.existsSync(_0x364390) ? (_0x1a774f = _0x364390, _0x25baf5.readFileSync(_0x364390)) : typeof _0x364390 === "string" ? _0x364390 : Buffer.alloc(0x0);
        if (!Buffer.isBuffer(_0x5bde51)) {
          throw new TypeError("Result is not a buffer");
        }
        const _0x2738dc = (await fileTypeFromBuffer(_0x5bde51)) || {
          'mime': "application/octet-stream",
          'ext': ".bin"
        };
        if (_0x5bde51 && _0xd36017 && !_0x1a774f) {
          _0x1a774f = _0x5e1647.join(__dirname, '../tmp/' + new Date() * 0x1 + '.' + _0x2738dc.ext);
          await _0x25baf5.promises.writeFile(_0x1a774f, _0x5bde51);
        }
        return {
          'res': _0x376d8c,
          'filename': _0x1a774f,
          ..._0x2738dc,
          'data': _0x5bde51,
          'deleteFile'() {
            return _0x1a774f && _0x25baf5.promises.unlink(_0x1a774f);
          }
        };
      },
      'enumerable': true
    },
    'waitEvent': {
      'value'(_0x5840d3, _0x275940 = () => true, _0x1f7dc3 = 0x19) {
        return new Promise((_0x4aab42, _0x415579) => {
          let _0x252754 = 0x0;
          let _0xc107b2 = (..._0x453ff9) => {
            if (++_0x252754 > _0x1f7dc3) {
              _0x415579("Max tries reached");
            } else if (_0x275940()) {
              _0x357de8.ev.off(_0x5840d3, _0xc107b2);
              _0x4aab42(..._0x453ff9);
            }
          };
          _0x357de8.ev.on(_0x5840d3, _0xc107b2);
        });
      }
    },
    'sendFile': {
      async 'value'(_0x478d4d, _0x2f1ebb, _0x1681d8 = '', _0x3ccd95 = '', _0x5509c1, _0x2c9dd8 = false, _0x660ec5 = {}) {
        let _0x2dd614 = await _0x357de8.getFile(_0x2f1ebb, true);
        let {
          res: _0x54c6d7,
          data: _0x4769a4,
          filename: _0x57e86d
        } = _0x2dd614;
        if (_0x54c6d7 && _0x54c6d7.status !== 0xc8 || _0x4769a4.length <= 0x10000) {
          try {
            throw {
              'json': JSON.parse(_0x4769a4.toString())
            };
          } catch (_0x5e1229) {
            if (_0x5e1229.json) {
              throw _0x5e1229.json;
            }
          }
        }
        const _0xb3374b = _0x25baf5.statSync(_0x57e86d).size / 0x400 / 0x400;
        if (_0xb3374b >= 0x4e20) {
          throw new Error(" ✳️  El tamaño del archivo es demasiado grande\n\n");
        }
        let _0x4610a3 = {};
        if (_0x5509c1) {
          _0x4610a3.quoted = _0x5509c1;
        }
        if (!_0x2dd614) {
          _0x660ec5.asDocument = true;
        }
        let _0x3af2a2 = '';
        let _0x12e4fa = _0x660ec5.mimetype || _0x2dd614.mime;
        let _0x135bbd;
        if (/webp/.test(_0x2dd614.mime) || /image/.test(_0x2dd614.mime) && _0x660ec5.asSticker) {
          _0x3af2a2 = 'sticker';
        } else {
          if (/image/.test(_0x2dd614.mime) || /webp/.test(_0x2dd614.mime) && _0x660ec5.asImage) {
            _0x3af2a2 = 'image';
          } else {
            if (/video/.test(_0x2dd614.mime)) {
              _0x3af2a2 = "video";
            } else {
              if (/audio/.test(_0x2dd614.mime)) {
                _0x135bbd = await toAudio(_0x4769a4, _0x2dd614.ext);
                _0x4769a4 = _0x135bbd.data;
                _0x57e86d = _0x135bbd.filename;
                _0x3af2a2 = "audio";
                _0x12e4fa = _0x660ec5.mimetype || "audio/ogg; codecs=opus";
              } else {
                _0x3af2a2 = 'document';
              }
            }
          }
        }
        if (_0x660ec5.asDocument) {
          _0x3af2a2 = "document";
        }
        delete _0x660ec5.asSticker;
        delete _0x660ec5.asLocation;
        delete _0x660ec5.asVideo;
        delete _0x660ec5.asDocument;
        delete _0x660ec5.asImage;
        let _0x23b263 = {
          ..._0x660ec5,
          'caption': _0x3ccd95,
          'ptt': _0x2c9dd8,
          [_0x3af2a2]: {
            'url': _0x57e86d
          },
          'mimetype': _0x12e4fa,
          'fileName': _0x1681d8 || _0x57e86d.split('/').pop()
        };
        let _0x82d0eb;
        try {
          _0x82d0eb = await _0x357de8.sendMessage(_0x478d4d, _0x23b263, {
            ..._0x4610a3,
            ..._0x660ec5
          });
        } catch (_0x248bf4) {
          console.error(_0x248bf4);
          _0x82d0eb = null;
        } finally {
          if (!_0x82d0eb) {
            _0x82d0eb = await _0x357de8.sendMessage(_0x478d4d, {
              ..._0x23b263,
              [_0x3af2a2]: _0x4769a4
            }, {
              ..._0x4610a3,
              ..._0x660ec5
            });
          }
          _0x4769a4 = null;
          return _0x82d0eb;
        }
      },
      'enumerable': true
    },
    'sendContact': {
      async 'value'(_0x350f90, _0x1e8de7, _0xf4d324, _0x578b01) {
        if (!Array.isArray(_0x1e8de7[0x0]) && typeof _0x1e8de7[0x0] === 'string') {
          _0x1e8de7 = [_0x1e8de7];
        }
        let _0x108d2f = [];
        for (let [_0x3c4d30, _0x438b7d] of _0x1e8de7) {
          _0x3c4d30 = _0x3c4d30.replace(/[^0-9]/g, '');
          let _0x439f3f = _0x3c4d30 + "@s.whatsapp.net";
          let _0x2c62f2 = (await _0x357de8.getBusinessProfile(_0x439f3f)["catch"](_0xc4fc96 => null)) || {};
          let _0x4cf45b = ("\nBEGIN:VCARD\nVERSION:3.0\nN:;" + _0x438b7d.replace(/\n/g, "\\n") + ";;;\nFN:" + _0x438b7d.replace(/\n/g, "\\n") + "\nTEL;type=CELL;type=VOICE;waid=" + _0x3c4d30 + ':' + _0x129b3f('+' + _0x3c4d30).getNumber("international") + (_0x2c62f2.description ? ("\nX-WA-BIZ-NAME:" + (_0x357de8.chats[_0x439f3f]?.["vname"] || _0x357de8.getName(_0x439f3f) || _0x438b7d).replace(/\n/, "\\n") + "\nX-WA-BIZ-DESCRIPTION:" + _0x2c62f2.description.replace(/\n/g, "\\n") + "\n").trim() : '') + "\nEND:VCARD\n        ").trim();
          _0x108d2f.push({
            'vcard': _0x4cf45b,
            'displayName': _0x438b7d
          });
        }
        return await _0x357de8.sendMessage(_0x350f90, {
          ..._0x578b01,
          'contacts': {
            ..._0x578b01,
            'displayName': (_0x108d2f.length >= 0x2 ? _0x108d2f.length + " kontak" : _0x108d2f[0x0].displayName) || null,
            'contacts': _0x108d2f
          }
        }, {
          'quoted': _0xf4d324,
          ..._0x578b01
        });
      },
      'enumerable': true
    },
    'reply': {
      async 'value'(_0x59b5f1, _0x5ea264 = '', _0x3ed19c, _0x50347f) {
        if (Buffer.isBuffer(_0x5ea264)) {
          return _0x357de8.sendFile(_0x59b5f1, _0x5ea264, 'file', '', _0x3ed19c, false, _0x50347f);
        } else {
          let _0x3a6fa0 = ['120363304325601080@newsletter', "120363304325601080@newsletter", "120363304325601080@newsletter"];
          let _0x4667fa = ["❄️ 𝐒𝐔𝐁𝐙𝐄𝐑𝐎 ❄️", "❄️ 𝐒𝐔𝐁𝐙𝐄𝐑𝐎 ❄️", "❄️ 𝐒𝐔𝐁𝐙𝐄𝐑𝐎 ❄️"];
          async function _0x481ab() {
            let _0x5ba1ed = Math.floor(Math.random() * _0x3a6fa0.length);
            let _0x454169 = _0x3a6fa0[_0x5ba1ed];
            let _0x213cb8 = _0x4667fa[_0x5ba1ed];
            return {
              'id': _0x454169,
              'nombre': _0x213cb8
            };
          }
          let _0x4c4466 = await _0x481ab();
          const _0x42f150 = {
            'mentionedJid': await _0x357de8.parseMention(_0x5ea264),
            'isForwarded': true,
            'forwardingScore': 0x1,
            'forwardedNewsletterMessageInfo': {
              'newsletterJid': _0x4c4466.id,
              'newsletterName': _0x4c4466.nombre,
              'serverMessageId': 0x64
            }
          };
          const _0x57d59f = {
            ..._0x50347f,
            'text': _0x5ea264,
            'contextInfo': _0x42f150
          };
          return _0x357de8.sendMessage(_0x59b5f1, _0x57d59f, {
            'quoted': _0x3ed19c,
            ..._0x50347f
          });
        }
      }
    },
    'sendButton': {
      async 'value'(_0x44d894, _0x5a9247 = '', _0x24f04e = '', _0xa1bea1, _0x499c6d, _0x350501, _0x25cd4a) {
        let _0x5bed00;
        if (Array.isArray(_0xa1bea1)) {
          _0x25cd4a = _0x350501;
          _0x350501 = _0x499c6d;
          _0x499c6d = _0xa1bea1;
          _0xa1bea1 = null;
        } else {
          if (_0xa1bea1) {
            try {
              _0x5bed00 = await _0x357de8.getFile(_0xa1bea1);
              _0xa1bea1 = _0x5bed00.data;
            } catch {
              _0xa1bea1 = null;
            }
          }
        }
        if (!Array.isArray(_0x499c6d[0x0]) && typeof _0x499c6d[0x0] === "string") {
          _0x499c6d = [_0x499c6d];
        }
        if (!_0x25cd4a) {
          _0x25cd4a = {};
        }
        let _0x50a849 = {
          ..._0x25cd4a,
          [_0xa1bea1 ? "caption" : "text"]: _0x5a9247 || '',
          'footer': _0x24f04e,
          'buttons': _0x499c6d.map(_0x3072e3 => ({
            'buttonId': !!(_0x3072e3[0x1] !== null && _0x3072e3[0x1] !== undefined) && _0x3072e3[0x1] || !!(_0x3072e3[0x0] !== null && _0x3072e3[0x0] !== undefined) && _0x3072e3[0x0] || '',
            'buttonText': {
              'displayText': !!(_0x3072e3[0x0] !== null && _0x3072e3[0x0] !== undefined) && _0x3072e3[0x0] || !!(_0x3072e3[0x1] !== null && _0x3072e3[0x1] !== undefined) && _0x3072e3[0x1] || ''
            }
          })),
          ...(_0xa1bea1 ? _0x25cd4a.asLocation && /image/.test(_0x5bed00.mime) ? {
            'location': {
              ..._0x25cd4a,
              'jpegThumbnail': _0xa1bea1
            }
          } : {
            [/video/.test(_0x5bed00.mime) ? "video" : /image/.test(_0x5bed00.mime) ? "image" : "document"]: _0xa1bea1
          } : {})
        };
        return await _0x357de8.sendMessage(_0x44d894, _0x50a849, {
          'quoted': _0x350501,
          'upload': _0x357de8.waUploadToServer,
          ..._0x25cd4a
        });
      },
      'enumerable': true
    },
    'sendButton2': {
      async 'value'(_0x4f6562, _0x13636f = '', _0x166c50 = '', _0x5c971f, _0x5b3aa2, _0x17f9ff, _0x1428a7, _0x252e6b, _0x199efd) {
        let _0x505ee3;
        let _0x572a08;
        if (/^https?:\/\//i.test(_0x5c971f)) {
          try {
            const _0x4568ba = await _0x41dd93(_0x5c971f);
            const _0x5bc28d = _0x4568ba.headers.get("content-type");
            if (/^image\//i.test(_0x5bc28d)) {
              _0x505ee3 = await prepareWAMessageMedia({
                'image': {
                  'url': _0x5c971f
                }
              }, {
                'upload': _0x357de8.waUploadToServer
              });
            } else if (/^video\//i.test(_0x5bc28d)) {
              _0x572a08 = await prepareWAMessageMedia({
                'video': {
                  'url': _0x5c971f
                }
              }, {
                'upload': _0x357de8.waUploadToServer
              });
            } else {
              console.error("Tipo MIME no compatible:", _0x5bc28d);
            }
          } catch (_0xab567e) {
            console.error("Error al obtener el tipo MIME:", _0xab567e);
          }
        } else {
          try {
            const _0x5e3b01 = await _0x357de8.getFile(_0x5c971f);
            if (/^image\//i.test(_0x5e3b01.mime)) {
              _0x505ee3 = await prepareWAMessageMedia({
                'image': {
                  'url': _0x5c971f
                }
              }, {
                'upload': _0x357de8.waUploadToServer
              });
            } else if (/^video\//i.test(_0x5e3b01.mime)) {
              _0x572a08 = await prepareWAMessageMedia({
                'video': {
                  'url': _0x5c971f
                }
              }, {
                'upload': _0x357de8.waUploadToServer
              });
            }
          } catch (_0x223a60) {
            console.error("Error al obtener el tipo de archivo:", _0x223a60);
          }
        }
        const _0x1302f0 = _0x5b3aa2.map(_0x1e23bf => ({
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': _0x1e23bf[0x0],
            'id': _0x1e23bf[0x1]
          })
        }));
        if (_0x17f9ff && (typeof _0x17f9ff === "string" || typeof _0x17f9ff === "number")) {
          _0x1302f0.push({
            'name': "cta_copy",
            'buttonParamsJson': JSON.stringify({
              'display_text': "Copy",
              'copy_code': _0x17f9ff
            })
          });
        }
        if (_0x1428a7 && Array.isArray(_0x1428a7)) {
          _0x1428a7.forEach(_0x324ee2 => {
            _0x1302f0.push({
              'name': 'cta_url',
              'buttonParamsJson': JSON.stringify({
                'display_text': _0x324ee2[0x0],
                'url': _0x324ee2[0x1],
                'merchant_url': _0x324ee2[0x1]
              })
            });
          });
        }
        const _0x5510be = {
          'body': {
            'text': _0x13636f
          },
          'footer': {
            'text': _0x166c50
          },
          'header': {
            'hasMediaAttachment': false,
            'imageMessage': _0x505ee3 ? _0x505ee3.imageMessage : null,
            'videoMessage': _0x572a08 ? _0x572a08.videoMessage : null
          },
          'nativeFlowMessage': {
            'buttons': _0x1302f0,
            'messageParamsJson': ''
          }
        };
        let _0x316d67 = generateWAMessageFromContent(_0x4f6562, {
          'viewOnceMessage': {
            'message': {
              'interactiveMessage': _0x5510be
            }
          }
        }, {
          'userJid': _0x357de8.user.jid,
          'quoted': _0x252e6b
        });
        _0x357de8.relayMessage(_0x4f6562, _0x316d67.message, {
          'messageId': _0x316d67.key.id,
          ..._0x199efd
        });
      }
    },
    'sendList': {
      async 'value'(_0x2fcfcd, _0x57a0a7, _0x27d515, _0x4bedcf, _0x292971, _0x204768, _0x2954b3, _0x23681a = {}) {
        let _0x11ad7b;
        let _0x277d6e;
        if (/^https?:\/\//i.test(_0x292971)) {
          try {
            const _0x40d990 = await _0x41dd93(_0x292971);
            const _0x9bb8ac = _0x40d990.headers.get('content-type');
            if (/^image\//i.test(_0x9bb8ac)) {
              _0x11ad7b = await prepareWAMessageMedia({
                'image': {
                  'url': _0x292971
                }
              }, {
                'upload': _0x357de8.waUploadToServer
              });
            } else if (/^video\//i.test(_0x9bb8ac)) {
              _0x277d6e = await prepareWAMessageMedia({
                'video': {
                  'url': _0x292971
                }
              }, {
                'upload': _0x357de8.waUploadToServer
              });
            } else {
              console.error("Tipo MIME no compatible:", _0x9bb8ac);
            }
          } catch (_0xaf946b) {
            console.error("Error al obtener el tipo MIME:", _0xaf946b);
          }
        } else {
          try {
            const _0x270183 = await _0x357de8.getFile(_0x292971);
            if (/^image\//i.test(_0x270183.mime)) {
              _0x11ad7b = await prepareWAMessageMedia({
                'image': {
                  'url': _0x292971
                }
              }, {
                'upload': _0x357de8.waUploadToServer
              });
            } else if (/^video\//i.test(_0x270183.mime)) {
              _0x277d6e = await prepareWAMessageMedia({
                'video': {
                  'url': _0x292971
                }
              }, {
                'upload': _0x357de8.waUploadToServer
              });
            }
          } catch (_0x583d4e) {
            console.error("Error al obtener el tipo de archivo:", _0x583d4e);
          }
        }
        const _0x49b434 = [..._0x204768];
        const _0x547ec7 = {
          'interactiveMessage': {
            'header': {
              'title': _0x57a0a7,
              'hasMediaAttachment': false,
              'imageMessage': _0x11ad7b ? _0x11ad7b.imageMessage : null,
              'videoMessage': _0x277d6e ? _0x277d6e.videoMessage : null
            },
            'body': {
              'text': _0x27d515
            },
            'nativeFlowMessage': {
              'buttons': [{
                'name': "single_select",
                'buttonParamsJson': JSON.stringify({
                  'title': _0x4bedcf,
                  'sections': _0x49b434
                })
              }],
              'messageParamsJson': ''
            }
          }
        };
        let _0x3bb032 = generateWAMessageFromContent(_0x2fcfcd, {
          'viewOnceMessage': {
            'message': _0x547ec7
          }
        }, {
          'userJid': _0x357de8.user.jid,
          'quoted': _0x2954b3
        });
        _0x357de8.relayMessage(_0x2fcfcd, _0x3bb032.message, {
          'messageId': _0x3bb032.key.id,
          ..._0x23681a
        });
      }
    },
    'sendListM': {
      async 'value'(_0x51fee5, _0x5e64fa, _0x18760a, _0x5f24d6, _0x129244 = {}) {
        const _0x139fc8 = [{
          'title': _0x5e64fa.title,
          'rows': [..._0x18760a]
        }];
        const _0x537cde = {
          'text': _0x5e64fa.description,
          'footer': _0x5e64fa.footerText,
          'mentions': await _0x357de8.parseMention(_0x5e64fa.description),
          'title': '',
          'buttonText': _0x5e64fa.buttonText,
          'sections': _0x139fc8
        };
        _0x357de8.sendMessage(_0x51fee5, _0x537cde, {
          'quoted': _0x5f24d6
        });
      }
    },
    'updateProfileStatus': {
      async 'value'(_0x20d461) {
        return _0x357de8.query({
          'tag': 'iq',
          'attrs': {
            'to': 's.whatsapp.net',
            'type': 'set',
            'xmlns': "status"
          },
          'content': [{
            'tag': "status",
            'attrs': {},
            'content': Buffer.from(_0x20d461, 'utf-8')
          }]
        });
      }
    },
    'sendPayment': {
      async 'value'(_0x10b811, _0x9b00b4, _0x180b22, _0x7393bb = '', _0x4888c3, _0x391a17) {
        const _0x471790 = {
          'amount': {
            'currencyCode': _0x180b22 || "USD",
            'offset': 0x0,
            'value': _0x9b00b4 || 9.99
          },
          'expiryTimestamp': 0x0,
          'amount1000': (_0x9b00b4 || 9.99) * 0x3e8,
          'currencyCodeIso4217': _0x180b22 || "USD",
          'requestFrom': _0x4888c3 || "0@s.whatsapp.net",
          'noteMessage': {
            'extendedTextMessage': {
              'text': _0x7393bb || "Example Payment Message"
            }
          }
        };
        return _0x357de8.relayMessage(_0x10b811, {
          'requestPaymentMessage': _0x471790
        }, {
          ..._0x391a17
        });
      }
    },
    'sendPoll': {
      async 'value'(_0x19da4f, _0x4fc13c = '', _0x4a1db6, _0x287298) {
        if (!Array.isArray(_0x4a1db6[0x0]) && typeof _0x4a1db6[0x0] === "string") {
          _0x4a1db6 = [_0x4a1db6];
        }
        if (!_0x287298) {
          _0x287298 = {};
        }
        const _0x282e42 = {
          'name': _0x4fc13c,
          'options': _0x4a1db6.map(_0x36f27a => ({
            'optionName': !!(_0x36f27a[0x0] !== null && _0x36f27a[0x0] !== undefined) && _0x36f27a[0x0] || ''
          })),
          'selectableOptionsCount': 0x1
        };
        return _0x357de8.relayMessage(_0x19da4f, {
          'pollCreationMessage': _0x282e42
        }, {
          ..._0x287298
        });
      }
    },
    'loadingMsg': {
      async 'value'(_0x568a51, _0x257e37, _0xda846a, _0x1e881d, _0x4bbb9a, _0x30b7b9) {
        let {
          key: _0x114041
        } = await _0x357de8.sendMessage(_0x568a51, {
          'text': _0x257e37,
          ..._0x30b7b9
        }, {
          'quoted': _0x4bbb9a
        });
        for (let _0x72f07a = 0x0; _0x72f07a < _0x1e881d.length; _0x72f07a++) {
          await _0x357de8.sendMessage(_0x568a51, {
            'text': _0x1e881d[_0x72f07a],
            'edit': _0x114041,
            ..._0x30b7b9
          }, {
            'quoted': _0x4bbb9a
          });
        }
        await _0x357de8.sendMessage(_0x568a51, {
          'text': _0xda846a,
          'edit': _0x114041,
          ..._0x30b7b9
        }, {
          'quoted': _0x4bbb9a
        });
      }
    },
    'sendHydrated': {
      async 'value'(_0x2eeaed, _0x5768c1 = '', _0x1bd626 = '', _0x10d0b5, _0x810ada, _0x5e0d48, _0x203012, _0x33b55c, _0xb965cc, _0x4c5607, _0x3dea57) {
        let _0x3ebdf9;
        if (_0x10d0b5) {
          try {
            _0x3ebdf9 = await _0x357de8.getFile(_0x10d0b5);
            _0x10d0b5 = _0x3ebdf9.data;
          } catch {
            _0x10d0b5 = _0x10d0b5;
          }
        }
        if (_0x10d0b5 && !Buffer.isBuffer(_0x10d0b5) && (typeof _0x10d0b5 === 'string' || Array.isArray(_0x10d0b5))) {
          _0x3dea57 = _0x4c5607;
          _0x4c5607 = _0xb965cc;
          _0xb965cc = _0x33b55c;
          _0x33b55c = _0x203012;
          _0x203012 = _0x5e0d48;
          _0x5e0d48 = _0x810ada;
          _0x810ada = _0x10d0b5;
          _0x10d0b5 = null;
        }
        if (!_0x3dea57) {
          _0x3dea57 = {};
        }
        let _0x1f42bc = [];
        if (_0x810ada || _0x5e0d48) {
          if (!Array.isArray(_0x810ada)) {
            _0x810ada = [_0x810ada];
          }
          if (!Array.isArray(_0x5e0d48)) {
            _0x5e0d48 = [_0x5e0d48];
          }
          _0x1f42bc.push(...(_0x810ada.map((_0x26e4ac, _0x913efe) => [_0x26e4ac, _0x5e0d48[_0x913efe]]).map(([_0xfa2b8b, _0x480fd6], _0x512148) => ({
            'index': _0x1f42bc.length + _0x512148 + 0x1,
            'urlButton': {
              'displayText': !!(_0x480fd6 !== null && _0x480fd6 !== undefined) && _0x480fd6 || !!(_0xfa2b8b !== null && _0xfa2b8b !== undefined) && _0xfa2b8b || '',
              'url': !!(_0xfa2b8b !== null && _0xfa2b8b !== undefined) && _0xfa2b8b || !!(_0x480fd6 !== null && _0x480fd6 !== undefined) && _0x480fd6 || ''
            }
          })) || []));
        }
        if (_0x203012 || _0x33b55c) {
          if (!Array.isArray(_0x203012)) {
            _0x203012 = [_0x203012];
          }
          if (!Array.isArray(_0x33b55c)) {
            _0x33b55c = [_0x33b55c];
          }
          _0x1f42bc.push(...(_0x203012.map((_0x2e9cae, _0x356707) => [_0x2e9cae, _0x33b55c[_0x356707]]).map(([_0x493e18, _0x1dea0d], _0x21025) => ({
            'index': _0x1f42bc.length + _0x21025 + 0x1,
            'callButton': {
              'displayText': !!(_0x1dea0d !== null && _0x1dea0d !== undefined) && _0x1dea0d || !!(_0x493e18 !== null && _0x493e18 !== undefined) && _0x493e18 || '',
              'phoneNumber': !!(_0x493e18 !== null && _0x493e18 !== undefined) && _0x493e18 || !!(_0x1dea0d !== null && _0x1dea0d !== undefined) && _0x1dea0d || ''
            }
          })) || []));
        }
        if (_0xb965cc.length) {
          if (!Array.isArray(_0xb965cc[0x0])) {
            _0xb965cc = [_0xb965cc];
          }
          _0x1f42bc.push(...(_0xb965cc.map(([_0xcec9df, _0x1bd01f], _0x401e3e) => ({
            'index': _0x1f42bc.length + _0x401e3e + 0x1,
            'quickReplyButton': {
              'displayText': !!(_0xcec9df !== null && _0xcec9df !== undefined) && _0xcec9df || !!(_0x1bd01f !== null && _0x1bd01f !== undefined) && _0x1bd01f || '',
              'id': !!(_0x1bd01f !== null && _0x1bd01f !== undefined) && _0x1bd01f || !!(_0xcec9df !== null && _0xcec9df !== undefined) && _0xcec9df || ''
            }
          })) || []));
        }
        let _0x3951fc = {
          ..._0x3dea57,
          [_0x10d0b5 ? "caption" : "text"]: _0x5768c1 || '',
          'footer': _0x1bd626,
          'templateButtons': _0x1f42bc,
          ...(_0x10d0b5 ? _0x3dea57.asLocation && /image/.test(_0x3ebdf9.mime) ? {
            'location': {
              ..._0x3dea57,
              'jpegThumbnail': _0x10d0b5
            }
          } : {
            [/video/.test(_0x3ebdf9.mime) ? "video" : /image/.test(_0x3ebdf9.mime) ? 'image' : 'document']: _0x10d0b5
          } : {})
        };
        return await _0x357de8.sendMessage(_0x2eeaed, _0x3951fc, {
          'quoted': _0x4c5607,
          'upload': _0x357de8.waUploadToServer,
          ..._0x3dea57
        });
      },
      'enumerable': true
    },
    'sendHydrated2': {
      async 'value'(_0x578b41, _0x204001 = '', _0x49d963 = '', _0x33cbba, _0x3b8274, _0x236318, _0x5c7353, _0x47bd7f, _0x5317a8, _0x290794, _0x1ef363) {
        let _0x1c56d2;
        if (_0x33cbba) {
          try {
            _0x1c56d2 = await _0x357de8.getFile(_0x33cbba);
            _0x33cbba = _0x1c56d2.data;
          } catch {
            _0x33cbba = _0x33cbba;
          }
        }
        if (_0x33cbba && !Buffer.isBuffer(_0x33cbba) && (typeof _0x33cbba === "string" || Array.isArray(_0x33cbba))) {
          _0x1ef363 = _0x290794;
          _0x290794 = _0x5317a8;
          _0x5317a8 = callText;
          callText = call;
          call = _0x236318;
          _0x236318 = _0x3b8274;
          _0x3b8274 = _0x33cbba;
          _0x33cbba = null;
        }
        if (!_0x1ef363) {
          _0x1ef363 = {};
        }
        let _0xe0704a = [];
        if (_0x3b8274 || _0x236318) {
          if (!Array.isArray(_0x3b8274)) {
            _0x3b8274 = [_0x3b8274];
          }
          if (!Array.isArray(_0x236318)) {
            _0x236318 = [_0x236318];
          }
          _0xe0704a.push(...(_0x3b8274.map((_0x33eb09, _0x5c615c) => [_0x33eb09, _0x236318[_0x5c615c]]).map(([_0x2f60c0, _0x46c81e], _0x3c2c76) => ({
            'index': _0xe0704a.length + _0x3c2c76 + 0x1,
            'urlButton': {
              'displayText': !!(_0x46c81e !== null && _0x46c81e !== undefined) && _0x46c81e || !!(_0x2f60c0 !== null && _0x2f60c0 !== undefined) && _0x2f60c0 || '',
              'url': !!(_0x2f60c0 !== null && _0x2f60c0 !== undefined) && _0x2f60c0 || !!(_0x46c81e !== null && _0x46c81e !== undefined) && _0x46c81e || ''
            }
          })) || []));
        }
        if (_0x5c7353 || _0x47bd7f) {
          if (!Array.isArray(_0x5c7353)) {
            _0x5c7353 = [_0x5c7353];
          }
          if (!Array.isArray(_0x47bd7f)) {
            _0x47bd7f = [_0x47bd7f];
          }
          _0xe0704a.push(...(_0x5c7353.map((_0x513cdf, _0x5e1048) => [_0x513cdf, _0x47bd7f[_0x5e1048]]).map(([_0x25e85c, _0x522c45], _0x38a39d) => ({
            'index': _0xe0704a.length + _0x38a39d + 0x1,
            'urlButton': {
              'displayText': !!(_0x522c45 !== null && _0x522c45 !== undefined) && _0x522c45 || !!(_0x25e85c !== null && _0x25e85c !== undefined) && _0x25e85c || '',
              'url': !!(_0x25e85c !== null && _0x25e85c !== undefined) && _0x25e85c || !!(_0x522c45 !== null && _0x522c45 !== undefined) && _0x522c45 || ''
            }
          })) || []));
        }
        if (_0x5317a8.length) {
          if (!Array.isArray(_0x5317a8[0x0])) {
            _0x5317a8 = [_0x5317a8];
          }
          _0xe0704a.push(...(_0x5317a8.map(([_0x3b3a58, _0x5600bf], _0x1a57cd) => ({
            'index': _0xe0704a.length + _0x1a57cd + 0x1,
            'quickReplyButton': {
              'displayText': !!(_0x3b3a58 !== null && _0x3b3a58 !== undefined) && _0x3b3a58 || !!(_0x5600bf !== null && _0x5600bf !== undefined) && _0x5600bf || '',
              'id': !!(_0x5600bf !== null && _0x5600bf !== undefined) && _0x5600bf || !!(_0x3b3a58 !== null && _0x3b3a58 !== undefined) && _0x3b3a58 || ''
            }
          })) || []));
        }
        let _0x31c3fa = {
          ..._0x1ef363,
          [_0x33cbba ? "caption" : "text"]: _0x204001 || '',
          'footer': _0x49d963,
          'templateButtons': _0xe0704a,
          ...(_0x33cbba ? _0x1ef363.asLocation && /image/.test(_0x1c56d2.mime) ? {
            'location': {
              ..._0x1ef363,
              'jpegThumbnail': _0x33cbba
            }
          } : {
            [/video/.test(_0x1c56d2.mime) ? "video" : /image/.test(_0x1c56d2.mime) ? "image" : "document"]: _0x33cbba
          } : {})
        };
        return await _0x357de8.sendMessage(_0x578b41, _0x31c3fa, {
          'quoted': _0x290794,
          'upload': _0x357de8.waUploadToServer,
          ..._0x1ef363
        });
      },
      'enumerable': true
    },
    'cMod': {
      'value'(_0x22dbe4, _0x1d0d0f, _0x389384 = '', _0x2e4eac = _0x357de8.user.jid, _0x121c10 = {}) {
        if (_0x121c10.mentions && !Array.isArray(_0x121c10.mentions)) {
          _0x121c10.mentions = [_0x121c10.mentions];
        }
        let _0x5158de = _0x1d0d0f.toJSON();
        delete _0x5158de.message.messageContextInfo;
        delete _0x5158de.message.senderKeyDistributionMessage;
        let _0x5a45f6 = Object.keys(_0x5158de.message)[0x0];
        let _0x37f4e7 = _0x5158de.message;
        let _0x48e24b = _0x37f4e7[_0x5a45f6];
        if (typeof _0x48e24b === "string") {
          _0x37f4e7[_0x5a45f6] = _0x389384 || _0x48e24b;
        } else {
          if (_0x48e24b.caption) {
            _0x48e24b.caption = _0x389384 || _0x48e24b.caption;
          } else {
            if (_0x48e24b.text) {
              _0x48e24b.text = _0x389384 || _0x48e24b.text;
            }
          }
        }
        if (typeof _0x48e24b !== 'string') {
          _0x37f4e7[_0x5a45f6] = {
            ..._0x48e24b,
            ..._0x121c10
          };
          _0x37f4e7[_0x5a45f6].contextInfo = {
            ...(_0x48e24b.contextInfo || {}),
            'mentionedJid': _0x121c10.mentions || _0x48e24b.contextInfo?.["mentionedJid"] || []
          };
        }
        if (_0x5158de.participant) {
          _0x2e4eac = _0x5158de.participant = _0x2e4eac || _0x5158de.participant;
        } else {
          if (_0x5158de.key.participant) {
            _0x2e4eac = _0x5158de.key.participant = _0x2e4eac || _0x5158de.key.participant;
          }
        }
        if (_0x5158de.key.remoteJid.includes("@s.whatsapp.net")) {
          _0x2e4eac = _0x2e4eac || _0x5158de.key.remoteJid;
        } else {
          if (_0x5158de.key.remoteJid.includes("@broadcast")) {
            _0x2e4eac = _0x2e4eac || _0x5158de.key.remoteJid;
          }
        }
        _0x5158de.key.remoteJid = _0x22dbe4;
        _0x5158de.key.fromMe = areJidsSameUser(_0x2e4eac, _0x357de8.user.id) || false;
        return proto.WebMessageInfo.fromObject(_0x5158de);
      },
      'enumerable': true
    },
    'copyNForward': {
      async 'value'(_0x273aad, _0x4e403b, _0x38125d = true, _0x21215b = {}) {
        let _0x43fdc1;
        if (_0x21215b.readViewOnce && _0x4e403b.message.viewOnceMessage?.["message"]) {
          _0x43fdc1 = Object.keys(_0x4e403b.message.viewOnceMessage.message)[0x0];
          delete _0x4e403b.message.viewOnceMessage.message[_0x43fdc1].viewOnce;
          _0x4e403b.message = proto.Message.fromObject(JSON.parse(JSON.stringify(_0x4e403b.message.viewOnceMessage.message)));
          _0x4e403b.message[_0x43fdc1].contextInfo = _0x4e403b.message.viewOnceMessage.contextInfo;
        }
        let _0x3651c2 = Object.keys(_0x4e403b.message)[0x0];
        let _0x380674 = generateForwardMessageContent(_0x4e403b, !!_0x38125d);
        let _0x4f5221 = Object.keys(_0x380674)[0x0];
        if (_0x38125d && typeof _0x38125d === "number" && _0x38125d > 0x1) {
          _0x380674[_0x4f5221].contextInfo.forwardingScore += _0x38125d;
        }
        _0x380674[_0x4f5221].contextInfo = {
          ...(_0x4e403b.message[_0x3651c2].contextInfo || {}),
          ...(_0x380674[_0x4f5221].contextInfo || {})
        };
        _0x380674 = generateWAMessageFromContent(_0x273aad, _0x380674, {
          ..._0x21215b,
          'userJid': _0x357de8.user.jid
        });
        await _0x357de8.relayMessage(_0x273aad, _0x380674.message, {
          'messageId': _0x380674.key.id,
          'additionalAttributes': {
            ..._0x21215b
          }
        });
        return _0x380674;
      },
      'enumerable': true
    },
    'fakeReply': {
      'value'(_0x2dbd83, _0x101e33 = '', _0x3f8689 = this.user.jid, _0x27c070 = '', _0x2c2171, _0x49829d) {
        return _0x357de8.reply(_0x2dbd83, _0x101e33, {
          'key': {
            'fromMe': areJidsSameUser(_0x3f8689, _0x357de8.user.id),
            'participant': _0x3f8689,
            ...(_0x2c2171 ? {
              'remoteJid': _0x2c2171
            } : {})
          },
          'message': {
            'conversation': _0x27c070
          },
          ..._0x49829d
        });
      }
    },
    'downloadM': {
      async 'value'(_0x22efbb, _0x3b470a, _0x1cc9e4) {
        let _0x4147ff;
        if (!_0x22efbb || !(_0x22efbb.url || _0x22efbb.directPath)) {
          return Buffer.alloc(0x0);
        }
        const _0x38db10 = await downloadContentFromMessage(_0x22efbb, _0x3b470a);
        let _0x14d9d1 = Buffer.from([]);
        for await (const _0x161315 of _0x38db10) {
          _0x14d9d1 = Buffer.concat([_0x14d9d1, _0x161315]);
        }
        if (_0x1cc9e4) {
          ({
            filename: _0x4147ff
          } = await _0x357de8.getFile(_0x14d9d1, true));
        }
        return _0x1cc9e4 && _0x25baf5.existsSync(_0x4147ff) ? _0x4147ff : _0x14d9d1;
      },
      'enumerable': true
    },
    'parseMention': {
      'value'(_0x55c13b = '') {
        return [..._0x55c13b.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x1f74c8 => _0x1f74c8[0x1] + "@s.whatsapp.net");
      },
      'enumerable': true
    },
    'getName': {
      'value'(_0x5c108d = '', _0x3441a9 = false) {
        _0x5c108d = _0x357de8.decodeJid(_0x5c108d);
        _0x3441a9 = _0x357de8.withoutContact || _0x3441a9;
        let _0x1a6bce;
        if (_0x5c108d.endsWith("@g.us")) {
          return new Promise(async _0x5bd360 => {
            _0x1a6bce = _0x357de8.chats[_0x5c108d] || {};
            if (!(_0x1a6bce.name || _0x1a6bce.subject)) {
              _0x1a6bce = (await _0x357de8.groupMetadata(_0x5c108d)) || {};
            }
            _0x5bd360(_0x1a6bce.name || _0x1a6bce.subject || _0x129b3f('+' + _0x5c108d.replace("@s.whatsapp.net", '')).getNumber("international"));
          });
        } else {
          _0x1a6bce = _0x5c108d === "0@s.whatsapp.net" ? {
            'jid': _0x5c108d,
            'vname': "WhatsApp"
          } : areJidsSameUser(_0x5c108d, _0x357de8.user.id) ? _0x357de8.user : _0x357de8.chats[_0x5c108d] || {};
        }
        return (_0x3441a9 ? '' : _0x1a6bce.name) || _0x1a6bce.subject || _0x1a6bce.vname || _0x1a6bce.notify || _0x1a6bce.verifiedName || _0x129b3f('+' + _0x5c108d.replace('@s.whatsapp.net', '')).getNumber('international');
      },
      'enumerable': true
    },
    'loadMessage': {
      'value'(_0x23cdb3) {
        return Object.entries(_0x357de8.chats).filter(([_0x447454, {
          messages: _0x265c84
        }]) => typeof _0x265c84 === "object").find(([_0x283dd9, {
          messages: _0x5d28b9
        }]) => Object.entries(_0x5d28b9).find(([_0x52a57e, _0x5d608e]) => _0x52a57e === _0x23cdb3 || _0x5d608e.key?.['id'] === _0x23cdb3))?.[0x1]['messages']?.[_0x23cdb3];
      },
      'enumerable': true
    },
    'sendGroupV4Invite': {
      async 'value'(_0x577864, _0xd5a28e, _0x18be29, _0x4787e8, _0x55a044 = "unknown subject", _0x1ace1a = "Invitation to join my WhatsApp group", _0xbd5958, _0xf854b3 = {}) {
        const _0x4d6785 = proto.Message.fromObject({
          'groupInviteMessage': proto.GroupInviteMessage.fromObject({
            'inviteCode': _0x18be29,
            'inviteExpiration': parseInt(_0x4787e8) || +new Date(new Date() + 259200000),
            'groupJid': _0x577864,
            'groupName': (_0x55a044 ? _0x55a044 : await _0x357de8.getName(_0x577864)) || null,
            'jpegThumbnail': Buffer.isBuffer(_0xbd5958) ? _0xbd5958 : null,
            'caption': _0x1ace1a
          })
        });
        const _0x3ecfb4 = generateWAMessageFromContent(_0xd5a28e, _0x4d6785, _0xf854b3);
        await _0x357de8.relayMessage(_0xd5a28e, _0x3ecfb4.message, {
          'messageId': _0x3ecfb4.key.id,
          'additionalAttributes': {
            ..._0xf854b3
          }
        });
        return _0x3ecfb4;
      },
      'enumerable': true
    },
    'processMessageStubType': {
      async 'value'(_0x3b7bf0) {
        if (!_0x3b7bf0.messageStubType) {
          return;
        }
        const _0x27af22 = _0x357de8.decodeJid(_0x3b7bf0.key.remoteJid || _0x3b7bf0.message?.["senderKeyDistributionMessage"]?.["groupId"] || '');
        if (!_0x27af22 || _0x27af22 === "status@broadcast") {
          return;
        }
        const _0x12cefd = _0x14eee5 => {
          ev.emit("groups.update", [{
            'id': _0x27af22,
            ..._0x14eee5
          }]);
        };
        switch (_0x3b7bf0.messageStubType) {
          case WAMessageStubType.REVOKE:
          case WAMessageStubType.GROUP_CHANGE_INVITE_LINK:
            _0x12cefd({
              'revoke': _0x3b7bf0.messageStubParameters[0x0]
            });
            break;
          case WAMessageStubType.GROUP_CHANGE_ICON:
            _0x12cefd({
              'icon': _0x3b7bf0.messageStubParameters[0x0]
            });
            break;
          default:
            {
              console.log({
                'messageStubType': _0x3b7bf0.messageStubType,
                'messageStubParameters': _0x3b7bf0.messageStubParameters,
                'type': WAMessageStubType[_0x3b7bf0.messageStubType]
              });
              break;
            }
        }
        const _0x143c3f = _0x27af22.endsWith("@g.us");
        if (!_0x143c3f) {
          return;
        }
        let _0x44c6d0 = _0x357de8.chats[_0x27af22];
        if (!_0x44c6d0) {
          _0x44c6d0 = _0x357de8.chats[_0x27af22] = {
            'id': _0x27af22
          };
        }
        _0x44c6d0.isChats = true;
        const _0x517d2b = await _0x357de8.groupMetadata(_0x27af22)["catch"](_0x155165 => null);
        if (!_0x517d2b) {
          return;
        }
        _0x44c6d0.subject = _0x517d2b.subject;
        _0x44c6d0.metadata = _0x517d2b;
      }
    },
    'insertAllGroup': {
      async 'value'() {
        const _0x502560 = (await _0x357de8.groupFetchAllParticipating()['catch'](_0x46a0a5 => null)) || {};
        for (const _0x2b283e in _0x502560) _0x357de8.chats[_0x2b283e] = {
          ...(_0x357de8.chats[_0x2b283e] || {}),
          'id': _0x2b283e,
          'subject': _0x502560[_0x2b283e].subject,
          'isChats': true,
          'metadata': _0x502560[_0x2b283e]
        };
        return _0x357de8.chats;
      }
    },
    'pushMessage': {
      async 'value'(_0x5527c7) {
        if (!_0x5527c7) {
          return;
        }
        if (!Array.isArray(_0x5527c7)) {
          _0x5527c7 = [_0x5527c7];
        }
        for (const _0x412d63 of _0x5527c7) {
          try {
            if (!_0x412d63) {
              continue;
            }
            if (_0x412d63.messageStubType && _0x412d63.messageStubType != WAMessageStubType.CIPHERTEXT) {
              _0x357de8.processMessageStubType(_0x412d63)["catch"](console.error);
            }
            const _0x9dcbba = Object.keys(_0x412d63.message || {});
            const _0x15f5f8 = !["senderKeyDistributionMessage", "messageContextInfo"].includes(_0x9dcbba[0x0]) && _0x9dcbba[0x0] || _0x9dcbba.length >= 0x3 && _0x9dcbba[0x1] !== 'messageContextInfo' && _0x9dcbba[0x1] || _0x9dcbba[_0x9dcbba.length - 0x1];
            const _0x1a8c77 = _0x357de8.decodeJid(_0x412d63.key.remoteJid || _0x412d63.message?.['senderKeyDistributionMessage']?.["groupId"] || '');
            if (_0x412d63.message?.[_0x15f5f8]?.['contextInfo']?.["quotedMessage"]) {
              let _0x181464 = _0x412d63.message[_0x15f5f8].contextInfo;
              let _0x5c7a52 = _0x357de8.decodeJid(_0x181464.participant);
              const _0x127502 = _0x357de8.decodeJid(_0x181464.remoteJid || _0x5c7a52);
              let _0x18af6b = _0x412d63.message[_0x15f5f8].contextInfo.quotedMessage;
              if (_0x127502 && _0x127502 !== "status@broadcast" && _0x18af6b) {
                let _0x33749e = Object.keys(_0x18af6b)[0x0];
                if (_0x33749e == "conversation") {
                  _0x18af6b.extendedTextMessage = {
                    'text': _0x18af6b[_0x33749e]
                  };
                  delete _0x18af6b.conversation;
                  _0x33749e = "extendedTextMessage";
                }
                if (!_0x18af6b[_0x33749e].contextInfo) {
                  _0x18af6b[_0x33749e].contextInfo = {};
                }
                _0x18af6b[_0x33749e].contextInfo.mentionedJid = _0x181464.mentionedJid || _0x18af6b[_0x33749e].contextInfo.mentionedJid || [];
                const _0x389639 = _0x127502.endsWith("g.us");
                if (_0x389639 && !_0x5c7a52) {
                  _0x5c7a52 = _0x127502;
                }
                const _0x2d50e = {
                  'key': {
                    'remoteJid': _0x127502,
                    'fromMe': areJidsSameUser(_0x357de8.user.jid, _0x127502),
                    'id': _0x181464.stanzaId,
                    'participant': _0x5c7a52
                  },
                  'message': JSON.parse(JSON.stringify(_0x18af6b)),
                  ...(_0x389639 ? {
                    'participant': _0x5c7a52
                  } : {})
                };
                let _0x3bd8d4 = _0x357de8.chats[_0x5c7a52];
                if (!_0x3bd8d4) {
                  _0x3bd8d4 = _0x357de8.chats[_0x5c7a52] = {
                    'id': _0x5c7a52,
                    'isChats': !_0x389639
                  };
                }
                if (!_0x3bd8d4.messages) {
                  _0x3bd8d4.messages = {};
                }
                if (!_0x3bd8d4.messages[_0x181464.stanzaId] && !_0x2d50e.key.fromMe) {
                  _0x3bd8d4.messages[_0x181464.stanzaId] = _0x2d50e;
                }
                let _0x49c9ab;
                if ((_0x49c9ab = Object.entries(_0x3bd8d4.messages)).length > 0x28) {
                  _0x3bd8d4.messages = Object.fromEntries(_0x49c9ab.slice(0x1e, _0x49c9ab.length));
                }
              }
            }
            if (!_0x1a8c77 || _0x1a8c77 === 'status@broadcast') {
              continue;
            }
            const _0x32f6b0 = _0x1a8c77.endsWith('@g.us');
            let _0x14b0be = _0x357de8.chats[_0x1a8c77];
            if (!_0x14b0be) {
              if (_0x32f6b0) {
                await _0x357de8.insertAllGroup()['catch'](console.error);
              }
              _0x14b0be = _0x357de8.chats[_0x1a8c77] = {
                'id': _0x1a8c77,
                'isChats': true,
                ...(_0x357de8.chats[_0x1a8c77] || {})
              };
            }
            let _0x41de91;
            let _0x3e4390;
            if (_0x32f6b0) {
              if (!_0x14b0be.subject || !_0x14b0be.metadata) {
                _0x41de91 = (await _0x357de8.groupMetadata(_0x1a8c77)["catch"](_0xff6fb => ({}))) || {};
                if (!_0x14b0be.subject) {
                  _0x14b0be.subject = _0x41de91.subject || '';
                }
                if (!_0x14b0be.metadata) {
                  _0x14b0be.metadata = _0x41de91;
                }
              }
              _0x3e4390 = _0x357de8.decodeJid(_0x412d63.key?.["fromMe"] && _0x357de8.user.id || _0x412d63.participant || _0x412d63.key?.["participant"] || _0x1a8c77 || '');
              if (_0x3e4390 !== _0x1a8c77) {
                let _0x27e965 = _0x357de8.chats[_0x3e4390];
                if (!_0x27e965) {
                  _0x27e965 = _0x357de8.chats[_0x3e4390] = {
                    'id': _0x3e4390
                  };
                }
                if (!_0x27e965.name) {
                  _0x27e965.name = _0x412d63.pushName || _0x27e965.name || '';
                }
              }
            } else {
              if (!_0x14b0be.name) {
                _0x14b0be.name = _0x412d63.pushName || _0x14b0be.name || '';
              }
            }
            if (['senderKeyDistributionMessage', "messageContextInfo"].includes(_0x15f5f8)) {
              continue;
            }
            _0x14b0be.isChats = true;
            if (!_0x14b0be.messages) {
              _0x14b0be.messages = {};
            }
            const _0x4d086b = _0x412d63.key.fromMe || areJidsSameUser(_0x3e4390 || _0x1a8c77, _0x357de8.user.id);
            if (!["protocolMessage"].includes(_0x15f5f8) && !_0x4d086b && _0x412d63.messageStubType != WAMessageStubType.CIPHERTEXT && _0x412d63.message) {
              delete _0x412d63.message.messageContextInfo;
              delete _0x412d63.message.senderKeyDistributionMessage;
              _0x14b0be.messages[_0x412d63.key.id] = JSON.parse(JSON.stringify(_0x412d63, null, 0x2));
              let _0x9d66c1;
              if ((_0x9d66c1 = Object.entries(_0x14b0be.messages)).length > 0x28) {
                _0x14b0be.messages = Object.fromEntries(_0x9d66c1.slice(0x1e, _0x9d66c1.length));
              }
            }
          } catch (_0x417574) {
            console.error(_0x417574);
          }
        }
      }
    },
    'serializeM': {
      'value'(_0x35e1a9) {
        return smsg(_0x357de8, _0x35e1a9);
      }
    },
    ...(typeof _0x357de8.chatRead !== 'function' ? {
      'chatRead': {
        'value'(_0x43bc9d, _0x44b61b = _0x357de8.user.jid, _0x534bc3) {
          return _0x357de8.sendReadReceipt(_0x43bc9d, _0x44b61b, [_0x534bc3]);
        },
        'enumerable': true
      }
    } : {}),
    ...(typeof _0x357de8.setStatus !== "function" ? {
      'setStatus': {
        'value'(_0x1c9eb8) {
          return _0x357de8.query({
            'tag': 'iq',
            'attrs': {
              'to': S_WHATSAPP_NET,
              'type': "set",
              'xmlns': "status"
            },
            'content': [{
              'tag': "status",
              'attrs': {},
              'content': Buffer.from(_0x1c9eb8, "utf-8")
            }]
          });
        },
        'enumerable': true
      }
    } : {})
  });
  if (_0xbf48d3.user?.['id']) {
    _0xbf48d3.user.jid = _0xbf48d3.decodeJid(_0xbf48d3.user.id);
  }
  _0x48a5d6.bind(_0xbf48d3);
  return _0xbf48d3;
}
export function smsg(_0x28343f, _0x2722de, _0x346a7d) {
  if (!_0x2722de) {
    return _0x2722de;
  }
  let _0xe10104 = proto.WebMessageInfo;
  _0x2722de = _0xe10104.fromObject(_0x2722de);
  _0x2722de.conn = _0x28343f;
  let _0x2bd8e0;
  if (_0x2722de.message) {
    if (_0x2722de.mtype == "protocolMessage" && _0x2722de.msg.key) {
      _0x2bd8e0 = _0x2722de.msg.key;
      if (_0x2bd8e0 == "status@broadcast") {
        _0x2bd8e0.remoteJid = _0x2722de.chat;
      }
      if (!_0x2bd8e0.participant || _0x2bd8e0.participant == 'status_me') {
        _0x2bd8e0.participant = _0x2722de.sender;
      }
      _0x2bd8e0.fromMe = _0x28343f.decodeJid(_0x2bd8e0.participant) === _0x28343f.decodeJid(_0x28343f.user.id);
      if (!_0x2bd8e0.fromMe && _0x2bd8e0.remoteJid === _0x28343f.decodeJid(_0x28343f.user.id)) {
        _0x2bd8e0.remoteJid = _0x2722de.sender;
      }
    }
    if (_0x2722de.quoted) {
      if (!_0x2722de.quoted.mediaMessage) {
        delete _0x2722de.quoted.download;
      }
    }
  }
  if (!_0x2722de.mediaMessage) {
    delete _0x2722de.download;
  }
  try {
    if (_0x2bd8e0 && _0x2722de.mtype == 'protocolMessage') {
      _0x28343f.ev.emit('message.delete', _0x2bd8e0);
    }
  } catch (_0x187487) {
    console.error(_0x187487);
  }
  return _0x2722de;
}
export function serialize() {
  const _0x3fcf14 = ["imageMessage", 'videoMessage', 'audioMessage', "stickerMessage", "documentMessage"];
  return Object.defineProperties(proto.WebMessageInfo.prototype, {
    'conn': {
      'value': undefined,
      'enumerable': false,
      'writable': true
    },
    'id': {
      'get'() {
        return this.key?.['id'];
      }
    },
    'isBaileys': {
      'get'() {
        return this.id?.["length"] === 0x10 || this.id?.["startsWith"]('3EB0') && this.id?.["length"] === 0xc || false;
      }
    },
    'chat': {
      'get'() {
        const _0x1c3355 = this.message?.["senderKeyDistributionMessage"]?.['groupId'];
        return (this.key?.["remoteJid"] || _0x1c3355 && _0x1c3355 !== "status@broadcast" || '').decodeJid();
      }
    },
    'isGroup': {
      'get'() {
        return this.chat.endsWith("@g.us");
      },
      'enumerable': true
    },
    'sender': {
      'get'() {
        return this.conn?.['decodeJid'](this.key?.['fromMe'] && this.conn?.["user"]['id'] || this.participant || this.key.participant || this.chat || '');
      },
      'enumerable': true
    },
    'fromMe': {
      'get'() {
        return this.key?.['fromMe'] || areJidsSameUser(this.conn?.["user"]['id'], this.sender) || false;
      }
    },
    'mtype': {
      'get'() {
        if (!this.message) {
          return '';
        }
        const _0x2cae70 = Object.keys(this.message);
        return !['senderKeyDistributionMessage', "messageContextInfo"].includes(_0x2cae70[0x0]) && _0x2cae70[0x0] || _0x2cae70.length >= 0x3 && _0x2cae70[0x1] !== "messageContextInfo" && _0x2cae70[0x1] || _0x2cae70[_0x2cae70.length - 0x1];
      },
      'enumerable': true
    },
    'msg': {
      'get'() {
        if (!this.message) {
          return null;
        }
        return this.message[this.mtype];
      }
    },
    'mediaMessage': {
      'get'() {
        if (!this.message) {
          return null;
        }
        const _0x29be75 = (this.msg?.['url'] || this.msg?.["directPath"] ? {
          ...this.message
        } : extractMessageContent(this.message)) || null;
        if (!_0x29be75) {
          return null;
        }
        const _0x5f5683 = Object.keys(_0x29be75)[0x0];
        return _0x3fcf14.includes(_0x5f5683) ? _0x29be75 : null;
      },
      'enumerable': true
    },
    'mediaType': {
      'get'() {
        let _0x447261;
        if (!(_0x447261 = this.mediaMessage)) {
          return null;
        }
        return Object.keys(_0x447261)[0x0];
      },
      'enumerable': true
    },
    'quoted': {
      'get'() {
        const _0x13c05b = this;
        const _0x3e8a79 = _0x13c05b.msg;
        const _0x3d3d36 = _0x3e8a79?.["contextInfo"];
        const _0xffde92 = _0x3d3d36?.["quotedMessage"];
        if (!_0x3e8a79 || !_0x3d3d36 || !_0xffde92) {
          return null;
        }
        const _0x5dcb04 = Object.keys(_0xffde92)[0x0];
        let _0x53bc07 = _0xffde92[_0x5dcb04];
        const _0x23c44e = typeof _0x53bc07 === "string" ? _0x53bc07 : _0x53bc07.text;
        return Object.defineProperties(JSON.parse(JSON.stringify(typeof _0x53bc07 === "string" ? {
          'text': _0x53bc07
        } : _0x53bc07)), {
          'mtype': {
            'get'() {
              return _0x5dcb04;
            },
            'enumerable': true
          },
          'mediaMessage': {
            'get'() {
              const _0x323272 = (_0x53bc07.url || _0x53bc07.directPath ? {
                ..._0xffde92
              } : extractMessageContent(_0xffde92)) || null;
              if (!_0x323272) {
                return null;
              }
              const _0x186bf6 = Object.keys(_0x323272)[0x0];
              return _0x3fcf14.includes(_0x186bf6) ? _0x323272 : null;
            },
            'enumerable': true
          },
          'mediaType': {
            'get'() {
              let _0x1733ee;
              if (!(_0x1733ee = this.mediaMessage)) {
                return null;
              }
              return Object.keys(_0x1733ee)[0x0];
            },
            'enumerable': true
          },
          'id': {
            'get'() {
              return _0x3d3d36.stanzaId;
            },
            'enumerable': true
          },
          'chat': {
            'get'() {
              return _0x3d3d36.remoteJid || _0x13c05b.chat;
            },
            'enumerable': true
          },
          'isBaileys': {
            'get'() {
              return this.id?.["length"] === 0x10 || this.id?.["startsWith"]("3EB0") && this.id.length === 0xc || false;
            },
            'enumerable': true
          },
          'sender': {
            'get'() {
              return (_0x3d3d36.participant || this.chat || '').decodeJid();
            },
            'enumerable': true
          },
          'fromMe': {
            'get'() {
              return areJidsSameUser(this.sender, _0x13c05b.conn?.["user"]["jid"]);
            },
            'enumerable': true
          },
          'text': {
            'get'() {
              return _0x23c44e || this.caption || this.contentText || this.selectedDisplayText || '';
            },
            'enumerable': true
          },
          'mentionedJid': {
            'get'() {
              return _0x53bc07.contextInfo?.["mentionedJid"] || _0x13c05b.getQuotedObj()?.["mentionedJid"] || [];
            },
            'enumerable': true
          },
          'name': {
            'get'() {
              const _0x344b8c = this.sender;
              return _0x344b8c ? _0x13c05b.conn?.['getName'](_0x344b8c) : null;
            },
            'enumerable': true
          },
          'vM': {
            'get'() {
              return proto.WebMessageInfo.fromObject({
                'key': {
                  'fromMe': this.fromMe,
                  'remoteJid': this.chat,
                  'id': this.id
                },
                'message': _0xffde92,
                ...(_0x13c05b.isGroup ? {
                  'participant': this.sender
                } : {})
              });
            }
          },
          'fakeObj': {
            'get'() {
              return this.vM;
            }
          },
          'download': {
            'value'(_0x207653 = false) {
              const _0x3afa60 = this.mediaType;
              return _0x13c05b.conn?.["downloadM"](this.mediaMessage[_0x3afa60], _0x3afa60.replace(/message/i, ''), _0x207653);
            },
            'enumerable': true,
            'configurable': true
          },
          'reply': {
            'value'(_0x397b99, _0x18a04c, _0x48ff6f) {
              return _0x13c05b.conn?.['reply'](_0x18a04c ? _0x18a04c : this.chat, _0x397b99, this.vM, _0x48ff6f);
            },
            'enumerable': true
          },
          'copy': {
            'value'() {
              const _0x169b60 = proto.WebMessageInfo;
              return smsg(conn, _0x169b60.fromObject(_0x169b60.toObject(this.vM)));
            },
            'enumerable': true
          },
          'forward': {
            'value'(_0x3da741, _0x39e77f = false, _0x559a93) {
              return _0x13c05b.conn?.["sendMessage"](_0x3da741, {
                'forward': this.vM,
                'force': _0x39e77f,
                ..._0x559a93
              }, {
                ..._0x559a93
              });
            },
            'enumerable': true
          },
          'copyNForward': {
            'value'(_0x4158e6, _0x9d1f2f = false, _0x242c8d) {
              return _0x13c05b.conn?.["copyNForward"](_0x4158e6, this.vM, _0x9d1f2f, _0x242c8d);
            },
            'enumerable': true
          },
          'cMod': {
            'value'(_0x41b40f, _0x57e304 = '', _0x17fab3 = this.sender, _0x1cb25c = {}) {
              return _0x13c05b.conn?.['cMod'](_0x41b40f, this.vM, _0x57e304, _0x17fab3, _0x1cb25c);
            },
            'enumerable': true
          },
          'delete': {
            'value'() {
              return _0x13c05b.conn?.["sendMessage"](this.chat, {
                'delete': this.vM.key
              });
            },
            'enumerable': true
          },
          'react': {
            'value'(_0x158f67) {
              return _0x13c05b.conn?.['sendMessage'](this.chat, {
                'react': {
                  'text': _0x158f67,
                  'key': this.vM.key
                }
              });
            },
            'enumerable': true
          }
        });
      },
      'enumerable': true
    },
    '_text': {
      'value': null,
      'writable': true
    },
    'text': {
      'get'() {
        const _0x404050 = this.msg;
        const _0x576a4a = (typeof _0x404050 === "string" ? _0x404050 : _0x404050?.["text"]) || _0x404050?.["caption"] || _0x404050?.["contentText"] || '';
        return typeof this._text === "string" ? this._text : '' || (typeof _0x576a4a === "string" ? _0x576a4a : _0x576a4a?.["selectedDisplayText"] || _0x576a4a?.['hydratedTemplate']?.["hydratedContentText"] || _0x576a4a) || '';
      },
      'set'(_0x5b8682) {
        return this._text = _0x5b8682;
      },
      'enumerable': true
    },
    'mentionedJid': {
      'get'() {
        return this.msg?.['contextInfo']?.['mentionedJid']?.["length"] && this.msg.contextInfo.mentionedJid || [];
      },
      'enumerable': true
    },
    'name': {
      'get'() {
        return !!(this.pushName !== null && this.pushName !== undefined) && this.pushName || this.conn?.["getName"](this.sender);
      },
      'enumerable': true
    },
    'download': {
      'value'(_0x322d0f = false) {
        const _0x4e2323 = this.mediaType;
        return this.conn?.["downloadM"](this.mediaMessage[_0x4e2323], _0x4e2323.replace(/message/i, ''), _0x322d0f);
      },
      'enumerable': true,
      'configurable': true
    },
    'reply': {
      'value'(_0x11d316, _0x1d26a0, _0x1b1389) {
        return this.conn?.['reply'](_0x1d26a0 ? _0x1d26a0 : this.chat, _0x11d316, this, _0x1b1389);
      }
    },
    'copy': {
      'value'() {
        const _0x54d3db = proto.WebMessageInfo;
        return smsg(this.conn, _0x54d3db.fromObject(_0x54d3db.toObject(this)));
      },
      'enumerable': true
    },
    'forward': {
      'value'(_0x47ece0, _0x8ee164 = false, _0x4cdf6f = {}) {
        return this.conn?.["sendMessage"](_0x47ece0, {
          'forward': this,
          'force': _0x8ee164,
          ..._0x4cdf6f
        }, {
          ..._0x4cdf6f
        });
      },
      'enumerable': true
    },
    'copyNForward': {
      'value'(_0x56d947, _0x57953e = false, _0x5636f4 = {}) {
        return this.conn?.["copyNForward"](_0x56d947, this, _0x57953e, _0x5636f4);
      },
      'enumerable': true
    },
    'cMod': {
      'value'(_0x1f9665, _0x4c74f2 = '', _0x458f08 = this.sender, _0x2654d3 = {}) {
        return this.conn?.["cMod"](_0x1f9665, this, _0x4c74f2, _0x458f08, _0x2654d3);
      },
      'enumerable': true
    },
    'getQuotedObj': {
      'value'() {
        if (!this.quoted.id) {
          return null;
        }
        const _0x308c83 = proto.WebMessageInfo.fromObject(this.conn?.['loadMessage'](this.quoted.id) || this.quoted.vM);
        return smsg(this.conn, _0x308c83);
      },
      'enumerable': true
    },
    'getQuotedMessage': {
      'get'() {
        return this.getQuotedObj;
      }
    },
    'delete': {
      'value'() {
        return this.conn?.["sendMessage"](this.chat, {
          'delete': this.key
        });
      },
      'enumerable': true
    },
    'react': {
      'value'(_0x24c6a7) {
        return this.conn?.["sendMessage"](this.chat, {
          'react': {
            'text': _0x24c6a7,
            'key': this.key
          }
        });
      },
      'enumerable': true
    }
  });
}
export function logic(_0x1145be, _0x43084f, _0x3370af) {
  if (_0x43084f.length !== _0x3370af.length) {
    throw new Error("Input and Output must have same length");
  }
  for (let _0x5cdbd2 in _0x43084f) if (_0x30ec98.isDeepStrictEqual(_0x1145be, _0x43084f[_0x5cdbd2])) {
    return _0x3370af[_0x5cdbd2];
  }
  return null;
}
export function protoType() {
  Buffer.prototype.toArrayBuffer = function _0x59f753() {
    const _0x2c69a3 = new ArrayBuffer(this.length);
    const _0x4edb98 = new Uint8Array(_0x2c69a3);
    for (let _0x5442c7 = 0x0; _0x5442c7 < this.length; ++_0x5442c7) {
      _0x4edb98[_0x5442c7] = this[_0x5442c7];
    }
    return _0x2c69a3;
  };
  Buffer.prototype.toArrayBufferV2 = function _0x29c813() {
    return this.buffer.slice(this.byteOffset, this.byteOffset + this.byteLength);
  };
  ArrayBuffer.prototype.toBuffer = function _0x143d8a() {
    return Buffer.from(new Uint8Array(this));
  };
  Uint8Array.prototype.getFileType = ArrayBuffer.prototype.getFileType = Buffer.prototype.getFileType = async function _0xe0ac31() {
    return await fileTypeFromBuffer(this);
  };
  String.prototype.isNumber = Number.prototype.isNumber = isNumber;
  String.prototype.capitalize = function _0x5bc58f() {
    return this.charAt(0x0).toUpperCase() + this.slice(0x1, this.length);
  };
  String.prototype.capitalizeV2 = function _0x3b3070() {
    const _0x110092 = this.split(" ");
    return _0x110092.map(_0x5c3fc1 => _0x5c3fc1.capitalize()).join(" ");
  };
  String.prototype.decodeJid = function _0x407701() {
    if (/:\d+@/gi.test(this)) {
      const _0x3a5d7c = jidDecode(this) || {};
      return (_0x3a5d7c.user && _0x3a5d7c.server && _0x3a5d7c.user + '@' + _0x3a5d7c.server || this).trim();
    } else {
      return this.trim();
    }
  };
  Number.prototype.toTimeString = function _0x50a28b() {
    const _0x2092fc = Math.floor(this / 0x3e8 % 0x3c);
    const _0xf3f058 = Math.floor(this / 60000 % 0x3c);
    const _0x219836 = Math.floor(this / 3600000 % 0x18);
    const _0x9b2af5 = Math.floor(this / 86400000);
    return ((_0x9b2af5 ? _0x9b2af5 + " day(s) " : '') + (_0x219836 ? _0x219836 + " hour(s) " : '') + (_0xf3f058 ? _0xf3f058 + " minute(s) " : '') + (_0x2092fc ? _0x2092fc + " second(s)" : '')).trim();
  };
  Number.prototype.getRandom = String.prototype.getRandom = Array.prototype.getRandom = getRandom;
}
function isNumber() {
  const _0x95b1dd = parseInt(this);
  return typeof _0x95b1dd === "number" && !isNaN(_0x95b1dd);
}
function getRandom() {
  if (Array.isArray(this) || this instanceof String) {
    return this[Math.floor(Math.random() * this.length)];
  }
  return Math.floor(Math.random() * this);
}
function nullish(_0x4f9551) {
  return !(_0x4f9551 !== null && _0x4f9551 !== undefined);
}