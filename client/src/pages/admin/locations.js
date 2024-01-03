import { useState,useEffect } from "react";
import { getLocations } from "../../api/productApi";
import './index.css'


const LocationPage = ({search}) =>{
    const [locations, setLocations] = useState([]);
    const [loading, setLoadign] = useState(false);
    const[error, setError] = useState('')




    const fetchOrdersApi = async () => {
   
     try {
            setLoadign(true)
            const {data} = await getLocations();
            if (data) {
              setLocations(data)
            }
            else throw Error('there is no data')
        }catch(err){
            setError(err)
        }
        finally{
            setLoadign(false)
        }

}

useEffect( ()=>{
    fetchOrdersApi()
    // if (search.length >1 ){
    //   fetchProductsApiBySearch(search)

    // }
},[])



return (
    <>
    <div className="container mt-4">
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr className="text-center">
          <th style={{textAlign: "center"}}>Location ID</th>
          <th> First name</th>
          <th >Last  name</th>
          <th> Phone number</th>
          <th> Email addrss</th>
          <th>Location Country</th>
           <th>Location City</th>
            <th>Location District</th>
            <th>Location Street</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location, index) => (
            <tr key={index}>
            <td>{location.location_id}</td>
             <td >{location.customer_location_first_name}</td>
             <td  >{location.customer_location_last_name}</td>
             <td>{location.customer_location_phone}</td>
              <td >{location.customer_location_email}</td>
              <td>{location.customer_location_country}</td>
              <td>{location.customer_location_city }</td>
              <td>{location.customer_location_district}</td>
              <td>{location.customer_location_street_address}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>

 
    </>
  );
}

export default LocationPage;