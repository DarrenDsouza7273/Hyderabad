import multer from "multer";
//configure how files are stored

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //where to store the file
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "application/pdf"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
});
export default upload; 