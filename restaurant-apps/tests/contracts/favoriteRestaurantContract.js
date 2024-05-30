const itActsAsfavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the Restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });
    favoriteRestaurant.putRestaurant({ id: 4 });
    favoriteRestaurant.putRestaurant({ id: 5 });

    expect(await favoriteRestaurant.getRestaurant(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getRestaurant(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getRestaurant(3)).toEqual({ id: 3 });
    expect(await favoriteRestaurant.getRestaurant(4)).toEqual({ id: 4 });
    expect(await favoriteRestaurant.getRestaurant(5)).toEqual({ id: 5 });
    expect(await favoriteRestaurant.getRestaurant(6)).toEqual(undefined);
  });

  it('should refuse a Restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putRestaurant({ aProperty: 'property' });

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
  });

  it('can return all of the Restaurants that have been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });
    favoriteRestaurant.putRestaurant({ id: 4 });
    favoriteRestaurant.putRestaurant({ id: 5 });

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]);
  });

  it('should remove favorite Restaurant', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });
    favoriteRestaurant.putRestaurant({ id: 4 });
    favoriteRestaurant.putRestaurant({ id: 5 });

    await favoriteRestaurant.deleteRestaurant(3);

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 4 }, { id: 5 }]);
  });

  it('should handle request to remove a Restaurant even though the Restaurant has not been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });
    favoriteRestaurant.putRestaurant({ id: 4 });
    favoriteRestaurant.putRestaurant({ id: 5 });

    await favoriteRestaurant.deleteRestaurant(6);

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsfavoriteRestaurantModel };
