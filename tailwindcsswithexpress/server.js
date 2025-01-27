const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.render('pages/index', { title: 'Tailwindcss with Express!' });
});

app.listen(port, () => {
    console.log(`Magic is happening on http://localhost:${port}`);
});