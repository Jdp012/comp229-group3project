const dotenv = require("dotenv");
var app = require("./backend/app");
var debug = require("debug")("comp229-group3project:server");
const dbConnect = require("./backend/config/db_config");

// Initialize env path using dotenv
dotenv.config({ path: "./backend/config/config.env" });

/**
 * Get port from environment and store in Express.
 */

const PORT = process.env.PORT;
const MODE = process.env.NODE_ENV;

dbConnect();
/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} on ${MODE} mode`);
});
