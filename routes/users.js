var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController');

// localhost:3000/users/:paranoid?
router.get('/:paranoid?', function(req, res, next) {

	var paranoid = req.params.paranoid || false;

	controller.getAll(paranoid,
		function(result) {
			res.json({"status":true,"result":result});
		},function(error) {
			res.status(500);
			res.json({"status":false,"result":error});
		}
	);
});

// localhost:3000/users/add
router.post('/add', function(req, res, next){

	controller.add(req.body,
		function(result) {
			res.json({"status":true,"result":result});
		},function(error) {
			res.status(500);
			res.json({"status":false,"result":error});
		}
	);
});

// localhost:3000/users/update/:id
router.put('/update/:id', function(req,res,next){

	controller.update(req.params.id,req.body,
		function(result) {
			res.json({"status":true,"result":result});
		},function(error) {
			res.status(500);
			res.json({"status":false,"result":error});
		}
	);
});

// localhost:3000/users/delete/:id
router.delete('/delete/:id', function(req, res, next){

	console.log(req.params);

	controller.delete(req.params.id,
		function(result) {
			res.json({"status":true,"result":result});
		},function(error) {
			res.status(500);
			res.json({"status":false,"result":error});
		}
	);
});

module.exports = router;
