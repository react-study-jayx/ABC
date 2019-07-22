import {ADD_LIST_ITEM,CHNAGE_INPUT_VALUE,REMOVE_LIST_ITEM,INIT_LIST_DATA} from './actionTypes'
//import store from './index_saga'
import axios from 'axios'
export const changeInputValueAction=(value)=>{
    return {
        type:CHNAGE_INPUT_VALUE,
        value:value
    }
}

export const addListItemAction=()=>{
       return {
           type:ADD_LIST_ITEM
        }
        
}

export const removeListItemAction=(index)=>{
   return {
        type:REMOVE_LIST_ITEM,
        index:index
    }
   
}
export const initListData=(data=>{
    return {
        type:INIT_LIST_DATA,
        data:data
    }
})

export const initListDataSaga=(data=>{
    return {
        type:INIT_LIST_DATA,
        data:data
    }
})
export const initListDataThunk=()=>{
    return (dispatch)=>{
        axios.get('http://node.itianhuihui.com/translate/lang/hot').then(res=>{
            let data=res.data.data;
            let action={
                type:INIT_LIST_DATA,
                data:data
            }
            dispatch(action)
          })
    }
}