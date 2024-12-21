// PRINCE PROPERTY DON'T TOUCH IT OTHERWISE YOU WILL BE FAMOUS IN THE DEPLOYERS AS A CODE THEIF AND JUNIOR DEVELOPER

import _0x4d1add from 'pg';
const {
  Pool
} = _0x4d1add;
export class PostgresDB {
  constructor(_0xd33f4e, _0x47976d = {}) {
    this.url = _0xd33f4e;
    this.options = _0x47976d;
    const _0x5c55f0 = {
      rejectUnauthorized: false,
      'sslmode': "require"
    };
    this.pool = new Pool({
      'connectionString': this.url,
      'ssl': _0x5c55f0,
      ...this.options
    });
    this.data = this._data = {};
    this.READ = null;
  }
  async ["init"]() {
    try {
      console.log("Initializing PostgreSQL...");
      await this.connectWithRetry();
      await this.pool.query("\n        CREATE TABLE IF NOT EXISTS public.data (\n          key TEXT PRIMARY KEY,\n          value JSONB NOT NULL,\n          created_at TIMESTAMP DEFAULT NOW()\n        );\n      ");
      console.log("PostgreSQL table ensured.");
      const _0x31eec2 = await this.pool.query("SELECT to_regclass('public.data');");
      if (_0x31eec2.rows[0].to_regclass === null) {
        console.error("Table \"public.data\" does not exist!");
        throw new Error("Table does not exist");
      }
      console.log("Table \"public.data\" exists.");
      await this.read();
    } catch (_0x17f010) {
      console.error("Failed to initialize PostgreSQL:", _0x17f010.message);
      throw _0x17f010;
    }
  }
  async ["connectWithRetry"]() {
    let _0x3e62bb = 5;
    while (_0x3e62bb > 0) {
      try {
        await this.pool.connect();
        console.log("PostgreSQL connected✅");
        break;
      } catch (_0x57b148) {
        console.error("PostgreSQL connection failed. Retries left: " + (_0x3e62bb - 1), _0x57b148.message);
        _0x3e62bb -= 1;
        if (_0x3e62bb === 0) {
          throw new Error("PostgreSQL connection failed after multiple attempts.");
        }
        await new Promise(_0x3bc234 => setTimeout(_0x3bc234, 3000));
      }
    }
  }
  async ['read']() {
    if (this.READ) {
      return new Promise(_0xc639cc => setInterval(async () => {
        if (!this.READ) {
          clearInterval(this);
          _0xc639cc(this.data || this.read());
        }
      }, 1000));
    }
    this.READ = true;
    try {
      const _0x24438f = await this.pool.query("SELECT key, value FROM public.data");
      this._data = _0x24438f.rows.reduce((_0x3a1f01, _0xc8050a) => {
        _0x3a1f01[_0xc8050a.key] = _0xc8050a.value;
        return _0x3a1f01;
      }, {});
      this.data = {
        'users': {},
        'chats': {},
        'stats': {},
        'msgs': {},
        'sticker': {},
        'settings': {},
        ...(this._data || {})
      };
      console.log("Data loaded from PostgreSQL.");
    } catch (_0x4543fe) {
      console.error("Error reading data from PostgreSQL:", _0x4543fe.message);
      throw _0x4543fe;
    } finally {
      this.READ = null;
    }
    return this.data;
  }
  async ["write"](_0x43a6d1) {
    if (!_0x43a6d1 || typeof _0x43a6d1 !== "object") {
      throw new Error("Invalid data. Must be a non-empty object.");
    }
    try {
      await this.pool.query("\n        CREATE TABLE IF NOT EXISTS public.data (\n          key TEXT PRIMARY KEY,\n          value JSONB NOT NULL,\n          created_at TIMESTAMP DEFAULT NOW()\n        );\n      ");
      const _0x1682c0 = [];
      for (const [_0x38603a, _0x2c4d70] of Object.entries(_0x43a6d1)) {
        await this.pool.query("\n          INSERT INTO public.data (key, value)\n          VALUES ($1, $2::jsonb)\n          ON CONFLICT (key)\n          DO UPDATE SET value = $2::jsonb, created_at = NOW();\n        ", [_0x38603a, JSON.stringify(_0x2c4d70)]);
        _0x1682c0.push(_0x38603a);
      }
      console.log("Data saved to PostgreSQL for keys: " + _0x1682c0.join(", "));
      this.data = {
        ...this.data,
        ..._0x43a6d1
      };
      return true;
    } catch (_0x1be084) {
      console.error("Error writing to PostgreSQL:", _0x1be084.message);
      console.error(_0x1be084.stack);
      throw _0x1be084;
    }
  }
  async ["update"](_0x493fc2, _0x32bb7a) {
    if (!_0x493fc2) {
      throw new Error("Key is required to update data.");
    }
    this.data[_0x493fc2] = _0x32bb7a;
    const _0x53cb2e = {
      _0x493fc2: _0x32bb7a
    };
    return this.write(_0x53cb2e);
  }
  async ["close"]() {
    try {
      await this.pool.end();
      console.log("PostgreSQL connection pool closed.");
    } catch (_0x3e4f32) {
      console.error("Error closing PostgreSQL connection pool:", _0x3e4f32.message);
    }
  }
}