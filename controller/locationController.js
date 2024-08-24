const pointInPolygon = require("point-in-polygon");

const locationAuth = (req, res) => {
  const { lat, lon } = req.body;

  const polygon = [
    [16.740806688141703, 95.64871776583965],
    [16.742301567017652, 95.64928639412938],
    [16.742060126893957, 95.64990330217955],
    [16.740549834920078, 95.64937222481463],
  ];

  if (isNaN(lat) || isNaN(lon)) {
    return res.status(400).json({ error: "Invalid latitude or longitude" });
  }

  const point = [lat, lon];

  const isInside = pointInPolygon(point, polygon);
  res.status(200).json({ isInside });
};

module.exports = { locationAuth };
