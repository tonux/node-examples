var os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + JSON.stringify(os.cpus()));
