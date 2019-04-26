const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'dzoz9m7vv',
    api_key: '886667616881956',
    api_secret: 'PAYUzDKTXqacfDXdNFbjn6PciXk'
});

exports.uploadImage = (path) => new Promise((resolve, reject) => {
    
    cloudinary.v2.uploader.upload(path, (err, result) => {
        
        if(err) reject(err);

        resolve(result)
    
    });

});

exports.deleteImage = (imageId) => new Promise((resolve, reject) => {

    cloudinary.api.delete_resources(imageId, (err) => {
       
        if(err) reject(err);

        resolve();
    
    });

});