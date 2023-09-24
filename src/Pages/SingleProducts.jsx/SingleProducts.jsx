import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";

const SingleProducts = () => {
       const [singleProducts, setsingleProducts] = useState({});
       const param = useParams();
       console.log(param.productsid);

       useEffect(() => {
              fetchsigleProducts();
       }, [])
       const fetchsigleProducts = async () => {
              try {
                     const singledata = await axios.get(`https://fakestoreapi.com/products/${param.productsid}`);
                     setsingleProducts(singledata.data)
                     console.log(singleProducts);
                     console.log(param.productsid);
              }
              catch (error) {
                     console.log("error",error);
              }
       }

       return (
              <>
               {(<div>
               <h1>{param.productid}</h1>
               <img src={singleProducts?.image} width={250} height={250} />
               <h1>Title: {singleProducts?.title}</h1>
               <h1>Price: {singleProducts?.price}</h1></div>) }

              </>
       )
}

export default SingleProducts