// import React from 'react'
// import {Button,Input,List} from 'antd'
// import 'antd/dist/antd.css'
// class App extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return (
//             <div className='main' style={{width:'800px',margin:"20px auto"}}>
//                 <div className='top' style={{marginBottom:'20px'}}>
//                 <Input  style={{width:'300px'}} value={this.state.inputVal}  onChange={this.handleInputChange}/>
//                 <Button type='primary' style={{marginLeft:'10px'}} onClick={this.addItem}>添加</Button>
//                 </div>
//                 <div className='list'>
//                 <List
//                     header={<div>列表</div>}
//                     bordered
//                     dataSource={this.state.list}
//                     renderItem={
//                     (item,index)=>(
//                         <List.Item style={{display:'flex',justifyContent:'space-between'}}>
//                         <span>{item}</span>
//                         <Button type='danger' size='small' onClick={this.removeItem.bind(this,index)}>删除</Button>
//                         </List.Item>
//                     )
//                     }
                
//                 />
//                 </div>
//             </div>
//         )
//     }
// }
// export default App;