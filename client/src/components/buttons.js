// This isn't necessary but more for demonstration purposes
function Buttons(){
  
const typSpd = 70; 
const waitTime = 500;

const text = [
  "I wanted the fun message box with the arrow, but no background.",
  "I didn't find anything",
  "So...",
  "Here's something",
  "It currently works in Chrome and Firefox"
]

var mi = 0;

function writeString(e, str, i) {
  e.dangerouslySetInnerHTML = e.dangerouslySetInnerHTML + str[i];
  
  if (e.dangerouslySetInnerHTML.length == str.length && mi != text.length)
    setTimeout(slowlyDelete, waitTime, e);
}

function deleteString(e) {
  e.dangerouslySetInnerHTML = e.dangerouslySetInnerHTML.substring(0, e.dangerouslySetInnerHTML.length - 1);
  
  if (e.dangerouslySetInnerHTML.length == 0)
    slowlyWrite(e, text[mi++]);
}

function slowlyDelete(e) {
  for (var i = 0; i < e.dangerouslySetInnerHTML.length; i++) {
    setTimeout(deleteString, typSpd / 2 * i, e);
  }
}

function slowlyWrite(e, str) {
  for (var i = 0; i < str.length; i++) {
    setTimeout(writeString, typSpd * i, e, str, i);
  }
}

const msg = document.querySelector(".msg-icn");

slowlyDelete(msg);
return(
    <span class="msg-icn">So nice</span>
    )
}

export default Buttons