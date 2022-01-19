const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'chicken',
  },
  {
    tag_name: 'vegetarian',
  },
  {
    tag_name: 'beef',
  }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;