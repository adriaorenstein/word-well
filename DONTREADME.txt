Install Body Parser in order to be able to read req.body when doing database requests:

npm install body-parser --save

to '/server/index.js':
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);


NOTE TO SELF: 
Pleeeease use try catch blocks so you can alert the err to yourself when it's in the React component and save so much time!!!!
^seconded, because I just made this mistake again


My Notes: 
Keep an eye to see if there are any issues removing preventDefault() from the forms



ERRORS:
- Space between first and last name error 
--> When first going to Generator after booting up site, no space between first and last name. 
--> After pressing refresh, space between first and last name.
--> If I close page and reopen, space between first and last name.
--> If I restart server, space between first and last name.