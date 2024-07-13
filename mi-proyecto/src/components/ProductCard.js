import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card className="max-w-sm mx-auto shadow-lg">
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
        <Button variant="contained" color="primary" className="mt-2">
          <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'white' }}>
            Comprar
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
