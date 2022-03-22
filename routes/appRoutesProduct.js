const ProuductController  = require('../controllers/ProductController')

module.exports = function(app){

app.post('/purchase/getProductby',async function(req,res){
 const result = await ProuductController.getProductBy(req.body)
 res.send(result)
})

}

