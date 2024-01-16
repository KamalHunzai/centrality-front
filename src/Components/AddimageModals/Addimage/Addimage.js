import { FaRegCirclePlay } from "react-icons/fa6";
import { FiStopCircle } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import React, { useState, useEffect } from 'react';
import './Addimage.css';
import expo from '../Group 1000004529.png';
import Drive from '../Vector.png';
import SVG from "./Group 1000004531.svg";


function Addimage() {
    const [thumbnailImage, setThumbnailImage] = useState(null);
    const [inputImage, setInputImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadBarVisible, setUploadBarVisible] = useState(false);
    const [uploadingFileName, setUploadingFileName] = useState('');

    useEffect(() => {
        if (uploading) {
            // Simulate upload progress
            const interval = setInterval(() => {
                setUploadProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
            }, 500);

            // Clean up interval when component unmounts or upload is complete
            return () => clearInterval(interval);
        }
    }, [uploading]);

    const handleFileChange = (selectedFile, section) => {
        if (selectedFile) {
            const reader = new FileReader();

            reader.onloadend = () => {
                if (section === 'thumbnail') {
                    setThumbnailImage({ src: reader.result, name: selectedFile.name });
                } else if (section === 'inputs') {
                    setInputImage({ src: reader.result, name: selectedFile.name });
                }
            };

            reader.readAsDataURL(selectedFile);
            setUploadingFileName(selectedFile.name); // Set the file name for display
            setUploadBarVisible(true); // Show the upload bar when a file is being uploaded
        }
    };

    const handleDropThumbnail = (e) => {
        e.preventDefault();

        const droppedFile = e.dataTransfer.files[0];

        if (droppedFile) {
            handleFileChange(droppedFile, 'thumbnail');
        }
    };

    const handleFileInputThumbnail = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            handleFileChange(selectedFile, 'thumbnail');
        }
    };

    const handleDropInputs = (e) => {
        e.preventDefault();

        const droppedFile = e.dataTransfer.files[0];

        if (droppedFile) {
            handleFileChange(droppedFile, 'inputs');
        }
    };

    const handleFileInputInputs = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            handleFileChange(selectedFile, 'inputs');
        }
    };

    const handlePlayPause = () => {
        setUploading(!uploading);
    };

    const handleDeleteUpload = () => {
        setThumbnailImage(null);
        setInputImage(null);
        setUploadBarVisible(false);
        setUploadProgress(0);
        // Add additional cleanup or logic if needed
    };
    return (
        <>
             <div className='Thumbnail-main'>
                <div
                    className='Thumbnail-div2'
                    onDrop={handleDropThumbnail}
                    onDragOver={(e) => e.preventDefault()}
                >
                    {thumbnailImage ? (
                        <>
                            <img src={thumbnailImage.src} alt='Uploaded' className='Thumbnail-image' />
                            <p>{thumbnailImage.name}</p>
                            <label htmlFor='fileInputThumbnail' className='Thumbnail-labels'>
                                Change Image
                            </label>
                        </>
                    ) : (
                        <>
                            <img src={expo} alt='#' className='Expo-Image' />
                            <div>
                                <label htmlFor='fileInputThumbnail' className='Thumbnail-labels'>
                                    upload a document/<br />Png/jpeg/mp4/csv
                                </label>
                            </div>
                        </>
                    )}
                    <input
                        type='file'
                        id='fileInputThumbnail'
                        style={{ display: 'none' }}
                        onChange={handleFileInputThumbnail}
                    />
                </div>
                <div className='Inputs-Addimage'>
                    <input placeholder='Title' className='Inputs-Addimage-btn1' />
                    <div
                        className='Input-Addimage-btn2'
                        onDrop={handleDropInputs}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        {inputImage ? (
                            <>
                                <img src={inputImage.src} alt='Uploaded' className='Thumbnail-image' />
                                <p>{inputImage.name}</p>
                                <label htmlFor='fileInputInputs' className='Thumbnail-labels'>
                                    Change Documents
                                </label>
                            </>
                        ) : (
                            <>
                                <div className='AddFile'>
                                    <label htmlFor='fileInputInputs' className='Thumbnail-labels' style={{ marginTop: '10px' }}>
                                        Upload From Dropbox/Google Drive
                                    </label>
                                    <img src={Drive} alt='#' className='Expo-Image' style={{ marginTop: "10px" }} />
                                </div>
                            </>
                        )}
                        <input
                            type='file'
                            id='fileInputInputs'
                            style={{ display: 'none' }}
                            onChange={handleFileInputInputs}
                        />
                    </div>
                </div>
            </div>

            <div className='deleteProgressbar'>
                {uploadBarVisible && (
                    <>
                        <img src={SVG} alt="icon"/>
                        <h6 className='UploadingFileName'>{uploadingFileName}</h6>
                        {uploading && <progress value={uploadProgress} max='100' className='Upload-progress' />}
                        {uploading ? (
                            <FaRegCirclePlay
                                alt='Pause'
                                className='PlayPause-icon'
                                onClick={handlePlayPause}
                            />
                        ) : (
                            <FiStopCircle
                                alt='Play'
                                className='PlayPause-icon'
                                onClick={handlePlayPause}
                            />
                        )}
                        <MdDeleteForever
                            className='Delete-icon'
                            onClick={handleDeleteUpload}
                        />
                       
                    </>
                )}
            </div>
                <div className="btnss"><button>Submit</button></div>
        </>
    );
}

export default Addimage;


