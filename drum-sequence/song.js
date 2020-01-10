/*
    Songs need:
      - Title 
      - BPM 
      - Patterns 
*/

function Song(title, bpm){
    this.title = title;
    this.bpm = bpm;
    this.patterns = [];

    this.addPattern = function(newPattern) {
       this.patterns.push(newPattern);
    }; 

    this.play = function() {
     
      if (this.patterns.length <= 0) {
        console.log('Unable to play a song without patterns 🥺');
        return;
      }

      const STEPS_IN_PATTERN = this.patterns[0].sequence.length;
      const SECONDS_PER_STEP = (parseFloat((((60/this.bpm)*4)/STEPS_IN_PATTERN).toFixed(2)) * 1000);

      for (i = 0; i < STEPS_IN_PATTERN; i++) {
        let kicking = this.patterns[0].sequence[i];
        let snaring = this.patterns[1].sequence[i];
        let hiHating = this.patterns[2].sequence[i];

        setTimeout(function(){
        
          let active = "";
          if (kicking) active += "Kick";
          if (snaring) active += "Snare";
          if (hiHating) active += "HiHat";

          if(active === "") active += "_"

          console.log(active);
        
        }, SECONDS_PER_STEP * i);
      }
    };
};

module.exports = Song;