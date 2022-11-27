
const nodemailer = require('nodemailer')

const userContoller = (req, res)=>{

    res.render('user/index')
}


const userDataStore = (req, res)=>{

    const transport = nodemailer.createTransport({
        host : 'smtp.gmail.com',
        port : 587,
        auth : {
            user : 'abcdfunbd@gmail.com',
            pass : 'iomgwyzbfxljplzp'
        }
    });


    transport.sendMail({
        from : 'Nill Khan',
        to : req.body.email,
        subject : 'Acount Veryfication',
        text : `Hi ${req.body.name}, Welcome to our Nodemailer app`
    })

    res.json(req.body);
}

module.exports = {
    userContoller,
    userDataStore
}