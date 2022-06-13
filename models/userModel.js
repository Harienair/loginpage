const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {
        name: {type: String , required:true},
        phone: {type: String , required: true},
        email: {type: String , required: true , unique: true},
        password: {type: String , required: true},
        quote: {type: String},

    },
    {collection : 'user-data'}

)

const model = mongoose.model('UserData', User)


module.exports = model

/*
Name:yup.string().max(20,'Name should not exceed 20 Characters').

      required('Please Enter Employee Name'),

      Location: yup.string()

        .required('Please Enter Employee Location'),

      EmailId: yup.string()

        .email('Invalid email address')

        .required('Please Enter Email Id')

    })} onSubmit= {values => {

      alert(JSON.stringify(values));

    }}>
*/