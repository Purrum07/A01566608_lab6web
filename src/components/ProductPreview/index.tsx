import "./index.css";
import Product from "../../types/Product";
import {
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

interface ProductPreviewProps {
  product: Product;
}

/**
 * Product Preview elements
 * @returns Product Preview UI elements
 */
const ProductPreview : React.FC<ProductPreviewProps>  = (props) => {
  var listPrice = 0.00;
  if (props.product !== undefined && props.product.childSkus !== undefined && props.product.childSkus[0] !== undefined) {
    listPrice = props.product.childSkus[0].listPrice;
  }

  var salePrice = 0.00;
  if (props.product !== undefined && props.product.childSkus !== undefined && props.product.childSkus[0] !== undefined) {
    salePrice = props.product.childSkus[0].salePrice;
  }

  var mediumImage = "";
  if (props.product !== undefined && props.product.childSkus !== undefined && props.product.childSkus[0] !== undefined) {
    mediumImage = props.product.childSkus[0].mediumImageUrl;
  }

  return (
    <div className="productPreview">
      <Grid container className="productGrid" spacing={2}>
        <Grid item lg={2}>
          <Paper className="mediumImage">
            <img
              src= {mediumImage}
              alt={props.product.name}
            />
          </Paper>
        </Grid>
        <Grid item lg={10} container>
          <Grid item lg={12}>
            <Typography className="productName" variant="h1">
              {props.product.name}
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography>
              {props.product.description}
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography className="dollars crossedout">{listPrice}</Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography className="dollars">{salePrice}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPreview;