import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Productes(props) {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [sort,setSort] = useState('');
    const [category, setCategory] = useState('');


    const getData = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json();

        console.log(data);
        setProducts(data);

    }

    useEffect(() => {
        //componetDidMount
        getData()
    }, [])

    const handlesearch = () => {
        // console.log("hhi");
        let fData = [];
        fData = products.filter((v) => (
            v.category.toLowerCase().includes(search.toLowerCase()) ||
            v.price.toString().includes(search.toString()) ||
            v.description.toLowerCase().includes(search.toLowerCase())
        ))

        // console.log(sort);
        fData.sort((a,b) => {
            if(sort === 'lh') {
                return a.price - b.price
            } else if (sort === 'hl') {
                return b.price === a.price
            } else if (sort === 'az') {
                return a.title.localeCompare(b.title)
            } else if (sort === 'za') {
                return b.title.localeCompare(a.title)
            }
        })
        if (category) {
            FinalData = sortedData.filter((v) => v.category === category);
            console.log(FinalData);
          }

        return fData;
    }

    // console.log(search);

    const FinalData = handlesearch();
    return (
        <div className='container'>
            <h2 className='text-center'>Productes</h2>

            <input type='search' placeholder='Search' onChange={(event) => setSearch(event.target.value)}>

            </input>
            <select name='sort' onChange={(event) => setSort(event.target.value)} className='p-1 m-2'>
                <option value=''>--Select sort --</option>
                <option value='lh'>price:Low to High</option>
                <option value='hl'>price:High to Low</option>
                <option value='az'>title: A to Z</option>
                <option value='za'>title:Z to A</option>
            </select>
            <Nav>
        <NavItem>
          <NavLink className='category' onClick={() => setCategory('electronics')}>Electronics</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='category' onClick={() => setCategory('jewelery')}>Jewelry</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='category' onClick={() => setCategory("men's clothing")}>Men's clothing</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='category' onClick={() => setCategory("women's clothing")}>Women's clothing</NavLink>
        </NavItem>
      </Nav>
            <div className='row gy-5'>
                {
                    FinalData.map((v, i) => (
                        <div className='col-md-4'>
                            <Card>
                                <img className='rounded mx-auto d-block m-3'
                                    alt="Sample"
                                    src={v.image}
                                    width={"200px"} height={"200px"}

                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {v.title.length > 20 ? v.title.substring(0, 20) + "..." : v.title}                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {v.category}<br></br>
                                        {v.price}
                                    </CardSubtitle>
                                    <CardText>
                                        {v.description.length > 20 ? v.description.substring(0, 20) + "..." : v.description}
                                    </CardText>
                                    <Button>
                                        Add to Card
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

export default Productes;