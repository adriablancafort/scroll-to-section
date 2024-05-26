const getElement = (classNames) => {
  const selector = classNames.split(" ").join(".");
  const element = document.querySelector(`.${selector}`);
  return element;
};

const scrollToElement = (element) => {
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const clickElement = (element) => {
  if (element) {
    element.click();
  }
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const element = getElement(message.classNames);
  if (message.action === "scrollToElement") {
    scrollToElement(element);
  } else if (message.action === "clickElement") {
    clickElement(element);
  }
});