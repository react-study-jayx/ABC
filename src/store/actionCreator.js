import {ADD_LIST_ITEM,CHNAGE_INPUT_VALUE,REMOVE_LIST_ITEM,INIT_LIST_DATA} from './actionTypes'
import store from './index'
import axios from 'axios'
export const changeInputValueAction=(value)=>{
    const action={
        type:CHNAGE_INPUT_VALUE,
        value:value
    }
    store.dispatch(action)
}

export const addListItemAction=()=>{
    const action={
        type:ADD_LIST_ITEM,
    }
    store.dispatch(action)
}

export const removeListItemAction=(index)=>{
    const action={
        type:REMOVE_LIST_ITEM,
        index:index
    }
    store.dispatch(action)
}
export const initListData=(data=>{
    const action={
        type:INIT_LIST_DATA,
        data:data
    }
    store.dispatch(action)
})

export const initListDataSaga=(data=>{
    const action={
        type:INIT_LIST_DATA,
        data:data
    }
    store.dispatch(action)
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