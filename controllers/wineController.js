const Wine = require('../models/wine');

const getAllWines = async (req,res) => {
  const wine = await Wine.find({});
  res.json({wine});
};

const addWine = async (req,res) => {
  // Pick up main details
  const { name, year, region, country, price, rating, review, rrp, variety, colour, style, abv } = req.body;

  console.log(req.body)

  // Create a unique name based on name and year
  const uniquename_concat = name + year.toString();
  const uniquename_nopunc = uniquename_concat.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  const uniquename = uniquename_nopunc.replace(/\s/g,"").toLowerCase();

  // Create document in MongoDB
  try {
    const wine = await Wine.create({
                  name,
                  year,
                  region,
                  price,
                  rating,
                  review,
                  rrp,
                  uniqueId: uniquename,
                  variety,
                  colour,
                  style,
                  abv
    });
    res.status(200).json({wine});
  } catch (error) {
    console.log(error)
  }; 
};

module.exports = {
  getAllWines,
  addWine
}