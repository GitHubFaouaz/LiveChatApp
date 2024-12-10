import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export default function createPost(req,res) {

  if(req.method === 'POST'){

    const {name,email,image,desc} = req.body;
     
    try{
   
    }catch(error){
    console.log('erreur lors de la creation du post :' , error);
    res.status(500).json({error:'erreur interne du serveur'};)
    }


  }
 

}
