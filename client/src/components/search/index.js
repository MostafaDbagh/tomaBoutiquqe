import { useState } from "react"
import logo from '../../assests/images/logo.png'
export const Search = ({setSearch}) => {


    return (
        <div className="row d-flex"  style={{width:"99%",margin:"16px auto",  background: "#fff0f5",borderRadius:'10px',}}>
            <div  className="w-25" ><img src={logo}alt="toma-boutique" className="mx-5"  height={100} width={200}/></div>
            <div className="w-75"  style={{padding:'32px'}}>
        <form className="flex-row-reverse d-flex">
            <div style={{fontFamily:'lato'}} >
                <input type="text" className="form-control" style={{minWidth:'370px',minHeight:'60px',outline:'0',border:'0',fontFamily:'oswald'}} id="inputSearch" placeholder="Enter Symbol..." onChange={(e)=>{
                    setSearch(e.target.value)
                }}  />
            </div>
            <button type="submit" className="btn btn-dark mx-2" style={{width:'120px',background:"#fba1b7",fontFamily:'lato',border:0,maxHeight:'45px',margin:'auto 0',height:'46px'}}>Search</button>
        </form>
        </div>
        </div>

    )
}