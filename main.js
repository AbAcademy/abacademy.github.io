const openCode = document.getElementById('openCode');
const codeOverlay = document.getElementById('codeOverlay');
const closeOverlay = document.getElementById('closeOverlay');
const codeInput = document.getElementById('codeInput');
const iframeContainer = document.getElementById('iframeContainer');
const errorText = document.getElementById('error');

// Show the overlay when Code is clicked
openCode.addEventListener('click', () => {
  codeOverlay.style.display = 'flex';
  codeInput.value = '';
  iframeContainer.classList.add('hidden');
  iframeContainer.innerHTML = '';
  errorText.classList.add('hidden');
});

// Close overlay
closeOverlay.addEventListener('click', () => {
  codeOverlay.style.display = 'none';
});

// Allow adding digits
function addDigit(digit) {
  codeInput.value += digit;
}

// Remove last character
function backspace() {
  codeInput.value = codeInput.value.slice(0, -1);
}

// Submit code and show iframe
function submitCode() {
  const code = codeInput.value.trim();
  if (codes[code]) {
    iframeContainer.classList.remove('hidden');
    iframeContainer.innerHTML = `<iframe src="${codes[code]}" allowfullscreen></iframe>`;
    errorText.classList.add('hidden');
  } else {
    iframeContainer.classList.add('hidden');
    errorText.classList.remove('hidden');
  }
}

// Toggle fullscreen
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// Press Enter to submit
codeInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    submitCode();
  }
});
// Make functions globally accessible for inline HTML
window.addDigit = addDigit;
window.backspace = backspace;
window.submitCode = submitCode;
window.toggleFullscreen = toggleFullscreen;
