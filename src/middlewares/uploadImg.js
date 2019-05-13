const { uploader } = require('../config/cloudinaryConfig');
const { dataUri } = require('./multerUploads');


exports.uploadImg = (req, res) => {
  if (req.file) {
    const file = dataUri(req).content;
    return uploader.upload(file).then((result) => {
      const image = result.url;
      return res.status(200).json({
        messge: 'Your image has been uploded successfully to cloudinary',
        data: {
          image,
        },
      });
    }).catch(err => res.status(400).json({
      messge: 'something went wrong while processing your request',
      data: {
        err,
      },
    }));
  }
};
