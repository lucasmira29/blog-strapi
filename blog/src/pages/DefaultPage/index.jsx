import { Outlet } from "react-router";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import getData from '../../utils/fetchData.js'


function DefaultPage() {
  
  const [headerData, setHeaderData] = useState({}); 


  useEffect(() => {
    
    async function fetchHeaderData() {
      const header = await getData('/api/header?populate=*');
  
      setHeaderData(header.data);
    }
    
    fetchHeaderData();
  }, [])
  
  return (
    <div style={{height: '100vh'}}>
        <Header data={headerData}/>
        <Container>
            <Outlet />
        </Container>
        <Footer/>
    </div>
  )
}

export default DefaultPage;