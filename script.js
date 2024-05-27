document.addEventListener("DOMContentLoaded", () => {
  const scrollToElementInput = document.getElementById("scrollToElementInput");
  const scrollToElementButton = document.getElementById("scrollToElementButton");
  
  const clickElementInput = document.getElementById("clickElementInput");
  const clickElementButton = document.getElementById("clickElementButton");

  const getContentOutput = document.getElementById("getContentOutput");
  const getContentButton = document.getElementById("getContentButton");

  const goToUrlInput = document.getElementById("goToUrlInput");
  const goToUrlButton = document.getElementById("goToUrlButton");

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

  getContentButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "getContent",
      }, (response) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
        } else if (response) {
          getContentOutput.textContent = response.content;
        }
      });
    });
  });

  goToUrlButton.addEventListener("click", () => {
    const url = goToUrlInput.value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "goToUrl",
        url: url,
      });
    });
  });
});