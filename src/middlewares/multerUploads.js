const multer = require('multer');
const Datauri = require('datauri');
const path = require('path');

const storage = multer.memoryStorage();

exports.multerUploads = multer({ storage }).single('image');

const dUri = new Datauri();

exports.dataUri = req => dUri.format(path.extname(req.file.originalname)
  .toString(), req.file.buffer);
