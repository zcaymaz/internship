import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ImageUploading from 'react-images-uploading';

const FileUpload = () => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    return (
        <>
            <Grid item xs={4} marginBottom={3}>
                <Box sx={{ height: '200px', borderRadius: '10px', bgcolor: 'red' }}>
                    <Typography className='FileUploadHeader'>
                        Öğrenci İmzası
                    </Typography>
                    <br/>
                    <Typography className='FileUploadText'>
                        Belgede ki bilgilerin doğru
                        olduğunu bildiririm.
                    </Typography>
                    <ImageUploading
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                    >
                        {({
                            imageList,
                            onImageUpload,
                            onImageRemoveAll,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps,
                        }) => (
                            // write your building UI
                            <div>
                                <button
                                    className='FileUploadButton'
                                    style={isDragging ? { color: 'red' } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}>
                                    Tıkla ya da Sürükle
                                </button>
                                &nbsp;
                                <button className='FileUploadButton' onClick={onImageRemoveAll}>
                                    Fotoğrafları Kaldır
                                </button>
                                {imageList.map((image, index) => (
                                    <div key={index} className="image-item">
                                        <img src={image['data_url']} alt="" width="100" />
                                        <div className="image-item__btn-wrapper">
                                            <button onClick={() => onImageUpdate(index)}>Güncelle</button>
                                            <button onClick={() => onImageRemove(index)}>Kaldır</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </ImageUploading>
                </Box>
            </Grid>
            <Grid item xs={4} marginBottom={3}>
                s
            </Grid>
            <Grid item xs={4} marginBottom={3}>
                s
            </Grid>
        </>
    )
}

export default FileUpload