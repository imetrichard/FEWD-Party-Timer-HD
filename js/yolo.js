console.log("yolo");

var start = function () {
  function tick () {
    var sec = document.getElementById("secs");
    var s = parseInt(sec.innerText);

      if (s === 0) {
        clearInterval(intervalID);
        document.getElementById("party").style.background='url("img/party3.gif") center center';
        document.getElementById("party").style.backgroundSize='cover';
        document.getElementById('audio').play();
        document.getElementById("reset").style.display = 'block';
        document.getElementById("start").style.display = 'none';

      }
      else {
        sec.innerText = s - 1;
      }
  }
  var place;
  setTimeout(function () {
    place = setInterval(function () {
       var randomnumber=Math.floor(Math.random()*1200);
       document.getElementById("dance").style.display = 'inline';
       document.getElementById("dance").style.left = randomnumber + "px";
       document.getElementById("dance").style.right = randomnumber + "px";
       console.log('interval')
     }, 1000);

   }, 10000);

  setTimeout(function () {
      document.getElementById("dance2").style.display = 'inline';
  }, 13400);

  setTimeout(function () {
    clearInterval(place);
    document.getElementById("dance").style.display = 'none';
    document.getElementById("dance2").style.display = 'none';
    document.getElementById("party").style.background='url(" ") center center';
   }, 29000);

  var intervalID = setInterval(tick, 1000);
}

var reset = function () {
  document.getElementById("dance").style.display = 'none';
  document.getElementById("dance2").style.display = 'none';
  document.getElementById("start").style.display = 'block';
  document.getElementById("reset").style.display = 'none';
  document.getElementById("party").style.background='url(" ") center center';
  document.getElementById('audio').pause();
  document.getElementById("secs").innerText = "5";
}