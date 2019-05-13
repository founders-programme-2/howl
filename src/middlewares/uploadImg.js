require('env2')('./config.env');

const { config, uploader } = require('cloudinary');
const multer = require('multer');
const Datauri = require('datauri');
const path = require('path');

// setup cloudinary configuration

exports.cloudinaryConfig = (req, res, next) => {
  config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  next();
};


// set up multer

// setup multer to save the image to memory
const storage = multer.memoryStorage();

// Turn image into a buffer
exports.multerUploads = multer({ storage }).single('image');

const dUri = new Datauri();

// Turn buffer into a string blob
const dataUri = req => dUri.format(path.extname(req.file.originalname)
  .toString(), req.file.buffer);


// send string blob to cloudinary
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
