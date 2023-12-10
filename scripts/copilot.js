/**
 * @name copilot2.js
 * @version 0.1.0
 * @url https://github.com/lencx/ChatGPT/tree/main/scripts/dalle2.js
 */

function copilotInit() {
  document.addEventListener('click', (e) => {
    const origin = e.target.closest('a');
    if (!origin || !origin.target) return;
    if (origin && origin.href && origin.target !== '_self') {
      if (/\/(login|signup)$/.test(window.location.href)) {
        origin.target = '_self';
      } else {
        invoke('open_link', { url: origin.href });
      }
    }
  });

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  copilotInit();
} else {
  document.addEventListener('DOMContentLoaded', copilotInit);
}
