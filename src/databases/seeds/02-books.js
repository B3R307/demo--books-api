  const booksRecords = [
  {title: 'How to Eat a Lot of Sushi' , blurb: 'This is a book about eating. Eating sushi. Some doubt the benefits of sushi, but we are here to enlighten you about this worldwide culinary craze from Japan.' , copyright: 2012, publisher_id: 3},
  {title: 'Drawing Owls for Beginners' , blurb: 'The fundamentals of drawing owels. You will be drawing a lot of circles because when you think about it, an owl contains many ovular figures such as its head, its body, and its wings when they are at rest.'  , copyright :  2003, publisher_id: 3},
  {title: 'Buzzword Dictionary' , blurb: 'Do you need a competitive edge in the workplace? Knowing how to say simple conecpts in convoluted terms could be key to your advancement.', copyright: 2014, publisher_id: 1 },
  {title: 'Cooking on Campsites' , blurb: 'Cooking on campsites over an open fire is a compendium of techniques and recipes that will make your next camping trip a success. Join Mountain Joe in how to become a top chef in the great outdoors.' , copyright: 2010, publisher_id: 1},
  {title: 'Ancient Pottery Techniques' , blurb: 'This book is an exposition on how the craftsmen of antiquity constructed and forms pots, vases, and urns. We also explore materials used and how to achieve the ancient effects in your own project.', copyright: 2010, publisher_id: 3},
  {title: 'Blockchain Solutions' , blurb: 'The blockchain is more than just bitcoin and crypto currency. This book takes a deep dive into how blockchain could revolutionize industries and everyday systems.' , copyright: 2017, publisher_id: 2},
  {title: 'Household DIY Almanac' , blurb: 'Fix cabinets, floors, bathrooms, patios, kitchens, and just about anything that needs repair. Learn how to clean, take care of, and improve the spaces and perform critical maintenance on your house' , copyright: 2012 , publisher_id: 1},
  {title: 'Everyday Style Guide' , blurb: 'Dress for success everyday with simple style tips. A basic guide for form, fit, and function for aesthetics and maximum appearance.' , copyright: 2015, publisher_id: 3},
  {title: 'The Age of the Dinousaurs' , blurb: 'Did you the dinosaurs were ferocious animals that were scary and mean? Thank God they are gone. Did you know they were on earth for more than 66 million years? That is a long time. This book is about the lives the dinosaurs lived when they were here.', copyright: 2013,  publisher_id: 2},
  {title: 'Girls Still Just Wanna Have fun' , blurb: 'A memoir about my life in New York as a twenty-something' , copyright: 2010,  publisher_id: 2 }
]

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert(booksRecords);
    });
};
