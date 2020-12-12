const controller = {};

controller.getCustomers = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) => {
            if(err)
                res.json(err);

            res.render('customers', {
                data: customers
            });
        });
    });
}

controller.addCustomer = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer set ?', [data], (err, customers) => {
            if(err)
                res.json(err);

            console.log(customers);
            res.redirect('/');
        });
    });
};

controller.deleteCustomer = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, customers) => {
            if(err)
                res.json(err);

            console.log(customers);
            res.redirect('/');
        });
    });
};

module.exports = controller;