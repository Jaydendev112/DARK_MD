const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': "repo",
  'aliases': ['sc', "script"],
  'reaction': '🩵',
  'nomFichier': __filename
}, async (_0x4faba6, _0x3b2b1e, _0x580963) => {
  const {
    repondre: _0x422847,
    auteurMessage: _0x2cdfbb
  } = _0x580963;
  try {
    const _0xa65b34 = await fetch("https://api.https://github.com/Jaydendev112/DARK-md");
    const _0x530166 = await _0xa65b34.json();
    if (_0x530166) {
      const _0x28407a = {
        'stars': _0x530166.stargazers_count,
        'forks': _0x530166.forks_count,
        'update': _0x530166.updated_at,
        'owner': _0x530166.owner.login
      };
      const _0x5346f1 = new Date(_0x530166.created_at).toLocaleDateString("en-GB");
      const _0x3b06e3 = "*HEY 👋 THIS IS DARK MD.*\n\nI'm A WhatsApp bot created by *®DARK UCEY TECH*.\n\n[⭐] *STARS:* - " + _0x28407a.stars + "\n[🍴] *FORKS:* - " + _0x28407a.forks + "\n[📅] *RELEASE DATE:* - " + _0x5346f1 + "\n[🚇] *REPO:* - " + _0x530166.html_url + "\n[🚜] *OWNER:* - *DARK TECH* \n__________________________________\n *Made With* 🩵";
      await _0x3b2b1e.sendMessage(_0x4faba6, {
        'text': _0x3b06e3,
        'contextInfo': {
          'mentionedJid': [_0x2cdfbb],
          'externalAdReply': {
            'title': "THE POPKID XTECH BOT",
            'body': "MADE BY POPKID",
            'thumbnailUrl': "https://files.catbox.moe/w5xf3f.jpg",
            'sourceUrl': "https://whatsapp.com/channel/0029VarDt9t30LKL1SoYXy26",
            'mediaType': 0x1,
            'renderLargerThumbnail': true
          }
        }
      });
    } else {
      console.log("Could not fetch data");
      _0x422847("An error occurred while fetching the repository data.");
    }
  } catch (_0xb7abb3) {
    console.error("Error fetching repository data:", _0xb7abb3);
    _0x422847("An error occurred while fetching the repository data.");
  }
});
