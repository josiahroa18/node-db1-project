const express = require('express');
const router = express.Router();
const Account = require('./accountsDb');

router.get('/', (req, res) => {
    Account.get()
    .then(accounts => res.status(201).json(accounts))
    .catch(() => res.status(500).json({ message: 'Accounts could not be retrieved' }))
})

router.post('/' , (req, res) => {
    Account.insert(req.body)
    .then(newAccount => res.status(201).json(newAccount))
    .catch(err => res.status(500).json(err));
})

router.put('/:id', (req, res) => {
    Account.update(req.params.id, req.body)
    .then(() => {
        Account.getById(req.params.id)
        .then(account => res.status(201).json(account))
        .catch(err => res.status(500).json(err))
    });
})

router.delete('/:id', (req, res) => {
    Account.remove(req.params.id)
    .then(() => res.status(201).json('Succesfully deleted'))
    .catch(err => res.status(500).json(err))
})

module.exports = router;