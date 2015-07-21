var adminRouter = express.Router()

adminRouter.use(function(req, res, next) {

	console.log(req.method, req.url);
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



// app.use('/admin', adminRouter)