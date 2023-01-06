function closeWindow() {
  answer = confirm("What to do?");

  if (answer) {
    window.close();
  }
}

closed.onclick = closeWindow();
