import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/banner/Banner'
import RowList from '../../components/Rows/Rowlist/rowlist'


function Home() {
  return (
    <div>
       <Header/>
       <Banner/>
       <RowList/>
       <Footer/>
       
    </div>
  )
}

export default Home
