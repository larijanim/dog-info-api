
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState , useRef, useCallback, Suspense } from "react";
import Header from "./Header";
import { BrowserRouter,Route } from "react-router-dom";
import Images from "./componenets/Images"
import { fetchData } from "./data";
import ListGroup from 'react-bootstrap/ListGroup';
import useSearch from "./useSearch";
import MortgageCalculator from "./componenets/MortgageCalculator"
import IBM from "./ibm";

//const button=React.lazy(()=>import('./Button'))
//return (<Suspense fallback={<div> is loading ...</div>}>
//<Button/>
// </Suspense>)


export default function App() {

 const [loading,setLoading]=useState(true);
 const [data,setData]=useState([]);
 const [fdata,setFdata]=useState([]);
 const [imagesSrc,setImagesSrc]=useState([]);
 const [err,setErr]=useState();
 const [filter, setFilter]=useState(false);
 const[dObj,setDObj]=useState([])
 const [show,setShow]=useState(false);

 const [q,setQ]=useState('');
 const [p,setP]=useState(1);

  const {book, hasMore}=useSearch(q,p);
  const observe=useRef();
  const lstone=useCallback(); 





    const onFilterSetSearch=(param )=>{
    
      if(param){
      const filteredList=data.filter((d)=>(d.includes(param)))
      setFdata(filteredList);
      if(filteredList.length>0){
        setFilter(true);
    }}
    }

    const onClear=()=>{
      setFilter(false);
      setFdata([]);
      setShow(false);
      setDObj([]);

    }
  const fetchImages = async (item) => {
    const response = await fetch(`https://dog.ceo/api/breed/${item}/images/random`);
    const data = await response.json();
    const x={item:item,
    itemImage:data.message,
    }
    setDObj((prev)=>[...prev,x]);
      setImagesSrc((prev) => [...prev, data.message]);
    };
    const onClickItem=(d)=>{
      const index = fdata.indexOf(d);
    fetchImages(fdata[index]);
    }


  useEffect(()=>{
    setLoading(true);
    fetchData({setData,setLoading,setErr})
  },[]);


  function handleSearch(e){
    setP(1);
    setQ(e.target.value)
  }
  
  return (
    <BrowserRouter>
      <Header onFilterSetSearch={onFilterSetSearch} setShow={setShow} onClear={onClear}/>
      <ListGroup variant="flush"> 
        { show  && filter &&
        fdata.map(d => 
          <ListGroup.Item key={d} action onClick={()=>onClickItem(d)}>{d}</ListGroup.Item>
        )}
          {/* { show  && !filter && data.map(d => <ul key={d}>{d}</ul>
      )} */}
       </ListGroup> 
      <div>
          {filter  && show  &&
            dObj.map(d => {return(<>
              <div key={d.item}>{d.item}
                <Images src={d.itemImage}/></div></>
            );})}
        </div>
        <div><input type="text" value={q} onChange={handleSearch}></input>
        {book && book.map(b=> <p key={b}>{b}</p>)}
        </div>
      <div className='box'><div className='cross'></div></div>
     <div>
      <div style={{ height: '200px', width: '100px', backgroundColor: 'black' }}>
  
  <div style={{ height: '50px', width: '30px', backgroundColor: 'green' }} /><br/>
  <div style={{ height: '50px', width: '50px', backgroundColor: 'yellow' }}/><br/>
  <div style={{ height: '50px', width: '70px', backgroundColor: 'blue' }} /><br/></div>
</div>
<div className="container2">
      <div className="item green" style={{ width: `90px` }}></div>
      <div className="item yellow" style={{ width: `10px` }}></div>
      <div className="item blue" style={{ width: `220px` }}></div>
    
    </div>
    </BrowserRouter>
  );
}

