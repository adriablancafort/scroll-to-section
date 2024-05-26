document.addEventListener("DOMContentLoaded", () => {
  const scrollToElementInput = document.getElementById("scrollToElementInput");
  const scrollToElementButton = document.getElementById("scrollToElementButton");
  
  const clickElementInput = document.getElementById("clickElementInput");
  const clickElementButton = document.getElementById("clickElementButton");

  scrollToElementButton.addEventListener("click", () => {
    const classNames = scrollToElementInput.value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "scrollToElement",
        classNames: classNames,
      });
    });
  });

  clickElementButton.addEventListener("click", () => {
    const classNames = clickElementInput.value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "clickElement",
        classNames: classNames,
      });
    });
  });
});