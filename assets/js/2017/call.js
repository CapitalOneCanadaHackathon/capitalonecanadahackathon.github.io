/*
  Simple slider for the GTC call outs
*/

var bgcolors = new Array();
bgcolors[0] = "#004977";
bgcolors[1] = "#018BBB";
bgcolors[2] = "#004977";

var messages = new Array();
messages[0] = "We&#8217;re back! Be a part of something truly inspiring.";
messages[1] = "Use digital for good.";
messages[2] = "Calling all tech wizards with heart.";

var current_position = 0;

function GoLeft()
{
  current_position = current_position == 0 ? 0 : current_position - 1;
  document.getElementById("gtc-slider").innerHTML = messages[current_position];
  document.body.style.background = bgcolors[current_position];
}

function GoRight()
{
  current_position = current_position == 2 ? 2 : current_position + 1;
  document.getElementById("gtc-slider").innerHTML = messages[current_position];
  document.body.style.background = bgcolors[current_position];
}
