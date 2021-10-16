export const createElementWithClassIdText = (element, className, id, text) => {
  // if (typeof element || typeof className !== "string") {
  //   throw new Error("Both arguments must be strings.");
  // }

  const newElem = document.createElement(element);
  newElem.classList.add(className);
  newElem.setAttribute("id", id);
  const newText = document.createTextNode(text);
  newElem.appendChild(newText);
  return newElem;
};
