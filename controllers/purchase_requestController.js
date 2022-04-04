const purchase_request_model = require('../models/purchase_requestModel');
const Task = function (task) {
    this.task = task.task;
};


Task.getPRLastCode = async function getPRLastCode(data) {
    const result = await purchase_request_model.getPRLastCode(data);
    return result
}


Task.insertPurchaseRequest = async function insertPurchaseRequest(data){
    const result = await purchase_request_model.insertPurchaseRequest(data);
    return result
}

module.exports = Task;