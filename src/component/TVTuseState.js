import React,{useState} from 'react'

export default function TVTuseState() {
   
        // Declare a new state variable, which we'll call "count"
   const [count, setCount] = useState(10);
    // mảng
    const [list, setList]=useState([1,5]);
    // ham su li su kien them ngau nhien 
     const TVTHandleList = ()=>{
      // sinh ngau nhien mot gia tri so 
      let num = parseInt(Math.random()*100);
      // cap nhat lai state : list
      setList([
        ...list,
        num
      ])
      // cach khac
       // list.push( num);
      // setList(list)
    }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 5)}>
        Click me
      </button>
      <hr/>
      <h3> List: {list.toString()}</h3>
      <button onClick={TVTHandleList}>them ngau nhien </button>
    </div>
  );
}
    