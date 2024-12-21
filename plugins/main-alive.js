import _0x4c466f from 'fs';
let handler = async (_0x25f258, {
  conn: _0x2c3bed,
  text: _0x39c46a,
  usedPrefix: _0x560f96,
  command: _0x4283a9
}) => {
  const _0xa32ef0 = {
    url: "https://github.com/PRINCE-GDS/PRINXE-MD/raw/main/lib/source/mp3/Audio5.mp3"
  };
  let _0x33d4de = {
    'audio': _0xa32ef0,
    'mimetype': "audio/mp4",
    'ptt': true,
    'waveform': [100, 0, 100, 0, 100, 0, 100],
    'fileName': "Prince",
    'contextInfo': {
      'mentionedJid': [_0x25f258.sender],
      'externalAdReply': {
        'title': "🎗️ᴘʀɪɴᴄᴇ ᴍᴅ ɪs ᴀʟɪᴠᴇ ʀᴇᴄɪᴛᴇ ᴅᴀʀᴏᴏᴅ sʜᴀʀᴇᴇғ🎗️",
        'body': "PRINCE BOT",
        'thumbnail': _0x4c466f.readFileSync("./lib/source/drd.jpg"),
        'sourceUrl': 'https://chat.whatsapp.com/Jo5bmHMAlZpEIp75mKbwxP',
        'mediaType': 0x1,
        'renderLargerThumbnail': true
      }
    }
  };
  await _0x2c3bed.sendMessage(_0x25f258.chat, _0x33d4de);
};
handler.help = ["alive"];
handler.tags = ["main"];
handler.command = /^(alive)$/i;
export default handler;