import React,{Component,Fragment} from 'react';
import {Button,Input,List}  from 'antd';
//import logo from './logo.svg';
import './App.css';
import store from './store'
//import {ADD_LIST_ITEM,CHNAGE_INPUT_VALUE,REMOVE_LIST_ITEM} from './store/actionTypes'
import {addListItemAction,changeInputValueAction,removeListItemAction,initListData,initListDataThunk} from './store/actionCreator';
import 'antd/dist/antd.css'
import axios from 'axios'
//import AppUI from './AppUI'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state=store.getState();
    this.handleInputChange=this.handleInputChange.bind(this);
    this.addItem=this.addItem.bind(this)
    this.handleStoreChange=this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange);
  }
   

  handleInputChange(e){
    let  value=e.target.value;
    changeInputValueAction(value)
  }
  addItem(){
    addListItemAction();
  }
  removeItem(index){
    console.log('index',index)
    removeListItemAction(index)
  }
  handleStoreChange(){
    this.setState(store.getState())
  } 
  componentWillMount(){
    store.dispatch({type:"INIT_DATA_SAGA",value:'test'})
    /* let action=initListDataThunk();
    store.dispatch(action); */
  }
  render(){
    //return (<AppUI />)
    return (
     <div className='main' style={{width:'800px',margin:"20px auto"}}>
        <div className='top' style={{marginBottom:'20px'}}>
          <Input  style={{width:'300px'}} value={this.state.inputVal}  onChange={this.handleInputChange}/>
          <Button type='primary' style={{marginLeft:'10px'}} onClick={this.addItem}>添加</Button>
        </div>
        <div className='list'>
          <List
            header={<div>列表</div>}
            bordered
            dataSource={this.state.list}
            renderItem={
              (item,index)=>(
                <List.Item style={{display:'flex',justifyContent:'space-between'}}>
                  <span>{item}</span>
                  <Button type='danger' size='small' onClick={this.removeItem.bind(this,index)}>删除</Button>
                </List.Item>
              )
            }
          
          />
        </div>
     </div>
    )
  }
}
export default App;
