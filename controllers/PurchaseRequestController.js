const purchase_request_model = require("../models/PurchaseRequestModel");
const Task = function (task) {
  this.task = task.task;
};

Task.getPurchaseRequestMaxCode = async function getPurchaseRequestMaxCode(data) {
  const result = await purchase_request_model.getPurchaseRequestMaxCode(data);
  return result;
};

Task.generateLastCodeBy = async function generateLastCodeBy (data){
const result = await purchase_request_model.generateLastCodeBy(data);
return result;
}



module.exports = Task