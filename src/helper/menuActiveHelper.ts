type menuType = ''|'all'|'dog'|'cat'|'fish';

export const menuD = (menuActive:menuType)=> {
    let temp = {
        all:false,
        dog:false,
        cat:false,
        fish:false
    }
    if(menuActive != ''){
        temp[menuActive] = true;
    }
    return temp;
}