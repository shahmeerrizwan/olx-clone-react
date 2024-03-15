import React, { useEffect, useState } from 'react';
import Cards from '../Card/Cards';
import loadingGif from '../Assets/loading.gif';
import OlxLogo from '../Assets/OlxLogo';
import Search from '../Assets/Search';
import Arrow from '../Assets/Arrow';
import SellButton from '../Assets/SellButton';
import SellButtonPlus from '../Assets/SellButtonPlus';




const styles = {
    loadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }
};

export default function Product() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        fetch('https://dummyjson.com/products')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch products');
                }
                return res.json();
            })
            .then(res => {
                setProducts(res.products);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredProducts = products.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className='back'>
                <div className='main'>
                    <div className='olxlogo'>
                        <img src="https://1000logos.net/wp-content/uploads/2023/01/OLX-logo.png" alt="" />
                    </div>
                    <div className='carlogo'>
                        <img src="https://static.vecteezy.com/system/resources/previews/001/193/785/non_2x/car-png.png" alt="" />
                        <span>MOTORS</span>
                    </div>
                    <div className='buildinglogo'>
                        <img src="https://freepngimg.com/save/148529-building-vector-png-download-free/512x512" alt="" />
                        <span>PROPERTY</span>
                    </div>
                </div>
                <div className='up'>
                    <div className='headerParentDiv'>
                        <div className="headerChildDiv">
                            <div className="brandName">
                                <OlxLogo />
                            </div>
                            <div className="placeSearch">
                                <Search />
                                <input type="text" id="browser" name="browser" className='ali' placeholder='Pakistan' autoComplete="off" list="browsers" />
                                <datalist id="browsers">
                                    <option value="Karachi" />
                                    <option value="Lahore" />
                                    <option value="Islamabad" />
                                    <option value="Peshawar" />
                                    <option value="Quetta" />
                                    <option value="KPK" />
                                </datalist>
                                <Arrow />
                            </div>
                            <div className="productSearch">
                                <div className="input">
                                    <input
                                        value={searchQuery}
                                        onChange={handleSearchInputChange}
                                        type="text"
                                        placeholder="Find car,mobile phone and more..."
                                    />
                                </div>
                                <div className="searchAction">
                                    <Search />
                                </div>
                            </div>
                            <div className="language">
                                <span> ENGLISH </span>
                                <Arrow />
                            </div>


                            <div className="sellMenu">
                                <SellButton />
                                <div className="sellMenuContent">
                                    <SellButtonPlus />
                                    <span>SELL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input className='maininput'
                value={searchQuery}
                onChange={handleSearchInputChange}
                type="text"
                placeholder="Find car,mobile phone and more..."
            />

            {loading && (
                <div style={styles.loadingContainer}>
                    <img src={loadingGif} alt="Loading..." />
                </div>
            )}
            {error && <p>{error}</p>}
            {!loading &&
                (filteredProducts.length > 0 ? (
                    filteredProducts.map(item => (
                        <Cards
                            key={item.id}
                            price={item.price}
                            description={item.description}
                            images={item.images}
                            brand={item.brand}
                            title={item.title}
                            id={item.id}
                        />
                    ))
                ) : (
                    <p className='nofound'>No item found</p>
                ))
            }
        </div>
    );
}
