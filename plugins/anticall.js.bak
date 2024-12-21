conn.ev.on("call", async _0x325267 => {
  const _0x1c161d = process.env.REJECTSCALLS === "true";
  if (_0x1c161d) {
    for (let _0x3b2754 of _0x325267) {
      if (_0x3b2754.status === "offer") {
        const _0x317ba1 = {
          text: "*`ANTICALL IS ACTIVATED`*\n*`THAT'S WHY DON'T DISTURB ME BY CALLING AGAIN AND AGAIN`*\n*`HERE IS MY BOT OWNER`*\n\nᴘʀɪɴᴄᴇ ᴍᴅ "
        };
        let _0x466c21 = await conn.sendMessage(_0x3b2754.from, _0x317ba1);
        conn.sendContact(_0x3b2754.from, global.owner, _0x466c21);
        await conn.rejectCall(_0x3b2754.id, _0x3b2754.from);
      }
    }
  }
});