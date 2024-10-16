//import fs from "fs";
//import data from "./sampleData.json" assert { type: "json" };
//For Simple Use Cases
/* function updateJsonProperty(property, newValue) {
  // Step 1: Modify the specific property
  data[property] = newValue; // Update the desired property

  // Step 2: Write the updated JSON back to the file
  fs.writeFileSync("./sampleData.json", JSON.stringify(data));
}

updateJsonProperty("name", "Valentina");
updateJsonProperty("age", 30);

console.log(data); */

// For Complex Use Cases
/* const dataBuffer = fs.readFileSync("sampleData.json")
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Valentina";
user.age = 30;

const userJSON = JSON.stringify(user);

fs.writeFileSync("sampleData.json", userJSON); */
