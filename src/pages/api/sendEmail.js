
export default async function handler(req, res) {
    const toName = req.body.toName;
    const toEmail = req.body.toEmail;
    const fromName = req.body.fromName;
    const fromEmail = req.body.fromEmail;
    const message = req.body.message;
    const subject = req.body.subject;

    
    var SibApiV3Sdk = require('sib-api-v3-sdk');
    SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.API_KEY;

    new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
    {
        'subject':subject,
        'sender' : {'email':fromEmail, 'name': fromName},
        'replyTo' : {'email':fromEmail, 'name': fromName},
        'to' : [{'name': toName, 'email':toEmail}],
        'htmlContent' : '<html><body><img src=\"https://steelcube.vercel.app/assets/img/logo/sc-logo.png\"/><h1>Welcome to Steelcube Engineering</h1><p><span>Hi ' + toName +
        ',</span><br>'+ message +'</p></body></html>',
        'params' : {'bodyMessage':message}
    }
    ).then((data)  => {
        res.status(200).json(data);
    }, (error) => {
        res.status(500).json(error);
    });
   
  }