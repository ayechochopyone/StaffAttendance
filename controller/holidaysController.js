const { Holidays } = require("../models");
const addHolidays = async (req, res) => {
  const { dates } = req.body;
  // if (dates == undefined || dates?.length == 0)
  //   return res.status(400).send("Credential Missing");
  await dates.map((date) => {
    Holidays.create({ date: date });
  });
  res.status(200).json({ message: "Created" });
  //await Holidays.create({ dates: dates });

  // if (!holiday_name || !from || !to)
  //   return res.status(400).send("Credential Missing");
  //LeaveHelper.checkFromToDate(from, to);
};
module.exports = { addHolidays };
