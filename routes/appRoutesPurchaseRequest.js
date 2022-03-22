const PurchaseRequestController  = require('../controllers/PurchaseRequestController')

module.exports = function(app){

app.post('./purchase/getPurchaseLastcode',async function(req,res){
 const result = await PurchaseRequestController.generateLastCodeBy(req.body)
 res.send(result)
})

}

