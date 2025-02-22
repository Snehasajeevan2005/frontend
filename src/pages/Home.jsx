import React from 'react';
const recipes = [
  {
    id: 1,
    title: "Paneer Butter Masala",
    image: "/paneer-butter-masala.jpg",
    ingredients: [
      "200g paneer",
      "2 tomatoes",
      "1 onion",
      "2 tbsp butter",
      "1/2 cup cream",
      "Spices: garam masala, turmeric, chili powder"
    ],
    time: "30 minutes",
    procedure: ["Heat butter in a pan, add chopped onions, and sauté until golden",
    "Add ginger-garlic paste and cook for a minute.",
    "Pour tomato puree, red chili powder, turmeric, and salt. Cook for 5 minutes.",
    "Add garam masala and kasuri methi, mix well.",
    "Pour in fresh cream and stir.",
    "Add paneer cubes, simmer for 5 minutes.",
    "Garnish with more cream and serve hot with naan or rice."],
  },
  {
    id: 2,
    title: "Chicken Biryani",
    image: "/chicken-biryani.jpg",
    ingredients: [
      "500g chicken",
      "2 cups basmati rice",
      "1 cup yogurt",
      "2 onions",
      "Spices: cumin, coriander, cloves, bay leaf"
    ],
    time: "1 hour",
    procedure:["Heat oil in a pan, sauté onions until golden.",
      "Add ginger-garlic paste, cook for a minute.",
      "Add chicken, red chili powder, turmeric, salt, and cook for 5 minutes.",
      "Mix in tomatoes, yogurt, and biryani masala, cook until chicken is tender.",
      "Add soaked rice and 2 cups water. Cover and cook for 15 minutes.",
      "Garnish with coriander and mint leaves.",
      "Serve hot with raita!"] ,
  },
  {
    id: 3,
    title: "Veg Pulao",
    image: "/veg-pulao.jpg",
    ingredients: ["1 cup rice", "1/2 cup mixed veggies", "1 onion", "Spices: cumin, cardamom"],
    time: "25 minutes",
    procedure: [
      "Heat oil in a pan, add bay leaf, cloves, and cinnamon.",
      "Add onions, sauté until golden.",
      "Add chopped veggies and sauté for 2 minutes.",
      "Add rice, water, and salt.",
      "Cover and cook for 15 minutes.",
      "Fluff the rice and let it rest for a few minutes.",
      "Serve hot with raita or curry."
    ],
  },
  {
    id: 4,
    title: "Dal Tadka",
    image: "/dal-tadka.jpg",
    ingredients: ["1 cup lentils", "1 tomato", "1 onion", "Garlic, cumin, ghee"],
    time: "35 minutes",
    procedure: [
      "Cook dal in a pressure cooker with turmeric and salt.",
      "Heat ghee in a pan, add cumin, garlic, onions, and tomatoes.",
      "Add red chili powder and sauté for 2 minutes.",
      "Pour the tempering over the cooked dal.",
      "Mix well and let it simmer for a few minutes.",
      "Garnish with fresh coriander leaves.",
      "Serve hot with rice or roti."
    ],
  },
  {
    id: 5,
    title: "Masala Dosa",
    image: "/masala-dosa.jpg",
    ingredients: ["Dosa batter", "2 potatoes", "Onion, mustard seeds, curry leaves"],
    time: "45 minutes",
    procedure: [
      "Heat oil, add mustard seeds, onions, green chilies, turmeric, mashed potatoes, and mix well.",
      "Heat a dosa pan, pour a ladle of batter, and spread in a circle.",
      "Drizzle oil, cook until crisp, and place filling in the center.",
      "Fold and serve with chutney & sambar."
    ],
  },
  {
    id: 6,
    title: "Butter Chicken",
    image: "/butter-chicken.jpg",
    ingredients: ["500g chicken", "Tomato puree", "1/2 cup cream", "Spices: garam masala, turmeric"],
    time: "40 minutes",
    procedure: [
      "Heat butter in a pan, add chicken and sauté for 5 minutes.",
      "Add ginger-garlic paste, tomato puree, chili powder, turmeric, and cook for 10 minutes.",
      "Add cream, garam masala, kasuri methi, mix well, and cook for 5 minutes.",
      "Simmer on low heat until the flavors blend.",
      "Garnish with cream and coriander leaves.",
      "Serve hot with naan or rice."
    ],
  },
  {
    id: 7,
    title: "Pani Puri",
    image: "/pani-puri.jpg",
    ingredients: ["Puri", "Boiled potatoes", "Spicy and sweet chutneys"],
    time: "20 minutes",
    procedure: [
      "Stuff puris with mashed potato filling.",
      "Blend mint, coriander, green chilies, tamarind paste, cumin powder, and salt with water.",
      "Strain and chill the spiced water (pani).",
      "Make a hole in each puri and stuff it with the filling.",
      "Pour spiced pani into puris.",
      "Serve immediately and enjoy the burst of flavors!"
    ],
  },
  {
    id: 8,
    title: "Chocolate Cake",
    image: "/chocolate-cake.jpg",
    ingredients: ["1 cup flour", "1/2 cup cocoa powder", "1/2 cup sugar", "1/2 cup milk"],
    time: "1 hour",
    procedure: [
      "Preheat oven to 180°C. Grease a cake pan.",
      "Mix flour, cocoa powder, baking powder, and sugar in a bowl.",
      "Add eggs, milk, and melted butter. Mix well.",
      "Pour batter into the pan and bake for 30-35 minutes.",
      "Let it cool, then frost with chocolate ganache.",
      "Slice and enjoy your delicious chocolate cake!"
    ],
  }
];

const Home = () => {
  return (
    <div>
      <img src="/ban.jpg" className="img-fluid w-100 pt-1" alt="Banner" />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 m-2">
        {recipes.map((recipe) => (
          <div className="col" key={recipe.id}>
            <div className="card">
              <img src={recipe.image} className="card-img-top" alt={recipe.title} />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p><strong>Time:</strong> {recipe.time}</p>
                <p><strong>Ingredients:</strong></p>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <p><strong>Procedure:</strong> {recipe.procedure}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;