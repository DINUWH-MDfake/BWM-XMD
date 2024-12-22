const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU23KqSBT9l37VHLmKWpWqQUAkXgAFRKfOQwPNReQSaEBI+e9TaFLJw5xMhqeubnrt1Wutvd9AmkUlWqEWzN5AXkQ1xKhf4jZHYAbmle+jAgyBBzEEM1Cu60kSKFe6m0qcYo4GL4MrPCyoxE+6q9SE7KZZiLR2WZvlM7gNQV45l8j9BnAvrSsnYlckOlb+NdmENHM6rR29XgSNT9WGOKiPfjtBohA8g1uPCKMiSgMpD1GCCnhZoVaDUfEz+qbQDhZzTm8pM1L2k+O1wFBXVmxolc7p9Wz6iWI5o9ZqyPhn9HERM8py59m2bQWsnw2EUcbPVU7ttiwZULQpc1NazDMtKB/0yyhIkad4KMURbn+sO7+0q/qYsrAkwjA9poZyNGxpzvvGdLFXFDLmYtEVXDklsp8RV0+Nz62tfKtyQsjmPhU0SUOWrUqc9qu5O/bjqacdLdMUza/EteIjK/H/0T3TBupSDejOkpl5JEWmJ15OS7Nbt8loty9ShFi5Mt01Rx9/Rr+Ztq80ejFSFp5GO/28UPJdfqbSXO10GqfyuVo6544g6nnwSR/iqviO5XrNOCOYJt52O3YlwoRWLCovFqNfKZZfFKZDMM5uFB/G/hROtkfsXLKYcmPpcuhW68lkow30pEuPY3cXwiki60O8t0P++f6iGLWKB2bkbQgKFEQlLiCOsvS+R4+HAHr1HrkFwnd5QajDnOZGdRcru1NuBKLxelGtvXFYVHNdtnwbG11lvIxrJ3sGQ5AXmYvKEnnLqMRZ0W5QWcIAlWD29+8hSNEVP4zry43JIfCjosRmWuWXDHofrn4cQtfNqhTv29QV+gUqwIz43EYYR2lQ9jpWKSzcMKqREEJcgpkPLyW6DYGH6shFPR7Q9Gsh4LG2p9G0VXNVt60x4nvKYZY+fmFYDzIu4TxRjEs+MdSEfJp4LHziIMGwPiSnLqLBEETvPdPf+aOFykkONiYjGeVBOHbaqT3XrGuI3Naa3G14aI8K5IEZLio0BA504yo3shil3+AWymC+HB90t1GDcuvop4MuTFd26B/NL7gPT8Hs7XNOCZnX4/H2iqImCxsMQXKPYNS/fMpwFEExzHRCzmj6r/JX0+sI8/xXinAP+655f8FDGEaXEsyAoKiXc8kvpE3BZ+tSlnkp4IWgF/XDo4+wP8LE7nz9yLldAn1O1MoXSKXMGBHiocNzsTGEIGFOYyK0tQPx/C8gfRxNu+1OWhZ3a1Fous7lJDczqlUZkjoJX5ttF00pDtbVS5Rdzf0BbgZSMjjUrE0bW9dFCqK9LhG5tZgnBbqm4gHZQvPcV3tk5WsxQ8Tu2pWdHcOE8WLUnRPv9TThZbSDu+uOG4+1biNzmYHkRGPVsUMepky2Viy1el3uHSurTMk2XzXBtVNbkq2jPYFupD/a8D4GLu/jN7o3yNt7svwI3adZCnuH/sObrxknbsMvEO/j8Q85miPTJmSV3rBJOmg6TjjgfKCmmCdLTtcnUpO9VDLCitWRGNxuv4cgv0DsZ0UCZgCmXpFFHhiCCywx/9mmRpSgEsMkBzOSo5kJx1EcNQRJy+f5HkP80d2A77/Vcg5u/wDlCMSH+QcAAA==',
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

