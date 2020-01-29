const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')
const publicKEY = fs.readFileSync(path.join(`${__dirname}/public.key`), 'utf8')
const privateKEY = fs.readFileSync(path.join(`${__dirname}/private.key`), 'utf8')

const issuer = 'CodeMobiles Ltd'
const subject = 'chaiyasit.t@gmail.com'
const audience = 'http://codemobiles.com'

module.exports = {
    sign: (payload) => {
        var signOptions = {
            issuer: issuer,
            subject: subject,
            audience: audience,
            expiresIn: '30d',
            algorithm: 'RS256'
        }
        return jwt.sign(payload, privateKEY, signOptions)
    },
    verify: (req, res, next) => {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (!token) {
            return res.status(401).json({ result: 'NOK', message: 'No Token Provided.' })
        }
        jwt.verify(token, publicKEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({ result: 'NOK', message: 'Failed to Authenticate Token.' })
            }
            req.userId = decoded.id
            req.role = decoded.role
            next()
        })
    }
}