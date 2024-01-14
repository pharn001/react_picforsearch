
import './App.css'
import  Hidd from './headerj'
import  Img from './git_img'
import tattoos from '../data/tattoos'
import { useState } from 'react'
import Post from './post'
function App() {

  function clickTattoo(thetattoo){
    setClick(thetattoo);
  }
  function clickTattooClose(thetattoo){
    setClick(null);
  }
  const [click , setClick]=useState(null);
  const [search, setSearch]=useState('');
  
  const filteredTattoo = tattoos.filter((tattoo) => {
    return tattoo.title.includes(search);
  }) 
  const element = filteredTattoo.map((tattoo,index) =>{
    return <Img key={index} tattoo={tattoo} clickTatto={clickTattoo} />
  });
  // ການສ້າງແບບໃສ່ filter ຟັງຊັ້ນເລີຍ
  // const element = tattoos.filter((tattoo) =>{
  //   return tattoo.title.includes(search);
  // }).map((tattoo,index) =>{
  //   return <Img key={index} tattoo={tattoo} clickTatto={clickTattoo} />
  // });

  let Post1 =null;
  if(!!click) {
    Post1= <Post tattoo={click} clickClose={clickTattooClose}/>
  }
  return (
    <>
      <div className='app'>
       <Hidd/>
       <input 
          type='text'
          value={search}
          placeholder='ຄົ້ນຫາລະແມະ'
          onChange={(event)=>{setSearch(event.target.value)}}
       />
        <div className='app-grid'>
          {element}                         
        </div>
        {Post1}
      </div>
    </>
  )
}

export default App
