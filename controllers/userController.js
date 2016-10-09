var models = require('../models');

var controller = {
	getAll : function(paranoid,cb,errcb) {
		return models.User.findAll({
			//paranoid : paranoid || false,
		})
		.then(cb).catch(errcb);
	},

	add : function(user,cb,errcb) {
		var newUser = models.User.build(user);
		return newUser.save()
		.then(cb).catch(errcb);
	},

	update : function(id,updatedUser,cb,errcb) {
		return models.User.update(updatedUser,{where: { id : id }})
		.then(cb).catch(errcb);
	},

	delete : function(id,cb,errcb) {
		return models.User.destroy({where: { id : id}})
		.then(cb).catch(errcb);
	}

};

module.exports = controller;
