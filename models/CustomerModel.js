const connection = require('./BaseModel');
const Task = function (task) {
    this.task = task.task;
};


Task.getCustomerLastCode = function getCustomerLastCode(data) {
    return new Promise(function (resolve) {
        var sql = `SELECT CONCAT(${connection.escape(data.code)}, LPAD(IFNULL(MAX(CAST(SUBSTRING(customer_code,${data.code.length + 1},${data.digit}) AS SIGNED)),0) + 1,${data.digit},0)) AS last_code 
                FROM tb_customer 
                WHERE customer_code LIKE (${connection.escape(`${data.code}%`)}) 
                `;
        connection.query(sql, function (err, res) {
            if (err) {
                const require = { data: [], error: err, query_result: false, server_result: true, };
                resolve(require);
            } else {
                const require = { data: res[0].last_code, error: [], query_result: true, server_result: true, };
                resolve(require);
            }
        });
    });
}


module.exports = Task;

