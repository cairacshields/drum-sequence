const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });
const Song = require('./song.js');
const Pattern = require('./pattern.js');

console.log("🔥 Let's JAM 🔥");
console.log("");
console.log("");

//Define three patterns:
  //KICK PATTERN 
  //|X|_|_|_|X|_|_|_|
  const kickPattern = new Pattern('Kick', [1,0,0,0,1,0,0,0]);
  
  //SNARE PATTERN 
  //|_|_|_|_|X|_|_|_|
  const snarePattern = new Pattern('Snare', [0,0,0,0,1,0,0,0]);
  
  //HiHat PATTERN 
  //|_|_|X|_|_|_|X|_|
  const hiHatPattern = new Pattern('HiHat', [0,0,1,0,0,0,1,0]);

//Give the user a chance to set values:
readline.question("Give the song a title: ", songTitle => { 
  if (songTitle === "") songTitle = "I Will Survive";

  readline.question("Set the BPM: ", bpm => { 

    if (bpm === "") bpm = 128;

    const song = new Song(songTitle, bpm);
    const title = song.title;

    console.log("");
    console.log(`🥁 You're listening to: ${title} 🎸`);
    console.log("");
    

    //Add each pattern to the Song:
    song.addPattern(kickPattern);
    song.addPattern(snarePattern);
    song.addPattern(hiHatPattern);

    //Play the song:
    song.play();

    readline.close(); 
  });
});