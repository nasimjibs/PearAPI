var mysql = require("mysql");

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
    router.get("/",function(req,res){
        res.json({"Message" : "Hello World !"});
    });

    router.get("/users",function(req,res){
       var query = "SELECT * FROM ??";
       var table = ["user"];
       query = mysql.format(query,table);
       connection.query(query,function(err,rows){
           if(err) {
               res.json({"Error" : true, "Message" : "Error executing MySQL query"});
           } else {
               res.json({"Error" : false, "Message" : "Success", "Users" : rows});
           }
       });
   });

   router.get("/scorelist",function(req,res){
      var query = "SELECT * FROM ??";
      var table = ["score_list"];
      query = mysql.format(query,table);
      connection.query(query,function(err,rows){
          if(err) {
              res.json({"Error" : true, "Message" : "Error executing MySQL query"});
          } else {
              res.json({"Error" : false, "Message" : "Success", "Scores" : rows});
          }
      });
  });

  router.get("/inventorylist",function(req,res){
     var query = "SELECT * FROM ??";
     var table = ["users_inventory_list"];
     query = mysql.format(query,table);
     connection.query(query,function(err,rows){
         if(err) {
             res.json({"Error" : true, "Message" : "Error executing MySQL query"});
         } else {
             res.json({"Error" : false, "Message" : "Success", "UsersInventory" : rows});
         }
     });
 });

 router.get("/user/:user_name",function(req,res){
         var query = "SELECT * FROM ?? WHERE ??=?";
         var table = ["user","user_name",req.params.user_name];
         query = mysql.format(query,table);
         connection.query(query,function(err,rows){
             if(err) {
               console.log(err);
                 res.json({"Error" : true, "Message" : "Error executing MySQL query"});
             } else {
                 res.json({"Error" : false, "Message" : "Success", "user" : rows});
             }
         });
     });



}

module.exports = REST_ROUTER;
