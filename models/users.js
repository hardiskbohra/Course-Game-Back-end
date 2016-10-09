module.exports = function(sequelize, DataTypes){

		var tableColumns = {
			id : {
				type : DataTypes.INTEGER,
        primaryKey : true,
				autoIncrement: false,
				allowNull : false,
				field : 'id'
			},
			firstName : {
				type : DataTypes.STRING(50),
				allowNull : false,
				field : 'first_name'
			},
			middleName : {
				type : DataTypes.STRING(50),
				allowNull : false,
				field : 'middle_name'
			},
			lastName : {
				type : DataTypes.STRING(50),
				allowNull : false,
				field : 'last_name'
			},
			contact : {
				type : DataTypes.STRING(15),
				allowNull : false,
				field : 'contact'
			},
			address : {
				type : DataTypes.STRING(500),
				allowNull : false,
				field : 'address'
			},
			gender : {
				type : DataTypes.STRING(10),
				allowNull : false,
				field : 'gender'
			},
			isActive : {
				type : DataTypes.BOOLEAN,
				allowNull : false,
				field : 'is_active'
			}

		};

	var tableConfig = {
		tableName : 'user',
		timestamps : true,
		// paranoid: true, //Won't de;ete object, add colums deleted_at to table
		underscored : true,
		freezeTableName : true,
		classMethods: {
			associate : function(models) {

			}
		}
	};

	var User = sequelize.define("User", tableColumns, tableConfig);

	return User;

};
