// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER
//princegpt

import _0x1347d7 from 'node-fetch';
export async function before(_0x1da4f0, {
  conn: _0x736f58
}) {
  console.log("Chatbot feature is active.");
  try {
    await _0x1da4f0.react('⏳');
    const _0x22e2c9 = global.owner[0];
    if (_0x1da4f0.sender === _0x22e2c9) {
      const _0x53788a = await gpt3(_0x1da4f0.text);
      if (_0x53788a) {
        await _0x1da4f0.reply(_0x53788a);
      } else {
        await _0x1da4f0.reply("I couldn’t generate a response. Please try again.");
      }
    }
    await _0x1da4f0.react('✅');
  } catch (_0x4508df) {
    console.error("Error processing message:", _0x4508df);
    await _0x1da4f0.reply("I’m having some trouble. Please try again later.");
    await _0x1da4f0.react('❌');
  }
  return true;
}
const gpt3 = async _0x1dbb33 => {
  const _0x4c95ec = {
    role: 'system',
    content: "You are Ai Prince-chatbot With the bundles of features and quick and advance responses.\nHey Buddy 👋🏻\n\nMy Creator Name Dastageer. He Lives in Pakistan 🇵🇰\nProvince Sindh. He is A Sindhi boy Sunni Muslim boy.\nMa shaa Allah he is very intelligent\nand he is 6'2 tall handsome boy.\n\nHe is developer of PRINCE MD WhatsApp user bot\nhere is it repo link\n[https://github.com/DASTAGHIR/PRINCEMD]\nand its WhatsApp Channel link to stay connected\n[https://whatsapp.com/channel/0029VaKNbWkKbYMLb61S1v11].\nUse Matching Emojies with every Reply.\nMy CEO is Dastageer. He is 22 years old, a handsome, cute, intelligent, clever, lovely person.\nHe hates lies and liars.\nDon't say anything bad about Religion in front of him; otherwise, he will get mad at you.\nAlhamdulillah he is a Sunni Muslim Follower of Ala Hazrat Imam Ahmed Raza Khan RA.\nHe prays five times Alhamdulillah ♥️.\nFor his life partner, he prefers a Deeni, Parda krne wali, ikhlaq wali samjdar larki se Nikah krna pasand kryga. He is still waiting for that special one jis k lea wo kuch bi kryga In shaa Allah ♥️.\nWhen someone asks about Dastageer's name, it means Helper, Protector.\nHe is from Pakistan 🇵🇰 SINDH.\nIf you want to talk to my owner, here is his contact number: wa.me/923092668108. But remember, don't disturb him with unnecessary messages.\n\nAssalamualaikum Buddy! 🥰\nAssalamualaikum Dear! 🥰\nDarood Shareef: اَللّٰہُمَّ صَلِّ عَلٰی مُحَمَّدٍ وَّعَلٰی اٰلِہٖ وَاَصْحَابِہٖ اَجْمَعِیْنَ.\n\nPrince♥️"
  };
  const _0x20b7dd = {
    role: "user",
    content: _0x1dbb33
  };
  const _0x45c646 = [_0x4c95ec, _0x20b7dd];
  try {
    const _0xc6493c = await _0x1347d7('https://yanzgpt.my.id/chat', {
      'method': "POST",
      'headers': {
        'Accept': "application/json",
        'authorization': "Bearer yzgpt-sc4tlKsMRdNMecNy",
        'Content-Type': "application/json"
      },
      'body': JSON.stringify({
        'messages': _0x45c646,
        'model': 'yanzgpt-revolution-25b-v3.0'
      })
    });
    if (!_0xc6493c.ok) {
      throw new Error("Network response was not ok");
    }
    const _0x1b10a8 = await _0xc6493c.json();
    return _0x1b10a8.choices[0].message.content;
  } catch (_0x5953b5) {
    console.error("Error in GPT-3 request: " + _0x5953b5.message);
    return null;
  }
};
let handler = async (_0x10e06a, {
  conn: _0x4a1537,
  text: _0x563cb2,
  usedPrefix: _0x2807dc,
  command: _0x304c9b
}) => {
  if (!_0x563cb2) {
    throw "*Example:* *" + (_0x2807dc + _0x304c9b) + " Hello*";
  }
  try {
    await _0x10e06a.react('⏳');
    const _0x3581a0 = await gpt3(_0x563cb2);
    if (_0x3581a0) {
      await _0x10e06a.reply(_0x3581a0);
    } else {
      await _0x10e06a.reply("I couldn’t generate a response. Please try again.");
    }
    await _0x10e06a.react('✅');
  } catch (_0x4cbba5) {
    console.error("Error in test command:", _0x4cbba5);
    await _0x10e06a.reply("I’m having some trouble. Please try again later.");
    await _0x10e06a.react('❌');
  }
};
handler.help = ["gpt <query>"];
handler.tags = ["study"];
handler.command = /^(gpt)$/i;
export default handler;