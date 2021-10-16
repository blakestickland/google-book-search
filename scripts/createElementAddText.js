export const createElementAddText = (element, text) => {
  // if (typeof element || typeof text || typeof className !== "string") {
  //     throw new Error ("All three arguments must be strings.");
  // }
  const newElem = document.createElement(element);
  const newText = document.createTextNode(text);
  newElem.appendChild(newText);
  return newElem;
};
