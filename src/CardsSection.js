import './styles.scss';
import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import { Card } from 'antd';
const { Meta } = Card;

export default function CardsSection() {
    const [productData, setProductData] = useState([]);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro na solicitação');
          }
          return response.json();
        })
        .then(data => {
          setProductData(data);
        })
        .catch(error => {
          console.error('Erro:', error);
        });
    }, []);

    return (
      <div className='container pt-5'>
        <div className='g-2 row row-cols-1 row-cols-md-2 row-cols-lg-4 align-items-center'>
          {productData.map(product => (
            <Link to={`/product/${encodeURIComponent(product.image)}/${encodeURIComponent(product.title)}/${encodeURIComponent(product.description)}`} style={{ textDecoration: 'none' }}>
              <Card hoverable style={{width: 240,}}cover={<img alt={product.title} src={product.image} />}>
                <Meta title={product.title} description={(<div>{product.category}<br/>R$: {product.price}</div>)} />
              </Card>           
            </Link>
          ))}
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
      </div>
    );
  }