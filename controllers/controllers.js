const Person = require('../models/models')

const getPerson =  async (req, res)=>{


    try{

        const human = await Person.find({})

        res.status(200).json({human})

    }

    catch(error){

        res.status(500).json({msg: 'A fatal error occured, cannot proceed'})
    }
}


const postPerson =  async (req, res)=>{

    try{

        const human = await Person.create(req.body)

         res.status(200).json({human})

        
    }    

    catch(error){

        res.status(500).json({msg: 'A fatal error occured, cannot proceed'})

        
    }    

}    


module.exports = {postPerson, getPerson}