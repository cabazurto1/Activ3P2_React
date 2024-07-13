import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SmartphoneImage from '../assets/smartphone.png';
import TelevisionImage from '../assets/television.png';
import ConsoleImage from '../assets/console.png';
import PCImage from '../assets/pc.png';

const ProductDetailPage = () => {
  const initialProducts = [
    {
      id: 1,
      image: SmartphoneImage,
      name: 'Smartphone',
      price: '699.99',
      description: 'Descripción detallada del Smartphone...'
    },
    {
      id: 2,
      image: TelevisionImage,
      name: 'Televisión',
      price: '499.99',
      description: 'Descripción detallada de la Televisión...'
    },
    {
      id: 3,
      image: ConsoleImage,
      name: 'Consola de Videojuegos',
      price: '399.99',
      description: 'Descripción detallada de la Consola de Videojuegos...'
    },
    {
      id: 4,
      image: PCImage,
      name: 'PC de Escritorio',
      price: '799.99',
      description: 'Descripción detallada del PC de Escritorio...'
    }
  ];

  const { id } = useParams();
  const product = initialProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="product-detail container mx-auto my-8">
      <Card className="max-w-sm mx-auto">
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio: ${product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </Card>
      <Button variant="contained" color="primary" className="mt-4">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Volver a la página principal
        </Link>
      </Button>
    </div>
  );
};

export default ProductDetailPage;
