function open_popup_window() {
  window.open("https://hollodoescode.github.io/home", "Games");
}

document.addEventListener('keydown', function(event) {
  if (event.key == 'o') {
    open_popup_window();
    this.location.close();
  }
});
