let handler = async (_0x59f345, {
  conn: _0x333719,
  args: _0x26ed48,
  usedPrefix: _0x4b8348,
  command: _0x4d0e47
}) => {
  let _0x308d3d = _0x26ed48.join(" ");
  let _0x5385a0 = _0x308d3d.split("|")[0];
  let _0xfd01a7 = _0x308d3d.split("|")[1];
  if (!_0x308d3d) {
    return _0x59f345.reply("Enter API Key\n*" + mssg.example + "*: " + _0x4b8348 + "apikey princebot");
  }
  await _0x333719.sendMessage(_0x59f345.chat, {
    "react": {
      "text": "🔍",
      "key": _0x59f345.key
    }
  });
  const _0xc656ab = await YanzGPT(_0x5385a0, _0xfd01a7);
  await _0x333719.sendMessage(_0x59f345.chat, {
    "text": _0xc656ab.message.replace(/####/g, '').replace(/###/g, '').replace(/##/g, '') + "\n\n-----------------------------------\n*𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻:* " + _0x5385a0 + "\n*𝗠𝗼𝗱𝗲𝗹:* " + _0xfd01a7 + "\n-----------------------------------"
  }, {
    "quoted": _0x59f345
  });
  if (_0xc656ab.image) {
    try {
      const _0x333c53 = Buffer.from(_0xc656ab.image, "base64");
      console.log(_0x333c53);
      const _0x43bbae = {
        image: _0x333c53,
        caption: "𝗜𝗺𝗮𝗴𝗲 𝗳𝗿𝗼𝗺 𝗣𝗿𝗶𝗻𝗰𝗲𝗚𝗣𝗧",
        mimetype: "image/jpeg"
      };
      await _0x333719.sendMessage(_0x59f345.chat, _0x43bbae, {
        "quoted": _0x59f345
      });
    } catch (_0x370b32) {
      console.log("Error sending image:", _0x370b32);
    }
  }
  await _0x333719.sendMessage(_0x59f345.chat, {
    "react": {
      "text": "✅️",
      "key": _0x59f345.key
    }
  });
};
const YanzGPT = async (_0x2c7207, _0x25b303) => {
  try {
    const _0x115dc1 = {
      "Content-Type": "application/json"
    };
    const _0x561923 = {
      query: _0x2c7207,
      model: _0x25b303
    };
    const _0x4b2366 = await fetch("https://yanzgpt.my.id/chat", {
      "method": "POST",
      "headers": _0x115dc1,
      "body": JSON.stringify(_0x561923)
    });
    if (!_0x4b2366.ok) {
      throw new Error("HTTP error! status: " + _0x4b2366.status);
    }
    const _0x3789bb = await _0x4b2366.json();
    return _0x3789bb;
  } catch (_0x5cd724) {
    throw _0x5cd724;
  }
};
handler.help = ["gdsai"];
handler.tags = ["tools"];
handler.command = ["gettingwait"];
export default handler;