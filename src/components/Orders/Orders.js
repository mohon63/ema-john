import React from 'react';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h2>This is orders page :{products.length}</h2>
        </div>
    );
};

export default Orders;