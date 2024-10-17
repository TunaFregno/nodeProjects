import axios from "https://cdn.jsdelivr.net/npm/axios@1.5.0/dist/esm/axios.min.js";

console.log("running index.html");

axios.get("http://localhost:3000/weather?address=!").then(({ data }) => {
  console.log(data);
});
