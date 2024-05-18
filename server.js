const http = require("http");
const app = require('./src/app')

const server = http.createServer(app)

const PORT = 8000;

server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})