const TEXT = require('figlet')

TEXT("intocode", function(err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
})