import React, { useEffect, useState } from 'react';
import api_Client from '../ServicesApi/api_Client';

const useFetchCategories = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        api_Client.get("/categories/").then(res=>setCategories(res.data))
    },[])
    return categories;
};

export default useFetchCategories;