import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = ()=>{
  const [name,setName] = useState();
  const [move,setMove] = useState();
  const [Num,setNums] = useState('1');
  useEffect(()=>{
    async function getData()
    {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Num}`)
      setName(res.data.name);
      setMove(res.data.moves.length.toString());
      
    }
    getData();
  })
  const changes = (e)=>{
    setNums(e.target.value);
  }
  return (
    <>
    <h1>You choose {Num}</h1>
    <h1>You choose {name}</h1>
    <h1>You choose {move}</h1>
    <select  onChange={changes}>
    <option value='1'>1</option>
    <option value='2'>2</option>
    <option value='25'>25</option>
    <option value='4'>4</option>
    </select>
    </>
  )
}
export default App;