export const createElementAddClass = (element, className) => {

  // if (typeof element || typeof className !== "string") {
  //   throw new Error("Both arguments must be strings.");
  // }

  const newElem = document.createElement(element);
  newElem.classList.add(className);
  return newElem;
};
