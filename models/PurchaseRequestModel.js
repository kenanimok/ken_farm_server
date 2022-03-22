const connection = require('./BaseModel');

const Task = function (task) {
  this.task = task.task;
};

Task.generateLastCodeBy = function generateLastCodeBy(data) {
  return new Promise(function (resolve) {

    var str_sql = "SELECT CONCAT( '" + data.format_code + "', LPAD( IFNULL( MAX( CAST( SUBSTRING( purchase_request_code, " + (data.format_code.length + 1) + "," + data.digit + " ) AS SIGNED ) ), 0 ) + 1," + data.digit + ", '0' ) ) AS  last_code " +
      "FROM tb_purchase_request " +
      "WHERE purchase_request_code LIKE ('" + data.format_code + "%') ";
    connection.query(str_sql, function (err, res) {

      if (err) {
       const require = {data:[], error:err,query_result:false,server_result:true,};
       resolve(require)
      } else {
        const require = {data:res[0],last_code,error:[],query_result:true,server_result:true};
        resolve(require)
      }
    });
  })
}


module.exports = Task;
