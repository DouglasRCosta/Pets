import { Request,Response } from "express";
import * as menu from '../helper/menuActiveHelper';
import * as pet from '../models/pet';

export const home = (req:Request, res:Response)=>{
    res.render('pages/page',{
        act:menu.menuD('all'), 
        pets:pet.Pet.getAll(),  
        banner:{
            title:'Todos os animais',
            background:'allanimals.jpg'
        }
    });
}
export const dogs = (req:Request, res:Response)=>{
    res.render('pages/page',{
        act:menu.menuD('dog'), 
        pets:pet.Pet.getFromType('dog'),    
        banner:{
            title:'Cachorros',
            background:'banner_dog.jpg'
        }
    });
}
export const cats = (req:Request, res:Response)=>{
    res.render('pages/page',{
        act:menu.menuD('cat'), 
        pets:pet.Pet.getFromType('cat'),   
        banner:{
            title:'Gatos',
            background:'banner_cat.jpg'
        }
    });
}
export const fishes = (req:Request, res:Response)=>{
    res.render('pages/page',{
        act:menu.menuD('fish'), 
        pets:pet.Pet.getFromType('fish'),   
        banner:{
            title:'Peixes',
            background:'banner_fish.jpg'
        }
    });
}

