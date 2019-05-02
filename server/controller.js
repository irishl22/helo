const bcrypt = require('bcryptjs')

module.exports = {
    login: async (req, res) => {
        const { username, password } = req.body
        const db = req.app.get('db');
        const accountArr = await db.find_acc_by_username([username])
        if(!accountArr[0]) {
            return res.status(200).send({message: 'Account not found'})
        }
        const result = bcrypt.compareSync(password, accountArr[0].password)
        if(!result) {
            return res.status(401).send({message: 'Password Incorrect'})
        }
        req.session.user = {username: accountArr[0].username, id: accountArr[0].id};
        res.status(200).send({
            message: 'Login successful',
            loggedIn: true
        })
    },
    register: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        const accountArr = await db.find_acc_by_username([username]) 
        if(accountArr[0]) {
            return res.status(200).send('username already in use')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt)
        let newAccArr = await db.create_acc([username, hash])
        req.session.user =  {username: newAccArr[0].username, id: newAccArr[0].id};
        res.status(200).send({
            message: 'logged in',
            userData: req.session.user,
            loggedIn: true
        })
    },
    userData: (req, res) => {
        if(req.session.user) res.status(200).send(req.session.user)
        else res.status(401).send('Please Login')
        console.log(req.session.user)
    }
}