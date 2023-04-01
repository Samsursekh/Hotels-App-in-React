import { Card, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const HotelHomePage = () => {
    const [hotels, setHotels] = useState([]);
  const displaData = ()=> {
    fetch(`https://books-data-api.onrender.com/hotels`).then((res) => {
      res.json().then((result) => {
        console.log(result);
        setHotels(result);
    })
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    displaData()
  },[])

  return (<div style={{marginTop : "100px"}}> 
  <p>All Products</p>
    <Container>
        {
            hotels && hotels.map((h) => {
                return <Card key={h.id}>
                    <Typography>{h.category}</Typography>
                </Card>
            })
        }
    </Container>
   </div>)
}
export default HotelHomePage;