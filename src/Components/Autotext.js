const textEl = document.getElementById("text");
const text = "Showhouse";
let ind = 1;
let idx = text.length;

function writeText() {
  textEl.innerHTML = text.slice(0, ind);
  ind++;
  if (ind > text.length) {
    textEl.innerHTML = text.slice(0, idx);
    idx--;
  }
  if (idx === 0) {
    ind = 1;
    idx = text.length;
  }

  setTimeout(writeText, 100);
}
export default writeText;
