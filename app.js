const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

if (process.argv[2]) {
    geocode(process.argv[2], (err, { latitude, longitude, location }) => {
        if (err) {
            console.log("ERROR:" + err);
        } else {
            forecast(
                latitude,
                longitude,
                (err, { summary, temperature, rainChance }) => {
                    if (err) {
                        console.log("ERROR:" + err);
                    } else {
                        console.log(
                            `${summary} It is currently ${temperature} degrees right now in ${location} with a ${rainChance}% chance of rain.`
                        );
                    }
                }
            );
        }
    });
} else {
    console.log("Location needs to be provided.");
}
