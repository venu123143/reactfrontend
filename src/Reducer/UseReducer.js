export const initialState= null;

export const reducer=(state,action)=>{

    if(action.type==='User'){
        return action.payload;
    }
    if(action.type ==='Search'){
        // console.log(action.payload );
        return action.payload;
    }
    if(action.type ==='Filter'){
        return action.payload;
    }
    if(action.type ==='PageNo'){
        // console.log(action.paylod );
        return action.payload;
    }
    return state;
}