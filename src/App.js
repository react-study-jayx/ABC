import React,{Component,Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store'
import {Button,Input,List} from 'antd'
import 'antd/dist/antd.css'
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
    let  val=e.target.value;
    const action={
      type:"change_input_value",
      value:val
    }
    store.dispatch(action);
    this.addItem=this.addItem.bind(this);
    this.removeItem=this.removeItem.bind(this);
  }
  addItem(){
    const action={
      type:"add_list_item"
    }
    store.dispatch(action);
  }
  removeItem(index){
    console.log('index',index)
    const action={
      type:"remove_list_item",
      index:index
    }
    store.dispatch(action);
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  render(){
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
