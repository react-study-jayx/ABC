import {CHNAGE_INPUT_VALUE,REMOVE_LIST_ITEM,ADD_LIST_ITEM,INIT_LIST_DATA} from './actionTypes'
const defaultState={
    inputVal:'hello',
    list:['jay','Fly']
}
export default (state=defaultState,action)=>{
    if(action.type==CHNAGE_INPUT_VALUE){
        let newState=JSON.parse(JSON.stringify(state));
        newState.inputVal=action.value;
        return newState;
    }
    if(action.type==ADD_LIST_ITEM){
        let newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputVal);
        newState.inputVal='';
        return newState;
    }
    if(action.type==REMOVE_LIST_ITEM){
        let newState=JSON.parse(JSON.stringify(state));
        let index=action.index;
        newState.list.splice(index,1);
        return newState;
    }
    if(action.type==INIT_LIST_DATA){
        let newState=JSON.parse(JSON.stringify(state));
        newState.list=action.data;
        return newState;
    }
    
    return state;
}