const Person = require('../models/models')


const postPerson = async (req, res)=>{

    try{

       await res.send('hey')
    }

    catch(error){

        console.log(error)
    }

}

const getPerson =  async (req, res)=>{


    try{

        await res.send('payoyo')

    }

    catch(error){

        console.log(error)
    }
}


module.exports = {postPerson, getPerson}