const draggableBox = document.getElementById('draggableBox');

draggableBox.addEventListener('mousedown', function(e) {
  // Enable dragging
  var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
  var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);

  function mouseMoveHandler(e) {
    draggableBox.style.left = e.clientX - offsetX + 'px';
    draggableBox.style.top = e.clientY - offsetY + 'px';
  }

  function reset() {
    window.removeEventListener('mousemove', mouseMoveHandler);
    window.removeEventListener('mouseup', reset);
  }

  window.addEventListener('mousemove', mouseMoveHandler);
  window.addEventListener('mouseup', reset);
});
