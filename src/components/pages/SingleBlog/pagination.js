import React,{useEffect, useState} from 'react';
import axios from 'axios';

function Pagination(){
    useEffect(() => {
        const fetchBlog = async () => {
                const resp = await axios.post("https://og4xo5agm5.execute-api.ap-south-1.amazonaws.com/Prod/read1Blog",
                {headers:{'Content-Type': 'application/json',},body:{
                    "id":'7d2c4d38-390f-4a2d-ac55-f42b9effbd03'
                    }})
                    console.log(resp.data);
                }
                fetchBlog();
    }, [])
    return(
        <h1>Inside Pagination</h1>
    );
}

export default Pagination;