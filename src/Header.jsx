import React from 'react'
import { Container, FormControl, Navbar, NavbarBrand, NavbarText, Dropdown, DropdownToggle, Badge, DropdownMenu } from 'react-bootstrap'
import {BsFillCartPlusFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useState  , useEffect} from 'react'
import useDebounce from './useDebounce'


function Header({onFilterSetSearch,setShow , onClear}) {

  const [search, setSearch] = useState(null);
  const debouncedSearch = useDebounce(search, 2000);
 
  useEffect(() => {
   
    
    debouncedSearch && onFilterSetSearch(debouncedSearch );
  }, [debouncedSearch]);


  const handleInputChange = (e) => {
    e.preventDefault();
    if (e && e.target) {
      setShow(true)
    setSearch(e.target.value)
    ;}
    if(!e.target.value){setSearch(null);
    onClear();}
  };
  return (
   <Navbar bg="dark"  variant="dark" style={{height:80}} className="bg-body-tertiary">
    <Container>
<NavbarBrand>
<Link to='/'>logo </Link>

</NavbarBrand>
<NavbarText claasName="search">
<FormControl  name="searchhh" style={{width:500}} placeholder="search a breed" className="m-auto"   
 onChange={handleInputChange}
 onFocus={() => setShow(true)}></FormControl>
{}

</NavbarText>


    </Container>
    
    
     </Navbar>
  )
}

export default Header
