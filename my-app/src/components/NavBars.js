import { useEffect, useState } from 'react';
import {Navbar,Container} from 'react-bootstrap';

// export const Navbar=()=>{
//   const[activeLink,setActiveLink]=useState('home');
//   const[scrolled,seScrolled]=useState(false);
// }

function BasicExample() {
  const[activeLink,setActiveLink]=useState('home');
  const[scrolled,seScrolled]=useState(false);

  //banner scrolled 
  useEffect(()=>{
    const onScroll=()=>{
      if(window.scrollY>50){ //50 pixle 
        seyScrolled(true)
      }else{
        setScrolled(true)
      }
    }
    window.addEventListener("scroll",onScroll);
    // remove it becasue when the compnents gets removed from the dom
    return ()=>window.removeEventListener("scroll",onScroll);
  },[])


  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <span className="navbar-toggler-icon"></span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='#'><img src={} alt=""/></a>
                <a href='#'><img src={} alt=""/></a>
                <a href='#'><img src={} alt=""/></a>
            </div>
            <button className="vvd" onClick={()=>console.log('connect')}><span>Let's connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;