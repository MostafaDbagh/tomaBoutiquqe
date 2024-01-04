import { useState } from "react"
import logo from '../../assests/images/logo.png'
import './index.css'
export const Search = ({setSearch}) => {


    return (
        <div className=" d-flex justify-content-between flex-wrap"  style={{width:"99%",margin:"16px auto",  background: "#fff0f5",borderRadius:'10px'}}>
            <div  className="logoSection">
                <img src={logo}alt="toma-boutique"  height={100} width={200}/>
            </div>
            <div className="searchSection"  >
        <form className="flex-row-reverse d-flex flex-wrap searchForm">
            <div style={{fontFamily:'lato'}} >
                <input type="text" className="form-control responsiveInput" style={{width:'370px',minHeight:'60px',outline:'0',border:'0',fontFamily:'oswald'}} id="inputSearch" placeholder="Enter Symbol..." onChange={(e)=>{
                    setSearch(e.target.value)
                }}  />
            </div>
            <button type="submit" className="btn btn-dark mx-2 responsiveButton " style={{background:"#fba1b7",fontFamily:'lato',border:0,maxHeight:'45px',margin:'auto 0',height:'46px'}}>Search</button>
        </form>
        </div>
        </div>

    )
}