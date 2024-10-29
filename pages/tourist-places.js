import React from 'react';

const travelDestinations = [
  {
    id: 1,
    name: 'Paris, France',
    description: `
      The city of light, known for the Eiffel Tower and world-class museums.
      A haven for art lovers with iconic places like the Louvre and Musée d'Orsay.
      Stroll along the Seine River and enjoy scenic boat rides.
      Known for its fashion and culinary delights, including croissants and fine wine.
      Discover charming neighborhoods like Montmartre with its bohemian vibe.
    `,
    imageUrl: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
  },
  {
    id: 2,
    name: 'Kyoto, Japan',
    description: `
      A historic city famous for its temples, gardens, and traditional tea houses.
      Enjoy the beauty of cherry blossoms in spring along the Philosopher's Path.
      Experience the tranquility of the Zen gardens and bamboo groves.
      Visit Kiyomizu Temple, a UNESCO World Heritage site with stunning views.
      Taste authentic Japanese cuisine, including kaiseki and matcha desserts.
    `,
    imageUrl: 'https://images.pexels.com/photos/1130281/pexels-photo-1130281.jpeg',
  },
  {
    id: 3,
    name: 'Cape Town, South Africa',
    description: `
      A beautiful city with stunning beaches and the iconic Table Mountain.
      Explore the vibrant V&A Waterfront with its shops and eateries.
      Discover the rich history of Robben Island, where Nelson Mandela was imprisoned.
      Go on a scenic drive along Chapman's Peak for breathtaking views.
      Savor South African wines in the nearby Cape Winelands.
    `,
    imageUrl: 'https://images.pexels.com/photos/1687147/pexels-photo-1687147.jpeg',
  },
];

function TravelDestinations() {
  return (
    <div className="p-8 bg-black">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Popular Tourist Destinations</h1>
      <ul>
        {travelDestinations.map((destination) => (
          <li>
            <div className="p-4 flex">
              <img src={destination.imageUrl} alt={destination.name} className="w-72 h-72 object-cover rounded-lg" />
              <div className='ml-8'>
                <h2 className="text-lg font-semibold text-white">{destination.name}</h2>
                <p className="text-white">{destination.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TravelDestinations;
