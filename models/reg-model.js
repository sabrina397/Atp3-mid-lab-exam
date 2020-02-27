var db = require('./db');
module.exports = {
	validate: function(reg,callback) {
		var sql = "select * from reg where username=? and password=?";
		db.getResults(sql, [reg.username, reg.password], function(result){
			if (result.length > 0) {
				callback(result[0]);
			}
			else{
				callback([]);
			}
		});
	},
	insertuser: function(name,type,contact,username,password, callback){
    var sql ="insert into reg (`name`,`type`,`contact`,`username`,`password`) values ('"+name+"','"+type+"','"+contact+"','"+username+"','"+password+"')";

		db.getResults(sql, function(results){

			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}

