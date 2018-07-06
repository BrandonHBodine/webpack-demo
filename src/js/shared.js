import _ from "lodash";

function component() {
  let element = document.createElement("div");
  let btn = document.createElement("button");

  //lodash imported by this script
  element.innerHTML = _.join(["Hello", "Webpack"], " ");

  btn.innerHTML = "Click me and check the console!";

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

console.log('MAIN JS IS HERE');