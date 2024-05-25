const scrollToElement = (className) => {
  const element = document.querySelector(`.${className}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "scrollToElement") {
    scrollToElement(message.className);
  }
});