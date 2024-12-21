// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import _0x367c33 from 'node-fetch';
let handler = async (_0x59eb49, {
  args: _0x381515,
  usedPrefix: _0x9bdd9c,
  command: _0x144dd7
}) => {
  _0x59eb49.react('⏳');
  try {
    let _0x1fe857 = await _0x367c33("https://bk9.fun/details/population");
    if (!_0x1fe857.ok) {
      throw "❎ Unable to fetch population details. Please try again later.";
    }
    let _0x2541e7 = await _0x1fe857.json();
    if (!_0x2541e7.status || !_0x2541e7.BK9) {
      throw "❎ Failed to retrieve population data.";
    }
    const _0x3f10bd = _0x2541e7.BK9;
    const _0xe9fa64 = ("\n🌍 *Current Total Population*: " + (_0x3f10bd.current.total || "Data not available") + "\n👨‍👩‍👧‍👦 *Male Population*: " + (_0x3f10bd.current.male || "Data not available") + "\n👩‍👩‍👧‍👧 *Female Population*: " + (_0x3f10bd.current.female || "Data not available") + "\n\n📅 *Births This Year*: " + (_0x3f10bd.this_year.births || "Data not available") + "\n⚰️ *Deaths This Year*: " + (_0x3f10bd.this_year.deaths || "Data not available") + "\n\n👶 *Births Today*: " + (_0x3f10bd.today.births || "Data not available") + "\n⚰️ *Deaths Today*: " + (_0x3f10bd.today.deaths || "Data not available") + "\n        ").trim();
    _0x59eb49.reply(_0xe9fa64);
  } catch (_0x5bbb82) {
    console.error(_0x5bbb82);
    _0x59eb49.reply("❎ Failed to fetch population data. Please try again later.");
  }
};
handler.help = ['population'];
handler.tags = ["study"];
handler.command = ["population", "worldpop", "populationdata"];
export default handler;