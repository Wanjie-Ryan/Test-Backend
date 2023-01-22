const Person = require('../models/models')

const getPerson =  async (req, res)=>{


    try{

        const human = await Person.find({}).sort('name age').select('name age email')

        res.status(200).json({human, number:human.length})

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

        res.status(500).json({msg: error})

        
    }    

} 

const updatePerson = async (req, res) => {

    try{

        const {id:personID} = req.params

        const human = await Person.findOneAndUpdate({_id: personID}, req.body,{
            new: true,
            runValidators: true
        })

        if(!human){

            res.status(404).json({msg:'person with ${personID} id cannot be found'})
        }

        
        
        res.status(200).json({human})
      

    }

    catch(error){

        res.status(500).json({msg: error})
    }

}


   const singlePerson = async(req, res)=>{

        try{

            const {id:personID} = req.params

            const human = await Person.findOne({_id:personID})

            if(!human){

                res.status(404).json({msg:'Person with id ${personID} cannot be found'})
            }

            res.status(200).json({human})


        }

        catch(error){

            res.status(500).json({msg:error})


        }
    }


    // const sorthuman = async(req, res)=>{


    //     try{

    //         const human = await Person.find({}).sort('name')

    //         res.status(200).json({human})


    //     }

    //     catch(error){


    //         res.status(500).json({msg:error})


    //     }




    // }


    const filterperson = async (req, res) =>{


        try{
            
            const {name, fields} = req.query
            const queries ={}
            let results =  Person.find(queries)
    
            if(name){
    
                queries.name = {$regex:name, $option:'i'}
            }

            if(fields){

                const fieldlist = fields.split(',').join(' ')

                results = results.select(fieldlist)
            }





            const human =  await results

            res.status(200).json({human})
        }

        catch(error){

            res.status(500).json({msg: error})
        }

        



    } 






module.exports = {   postPerson,
                     getPerson, 
                     updatePerson,
                     singlePerson,
                     filterperson
                }