    import { Request,Response } from "express";
    import * as menu from '../helper/menuActiveHelper';
    import * as pet from '../models/pet';

export const search = (req:Request, res:Response)=>{
    let search:string = req.query.q as string;
    res.render('pages/page',{
        act:menu.menuD(''),
        pets:pet.Pet.getSearch(search) 
    })
}
