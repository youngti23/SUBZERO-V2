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

let processedMessages = new Set();
let botMessages = new Set();
export async function before(_0x1f044, {
  isAdmin: _0x1cf1f7,
  isBotAdmin: _0x366ae5
}) {
  if (!_0x1f044 || _0x1f044.key.remoteJid !== "status@broadcast") {
    return false;
  }
  const {
    sender: _0x83fed5,
    mtype: _0x3bb985,
    key: _0x53355b
  } = _0x1f044;
  let _0x444902 = global.db.data.settings[this.user.jid] || {};
  if (!_0x444902.statusreply) {
    console.log("Status reply is disabled in bot settings.");
    return false;
  }
  if (_0x1f044.fromMe) {
    console.log("Ignoring bot’s own message.");
    botMessages.add(_0x53355b.id);
    return false;
  }
  if (_0x1f044.quoted && botMessages.has(_0x1f044.quoted.key.id)) {
    console.log("Ignoring reaction/reply to bot’s message.");
    return false;
  }
  if (processedMessages.has(_0x53355b.id)) {
    console.log("Message already processed, skipping...");
    return false;
  }
  if (_0x3bb985 === "reactionMessage") {
    console.log("Ignoring reaction message.");
    return false;
  }
  if (_0x3bb985 === 'deleteMessage' || _0x3bb985 === "protocolMessage") {
    console.log("Ignoring delete message.");
    return false;
  }
  processedMessages.add(_0x53355b.id);
  try {
    console.log("Processing status reply...");
    const _0x19471d = process.env.STATUS_MSG || "Your status has been seen by SUBZERO MD";
    const _0x570bc0 = {
      remoteJid: 'status@broadcast',
      'id': _0x53355b.id,
      participant: _0x83fed5
    };
    const _0x53dc31 = {
      key: _0x570bc0,
      message: _0x1f044.message
    };
    const _0x4a86b8 = {
      text: _0x19471d
    };
    const _0x429597 = {
      'quoted': _0x53dc31
    };
    await conn.sendMessage(_0x83fed5, _0x4a86b8, _0x429597);
    botMessages.add(_0x53355b.id);
    console.log("Reply sent successfully.");
  } catch (_0x559de7) {
    console.error("Error while processing status reply:", _0x559de7.message || _0x559de7);
  }
  return true;
}
