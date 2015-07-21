var express = require('express'),
	app = express(),
	path = require('path')


app.get('/', function(req, res) {

	res.sendFile(path.join(__dirname + '/index.html'));
 });

var adminRouter = express.Router()

adminRouter.use(function(req, res, next) {

	console.log(req.method, req.url);
	next();

});

adminRouter.param('name',function(req, res, next, name) {
	console.log('doing name validations on ' + name);
	req.name = name; 
	next();
});
adminRouter.get('/', function(req,res) {
	res.send('dashboard')
});

adminRouter.get('/users', function(req, res) {
	res.send('users page')
});

adminRouter.get('/posts', function(req,res) {
	res.send('users posts')
});
adminRouter.get('/users/:name', function(req,res) {
	res.send('hello ' + req.name + ' !')
})

app.use('/admin', adminRouter);

app.route('/login')
	.get(function(req,res) {
		res.send('this is the login form')
	})
	.post(function(req,res){
		console.log('processing');
		res.send('processing the login form!')
	})

app.listen(1337)
console.log('listening on port 1337')