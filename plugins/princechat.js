// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import _0x528152 from 'node-fetch';
export async function before(_0x12b8cb, {
  conn: _0x340cd1
}) {
  console.log("Chatbot feature is active.");
  try {
    if (_0x12b8cb.isBaileys || _0x12b8cb.fromMe || !_0x12b8cb.text) {
      return true;
    }
    const _0x3d3804 = ['protocolMessage', 'pollUpdateMessage', 'reactionMessage', "stickerMessage"];
    if (_0x3d3804.includes(_0x12b8cb.mtype)) {
      return true;
    }
    const _0x3cbd92 = global.db.data.chats[_0x12b8cb.chat] || {};
    const _0x93209b = _0x3cbd92.princechat || false;
    const _0x3b4554 = global.owner[0x0];
    if (_0x93209b || _0x12b8cb.sender === _0x3b4554) {
      const _0x1e2383 = await gpt3(_0x12b8cb.text);
      if (_0x1e2383) {
        await _0x12b8cb.reply(_0x1e2383);
      } else {
        await _0x12b8cb.reply("I couldn’t generate a response. Please try again.");
      }
    }
  } catch (_0x4ed1a4) {
    console.error("Error processing message:", _0x4ed1a4);
    await _0x12b8cb.reply("I’m having some trouble. Please try again later.");
  }
  return true;
}
const gpt3 = async _0x1739a5 => {
  const _0x14d99d = [{
    'role': "system",
    'content': "You are Ai Prince-chatbot With the bundles of features and quick and advance responses\nHey Buddy 👋🏻\n\nMy Creator Name Dastageer He Lives in Pakistan 🇵🇰\nProvince Sindh\nHe is A Sindhi boy Sunni Muslim boy \nMa shaa Allah he is very intelligent\nand he is 6'2 tall handsome boy\n\nHe is developer of PRINXE MD WhatsApp user bot\nhere is it repo link\n[https://github.com/PRINCE-GDS/prince-ds]\nand its WhatsApp Channel link to stay connected\n[https://whatsapp.com/channel/0029VaKNbWkKbYMLb61S1v11]\nUse Matching Emojies with every Reply\n            My CEO is Dastageer. He is 22 years old, a handsome, cute, intelligent, clever, lovely person.\n            He hate lie and lairs\ndon't anything bad about Religion infront of him otherwise he will get mad on you\nand Alhamdulillah he is Sunni Muslim Follower of Ala Hazrat Imam Ahmed Raza Khan RA \nHe Pray Five times Alhamdulillah ♥️ \nand for his life partner then tell Dastageer ak Deeni or Parda krne wali or ikhlaq wali samjdar larki se Nikah krna pasand kryga, He is still waiting for that special one jis k lea wo kuch bi kryga In shaa Allah ♥️\nand when someone ask Dastageer name mean Helper,Protector,\n            He is from Pakistan 🇵🇰 SINDH.\n            If you want to talk to my owner, here is his contact number: wa.me/923092668108. But remember, don't disturb him with unnecessary messages.\n\n            Assalamualaikum Buddy! 🥰\n            Assalamualaikum Dear! 🥰\n Darood Shareef: اَللّٰہُمَّ صَلِّ عَلٰی مُحَمَّدٍ وَّعَلٰی اٰلِہٖ وَاَصْحَابِہٖ اَجْمَعِیْنَ.\n\n           \n            Prince♥️"
  }, {
    'role': "user",
    'content': _0x1739a5
  }];
  try {
    const _0x4f1011 = await _0x528152('https://yanzgpt.my.id/chat', {
      'method': "POST",
      'headers': {
        'Accept': "application/json",
        'authorization': "Bearer yzgpt-sc4tlKsMRdNMecNy",
        'Content-Type': "application/json"
      },
      'body': JSON.stringify({
        'messages': _0x14d99d,
        'model': "yanzgpt-revolution-25b-v3.0"
      })
    });
    if (!_0x4f1011.ok) {
      throw new Error("Network response was not ok");
    }
    const _0x2b5f9d = await _0x4f1011.json();
    return _0x2b5f9d.choices[0x0].message.content;
  } catch (_0x73ab9d) {
    console.error("Error in GPT-3 request: " + _0x73ab9d.message);
    return null;
  }
};