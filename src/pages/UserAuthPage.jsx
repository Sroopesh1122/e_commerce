// import React from 'react';
// import axios from 'axios';
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

// const App = () => {
//   // Set up Axios interceptors
//   axios.interceptors.request.use((config) => {
//     NProgress.start();
//     return config;
//   });

//   axios.interceptors.response.use(
//     (response) => {
//       NProgress.done();
//       return response;
//     },
//     (error) => {
//       NProgress.done();
//       return Promise.reject(error);
//     }
//   );

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://api.examgfhfghfghfgple.com/data');
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>My App</h1>
//       <button onClick={fetchData}>Fetch Data</button>
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const App = () => {
  const [fileList, setFileList] = useState([]);

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    fileList, // Controlled file list
    onChange(info) {
      let updatedFileList = [...info.fileList];

      // Limit the file list to latest 5 files
      // updatedFileList = updatedFileList.slice(-5);

      // Update the state
      setFileList(updatedFileList);

      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    showUploadList: {
      showPreviewIcon: true,
      showRemoveIcon: true,
      showDownloadIcon: false,
    },
    onRemove(file) {
      setFileList(prevList => prevList.filter(item => item.uid !== file.uid));
      message.success(`${file.name} removed successfully.`);
    },
  };

  return (
    <Dragger {...props} listType='picture-card' >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
        banned files.
      </p>
    </Dragger>
  );
};

export default App;

