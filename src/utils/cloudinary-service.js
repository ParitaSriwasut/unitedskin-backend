const cloudinary = require("../config/cloudinary");

exports.upload = async (path) => {
  const result = cloudinary.uploader.upload(path);
  return (await result).secure_url;
};
