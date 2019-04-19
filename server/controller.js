module.exports = {
    get: (req, res) => {
        const db = req.app.get('db')

        db.get_products().then(response => {
            res.send(response)
        }).catch(err => {
            res.send(`Error encountered: ${err}`)
            console.log(err)
        })
    },

    create: (req, res) => {
        const db = req.app.get('db')
        const {name, price, imageurl} = req.body

        db.create_product([name, price, imageurl]).then(() => {
            res.status(200)
        }).catch(err => {
            res.send(`Error encountered: ${err}`)
            console.log(err)
        })
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        
        db.delete_product([req.params.id]).then(() => {
            res.status(200)
        }).catch(err => {
            res.send(`Error encountered: ${err}`)
            console.log(err)
        })
    }
}