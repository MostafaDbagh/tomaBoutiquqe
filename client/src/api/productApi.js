import axios from 'axios'

export const Axios = axios.create({
    baseURL: 'http://localhost:4060/', 
    timeout: 5000, // Request timeout in milliseconds
    headers: {
      'Authorization': 'Bearer YourAccessToken', // Custom headers
      'Content-Type': 'application/json', // Example content type
    },
  })

export const getProductApi = async ()=>{
    const response = await Axios.get('products');
    return response.data
}

export const getProductById =  async(id)=>{
    const response = await Axios.get(`products/${id}`);
    return response.data;

}

export const deleteProductById =  async(id)=>{
  const response = await Axios.delete(`products/${id}`);
  return response.data;

}
export const getProductBySearch =  async(search)=>{
  const response = await Axios.get(`products/search/${search}`);
  return response.data;

}
export const getNextOrederId =  async(search)=>{
  const response = await Axios.get(`orders/lastOrderId`);
  return response.data;

}
export const updateProduct =  async(id,data)=>{
  const response = await Axios.put(`products/${id}`,data,{
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'    }
  });
  return response.data;

}

export const getOrders =  async()=>{
  const response = await Axios.get(`orders`)
  return response.data;

}

export const sendLocation =  async(data)=>{
  const response = await Axios.post(`location/sendLocation`,data)
  return response.data;

}

export const makeOrder =  async(data)=>{
  const response = await Axios.post(`orders/makeOrder`,data)
  return response.data;

}

export const getLocations = async (data) =>{
  const response = await Axios.get('location/locations')
  return response.data
}

export const updateOrder = async(data,id) =>{
  const response = await Axios.post(`orders/updateOrder/${id}`,data);
  return response.data
}

export const adminLogin = async(data) =>{
  const response = await Axios.post(`admin/adminLogin/`,data);
  return response.data;

}