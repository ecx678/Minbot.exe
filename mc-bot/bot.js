const mineflayer = require('mineflayer');

console.log('Försöker ansluta till servern...');

const bot = mineflayer.createBot({
  host: 'localhost', // Eller en lokal server på din dator ('localhost')
  username: 'iwefwefwhkfhdwfwwewk',
  version: '1.20.1' // Ändra till den version som servern kräver
});

// Det här kommer att triggas så fort botten lyckas ta sig förbi nätverkslagret
bot.once('login', () => {
  console.log('Ansluten till servern! Väntar på att spawna...');
});

bot.once('spawn', () => {
  console.log('✅ Framgång! Boten har spawnat i världen.');
  bot.chat('Hej världen!');
});

// Fånga upp fel direkt om anslutningen misslyckas
bot.on('error', (err) => console.log('❌ Mineflayer-fel:', err.message));
bot.on('kicked', (reason) => console.log('❌ Boten blev utsparkad:', reason));
