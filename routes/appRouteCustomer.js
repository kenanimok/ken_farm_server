const customer_controller = require('../controllers/CustomerController')

module.exports = function (app) {


    app.post('/customer/getCustomerLastCode', async function (req, res) {
        const result = await customer_controller.getCustomerLastCode(req.body)
        res.send(result)
    })
    app.post('/customer/getCustomerBy', async function (req, res) {
        const result = await customer_controller.getCustomerBy(req.body)
        res.send(result)
    })
    app.post('/customer/getCustomerByCode', async function (req, res) {
        const result = await customer_controller.getCustomerByCode(req.body)
        res.send(result)
    })

    app.post('/customer/insertCustomer', async function (req, res) {
        const result = await customer_controller.insertCustomer(req.body)
        res.send(result)
    })
    app.post('/customer/updateCustomer', async function (req, res) {
        const result = await customer_controller.updateCustomer(req.body)
        res.send(result)
    })
    app.post('/customer/deleteCustomerByCode', async function (req, res) {
        const result = await customer_controller.deleteCustomerByCode(req.body)
        res.send(result)
    })

}