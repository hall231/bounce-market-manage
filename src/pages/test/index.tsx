import { PageContainer } from '@ant-design/pro-layout';
import {
  Card,
  Table,
  Button,
  Image,
  Tooltip,
  Switch,
  Input,
  Modal,
  message,
  Space,
  Tag,
  Upload,
} from 'antd';
import React, { useState } from 'react';
import { useRequest } from 'umi';
import request from 'umi-request';
import 'antd/dist/antd.css';

const { Column } = Table;
const { Search } = Input;
const { confirm } = Modal;

import placeholderImg from '@/assets/images/placeholderImg.svg';
import { ExclamationCircleOutlined, StarFilled } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';

const Test: React.FC = () => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };


  return (
    <ImgCrop rotate aspect={4/3} >
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        maxCount={1}
      >
        {fileList.length < 5 && 'Upload PC'}
      </Upload>
    </ImgCrop>
  );
};

export default Test;
