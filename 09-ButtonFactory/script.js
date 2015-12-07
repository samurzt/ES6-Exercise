import { buttonFactory } from './buttonFactoryScript.js';

let contentViewButton = buttonFactory.create({
  parent: ".content_view",
  text: "View content"
});

let tableButton = buttonFactory.create({
  parent: "#table_wrapper2",
  text: "Click table me",
  onClick: () => {
    alert("I'm the table button");
  },
  style: {
    border: "none",
    color: "white",
    background: "black",
    outline: "none"
  }
});

let boxButton = buttonFactory.create({
  parent: "box",
  text: "Box box box",
  onClick: () => { alert("I'm the box button"); },
  style: {
    border: "2px solid black"
  }
});

buttonFactory.setText({
  button: contentViewButton,
  text: "Click me"
});

buttonFactory.setOnClickListener({
  button: contentViewButton,
  onClick: () => {
    alert("Hello there ");
  }
});