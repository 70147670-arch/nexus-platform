const Document = require(
  "../models/Document"
);


// UPLOAD DOCUMENT
exports.uploadDocument = async (
  req,
  res
) => {

  try {

    if (!req.file) {

      return res.status(400).json({
        message: "No file uploaded",
      });

    }

    const document =
      await Document.create({

        fileName: req.file.filename,

        filePath: req.file.path,

        uploadedBy:
          req.body.uploadedBy,

        version:
          req.body.version,

      });

    res.status(201).json({

      message: "Document uploaded",

      document,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: error.message,

    });

  }

};


// GET DOCUMENTS
exports.getDocuments = async (
  req,
  res
) => {

  try {

    const documents =
      await Document.findAll();

    res.json(documents);

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: error.message,

    });

  }

};