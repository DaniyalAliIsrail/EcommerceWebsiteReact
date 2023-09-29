import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import {
       Card,
       CardHeader,
       CardBody,
       CardFooter,
       Typography,
       Button,
} from "@material-tailwind/react";

const Cardsapiwala = () => {
       const [ProductsData, SetProductsData] = useState([]);
       useEffect(() => {
              fetchData()
       }, [])

       const fetchData = async () => {
              try {
                     const DataCard = await axios.get(`https://fakestoreapi.com/products`);
                     SetProductsData(DataCard.data);
                     console.log(ProductsData);
              }
              catch (error) {
                     console.log("error", error);
              }
       }
       return (
              <> 
              <div className='p-2'>
                     <div className='flex justify-around items-center flex-wrap gap-3 w-[90vw] mx-auto '>
                            {
                                   ProductsData.map((value, index) => {
                                          return (
                                                 <div key={value.id}>
                                                        <Card className="mt-6 w-96 border shadow-lg">
                                                               <CardHeader color="blue-gray" className="relative h-56">
                                                                      <img className="object-contain	"
                                                                             src={value.image}
                                                                      />
                                                               </CardHeader>
                                                               <CardBody>
                                                                      <Typography variant="h5" color="blue-gray" className="mb-2 ">
                                                                             {value.title}
                                                                      </Typography>
                                                                      <Typography className='h-26 '>
                                                                             The place is close to Barceloneta Beach and bus stop just 2 min by
                                                                             walk and near to &quot;Naviglio&quot; where you can enjoy the main
                                                                             night life in Barcelona.
                                                                      </Typography>
                                                               </CardBody>
                                                               <CardFooter className="pt-0">
                                                                      <Link to={`/singleproducts/${value.id}`}>
                                                                             <Button>Read More</Button>
                                                                      </Link>
                                                               </CardFooter>
                                                        </Card>
                                                 </div>

                                          )
                                   })
                            }

                     </div>

              </div>
              </>
       )
}

export default Cardsapiwala