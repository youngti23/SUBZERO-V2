// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

export async function before(_0x2bb70c, {
  isAdmin: _0xd7e390,
  isBotAdmin: _0x4e788c
}) {
  if (!_0x2bb70c || _0x2bb70c.key.remoteJid !== "status@broadcast") {
    return false;
  }
  const {
    mtype: _0x2df52c,
    sender: _0x267963
  } = _0x2bb70c;
  console.log("Received message object:", JSON.stringify(_0x2bb70c, null, 2));
  if (!_0x267963) {
    console.error("Sender is null or undefined");
    return false;
  }
  console.log("Bot ID:", conn.user.id);
  try {
    console.log("Message type:", _0x2df52c);
    if (process.env.STATUS_REPLY && process.env.STATUS_REPLY.toLowerCase() === "true") {
      const _0x477485 = process.env.STATUS_MSG || "Your status has been seen by PRINCE MD";
      console.log("Sending status reply to sender:", _0x477485);
      const _0x527fe3 = {
        'remoteJid': "status@broadcast",
        'id': _0x2bb70c.key.id,
        participant: _0x267963
      };
      const _0x32b501 = {
        key: _0x527fe3,
        message: _0x2bb70c.message
      };
      const _0x1b9433 = {
        'text': _0x477485
      };
      const _0x12356b = {
        quoted: _0x32b501
      };
      await conn.sendMessage(_0x267963, _0x1b9433, _0x12356b);
    }
  } catch (_0x35772a) {
    console.error("Failed to process message:", _0x35772a.message || "Unknown error");
    if (_0x2bb70c.quoted && _0x2bb70c.quoted.text) {
      await _0x2bb70c.reply(_0x2bb70c.quoted.text);
    } else {
      const _0x5cdc31 = {
        mentions: [_0x267963]
      };
      await this.reply(conn.user.id, "Failed to process message: " + (_0x35772a.message || "Unknown error"), _0x2bb70c, _0x5cdc31);
    }
  }
  return true;
}