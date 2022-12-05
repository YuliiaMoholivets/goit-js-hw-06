const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.fontSizeControl.addEventListener("input", onChangeFontSize);
refs.text.style.fontSize = `${refs.fontSizeControl.value}px`;

function onChangeFontSize(event) {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
}