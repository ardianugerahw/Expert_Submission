Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('cycle liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  // // pause();

  I.seeElement('.card-city a');
  const firstRestaurant = locate('.card-city a').first();
  // pause();
  I.click(firstRestaurant);
  // pause();
  I.seeElement('#likeButtonContainer button');
  const firstLike = locate('#likeButtonContainer button').first();
  // pause();
  I.click(firstLike);
  // pause();
  I.amOnPage('/#/like');
  // pause();
});

Scenario('cycle unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  // // pause();

  I.seeElement('.card-city a');
  const firstRestaurant = locate('.card-city a').first();
  // pause();
  I.click(firstRestaurant);
  // pause();
  I.seeElement('#likeButtonContainer button');
  const firstLike = locate('#likeButtonContainer button').first();
  // pause();
  I.click(firstLike);
  // pause();
  I.amOnPage('/#/like');

  I.seeElement('.restaurant__title a');
  const restaurantTitle = locate('.restaurant__title a').first();
  // pause();
  I.click(restaurantTitle);
  // pause();
  I.seeElement('#likeButtonContainer button');
  const firstUnlike = locate('#likeButtonContainer button').first();
  // pause();
  I.click(firstUnlike);
  // pause();
  I.amOnPage('/#/like');
  // pause();
});

// Scenario('cycle liking many restaurants', async ({ I }) => {
//   I.amOnPage('/');

//   I.seeElement('.card-city a');
//   const restaurants = locate('.card-city a');

//   for (let i = 0; i < restaurants.count; i++) {
//     const restaurant = restaurants.at(i);
//     I.click(restaurant);

//     I.seeElement('#likeButtonContainer button');
//     const likeButton = locate('#likeButtonContainer button').first();
//     I.click(likeButton);
//     pause();
//   }
// });
