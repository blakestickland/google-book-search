export const createElementWithText = (element, text, className) => {
    // if (typeof element || typeof text || typeof className !== "string") {
    //     throw new Error ("All three arguments must be strings.");
    // }
    const newElem = document.createElement(element);
    // newElem.classList.add(className);
    newElem.setAttribute("class", `${className}`);
    const newText = document.createTextNode(text);
    newElem.appendChild(newText);
    return newElem;
};
