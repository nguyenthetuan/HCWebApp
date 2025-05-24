import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  Paper,
  BoxProps,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/CloudUpload";
import MyInput from "../MyInput";
import MyButton from "../MyButton";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const Input = styled("input")({
  display: "none",
});

interface DropZoneProps extends BoxProps {
  isDragging?: boolean;
}

const DropZone = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isDragging", // Ngăn prop này xuống DOM
})<DropZoneProps>(({ isDragging, theme }) => ({
  border: "2px dashed #ccc",
  padding: "32px",
  textAlign: "center",
  borderRadius: "8px",
  backgroundColor: isDragging ? "#f0f8ff" : "#fafafa",
  transition: "background-color 0.2s ease-in-out",
}));

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [imageSize, setImageSize] = useState(150);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const { t } = useTranslation();
  const handleFiles = (files) => {
    const newImages = Array.from(files).map((file: any) => ({
      file,
      preview: URL.createObjectURL(file),
      id: `${file.name}-${Date.now()}`,
    }));
    setImages((prev) => [...prev, ...newImages].slice(0, 12));
  };

  const handleFilesChange = (event) => {
    handleFiles(event.target.files);
  };

  const handleRemoveImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleClearAll = () => {
    setImages([]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  return (
    <Box>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {t("upload_hint")}
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <MyInput
          label={t("image_size_label")}
          type="number"
          value={imageSize}
          onChange={(e) => setImageSize(parseInt(e.target.value) || 150)}
          size="small"
        />
        <MyButton
          variant="contained"
          color="primary"
          onClick={() => fileInputRef.current.click()}
          className={styles.btn}
        >
          {t("increase_image_size")}
        </MyButton>
        <MyButton
          variant="contained"
          color="primary"
          startIcon={<UploadIcon className={styles.iconShare} />}
          onClick={() => fileInputRef.current.click()}
          className={styles.btn}
        >
          {t("upload_images")}
        </MyButton>
        <Input
          accept="image/*"
          multiple
          type="file"
          onChange={handleFilesChange}
          ref={fileInputRef}
        />
      </Stack>

      <DropZone
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Typography variant="body2" color="textSecondary">
          {t("drag_drop_hint")}
        </Typography>
      </DropZone>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {images.map((image, index) => (
          <Grid key={image.id}>
            <Paper
              variant="outlined"
              sx={{
                position: "relative",
                p: 1,
                width: "100%",
                height: imageSize,
                overflow: "hidden",
              }}
            >
              <img
                src={image.preview}
                alt={`Uploaded ${index}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              {index === 0 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    backgroundColor: "primary.main",
                    color: "white",
                    padding: "2px 6px",
                    borderRadius: 1,
                    fontSize: "12px",
                  }}
                >
                  {t("cover")}
                </Box>
              )}
              <IconButton
                size="small"
                onClick={() => handleRemoveImage(image.id)}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "rgba(255,255,255,0.7)",
                  "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
                }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {images.length > 0 && (
        <Box
          mt={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="textSecondary">
            {images.length} {t("image_count")}
          </Typography>
          <Button color="error" onClick={handleClearAll}>
            {t("clear_all")}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ImageUploader;
