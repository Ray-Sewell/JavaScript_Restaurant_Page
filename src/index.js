import nav from "./nav";
import home from "./home";
import "./index.css";

const content = document.querySelector("#content");

nav(content);
home(content);

console.log("Hello world!");