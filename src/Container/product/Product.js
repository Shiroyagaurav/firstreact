import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
// setSearchTerm(event.target.value);
function Product(props) {
    const [Products, setproduct] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setsort] = useState("");
    


    const getdata = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setproduct(data);
    }
    const handleSearch = () => {
        // console.log("ghfd");
        let fdata=[];
        fdata=Products.filter((v)=>(
v.title.toLowerCase().includes(search.toLowerCase())||
v.price.toString().includes(search.toString())||
v.description.toLowerCase().includes(search.toLowerCase())

        ))
    

        fdata.sort((a,b)=>{
            if(sort === 'hl'){
                return a.price -b.price
            } else if(sort ==="lh"){
                return b.price-b.price
            } else if(sort ==="az"){
                return a.title.localeCompare(b.title) 
            }else if(sort ==="za"){
                return b.title.localeCompare(a.title) 
            }
        })
      
        return fdata;

      
       
      
       
      };

    useEffect(() => {
        getdata()


    }, [])
const finddata=handleSearch();


    return (
        <div className='container'>
            <div className='row'>
                <h2 className="text-center"> Product </h2>
                <div className="mb-3">
          <input
            type="text"
            placeholder="Search..."
           
            onChange={(event)=>setSearch(event.target.value)}
          />

          <select name='sort' onChange={(event)=>setsort(event.target.value)}>
            <option value="0">select product</option>
            <option value="hl">high to low</option>
            <option value="lh">low to high</option>
            <option value="az"> a to z</option>
            <option value="za">z to a</option>
          </select>
        </div>
                {
                    finddata.map((v, i) => (
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
