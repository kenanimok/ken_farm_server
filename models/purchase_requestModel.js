const connection = require('./BaseModel');
const Task = function (task) {
    this.task = task.task;
};


Task.getPRLastCode = function getPRLastCode(data) {
    return new Promise(function (resolve) {
        var sql = `SELECT CONCAT(${connection.escape(data.code)}, LPAD(IFNULL(MAX(CAST(SUBSTRING(pr_code,${data.code.length + 1},${data.digit}) AS SIGNED)),0) + 1,${data.digit},0)) AS last_code 
                FROM tb_purchase_request 
                WHERE pr_code LIKE (${connection.escape(`${data.code}%`)}) 
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


Task.insertPurchaseRequest = function insertPurchaseRequest(data) {
    return new Promise(function (resolve) {
        const sql = `INSERT INTO tb_purchase_request (
            pr_code,
            purchase_request_total,
            purchase_request_approve_status,
            purchase_request_status,
            purchase_request_discount_price,
            purchase_request_net_price,
            purchase_request_vat,
            purchase_request_vat_price
           

            
           
            ) VALUES (
                ${connection.escape(data.pr_code)},
                ${connection.escape(data.purchase_request_total)} , 
                'Waiting',
                ${connection.escape(data.purchase_request_status)},
                ${connection.escape(data.purchase_request_discount_price)},
                ${connection.escape(data.purchase_request_net_price)},
                ${connection.escape(data.purchase_request_vat)},
                ${connection.escape(data.purchase_request_vat_price)}



            );
            `
        connection.query(sql, function (err, res) {
             console.log(sql)
            if (err) {
                const require = { data: [], error: err, query_result: false, server_result: true, };
                resolve(require);
            } else {
                const require = { data: res, error: [], query_result: true, server_result: true, };
                resolve(require);
            }
        })
    })
}




// Task.insertPurchaseRequest = function insertPurchaseRequest(data) {
//     return new Promise(function (resolve) {
//         const sql = `INSERT INTO tb_purchase_request (
//             purchase_request_code,
//             purchase_request_date,
//             purchase_request_total,
//             purchase_request_approve_status,  
//             purchase_request_status,
//             purchase_request_cancel,
//             purchase_request_status_code,
//             purchase_request_name,
//             purchase_request_net_price,
//             purchase_request_vat,
//             purchase_request_vat_price
           
//             ) VALUES (
//                 ${connection.escape(data.purchase_request_code)},
//                 ${connection.escape(data.purchase_request_date)}, 
//                 ${connection.escape(data.purchase_request_total)},  
//                 ${connection.escape(data.purchase_request_status_code)},  
//                 ${connection.escape(data.purchase_request_name)},  
//                 ${connection.escape(data.purchase_request_discount_price)},  
//                 ${connection.escape(data.purchase_request_net_price)},  
//                 ${connection.escape(data.purchase_request_vat)},  
//                 ${connection.escape(data.purchase_request_vat_price)}

            
//             );
//             `
//         connection.query(sql, function (err, res) {
//             if (err) {
//                 const require = { data: [], error: err, query_result: false, server_result: true, };
//                 resolve(require);
//             } else {
//                 const require = { data: res, error: [], query_result: true, server_result: true, };
//                 resolve(require);
//             }
//         })
//     })
// }







module.exports = Task;