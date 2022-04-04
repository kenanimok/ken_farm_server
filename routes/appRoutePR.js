const pr_controller = require('../controllers/purchase_requestController')

module.exports = function (app) {


    app.post('/pr/getPRLastCode', async function (req, res) {
        const result = await pr_controller.getPRLastCode(req.body)
        res.send(result)
    })

    app.post('/purchase-request/insert-purchase-request', async function (req, res) {
        const result = await pr_controller.insertPurchaseRequest(req.body)
        res.send(result)
    })
    

}