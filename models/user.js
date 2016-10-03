module.exports = function(sequelize, DataTypes) {
	var user = sequelize.define('user', {
		fullname: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: false,
			validate: {
				len: [1, 100]
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true
			}
		}
	}, {
		hooks: {
			beforeValidate: function(user, options) {
				//user.email
				if(typeof user.email === 'string') {
					user.email = user.email.toLowerCase();
				}
			}
		}	
	});
	return user;
};