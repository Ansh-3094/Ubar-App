const captionModel = require("../models/caption.model");
const captionService = require("../services/caption.service");
const { validationResult } = require("express-validator");

module.exports.registerCaption = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }
  const { fullname, email, password, vehicle } = req.body;

  const isCaptionAlreadyExist = await captionModel.findOne({ email });

  if (isCaptionAlreadyExist) {
    return res.status(400).json({ message: "Caption already exists" });
  }

  const caption = await captionService.createCaption({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });
  const token = caption.generateAuthToken();

  res.status(201).json({ caption, token });
};
