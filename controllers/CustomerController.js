const customer_model = require('../models/CustomerModel');
const Task = function (task) {
    this.task = task.task;
};


Task.getCustomerLastCode = async function getCustomerLastCode(data) {
    const result = await customer_model.getCustomerLastCode(data);
    return result
}


module.exports = Task;