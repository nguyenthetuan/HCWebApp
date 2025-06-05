import MyTypography from "@/components/common/MyTypography";
import { Product } from "@/types";
import {
  Box,
  Card,
  CardMedia,
  Chip,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const DetailProduct = (props: any) => {
  const { t } = useTranslation();
  const [product, setProduct] = useState<Product | null>(
    props?.productShow || null
  );
  console.log("propductsss", product);

  if (!product) return null;

  const formatDate = (dateStr: string) =>
    new Intl.DateTimeFormat("ja-JP", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(dateStr));

  return (
    <Box className={styles.formModal}>
      <MyTypography className={styles.title}>
        {t("productDetails")}
      </MyTypography>
      <Box className={styles.wrapImage} gap={2}>
        <CardMedia
          component="img"
          height="200"
          image={product.avatar_url}
          alt={product.name}
          style={{ borderRadius: 8, width: "25%", objectFit: "cover" }}
        />
        <Box mt={2}>
          <Typography variant="body2">
            <strong>{t("Platform")}:</strong> {product.platform_type}
          </Typography>
          <Typography variant="body2">
            <strong>{t("Price")}:</strong> ¥{product.price}
          </Typography>
          <Typography variant="body2">
            <strong>{t("Out of Stock")}:</strong>{" "}
            {product.out_of_stock ? (
              <Chip label={t("Yes")} color="error" size="small" />
            ) : (
              <Chip label={t("No")} color="success" size="small" />
            )}
          </Typography>
          <Typography variant="body2">
            <strong>{t("Created At")}:</strong> {formatDate(product.createdAt)}
          </Typography>
          <Typography variant="body2">
            <strong>{t("Updated At")}:</strong> {formatDate(product.updatedAt)}
          </Typography>
          <Typography variant="body2" mt={1}>
            <strong>{t("Link")}:</strong>{" "}
            <Link href={product.url} target="_blank" rel="noopener">
              {product.url}
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box className={styles.information}>
        <MyTypography>{t("title_origin")}</MyTypography>
        <Typography variant="h5" fontWeight="bold">
          {product.name}
        </Typography>

        <Typography variant="body1" color="text.secondary">
          {product.content}
        </Typography>
      </Box>
      {!!product?.transform_data && (
        <Box className={styles.information}>
          <MyTypography>{t("title_transform")}</MyTypography>
          <Typography variant="h5" fontWeight="bold">
            {product?.transform_data.name}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {product?.transform_data.content}
          </Typography>
        </Box>
      )}
      {product.image_urls?.length > 0 && (
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            {t("Hình ảnh khác")}
          </Typography>
          <Grid container spacing={2}>
            {product.image_urls.map((img, index) => (
              <Grid key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    image={img}
                    alt={`Image ${index}`}
                    height="140"
                    style={{ objectFit: "cover" }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default DetailProduct;
