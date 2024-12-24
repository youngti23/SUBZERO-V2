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

import { fileURLToPath } from 'url';
import _0x5ce7ef from 'path';
import { writeFileSync } from 'fs';
import _0x455105 from 'node-fetch';
import * as _0x401d0f from 'megajs';
async function processTxtAndSaveCredentials(_0x38952d) {
  const _0x3da3b1 = fileURLToPath(import.meta.url);
  const _0x400f0e = _0x5ce7ef.dirname(_0x3da3b1);
  let _0x57cfc6;
  const _0x57dfba = /^[a-zA-Z0-9+/]+={0,2}$/.test(_0x38952d);
  const _0x1a22cb = _0x38952d.startsWith("Subzero~");
  if (_0x57dfba) {
    _0x57cfc6 = Buffer.from(_0x38952d, "base64").toString("utf-8");
  } else {
    if (_0x1a22cb) {
      const _0x57679b = _0x38952d.replace("Subzero~", '');
      const _0x44f630 = 'https://mega.nz/file/' + _0x57679b;
      console.log("Mega URL:", _0x44f630);
      const _0x1bff27 = _0x401d0f.File.fromURL(_0x44f630);
      try {
        const _0x5766d9 = _0x1bff27.download();
        let _0x212b04 = '';
        for await (const _0x271f7c of _0x5766d9) {
          _0x212b04 += _0x271f7c.toString();
        }
        _0x57cfc6 = _0x212b04;
      } catch (_0x45946b) {
        console.error("Error downloading from Mega.nz:", _0x45946b);
        return;
      }
    } else {
      const _0x4aada0 = "https://gurupaste.gurucharan-saho.repl.co/pastes?action=getpaste&id=" + _0x38952d;
      try {
        const _0x206489 = await _0x455105(_0x4aada0);
        const _0x5b7726 = await _0x206489.json();
        const _0x463bee = _0x5b7726.content;
        _0x57cfc6 = Buffer.from(_0x463bee, "base64").toString('utf-8');
      } catch (_0x5eac45) {
        console.error("Error retrieving or processing data:", _0x5eac45);
        return;
      }
    }
  }
  try {
    const _0x5894c0 = _0x5ce7ef.join(_0x400f0e, '..', "sessions", "creds.json");
    writeFileSync(_0x5894c0, JSON.stringify(JSON.parse(_0x57cfc6), null, 0x2));
    console.log("Credentials saved to creds.json");
  } catch (_0x50632b) {
    console.error("Error saving credentials:", _0x50632b);
  }
}
export default processTxtAndSaveCredentials;
