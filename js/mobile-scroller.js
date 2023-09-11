$(document).ready(function () {
    let startX = 0;
    let startY = 0;
  
    $('.body-container').on('touchstart', function (event) {
      startX = event.originalEvent.touches[0].pageX;
      startY = event.originalEvent.touches[0].pageY;
    });
  
    $('.body-container').on('touchmove', function (event) {
      const currentX = event.originalEvent.touches[0].pageX;
      const currentY = event.originalEvent.touches[0].pageY;
  
      // Calculate the horizontal and vertical distance moved
      const deltaX = currentX - startX;
      const deltaY = currentY - startY;
  
      // Check if the horizontal movement is greater than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Prevent the default vertical scroll behavior
        event.preventDefault();
  
        // Scroll horizontally by the same amount as the horizontal movement
        $(this).scrollLeft($(this).scrollLeft() - deltaX);
  
        // Reset the starting position for the next touch move event
        startX = currentX;
      }
    });
  });
  