$(document).ready(function () {
  let scrollValue = 0;
  const scrollContainer = $('.body-container');

  // Handle mouse wheel scrolling
  scrollContainer.on('wheel', function (event) {
    event.preventDefault();
    const delta = Math.max(-1, Math.min(1, event.originalEvent.deltaY || -event.originalEvent.detail));
    scrollValue += delta * 80; // Adjust the scrolling speed as needed

    // Calculate the maximum scrollable width (total content width - container width)
    const maxScrollValue = scrollContainer[0].scrollWidth - scrollContainer.width();

    // Clamp scrollValue to the range [0, maxScrollValue]
    scrollValue = Math.min(maxScrollValue, Math.max(0, scrollValue));

    // Apply the new scrollValue
    scrollContainer.scrollLeft(scrollValue);
  });

  $("#CloseMenu").on('click', function () {
    //CloseMenu();
  });
});

const CloseMenu = () => {
  $("#Navigation").css({'width': '0'});
  $("#Navigation").css({'transition': '300ms'});
  $('header').hide();
}

