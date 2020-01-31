const express = require('express')

const app = express()

app.use(express.static('public'));

app.get('/mensagem', (req, res) => {
    res.json({
        status: 200,
        mensagem: 'Essa é uma mensagem de teste'
    })
})

export default app;