export const attachCards = (card) => {
  // attach those li elements to my ul
  // check if li are present first and remove
  const list = document.querySelector("#results-list");
  while (list.lastChild) {
    list.removeChild(list.lastChild);
  }
  const append = (parent) => (child) => parent.appendChild(child);
  card.forEach(append(list));
}