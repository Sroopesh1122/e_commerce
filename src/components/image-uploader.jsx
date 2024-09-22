import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Image, message, Upload } from "antd";
import axios from "axios";

const { Dragger } = Upload;



const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const ImgUploader = ({ uploadedList = [], multiple = false }) => {
  const [fileList, setFileList] = useState(uploadedList);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const props = {
    multiple: true,
    fileList, // Controlled file list
    customRequest: async ({ file, onSuccess, onError }) => {
      // Create a FormData object
      const formData = new FormData();
      formData.append("image", file); 

      try {
        const response = await axios.post(
          "http://localhost:5001/uploader/upload/file",
          formData
        );
        console.log(response.data);

        const updatedFile = {
          ...file,
          sr: response.data,
          status: "done",
        };
        setFileList((prevList) => [...prevList, updatedFile]);
        onSuccess(response.data); 

        message.success(`${file.name} file uploaded successfully.`);
      } catch (error) {
        onError(error); 
        message.error(`${file.name} file upload failed.`);
      }
    },
    onChange(info) {
      const updatedFileList = [...info.fileList];
      setFileList(updatedFileList);
    },
    onRemove: async (file) => {
      const path = file.response
    const data ={
        "filepath" :path
    }

      try {
        
        const response = await axios.post(
          "http://localhost:5001/uploader/sr",
          data,
        );

        

        if (response.data.success) {
          setFileList((prevList) =>
            prevList.filter((item) => item.uid !== file.uid)
          );
          message.success(`${file.name} removed successfully.`);
          return true;
        } else {
          message.error(`Fails to remove ${file.name}.`);
          return false;
        }
      } catch (error) {
        message.error(`Fails to remove ${file.name}.`);
        return false;
      }
    },
    showUploadList: {
      showPreviewIcon: true,
      showRemoveIcon: true,
      showDownloadIcon: false,
    },
  };

  return (
    <>
      <Dragger
        {...props}
        listType="picture-card"
        onPreview={handlePreview}
        multiple={multiple}
        // maxCount={!multiple ? 1 : 10}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Dragger>
      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};

export default ImgUploader;
