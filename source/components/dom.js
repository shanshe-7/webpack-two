export default (text = "Hlo world") => {
  const element = document.createElement("div");

  element.innerHTML = text;

  return element;
};
