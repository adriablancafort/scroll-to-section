const getPageContent = () => {
  return document.body.innerHTML;
};

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
  if (message.action === "scrollToElement") {
    const element = getElement(message.classNames);
    scrollToElement(element);
  } else if (message.action === "clickElement") {
    const element = getElement(message.classNames);
    clickElement(element);
  } else if (message.action === "getContent") {
    const content = getPageContent();
    sendResponse({ content: content });
  }
});
