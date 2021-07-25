import { Request, Response } from "express";
import {NumberPeopleSaw, NumberPeopleSawInput} from "../models/numberPeopleSaw.model";


const getAllNumberPeopleSaw = async (req: Request, res: Response)=>{
    let NumberPeopleSaws = await NumberPeopleSaw.find((err: any, NumberPeopleSaws: any)=>{
        if(err){
            return res.status(422).json({ message: "Impossible de récupérer les nombres de vues " });
        }else {
            res.send(NumberPeopleSaws)
        }
    })

}

export {getAllNumberPeopleSaw}
