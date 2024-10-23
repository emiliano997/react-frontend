import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ProductService } from "./services/ProductService";
import { useEffect } from "react";
import { Banner } from "../../components/Banner/Banner";

export function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getAllProducts().then(setProducts);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Banner title="Productos" />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{ width: 200, height: 380, position: "relative" }}
          >
            <CardMedia
              image={product.image}
              sx={{ height: 200, objectFit: "cover", width: "100%" }}
              title={product.name}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {product.price}
              </Typography>
            </CardContent>
            <CardActions
              sx={{ position: "absolute", bottom: 0, width: "100%" }}
            >
              <Button size="small">Ver</Button>
              <Button size="small">Editar</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
