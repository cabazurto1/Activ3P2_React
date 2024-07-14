// src/components/ProductCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card className="w-64 h-96 flex flex-col mx-auto shadow-lg">
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        className="object-cover h-48"
      />
      <CardContent className="flex flex-col flex-grow">
        <Typography gutterBottom variant="h5" component="div" className="text-center">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="text-center mb-2">
          ${product.price}
        </Typography>
        <div className="mt-auto">
          <Button variant="contained" color="primary" className="w-full">
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'white' }}>
              Comprar
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
