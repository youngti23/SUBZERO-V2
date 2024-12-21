// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import '@whiskeysockets/baileys';
import 'awesome-phonenumber';
import _0x5e21a6 from 'chalk';
import { watchFile } from 'fs';
const terminalImage = global.opts.img ? require("terminal-image") : '';
const _0x436fe9 = {
  'strict': false
};
const urlRegex = (await import("url-regex-safe"))['default'](_0x436fe9);
const _0x312cb1 = {
  user: {}
};
export default async function (m, conn = _0x312cb1) {
  try {
    if (!m || !m.key || !m.key.remoteJid) {
      console.error("❌ Message or remoteJid is undefined. Skipping processing.");
      return;
    }
    const key = m.key.remoteJid;
    if (typeof key !== "string" && typeof key !== "number") {
      console.error("❌ Invalid key type. Expected string or number, found: " + typeof key);
      return;
    }
    let img;
    try {
      if (global.opts.img) {
        img = /sticker|image/gi.test(m.mtype) ? await terminalImage.buffer(await m.download()) : false;
      }
    } catch (e) {
      console.error("❌ Error loading image:", e.message || e);
    }
    const filesize = (m.msg ? m.msg.vcard ? m.msg.vcard.length : m.msg.fileLength ? m.msg.fileLength.low || m.msg.fileLength : m.msg.axolotlSenderKeyDistributionMessage ? m.msg.axolotlSenderKeyDistributionMessage.length : m.text ? m.text.length : 0 : m.text ? m.text.length : 0) || 0;
    const _0x8b0e17 = {
      'timeZone': "Asia/Karachi",
      hour12: false
    };
    console.log(("\n╭━━━──•✧✧•──━━━╮\n💻 " + _0x5e21a6.hex('#FE0041').bold("PRINCE MD [BOT SYSTEM]") + "\n⏰ Date & Time: " + _0x5e21a6.green(new Date().toLocaleString("es-ES", _0x8b0e17)) + "\n📂 Chat: " + _0x5e21a6.blueBright('MASKED') + "\n📦 File Size: " + _0x5e21a6.magenta(filesize + 'B') + "\n👤 Sender: " + _0x5e21a6.redBright("MASKED") + "\n💬 Message Type: " + _0x5e21a6.yellow(m.mtype || "UNKNOWN") + "\n╰━━━──•✧✧•──━━━╯\n    ").trim());
    if (img) {
      console.log("📸 Image received:", img.trimEnd());
    }
    if (typeof m.text === "string" && m.text) {
      let log = m.text.replace(/\u200e+/g, "MASKED");
      const mdRegex = /(?<=(?:^|[\s\n])\S?)(?:([*_~])(.+?)\1|```((?:.||[\n\r])+?)```)(?=\S?(?:[\s\n]|$))/g;
      const mdFormat = (depth = 4) => (_, type, text, monospace) => {
        const _0x3f2370 = {
          '_': "italic",
          '*': "bold",
          '~': 'strikethrough'
        };
        text = text || monospace;
        return !_0x3f2370[type] || depth < 1 ? text : _0x5e21a6[_0x3f2370[type]](text.replace(mdRegex, mdFormat(depth - 1)));
      };
      if (log.length < 1024) {
        log = log.replace(urlRegex, url => _0x5e21a6.blueBright("MASKED URL"));
      }
      log = log.replace(mdRegex, mdFormat(4));
      console.log(m.error != null ? _0x5e21a6.red("❌ Error: " + log) : m.isCommand ? _0x5e21a6.yellow("⚡ Command: MASKED COMMAND") : "📝 Log: " + log);
    }
    if (m.messageStubParameters) {
      console.log(m.messageStubParameters.map(() => _0x5e21a6.gray("🔒 Masked Message Stub")).join(", "));
    }
    if (/document/i.test(m.mtype)) {
      console.log("📄 Document received");
    } else if (/ContactsArray/i.test(m.mtype)) {
      console.log("👥 Contacts received");
    } else if (/contact/i.test(m.mtype)) {
      console.log("👤 Contact received");
    } else if (/audio/i.test(m.mtype)) {
      const duration = m.msg.seconds || 0;
      console.log((m.msg.ptt ? "🎤 (PTT " : "🎶 (") + "Audio) " + Math.floor(duration / 60).toString().padStart(2, '0') + ':' + (duration % 60).toString().padStart(2, '0'));
    }
  } catch (err) {
    console.error("❌ An error occurred:", err.message || err);
  }
  console.log();
  const file = global.__filename(import.meta.url);
  watchFile(file, () => {
    console.log(_0x5e21a6.redBright("📝 Update 'lib/print.js' detected. Reloading..."));
  });
}