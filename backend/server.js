const express = require('express')
const bodyParser = require ('body-parser')
const nodemailer = require ('nodemailer')


const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static((__dirname, 'public')));


app.post('/api/form', (req, res) => {
    
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Message Details </h3>
        <ul>
            <li> Name: ${req.body.email.name} </li>
            <li> Return Email: ${req.body.email.email} </li>
        </ul>
        <h3>Message </h3>
        <p>${req.body.email.message}</p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'reynold.abbott@ethereal.email',
                pass: '6KXmTzqzmp4jH8wZew' 
            }

        })

        let mailOptions = {
            from: req.body.email.name,
            to: 'reynold.abbott@ethereal.email',
            replyTo: req.body.email.email,
            subject: 'New Message from Personal Site v2',
            text: req.body.email.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }
            console.log("hello from server")
            
        } )
    })
    
})

const PORT = (process.env.PORT || 3001)

app.listen(PORT, () => {
    console.log(`Server listenting on port ${PORT}`)
})