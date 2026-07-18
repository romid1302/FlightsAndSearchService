const express = require('express');
const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async() => {

    const app = express();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    })
}

setupAndStartServer();