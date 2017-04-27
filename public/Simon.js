$(document).ready(function () {
      var userSequence = [];
      var comSequence = [];
      var countSeq = 0;
      var strictMode = false;


// original game mode
      $('#btn-original').on('click', function(){
        $(this).addClass('.buttonmode');
        strictMode = false;
        if ($('#btn-strict').hasClass('.buttonmode')){
          $('#btn-strict').removeClass('.buttonmode');
        } else{
          return;
        }
      })


//strict mode button
      $('#btn-strict').on('click',function(){
        $(this).addClass('.buttonmode');
        strictMode = true;
        if ($('#btn-original').hasClass('.buttonmode')){
          $('#btn-original').removeClass('.buttonmode');
        } else{
          return;
        }


  })


// Check if strict or normal mode
      function strict_orig() {
        if (strict = true) {
          //something about restarting game if wincheck is false
        } // i dont think i will need an else statment but i could be wrong

      }


//counter display
      function update_count() {
        countSeq++;
        $('#count').text(countSeq);
      }


//win check
      function win_check() {
        if (countSeq >= 20) {
          console.log("Game Over, You Win");
        } else {
          userSequence = [];
        }
      }


//Computer turn
      function comTurn(){
        var ranNum = Math.floor(Math.random()*4);
        var randomID = "#" + ranNum;
        comSequence.push(ranNum);
        update_count();
        console.log(comSequence);
        return;
      }


// Computer to repeat sequence if user entered incorrect sequence
  //Original mode only
      function sequence_repeat(){

      }


//Start Button
      $('#start').on('click', function () {
        userSequence = [];
        comSequence = [];
        countSeq = 0;
        comTurn();

      })


//Sequence Check
      function sequence_check() {
        if (userSequence.toString() === comSequence.toString()) {
          win_check();
          console.log("yay")
          comTurn();
        } else{
          console.log("nay")
          if (strictMode === false){
            userSequence=[];
            sequence_repeat();
          } else {
            userSequence=[];
            comSequence=[];
            countSeq= 0;
          }
        }
      }


// coloured button click and added to sequence
      $('.but').on('click', function() {
        $(this).addClass('redclick').delay(500).removeClass('redclick');
        userSequence.push(this.id);
        if (userSequence.length === comSequence.length){
          sequence_check();
        }
        })


})
