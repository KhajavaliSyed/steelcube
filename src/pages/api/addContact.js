
export default async function handler(req, res) {
    const email = req.body.email;
    
    var SibApiV3Sdk = require('sib-api-v3-sdk');
    SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.API_KEY;

    let apiInstance = new SibApiV3Sdk.ContactsApi();

    let createContact = new SibApiV3Sdk.CreateContact();

    createContact.email = email;
    createContact.listIds = [2];
    apiInstance.createContact(createContact).then((data)  => {
        res.status(200).json(data);
    }, (error) => {
        res.status(500).json(error);
    });
   
  }