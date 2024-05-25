document.addEventListener("DOMContentLoaded", () => {
  const scrollToElementInput = document.getElementById("scrollToElementInput");
  const scrollToElementButton = document.getElementById("scrollToElementButton");

  scrollToElementButton.addEventListener("click", () => {
    const classNames = scrollToElementInput.value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "scrollToElement",
        classNames: classNames,
      });
    });
  });
});