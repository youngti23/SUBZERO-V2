// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import _0x391cb4 from 'axios';
let handler = async (_0x571cc9, {
  conn: _0x1b249e,
  text: _0x507791,
  usedPrefix: _0xcd9b54,
  command: _0x5e2a14
}) => {
  if (!_0x507791) {
    throw "*Example:* *" + (_0xcd9b54 + _0x5e2a14) + " <text>*";
  }
  const _0x4d8162 = _0x507791 || "Explain the importance of fast language models";
  try {
    await _0x571cc9.react('⏳');
    const _0x310ad8 = await _0x391cb4.post("https://api.groq.com/openai/v1/chat/completions", {
      'model': 'llama3-8b-8192',
      'messages': [{
        'role': "system",
        'content': "YOU ARE ONE OF FASTEST PRINCE AI CREATED BY DASTAGEER"
      }, {
        'role': 'user',
        'content': _0x4d8162
      }],
      'temperature': 0x1,
      'max_tokens': 0x400,
      'top_p': 0x1
    }, {
      'headers': {
        'Content-Type': "application/json",
        'Authorization': "Bearer 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"
      }
    });
    console.log("API Response:", _0x310ad8.data);
    if (_0x310ad8.data && _0x310ad8.data.choices && _0x310ad8.data.choices[0]) {
      const _0x1258a0 = _0x310ad8.data.choices[0].message.content;
      console.log("Response from Groq API:", _0x1258a0);
      await _0x1b249e.sendMessage(_0x571cc9.chat, {
        'text': _0x1258a0,
        'mentions': _0x571cc9.mentionedJid.map(_0x5444c2 => _0x5444c2.id)
      }, {
        'quoted': _0x571cc9
      });
      await _0x571cc9.react('✅');
    } else {
      console.log("No valid response from API");
      return _0x1b249e.reply(_0x571cc9.chat, "No response received from the API.", _0x571cc9);
    }
  } catch (_0x25f87d) {
    console.error("Error during API request:", _0x25f87d);
    if (_0x25f87d.response) {
      console.error("Error response:", _0x25f87d.response.status);
      console.error("Error data:", _0x25f87d.response.data);
      return _0x1b249e.reply(_0x571cc9.chat, "Error: " + _0x25f87d.response.status + " - " + _0x25f87d.response.data, _0x571cc9);
    }
    return _0x1b249e.reply(_0x571cc9.chat, "Error: " + _0x25f87d.message, _0x571cc9);
  }
};
handler.help = ["groq <query>", 'gr'];
handler.tags = ["study"];
handler.command = /^(groq|gr|gq|)$/i;
export default handler;