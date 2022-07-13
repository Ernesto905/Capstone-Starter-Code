const app = require("./app")
require("colors")
// const { PORT } = require("./config")
const PORT = 3001



app.listen(PORT, function () {
    console.log(`🚀 API-Server`.blue, `is up and running on`.red, `http://localhost:${PORT} 🚀`.yellow)
})