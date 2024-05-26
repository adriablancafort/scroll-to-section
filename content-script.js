const scrollToElement = (classNames) => {
  const selector = classNames.split(" ").join(".");
  const element = document.querySelector(`.${selector}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const clickElement = (classNames) => {
  const selector = classNames.split(" ").join(".");
  const element = document.querySelector(`.${selector}`);
  if (element) {
    element.click();
  }
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "scrollToElement") {
    scrollToElement(message.classNames);
  } else if (message.action === "clickElement") {
    clickElement(message.classNames);
  }
});