import { geocoder, forecast } from "./lib/utils.js";

const command = process.argv[2];

geocoder(command, (err, res) => {
  if (!command) return console.log("Please provide a location");

  if (err) {
    return console.log(err);
  }

  forecast(res.latitude, res.longitude, (error, response) => {
    if (error) {
      return console.log(error);
    }

    console.log(res.location);
    console.log(response);
  });
});

/* const add = (num1, num2, callback) => {
  setTimeout(() => {
    const total = num1 + num2;
    callback(total);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum);
}); */
