const defaultState={
    inputVal:'hello',
    list:['jay','Fly']
}
export default (state=defaultState,action)=>{
    if(action.type=='change_input_value'){
        let newState=JSON.parse(JSON.stringify(state));
        newState.inputVal=action.value;
        return newState;
    }
    if(action.type=='add_list_item'){
        let newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputVal);
        newState.inputVal='';
        return newState;
    }
    if(action.type=='remove_list_item'){
        let newState=JSON.parse(JSON.stringify(state));
        let index=action.index;
        newState.list.splice(index,1);
        return newState;
    }
    return state;
}