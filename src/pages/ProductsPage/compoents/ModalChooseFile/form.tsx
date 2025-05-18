import MyTypography from "@/components/common/MyTypography";
import { Box, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import MyButton from "@/components/common/MyButton";
import MyRadioGroup from "@/components/common/MyRadioGroup";
import { typeFile, autoLink, typeUpload } from "../../../../untils/dataMockup";
import { useTranslation } from "react-i18next";

const FormChooseFile = () => {
  const fileInputRef = useRef(null);
  const [fileInfor, setFileInfor] = useState(null);
  const { t } = useTranslation();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileInfor(file);
    // Handle the file here (e.g., upload it)
  };
  return (
    <Box>
      <MyTypography className={styles.title}>
        {t("upload_file_title")}
      </MyTypography>
      <Box className={styles.header}>
        <MyTypography variant="h5" className={styles.text}>
          {t("upload_file_instruction_1")}
          <br />
          {t("upload_file_instruction_2")}
        </MyTypography>
        <MyTypography variant="h5" className={styles.text}>
          {t("upload_file_instruction_3")}
          <br />
          {t("upload_file_instruction_4")}
          <br />
          &nbsp;&nbsp; {t("upload_file_column_wrap")}
          <br />
          &nbsp;&nbsp;{t("upload_file_column_separator")}
        </MyTypography>
        <MyTypography>{t("upload_file_csv_example")}</MyTypography>
        <MyTypography>{t("upload_file_note_1")}</MyTypography>
        <MyTypography>{t("upload_file_note_2")}</MyTypography>
        <MyTypography>{t("upload_file_note_3")}</MyTypography>

        <MyRadioGroup
          name={"type_file"}
          label={t("upload_file_file_type")}
          options={typeFile}
          value={"ratio"}
          onChange={() => {}}
          rowWrapperClassName={styles.rowWrapperClassName}
        />
        <MyRadioGroup
          name={"type_file"}
          label={t("upload_file_ebay_auto_link")}
          options={autoLink}
          value={"ratio"}
          onChange={() => {}}
          rowWrapperClassName={styles.rowWrapperClassName}
        />
        <MyRadioGroup
          name={"type_file"}
          label={t("upload_file_upload_method")}
          options={typeUpload}
          value={"ratio"}
          onChange={() => {}}
          rowWrapperClassName={styles.rowWrapperClassName}
        />
        <Grid className={styles.row} container spacing={2}>
          <MyButton
            variant="contained"
            onClick={() => fileInputRef.current.click()}
          >
            {t("upload_file_choose_file")}
          </MyButton>
          <MyTypography>{fileInfor?.name}</MyTypography>
          <input
            type="file"
            accept=".csv"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default FormChooseFile;
