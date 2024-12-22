const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU23KqSBT9l37VHLmJYFWqBrwheENQ0anz0EIDHaHBphEx5b9PEZNKHuZkMm9dfVl79Vpr71dAMlwgC9Wg/wpyii+QoWbJ6hyBPtDLMEQUtEEAGQR9oIyyTuLQbI3Lc+Rtqolhjt1x2m3NuPFetyuVQWeewSrbKM/g3gZ5eUyw/w1g94BnS0U5edJEn8k3NKrgQRXDVhEH+3mhVvPd0NAcsXXUTs/g3iBCTDGJRnmMUkRhYqF6BTH9Gf2duY2XoXehQz4I3f1wca1uPU5defAYk53AIit15fgWbwn3M/peTWLSEiOlo3CCb4xXB88y1IMcewu5mo28aQSLnjIJOS160C9wRFAwDRBhmNU/1n050g3pIsyKDTeMl2s/QJMlWoeJlE7I/OawXjA4Zu7MNEXpZ8Q5yR0dBVXKu565RwbuzZY3MqutarqnizCdQYH28NoyXdf/SnxFP7Jy+j+6o6WxG6RxAFfdVT5MbbucaGEhTF7cCF21dIU2od6SBV9NTj+jL07tsTPTks2Bv5ii0ZWC6anj1Lv1/Eb8F/tmK1a0k0su3k4/6UNW0u9YJodtdlyvF6Jj+LVUyTE57a0F1LJ1JfdcAal7GvAvXVd66SxKUfE1u1rxS3Pbu45nah1aK6qYFOuONE7c8S5L7ZXUi6Lntx+dUD0NQJ+/twFFES4YhQxnpNmT1DaAwcVBPkXsTV3ATcptlWpb5aCY8k0T1pEYVppCgmFttTg+NGKBakGy3gTKM2iDnGY+KgoUGLhgGa3nqChghArQ//t3GxB0ZQ/fmmoi3wYhpgXbkDJPMhh8mPpxCH0/KwlzauIPmgWioM99biPGMImKRsaSQOrH+IIGMWQF6IcwKdC9DQJ0wT5q8IAxYmduwCnOBhoL6+oX9nUu2A3lOCOPK0jtKQEvdp+4MBCepKDHP0EVik+C0O1Kx+4x4CAEbYDfW6Z580cHVb7ckTx40R3lPGfasKa8LPvFbLD031x4SI8oCkCf0RK1wRH6pzJ3sxMi3+Dul7o+FDJbqDuqv4KKcjitzuMLVx2zL7gPS0H/9XNMDbKgwTP0na3qWxO0QfqWQNz8XJV6gqKoMicpfV76q/hVNTrCPP9FEGtg3zVvHgSIQZwUoA8GsxY7T6fj0eo8JLSYTDQ/0gaRBj49+sj6I0zuUh8GM3KzvINtzFUZXaszjzZX/7RTRjY3XRhx2BJPhMb+87+ANHHkEqHwtmjiywNB9KLzzVlqqSSw4aBWxSuvHWUTTzTqDCYQqqlR4JHpa73EWc+hujgfa9bNF5mzOG7JZZclFq1b+dB+bqo9svK1mGNUmh/NV1uZMzvlrlBEL51vkgmfuqMO1606RBc7mY9h79SZ29pIOu5M+bw5DredF1deC2bNtSaxZFwiMa3NtWVd4grbjy58mwLJ+/TFbw3y+p6sEKO3YUZg49B/ePM149y9/QXifTr+IUf65hbZotNV6kTY6LcVIoVvMS+Ze+b4oo8Wg+Fa8jqsa8qSB+73322QJ5CFGU1BH0AS0AwHoA0SWDDts01dnKKCwTQHfb4nSooo9yTx/g/yoj8M2wcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

