// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import _0x5380b4 from 'node-fetch';
const handler = async (_0x6394b8, {
  conn: _0x472663,
  command: _0x1d1174,
  args: _0x3d47e0,
  usedPrefix: _0x1ec509
}) => {
  try {
    const _0x4cd551 = _0x3d47e0[0x0] || _0x6394b8.quoted?.["text"] || '';
    if (!_0x4cd551 || !_0x4cd551.match(/youtube\.com|youtu\.be/)) {
      throw new Error("Please provide a valid YouTube URL. Example: *" + _0x1ec509 + _0x1d1174 + "* <YouTube URL>");
    }
    console.log("Reacting with loading icon");
    if (_0x6394b8.react) {
      _0x6394b8.react('⏳');
    }
    await downloadAndSendVideo(_0x6394b8, _0x472663, _0x4cd551);
  } catch (_0x362523) {
    console.error("Handler Error:", _0x362523);
    await _0x472663.sendMessage(_0x6394b8.chat, {
      'text': "Error: " + (_0x362523.message || "Failed to process video request.")
    }, {
      'quoted': _0x6394b8
    });
  }
};
async function downloadAndSendVideo(_0x457924, _0x5bff75, _0x349fd9) {
  try {
    const _0x1ba3d9 = "https://api.yanzbotz.live/api/downloader/youtube?url=" + encodeURIComponent(_0x349fd9) + "&apiKey=" + "yanzdev";
    console.log("Requesting API:", _0x1ba3d9);
    const _0x441c1d = await _0x5380b4(_0x1ba3d9);
    if (!_0x441c1d.ok) {
      throw new Error("API Error: " + _0x441c1d.status);
    }
    const _0x2b138f = await _0x441c1d.json();
    console.log("API Response:", _0x2b138f);
    if (!_0x2b138f?.['result']?.['caption']?.["res_data"]?.['formats']) {
      throw new Error("Invalid API response structure");
    }
    const _0x3d7d0d = _0x2b138f.result.caption.res_data.formats;
    console.log("Available formats:", _0x3d7d0d);
    const _0x2a97d1 = _0x2b138f.result.caption.res_data.title || "video";
    const _0x4492ad = _0x3d7d0d.find(_0x420dd9 => _0x420dd9.quality === '360p' && _0x420dd9.vcodec !== "none" && _0x420dd9.ext === "mp4");
    if (!_0x4492ad) {
      throw new Error("360p format not available for this video.");
    }
    console.log("Selected format: " + _0x4492ad.quality + ", Size: " + _0x4492ad.filesize + " bytes");
    const _0x2aa16d = await getBuffer(_0x4492ad.url);
    const _0x56b929 = _0x4492ad.filesize / 1048576;
    if (_0x56b929 >= 0x190) {
      await _0x5bff75.sendMessage(_0x457924.chat, {
        'text': _0x4492ad.url
      }, {
        'quoted': _0x457924
      });
    } else if (_0x56b929 >= 0x64) {
      await _0x5bff75.sendMessage(_0x457924.chat, {
        'document': _0x2aa16d,
        'mimetype': "video/mp4",
        'fileName': _0x2a97d1 + ".mp4"
      }, {
        'quoted': _0x457924
      });
    } else {
      if (_0x457924.react) {
        _0x457924.react('✅');
      }
      await _0x5bff75.sendMessage(_0x457924.chat, {
        'video': _0x2aa16d,
        'mimetype': "video/mp4",
        'fileName': _0x2a97d1 + ".mp4",
        'caption': _0x2a97d1 + "\nQuality: 360p\nSize: " + _0x56b929.toFixed(0x2) + 'MB'
      }, {
        'quoted': _0x457924
      });
    }
  } catch (_0x8b4eb5) {
    console.error("Download Error:", _0x8b4eb5);
    throw new Error("Failed to download video. Please try again later.");
  }
}
async function getBuffer(_0x2ba8aa) {
  console.log("Fetching video buffer from URL:", _0x2ba8aa);
  const _0x2e7285 = await _0x5380b4(_0x2ba8aa);
  if (!_0x2e7285.ok) {
    throw new Error("Failed to download video");
  }
  return Buffer.from(await _0x2e7285.arrayBuffer());
}
handler.help = ["ytv"].map(_0x1306ff => _0x1306ff + " <YouTube URL>");
handler.tags = ["downloader"];
handler.command = ["ytv"];
export default handler;