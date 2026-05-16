const multer = require("multer");

const path = require("path");

const fs = require("fs");


// USE TEMP UPLOADS
const uploadPath =
  "C:/tempUploads/Documents";


// CREATE FOLDER IF MISSING
if (!fs.existsSync(uploadPath)) {

  fs.mkdirSync(uploadPath, {
    recursive: true,
  });

}


// STORAGE
const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(null, uploadPath);

  },

  filename: (req, file, cb) => {

    cb(

      null,

      Date.now() +
      path.extname(file.originalname)

    );

  },

});


const upload = multer({

  storage,

});


module.exports = upload;