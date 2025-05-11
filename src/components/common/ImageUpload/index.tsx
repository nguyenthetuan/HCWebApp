import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  Paper,
  TextField,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/CloudUpload";
import MyInput from "../MyInput";
import MyButton from "../MyButton";
import styles from "./styles.module.scss";

const Input = styled("input")({
  display: "none",
});

const DropZone = styled(Box)(({ isDragging }) => ({
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

  const handleFiles = (files) => {
    const newImages = Array.from(files).map((file) => ({
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
        Upload up to 12 images. First image will be the cover (main) image.
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <MyInput
          label="Image Size (px)"
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
          Tăng kích thước image
        </MyButton>
        <MyButton
          variant="contained"
          color="primary"
          startIcon={<UploadIcon className={styles.iconShare} />}
          onClick={() => fileInputRef.current.click()}
          className={styles.btn}
        >
          Upload Images
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
        isDragging={isDragging}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Typography variant="body2" color="textSecondary">
          Drag and drop images here, or click "Upload Images"
        </Typography>
      </DropZone>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {images.map((image, index) => (
          <Grid item xs={6} sm={4} md={3} key={image.id}>
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
                  Cover
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
            {images.length} of 12 images
          </Typography>
          <Button color="error" onClick={handleClearAll}>
            Clear all
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ImageUploader;
