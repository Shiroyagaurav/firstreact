import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
// setSearchTerm(event.target.value);
function Product(props) {
    const [Products, setproduct] = useState([]);
    


    const getdata = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setproduct(data);
    }
    const handleSearch = (event) => {
        console.log(event);
       
      };

    useEffect(() => {
        getdata()


    }, [])

    return (
        <div className='container'>
            <div className='row'>
                <h2 className="text-center"> Product </h2>
                <div className="mb-3">
          <input
            type="text"
            placeholder="Search..."
           
            onChange={handleSearch}
          />
        </div>
                {
                    Products.map((v, i) => (
                        <div className="col-md-4 gy-4">
                            <Card
                                style={{
                                    width: '18rem'
                                }}
                            >
                                <img alt="Sample" src={v.image} height={"200px"} />
                                <CardBody>
                                    <CardTitle tag="h5">{v.title.substring(0, 15) + "..."}


                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h3">
                                        Price:  {v.price}
                                    </CardSubtitle>
                                    <CardText>
                                        {v.description.substring(0, 70) + "..."}</CardText>
                                    <Button>
                                        Add to cart
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    ))

                }

            </div>
        </div>
    );
}

export default Product;
// const [searchTerm, setSearchTerm] = useState("");