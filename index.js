const express = require('express');
const app = express();
const port = 8001;
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);

// extract style and scripts from sub pages into layout

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use express server
app.use(express.static('./assets'));

app.use('/', require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if (err) {
        console.log(`Error in running the server: ${err}`);
        
    }
    console.log(`server is running on port: ${port}`);
});