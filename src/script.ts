// This script runs every time a new website is opened with the extension active

window.addEventListener(
  'visibilitychange',
  (event) => {
    event.stopPropagation();
  },
  {
    capture: true,
  }
);

