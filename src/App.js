import React,{Component,Fragment} from 'react';
import {Button,Input,List}  from 'antd';
//import logo from './logo.svg';
import './App.css';
import store from './store/index_saga'
//import {ADD_LIST_ITEM,CHNAGE_INPUT_VALUE,REMOVE_LIST_ITEM} from './store/actionTypes'
import {addListItemAction,changeInputValueAction,removeListItemAction,initListData,initListDataThunk} from './store/actionCreator';
import 'antd/dist/antd.css'
import axios from 'axios'
import {connect} from 'react-redux'
//import AppUI from './AppUI'
class TodoList extends React.Component{
  constructor(props){
    super(props);
  }
   
  componentWillMount(){
      this.props.initData();
  }
  render(){
    //return (<AppUI />)
    const {inputVal,list}=this.props;
    return (
     <div className='main' style={{width:'800px',margin:"20px auto"}}>
        <div className='top' style={{marginBottom:'20px'}}>
          <Input  style={{width:'300px'}} value={inputVal}  onChange={this.props.handleInputChange}/>
          <Button type='primary' style={{marginLeft:'10px'}} onClick={this.props.addItem}>添加</Button>
        </div>
        <div className='list'>
          <List
            header={<div>列表</div>}
            bordered
            dataSource={list}
            renderItem={
              (item,index)=>(
                <List.Item style={{display:'flex',justifyContent:'space-between'}}>
                  <span>{item}</span>
                  <Button type='danger' size='small' onClick={this.props.removeItem.bind(this,index)}>删除</Button>
                </List.Item>
              )
            }
          
          />
        </div>
     </div>
    )
  }
}
const mapStateToProps=(state)=>{//把state（store数据）数据映射到props
  return {
      inputVal:state.inputVal,
      list:state.list
  }
}
const mapDispatchToProps=(dispatch)=>{//将store.dispatch 赋予本身 可以直接不引入store的时候dispatch
  return {
    handleInputChange(e){
      let value=e.target.value;
      let action=changeInputValueAction(value);
      dispatch(action)
    },
    addItem(){
      let action=addListItemAction();
      dispatch(action)
    },
    removeItem(index){
    //  console.log('index',index)
      let action=removeListItemAction(index);
      dispatch(action)
    },
    initData(){
      const action=initListDataThunk();
      dispatch(action);
    }

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
