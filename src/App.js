
import React from 'react';
import crc32 from 'crc-32';
import './App.css';

export default class App extends React.Component{
  state ={
    obj:''
  }

  onEnterPress = (e) => {
    const { onItemAdded, value } = this.props
    if (e.keyCode === 13) {
      onItemAdded(value)
    }
  }
  newObjectList = (e) => {
    let q =e.target.value;
    let m=q.split(' ');
    let newArrOBJ=[];
      for(let i=0;i<m.length;i++){
        newArrOBJ[i]={"type": "Id",
        "value": m[i]};
      }
      this.setState({
        obj:newArrOBJ,
      })
  }





































  getHech=()=>{
    let date=new Date().toLocaleString();;
    let hech=Math.abs(crc32.str(date)).toString();
    let splitHech=hech.split('');
    let one,two,three,four,five='';
    for (let i=0;i<splitHech.length;i++){
      if(i<8){
        one+=splitHech[i];
        console.log(one);
      }
      five+=splitHech[i];
    }
  }





















  








  downLoadFile=(e)=>{
    const newObj=this.state;
    const newArr= Object.entries(newObj);
    let message='';
    newArr.forEach(([key, value]) => {
      message+=JSON.stringify(value);
    });
    this.getHech();
  }
render(){
  return(
    <div>
      <header>
      <input
            className="new-todo"
            value={''}
            placeholder="What needs to be done?"
            onChange={this.newObjectList}
            onKeyDown={this.onEnterPress}
          />
      </header>
      <button onClick={this.downLoadFile}>DownLoad</button>
    </div>
  )
}
}
