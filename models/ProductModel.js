const connection = require('./BaseModel');
const Task = function (task) {
    this.task = task.task;
};


Task.getProductBy = function getProdcutBy(data) {
    return new Promise(function (resolve) {

        const sql = `SELECT * 
            FROM tb_product
            WHERE TRUE
                    `
        connection.query(sql, function (err, res) {
            if (err) {
                const require = { data: [], error: err, query_result: false, server_result: true, };
                resolve(require);
            } else {
                const require = { data: res, error: [], query_result: true, server_result: true, };
                resolve(require);
            }
        });
    });
}

module.exports = Task;

