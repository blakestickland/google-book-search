export const createElementWithClassId = (element, className, id) => {
  // if (typeof element || typeof className !== "string") {
  //   throw new Error("Both arguments must be strings.");
  // }

  const newElem = document.createElement(element);
  newElem.classList.add(className);
  newElem.setAttribute("id", id);
  return newElem;
};
