const express = (require('express'))
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
})

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../style.css'));
// })


app.use('/css', express.static(path.join(__dirname, '../style.css')))

app.use('/img', express.static(path.join(__dirname, '../images/dave-hoefler-lsoogGC_5dg-unsplash.jpg')))



const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Up on port ${port}`)
})

