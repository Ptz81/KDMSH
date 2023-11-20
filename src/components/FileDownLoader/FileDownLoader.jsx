// import React from 'react';
import styled from 'styled-components';
// import file from '../../assets/files/Заява на вступ КДМШ №22.pdf'
import PropTypes from 'prop-types';

const DownloadContainer = styled.div`
  margin: 20px;
`;

const DownloadButton = styled.a`
  background-color: var(--accentColor);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    background-color: var(--semiAccentColor);
  }
`;



const FileDownLoader = ({url, urlName}) => {
  return (
    <DownloadContainer>
      <DownloadButton href={url} download={urlName}>
        {urlName}
      </DownloadButton>
    </DownloadContainer>
  );
};

FileDownLoader.propTypes = {
  url: PropTypes.string,
 urlName: PropTypes.string,
};

export default FileDownLoader;
