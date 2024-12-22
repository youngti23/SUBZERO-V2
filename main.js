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


process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import './config.js';
import _0x245f97 from 'dotenv';
import { createRequire } from 'module';
import _0x4e23c1, { join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { platform } from 'process';
import 'ws';
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs';
import _0x2ca120 from 'yargs';
import { spawn } from 'child_process';
import _0x557676 from 'lodash';
import _0x2a285a from 'chalk';
import _0x3b2333 from 'syntax-error';
import 'os';
import { format } from 'util';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
import { Low, JSONFile } from 'lowdb';
import 'pino';
import _0x3ba07d from 'pino';
import _0xebd2a3 from 'pino';
import _0x1393cd from './lib/cloudDBAdapter.js';
import { MongoDB } from './lib/mongoDB.js';
import { PostgresDB } from './lib/postgresDB.js';
import _0x2f9fb3 from './lib/store.js';
import _0x1c4336 from './lib/tempclear.js';
import { Boom } from '@hapi/boom';
import _0x48f8fa from 'google-libphonenumber';
import 'moment-timezone';
import _0x23cfb5 from 'node-cache';
import _0x71d25f from 'readline';
import _0x2f2a5e from 'fs';
const {
  PhoneNumberUtil
} = _0x48f8fa;
const phoneUtil = PhoneNumberUtil.getInstance();
import _0x375902 from './lib/princesession.js';
const {
  DisconnectReason,
  useMultiFileAuthState,
  MessageRetryMap,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  makeInMemoryStore,
  proto,
  delay,
  jidNormalizedUser,
  PHONENUMBER_MCC,
  Browsers
} = await (await import("@whiskeysockets/baileys"))["default"];
_0x245f97.config();
async function main() {
  const _0x2b299f = process.env.SESSION_ID;
  if (!_0x2b299f) {
    console.error("Session variable not found.");
    return;
  }
  try {
    await _0x375902(_0x2b299f);
    console.log("processTxtAndSaveCredentials completed.");
  } catch (_0x4b0158) {
    console.error('Error:', _0x4b0158);
  }
}
main();
await delay(10000);
const {
  chain
} = _0x557676;
const PORT = process.env.PORT || process.env.SERVER_PORT || 0xbb8;
protoType();
serialize();
global.__filename = function filename(_0x40f703 = import.meta.url, _0x1a4a51 = platform !== "win32") {
  return _0x1a4a51 ? /file:\/\/\//.test(_0x40f703) ? fileURLToPath(_0x40f703) : _0x40f703 : pathToFileURL(_0x40f703).toString();
};
global.__dirname = function dirname(_0x4cae9d) {
  return _0x4e23c1.dirname(global.__filename(_0x4cae9d, true));
};
global.__require = function require(_0x520744 = import.meta.url) {
  return createRequire(_0x520744);
};
global.API = (_0x58d0a5, _0x2622a8 = '/', _0x156ecf = {}, _0x209f12) => (_0x58d0a5 in global.APIs ? global.APIs[_0x58d0a5] : _0x58d0a5) + _0x2622a8 + (_0x156ecf || _0x209f12 ? '?' + new URLSearchParams(Object.entries({
  ..._0x156ecf,
  ...(_0x209f12 ? {
    [_0x209f12]: global.APIKeys[_0x58d0a5 in global.APIs ? global.APIs[_0x58d0a5] : _0x58d0a5]
  } : {})
})) : '');
global.timestamp = {
  'start': new Date()
};
const __dirname = global.__dirname(import.meta.url);
global.opts = new Object(_0x2ca120(process.argv.slice(0x2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (process.env.PREFIX || "‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-").replace(/[|\\{}()[\]^$+*?.\-\^]/g, "\\$&") + ']');
global.opts.db = process.env.DATABASE_URL;
global.db = new Low(/https?:\/\//.test(opts.db || '') ? new _0x1393cd(opts.db) : /mongodb(\+srv)?:\/\//i.test(opts.db) ? new MongoDB(opts.db) : /postgresql:\/\/|postgres:\/\//i.test(opts.db) ? new PostgresDB(opts.db) : new JSONFile((opts._[0x0] ? opts._[0x0] + '_' : '') + "database.json"));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0x5c5cfb => setInterval(async function () {
      if (!global.db.READ) {
        clearInterval(this);
        _0x5c5cfb(global.db.data == null ? global.loadDatabase() : global.db.data);
      }
    }, 1000));
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  await global.db.read()['catch'](console.error);
  global.db.READ = null;
  global.db.data = {
    'users': {},
    'chats': {},
    'stats': {},
    'msgs': {},
    'sticker': {},
    'settings': {},
    ...(global.db.data || {})
  };
  global.db.chain = chain(global.db.data);
};
loadDatabase();
global.authFile = "sessions";
const {
  state,
  saveState,
  saveCreds
} = await useMultiFileAuthState(global.authFile);
const msgRetryCounterMap = _0x590941 => {};
const msgRetryCounterCache = new _0x23cfb5();
let phoneNumber = global.botNumberCode;
const methodCodeQR = process.argv.includes('qr');
const methodCode = !!phoneNumber || process.argv.includes("code");
const MethodMobile = process.argv.includes("mobile");
let rl = _0x71d25f.createInterface({
  'input': process.stdin,
  'output': process.stdout,
  'terminal': true
});
const question = _0x6ec74f => {
  rl.clearLine(rl.input, 0x0);
  return new Promise(_0x1a9711 => {
    rl.question(_0x6ec74f, _0x44b0f5 => {
      rl.clearLine(rl.input, 0x0);
      _0x1a9711(_0x44b0f5.trim());
    });
  });
};
let opcion;
if (methodCodeQR) {
  opcion = '1';
}
if (!methodCodeQR && !methodCode && !_0x2f2a5e.existsSync('./' + authFile + "/creds.json")) {
  do {
    opcion = await question("╭⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ 》  \n┊ " + _0x2a285a.blueBright("╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅") + "\n┊ " + _0x2a285a.blueBright('┊') + " " + _0x2a285a.blue.bgBlue.bold.cyan("LINKING METHOD") + "\n┊ " + _0x2a285a.blueBright("╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅") + "   \n┊ " + _0x2a285a.blueBright("╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅") + "     \n┊ " + _0x2a285a.blueBright('┊') + " " + _0x2a285a.green.bgMagenta.bold.yellow("HOW DO YOU WANT TO CONNECT?") + "\n┊ " + _0x2a285a.blueBright('┊') + " " + _0x2a285a.bold.redBright("⇢  Option 1:") + " " + _0x2a285a.greenBright("QR code.") + "\n┊ " + _0x2a285a.blueBright('┊') + " " + _0x2a285a.bold.redBright("⇢  Option 2:") + " " + _0x2a285a.greenBright("8-digit code.") + "\n┊ " + _0x2a285a.blueBright("╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅") + "\n┊ " + _0x2a285a.blueBright("╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅") + "     \n┊ " + _0x2a285a.blueBright('┊') + " " + _0x2a285a.italic.magenta("Enter only the number of") + "\n┊ " + _0x2a285a.blueBright('┊') + " " + _0x2a285a.italic.magenta("The option to connect.") + "\n┊ " + _0x2a285a.blueBright("╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅") + " \n╰" + "⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ ⋯ 》" + "\n" + _0x2a285a.bold.magentaBright("---> "));
    if (!/^[1-2]$/.test(opcion)) {
      console.log(_0x2a285a.bold.redBright("NO NUMBERS OTHER THAN " + _0x2a285a.bold.greenBright('1') + " O " + _0x2a285a.bold.greenBright('2') + ", NEITHER SPECIAL LETTERS OR SYMBOLS. " + _0x2a285a.bold.yellowBright("TIP: COPY THE OPTION NUMBER AND PASTE IT INTO THE CONSOLE.")));
    }
  } while (opcion !== '1' && opcion !== '2' || _0x2f2a5e.existsSync('./' + authFile + "/creds.json"));
}
const filterStrings = ['Q2xvc2luZyBzdGFsZSBvcGVu', "Q2xvc2luZyBvcGVuIHNlc3Npb24=", "RmFpbGVkIHRvIGRlY3J5cHQ=", "U2Vzc2lvbiBlcnJvcg==", "RXJyb3I6IEJhZCBNQUM=", 'RGVjcnlwdGVkIG1lc3NhZ2U='];
console.info = () => {};
console.debug = () => {};
["log", "warn", 'error'].forEach(_0x50451c => redefineConsoleMethod(_0x50451c, filterStrings));
const connectionOptions = {
  'logger': _0x3ba07d({
    'level': "silent"
  }),
  'printQRInTerminal': opcion == '1' ? true : !!methodCodeQR,
  'mobile': MethodMobile,
  'browser': opcion == '1' ? ["SUBZERO-MD", "Edge", '20.0.04'] : methodCodeQR ? ["SUBZERO-MD", "Edge", "20.0.04"] : ["Ubuntu", "Chrome", "20.0.04"],
  'auth': {
    'creds': state.creds,
    'keys': makeCacheableSignalKeyStore(state.keys, _0xebd2a3({
      'level': 'fatal'
    }).child({
      'level': 'fatal'
    }))
  },
  'markOnlineOnConnect': true,
  'generateHighQualityLinkPreview': true,
  'syncFullHistory': false,
  'getMessage': async _0x4733ae => {
    let _0xc43073 = jidNormalizedUser(_0x4733ae.remoteJid);
    let _0x52a039 = await _0x2f9fb3.loadMessage(_0xc43073, _0x4733ae.id);
    return _0x52a039?.["message"] || '';
  },
  'msgRetryCounterCache': msgRetryCounterCache,
  'msgRetryCounterMap': msgRetryCounterMap,
  'defaultQueryTimeoutMs': undefined,
  'version': [0x2, 0xbb8, 0x3c8d6c7b]
};
global.conn = makeWASocket(connectionOptions);
if (!_0x2f2a5e.existsSync('./' + authFile + '/creds.json')) {
  if (opcion === '2' || methodCode) {
    opcion = '2';
    if (!conn.authState.creds.registered) {
      let addNumber;
      if (!!phoneNumber) {
        addNumber = phoneNumber.replace(/[^0-9]/g, '');
      } else {
        do {
          phoneNumber = await question(_0x2a285a.bgBlack(_0x2a285a.bold.greenBright("\n\n✳️ Enter your number\n\nExample: 263719647xxx\n\n\n\n")));
          phoneNumber = phoneNumber.replace(/\D/g, '');
          if (!phoneNumber.startsWith('+')) {
            phoneNumber = '+' + phoneNumber;
          }
        } while (!(await isValidPhoneNumber(phoneNumber)));
        rl.close();
        addNumber = phoneNumber.replace(/\D/g, '');
        setTimeout(async () => {
          let _0x1ac712 = await conn.requestPairingCode(addNumber);
          _0x1ac712 = _0x1ac712?.["match"](/.{1,4}/g)?.["join"]('-') || _0x1ac712;
          console.log(_0x2a285a.bold.white(_0x2a285a.bgMagenta("LINKING CODE:")), _0x2a285a.bold.white(_0x2a285a.white(_0x1ac712)));
        }, 0x7d0);
      }
    }
  }
}
conn.isInit = false;
conn.well = false;
if (!opts.test) {
  if (global.db) {
    setInterval(async () => {
      if (global.db.data) {
        await global.db.write()["catch"](console.error);
      }
      if (opts.autocleartmp && (global.support || {}).find) {
        tmp = [os.tmpdir(), "tmp"];
        tmp.forEach(_0x2a3009 => cp.spawn("find", [_0x2a3009, "-amin", '3', "-type", 'f', '-delete']));
      }
    }, 30000);
  }
}
if (opts.server) {
  (await import('./server.js'))['default'](global.conn, PORT);
}
function runCleanup() {
  _0x1c4336().then(() => {
    console.log("┏━━━━━━⪻♻️SUBZERO AUTO-CLEAR 🗑️⪼━━━━━━•");
  })['catch'](_0x25f382 => {
    console.error("Error during temporary file cleanup:", _0x25f382);
  })["finally"](() => {
    setTimeout(runCleanup, 120000);
  });
}
runCleanup();
function purgeSession() {
  let _0x1495aa = [];
  let _0x2f13be = readdirSync('./sessions');
  let _0x4e7266 = _0x2f13be.filter(_0x9b78ee => {
    return _0x9b78ee.startsWith('pre-key-');
  });
  _0x1495aa = [..._0x1495aa, ..._0x4e7266];
  _0x4e7266.forEach(_0x57a793 => {
    unlinkSync("./sessions/" + _0x57a793);
  });
}
function purgeSessionSB() {
  try {
    let _0x1f4b5c = readdirSync("./bebots/");
    let _0x4d66f1 = [];
    _0x1f4b5c.forEach(_0x44ad90 => {
      if (statSync("./lib/bebots/" + _0x44ad90).isDirectory()) {
        let _0xcaa8a4 = readdirSync('./lib/bebots/' + _0x44ad90).filter(_0x5d1297 => {
          return _0x5d1297.startsWith("pre-key-");
        });
        _0x4d66f1 = [..._0x4d66f1, ..._0xcaa8a4];
        _0xcaa8a4.forEach(_0x23af11 => {
          unlinkSync("./lib/bebots/" + _0x44ad90 + '/' + _0x23af11);
        });
      }
    });
    if (_0x4d66f1.length === 0x0) {
      return;
    }
  } catch (_0x1c24b2) {
    console.log(_0x2a285a.bold.red("[ ℹ️ ] Something went wrong during deletion, files not deleted"));
  }
}
function purgeOldFiles() {
  const _0x503453 = ["./sessions/", './lib/bebots/'];
  const _0x3d69cf = Date.now() - 3600000;
  _0x503453.forEach(_0x1a2a19 => {
    readdirSync(_0x1a2a19, (_0x800fc7, _0x5f6ebe) => {
      if (_0x800fc7) {
        throw _0x800fc7;
      }
      _0x5f6ebe.forEach(_0x2bdf69 => {
        const _0xc0ce8 = _0x4e23c1.join(_0x1a2a19, _0x2bdf69);
        stat(_0xc0ce8, (_0x2aa625, _0x419646) => {
          if (_0x2aa625) {
            throw _0x2aa625;
          }
          if (_0x419646.isFile() && _0x419646.mtimeMs < _0x3d69cf && _0x2bdf69 !== "creds.json") {
            unlinkSync(_0xc0ce8, _0x1efa4e => {
              if (_0x1efa4e) {
                throw _0x1efa4e;
              }
              console.log(_0x2a285a.bold.green("File " + _0x2bdf69 + " Successful Erasure"));
            });
          } else {
            console.log(_0x2a285a.bold.red("File " + _0x2bdf69 + " Not deleted" + _0x2aa625));
          }
        });
      });
    });
  });
}
async function connectionUpdate(_0xcf59d6) {
  const {
    connection: _0x3b1477,
    lastDisconnect: _0x415257,
    isNewLogin: _0x520cc9
  } = _0xcf59d6;
  global.stopped = _0x3b1477;
  if (_0x520cc9) {
    conn.isInit = true;
  }
  const _0x497b56 = _0x415257?.['error']?.['output']?.["statusCode"] || _0x415257?.["error"]?.["output"]?.['payload']?.["statusCode"];
  if (_0x497b56 && _0x497b56 !== DisconnectReason.loggedOut && conn?.['ws']["socket"] == null) {
    await global.reloadHandler(true)["catch"](console.error);
    global.timestamp.connect = new Date();
  }
  if (global.db.data == null) {
    loadDatabase();
  }
  if (_0xcf59d6.qr != 0x0 && _0xcf59d6.qr != undefined || methodCodeQR) {
    if (opcion == '1' || methodCodeQR) {
      console.log(_0x2a285a.cyan("✅ SCAN THE QR CODE EXPIRES IN 45 SECONDS ✅."));
    }
  }
  if (_0x3b1477 === 'open') {
    const {
      jid: _0x579188,
      name: _0xae6c8f
    } = conn.user;
    await conn.sendMessage(_0x579188, {
      'text': "ＳＵＢＺＥＲＯ Ｖ2\n\nsᴜᴄᴄᴇssғᴜʟʟʏ ᴅᴇᴘʟᴏʏᴇᴅ✅\nIғ ʏᴏᴜ ʟɪᴋᴇ ᴛʜᴇ ʙᴏᴛ ɢɪᴠᴇ ᴀ sᴛᴀʀ 🌟\n\nᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴏғ ᴛʜɪs ʙᴏᴛ\n\nᴄʟɪᴄᴋ ʜᴇʀᴇ: https://wa.me/message/KJMSM76DFAR4H1\n\n© 2025 || ᴍʀ ғʀᴀɴᴋ ᴏғᴄ",
      'mentions': [_0x579188]
    }, {
      'quoted': null
    });
    console.log(_0x2a285a.bold.greenBright("\n▣─────────────────────────────···\n│\n│❧ Successfully connected to WhatsApp. ✅\n│\n▣─────────────────────────────···"));
  }
  let _0x39706e = new Boom(_0x415257?.["error"])?.["output"]?.['statusCode'];
  if (_0x39706e == 0x195) {
    await _0x2f2a5e.unlinkSync("./sessions/creds.json");
    console.log(_0x2a285a.bold.redBright("[ ⚠ ] Connection replaced, Please wait a moment I'm going to restart...\nIf error appears start again with : npm start"));
    process.send('reset');
  }
  if (_0x3b1477 === "close") {
    if (_0x39706e === DisconnectReason.badSession) {
      conn.logger.error("[ ⚠ ] session error please change the session by " + global.authFile + " pairing again.");
    } else {
      if (_0x39706e === DisconnectReason.connectionClosed) {
        conn.logger.warn("[ ⚠ ] Closed connection, reconnecting...");
        await global.reloadHandler(true)['catch'](console.error);
      } else {
        if (_0x39706e === DisconnectReason.connectionLost) {
          conn.logger.warn("[ ⚠ ] Lost connection to the server, reconnecting...");
          await global.reloadHandler(true)["catch"](console.error);
        } else {
          if (_0x39706e === DisconnectReason.connectionReplaced) {
            conn.logger.error("[ ⚠ ] Connection replaced, another new session has been opened. Please log out first.");
          } else {
            if (_0x39706e === DisconnectReason.loggedOut) {
              conn.logger.error("[ ⚠ ] Closed connection, Please change the session " + global.authFile + " use prince pair site or .getpair command get a new session.");
            } else {
              if (_0x39706e === DisconnectReason.restartRequired) {
                conn.logger.info("[ ⚠ ] Restart required, restart the server if you have any problems.");
                await global.reloadHandler(true)['catch'](console.error);
              } else if (_0x39706e === DisconnectReason.timedOut) {
                conn.logger.warn("[ ⚠ ] Connection time, reconnecting...");
                await global.reloadHandler(true)['catch'](console.error);
              } else {
                conn.logger.warn("[ ⚠ ] Unknown disconnect reason. " + (_0x39706e || '') + ": " + (_0x3b1477 || ''));
                await global.reloadHandler(true)["catch"](console.error);
              }
            }
          }
        }
      }
    }
  }
}
process.on("uncaughtException", console.error);
let isInit = true;
let handler = await import("./handler.js");
global.reloadHandler = async function (_0x48a669) {
  try {
    const _0x4b9025 = await import("./handler.js?update=" + Date.now())["catch"](console.error);
    if (Object.keys(_0x4b9025 || {}).length) {
      handler = _0x4b9025;
    }
  } catch (_0x296e14) {
    console.error(_0x296e14);
  }
  if (_0x48a669) {
    const _0x137881 = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch {}
    conn.ev.removeAllListeners();
    global.conn = makeWASocket(connectionOptions, {
      'chats': _0x137881
    });
    isInit = true;
  }
  if (!isInit) {
    conn.ev.off("messages.upsert", conn.handler);
    conn.ev.off("group-participants.update", conn.participantsUpdate);
    conn.ev.off("groups.update", conn.groupsUpdate);
    conn.ev.off('message.delete', conn.onDelete);
    conn.ev.off("connection.update", conn.connectionUpdate);
    conn.ev.off("creds.update", conn.credsUpdate);
  }
  conn.welcome = "Hello!! @user HOW ARE YOU?🤗\n\n『Welcome To *@subject*』\n\nNice to meet you Friend@ 🤗\n\n_Remember to read the rules of the group so that you dont have any problems 🧐_\n\n*Just enjoy this group and have fun 🥳*`";
  conn.bye = "Well, he is gone @user 👋 \n\nGod bless him 😎`";
  conn.spromote = "Hey @user is already part of the staff 👑";
  conn.sdemote = "Hahaha @user you are no longer admins";
  conn.sDesc = "The description has been changed to \n@desc";
  conn.sSubject = "The name of the group has been changed to \n@group";
  conn.sIcon = "The group icon has been changed";
  conn.sRevoke = "The group link has been changed to \n@revoke";
  conn.handler = handler.handler.bind(global.conn);
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
  conn.onDelete = handler.deleteUpdate.bind(global.conn);
  conn.connectionUpdate = connectionUpdate.bind(global.conn);
  conn.credsUpdate = saveCreds.bind(global.conn, true);
  conn.ev.on("messages.upsert", conn.handler);
  conn.ev.on("group-participants.update", conn.participantsUpdate);
  conn.ev.on("groups.update", conn.groupsUpdate);
  conn.ev.on("message.delete", conn.onDelete);
  conn.ev.on("connection.update", conn.connectionUpdate);
  conn.ev.on('creds.update', conn.credsUpdate);
  isInit = false;
  return true;
};
const pluginFolder = global.__dirname(join(__dirname, './plugins/index'));
const pluginFilter = _0x656cd4 => /\.js$/.test(_0x656cd4);
global.plugins = {};
async function filesInit() {
  for (const _0x309167 of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      const _0x460ca1 = global.__filename(join(pluginFolder, _0x309167));
      const _0x5f3fd1 = await import(_0x460ca1);
      global.plugins[_0x309167] = _0x5f3fd1["default"] || _0x5f3fd1;
    } catch (_0xd89191) {
      conn.logger.error(_0xd89191);
      delete global.plugins[_0x309167];
    }
  }
}
filesInit().then(_0x578378 => Object.keys(global.plugins))["catch"](console.error);
global.reload = async (_0x4d25de, _0x2f885e) => {
  if (/\.js$/.test(_0x2f885e)) {
    const _0x191116 = global.__filename(join(pluginFolder, _0x2f885e), true);
    if (_0x2f885e in global.plugins) {
      if (existsSync(_0x191116)) {
        conn.logger.info("Updated plugins: '" + _0x2f885e + "'");
      } else {
        conn.logger.warn("delete plugins: '" + _0x2f885e + "'");
        return delete global.plugins[_0x2f885e];
      }
    } else {
      conn.logger.info("Nuevo plugins:  '" + _0x2f885e + "'");
    }
    const _0x21bf92 = _0x3b2333(readFileSync(_0x191116), _0x2f885e, {
      'sourceType': 'module',
      'allowAwaitOutsideFunction': true
    });
    if (_0x21bf92) {
      conn.logger.error("❌ Syntax error when loading '" + _0x2f885e + "'\n" + format(_0x21bf92));
    } else {
      try {
        const _0x5058b2 = await import(global.__filename(_0x191116) + "?update=" + Date.now());
        global.plugins[_0x2f885e] = _0x5058b2['default'] || _0x5058b2;
      } catch (_0x5158a9) {
        conn.logger.error("❌ Error requires plugins: '" + _0x2f885e + "\n" + format(_0x5158a9) + "'");
      } finally {
        global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([_0x138d61], [_0x20e20a]) => _0x138d61.localeCompare(_0x20e20a)));
      }
    }
  }
};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
  let _0xe7bad8 = await Promise.all([spawn("ffmpeg"), spawn("ffprobe"), spawn("ffmpeg", ["-hide_banner", "-loglevel", 'error', "-filter_complex", "color", "-frames:v", '1', '-f', "webp", '-']), spawn('convert'), spawn("magick"), spawn('gm'), spawn("find", ['--version'])].map(_0x364199 => {
    return Promise.race([new Promise(_0x594305 => {
      _0x364199.on("close", _0x37c803 => {
        _0x594305(_0x37c803 !== 0x7f);
      });
    }), new Promise(_0x222ff4 => {
      _0x364199.on("error", _0xdb653b => _0x222ff4(false));
    })]);
  }));
  let [_0x161ba3, _0x4036bc, _0x743ce4, _0x52c369, _0x3733c3, _0x2e1e70, _0x20b686] = _0xe7bad8;
  console.log(_0xe7bad8);
  Object.freeze(global.support);
}
_quickTest().then(() => conn.logger.info("Loading．．．.\n"))["catch"](console.error);
function redefineConsoleMethod(_0x4a3328, _0x2cf5c4) {
  const _0x48e13a = console[_0x4a3328];
  console[_0x4a3328] = function () {
    const _0x531195 = arguments[0x0];
    if (typeof _0x531195 === 'string' && _0x2cf5c4.some(_0x3c20b6 => _0x531195.includes(atob(_0x3c20b6)))) {
      arguments[0x0] = '';
    }
    _0x48e13a.apply(console, arguments);
  };
}
async function isValidPhoneNumber(_0x3325af) {
  try {
    _0x3325af = _0x3325af.replace(/\s+/g, '');
    if (_0x3325af.startsWith("+920")) {
      _0x3325af = _0x3325af.replace('+920', '+92');
    } else if (_0x3325af.startsWith('+92') && _0x3325af[0x4] === '1') {
      _0x3325af = _0x3325af.replace("+92 0", '+92');
    }
    const _0x3d3ab4 = phoneUtil.parseAndKeepRawInput(_0x3325af);
    return phoneUtil.isValidNumber(_0x3d3ab4);
  } catch (_0x30adcd) {
    return false;
  }
}
