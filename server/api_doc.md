# Foody API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`

- `GET /recipes`
- `GET /recipes/:id`
- `GET /popularRecipes`
- `GET /vegieRecipes`

## 1. POST /register

Request:

- body:
```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "phoneNumber": "string"
}
```

_Response (201 - Created)_
```json
{
  "id": "integer",
  "email": "string"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Username is required"
}
OR
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email address already exists"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "Minimum character for password is 5"
}
```
&nbsp;

## 2. POST /login

Request:

- body:
```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_
```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email can't be empty"
}
OR
{
  "message": "Password can't be empty"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. GET /recipes

Description:
- Fetch all recipes from 3rd Party API Endpoints

_Response (200 - OK)_
```json
{
    "results": [
        {
            "id": 782585,
            "title": "Cannellini Bean and Asparagus Salad with Mushrooms",
            "image": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716426,
            "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
            "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715497,
            "title": "Berry Banana Breakfast Smoothie",
            "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
            "imageType": "jpg"
        },
    ],
    "offset": 0,
    "number": 3,
    "totalResults": 5220
}
```

&nbsp;

## 4. GET /recipes/:id

Description:
- Fetch recipe details from 3rd Party API Endpoints

_Response (200 - OK)_
```json
{
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 9,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 3,
    "healthScore": 23,
    "creditsText": "blogspot.com",
    "sourceName": "blogspot.com",
    "pricePerServing": 560.51,
    "extendedIngredients": [
        {
            "id": 15001,
            "aisle": "Seafood",
            "image": "anchovies.jpg",
            "consistency": "SOLID",
            "name": "anchovies",
            "nameClean": "boquerones",
            "original": "1lb of anchovies cleaned, spine removed",
            "originalName": "anchovies cleaned, spine removed",
            "amount": 1,
            "unit": "lb",
            "meta": [
                "cleaned"
            ],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "lb",
                    "unitLong": "pound"
                },
                "metric": {
                    "amount": 453.592,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        ...,
    ],
    "id": 1,
    "title": "Fried Anchovies with Sage",
    "readyInMinutes": 45,
    "servings": 3,
    "sourceUrl": "http://latavolamarcherecipebox.blogspot.com/2009/10/fried-anchovies-with-sage.html",
    "image": "https://spoonacular.com/recipeImages/1-556x370.jpg",
    "imageType": "jpg",
    "summary": "Fried Anchovies with Sage might be a good recipe to expand your main course collection. Watching your figure? This dairy free and pescatarian recipe has <b>396 calories</b>, <b>37g of protein</b>, and <b>12g of fat</b> per serving. This recipe serves 3. For <b>$5.61 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes around <b>45 minutes</b>. This recipe from latavolamarcherecipebox.blogspot.com requires anchovies, baking powder, salt, and vegetable oil. This recipe is liked by 3 foodies and cooks. Taking all factors into account, this recipe <b>earns a spoonacular score of 75%</b>, which is solid. <a href=\"https://spoonacular.com/recipes/fried-anchovies-with-sage-1189555\">Fried Anchovies with Sage</a>, <a href=\"https://spoonacular.com/recipes/fried-anchovies-with-sage-1355669\">Fried Anchovies with Sage</a>, and <a href=\"https://spoonacular.com/recipes/fried-anchovies-with-sage-1201577\">Fried Anchovies with Sage</a> are very similar to this recipe.",
    "cuisines": [],
    "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    "diets": [
        "dairy free",
        "pescatarian"
    ],
    "occasions": [],
    "winePairing": {
        "pairedWines": [
            "sauvignon blanc",
            "riesling",
            "sparkling rose"
        ],
        "pairingText": "Anchovies can be paired with Sauvignon Blanc, Riesling, and Sparkling rosé. In general, crisp white wines and sparkling wine pair well with strongly flavored, oily fish. The Medici Ermete Concerto Lambrusco Reggiano with a 5 out of 5 star rating seems like a good match. It costs about 23 dollars per bottle.",
        "productMatches": [
            {
                "id": 433011,
                "title": "Medici Ermete Concerto Lambrusco Reggiano",
                "description": "Intensely ruby red with pleasant aromas that are persistent and fruity. Dry but fruity at the same time. Soft and fresh on the palate.",
                "price": "$22.989999771118164",
                "imageUrl": "https://spoonacular.com/productImages/433011-312x231.jpg",
                "averageRating": 1,
                "ratingCount": 5,
                "score": 0.9375,
                "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fmedici-ermete-concerto-lambrusco-reggiano-2014%2F147752"
            }
        ]
    },
    "instructions": "<p>If you have not tried anchovies before - you must try them now! Get over any weird apprehensions or that its just bait or a punchline for a joke about pizza (\"extra anchovies\")! These little suckers are delicious &amp; actually good for you! Baked, fried &amp; grilled - they are ohh so good and worth a try. If your not up to it, then pass me your plate because I love'em!Here is my favorite - Fried Anchovies - the recipe below adds a sage leave to each piece of fish as well for an extra burst of flavor &amp; color.Fried Anchovies with SageAcciughe fritte con Salvia1lb of anchovies cleaned, spine removedsage leaves (optional - if you are not a fan of sage just omit)batter1 cup of flour1 egg1 teaspoon of salt1 teaspoon of baking powderseltzer watervegetable oil for fryingIn a bowl combine flour, eggs, salt &amp; baking powder. Slowly add in seltzer water &amp; mix until forms a thin batter. Cover with plastic &amp; set in the fridge for at least an hour.Heat oil in a pot to 350 degree.Remove batter from fridge and mix once or twice (batter will have separated).Take a sage leaf &amp; anchovy put them together &amp; dip into the batter - allowing access batter to drip off.Fry 20 seconds a side until golden brown.Remove from oil &amp; drain on a paper towel.Sprinkle with salt &amp; serve immediately.Pairs great with prosecco or white wine.</p>",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "If you have not tried anchovies before - you must try them now! Get over any weird apprehensions or that its just bait or a punchline for a joke about pizza (\"extra anchovies\")! These little suckers are delicious &amp; actually good for you!",
                    "ingredients": [
                        {
                            "id": 15001,
                            "name": "anchovies",
                            "localizedName": "anchovies",
                            "image": "anchovies.jpg"
                        },
                        {
                            "id": 0,
                            "name": "lollipops",
                            "localizedName": "lollipops",
                            "image": "no.jpg"
                        }
                    ],
                    "equipment": []
                },
                ...,
            ]
        }
    ],
    "originalId": null
}
```

&nbsp;

## 5. GET /popularRecipes
Description: 
- Fetch all random recipes from 3rd Party API Endpoints

_Response (200 - OK)_
```json
{
    "id": 716429,
    "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    "imageType": "jpg",
    "servings": 2,
    "readyInMinutes": 45,
    "license": "CC BY-SA 3.0",
    "sourceName": "Full Belly Sisters",
    "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
    "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
    "healthScore": 19.0,
    "spoonacularScore": 83.0,
    "pricePerServing": 163.15,
    "analyzedInstructions": [],
    "cheap": false,
    "creditsText": "Full Belly Sisters",
    "cuisines": [],
    "dairyFree": false,
    "diets": [],
    "gaps": "no",
    "glutenFree": false,
    "instructions": "",
    "ketogenic": false,
    "lowFodmap": false,
    "occasions": [],
    "sustainable": false,
    "vegan": false,
    "vegetarian": false,
    "veryHealthy": false,
    "veryPopular": false,
    "whole30": false,
    "weightWatcherSmartPoints": 17,
    "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    "extendedIngredients": [
        {
            "aisle": "Milk, Eggs, Other Dairy",
            "amount": 1.0,
            "consitency": "solid",
            "id": 1001,
            "image": "butter-sliced.jpg",
            "measures": {
                "metric": {
                    "amount": 1.0,
                    "unitLong": "Tbsp",
                    "unitShort": "Tbsp"
                },
                "us": {
                    "amount": 1.0,
                    "unitLong": "Tbsp",
                    "unitShort": "Tbsp"
                }
            },
            "meta": [],
            "name": "butter",
            "original": "1 tbsp butter",
            "originalName": "butter",
            "unit": "tbsp"
        },
        ...,
    ],
    "summary": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375\">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href=\"https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437\">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738\">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.",
    "winePairing": {
        "pairedWines": [
            "chardonnay",
            "gruener veltliner",
            "sauvignon blanc"
        ],
        "pairingText": "Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.",
        "productMatches": [
            {
                "id": 469199,
                "title": "Buddha Kat Winery Chardonnay",
                "description": "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
                "price": "$25.0",
                "imageUrl": "https://spoonacular.com/productImages/469199-312x231.jpg",
                "averageRating": 0.8,
                "ratingCount": 1.0,
                "score": 0.55,
                "link": "https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20"
            }
        ]
    }
}
```

&nbsp;

## 6. GET /veggieRecipes
Description: 
- Fetch all random recipes from 3rd Party API Endpoints

_Response (200 - OK)_
```json
{
    "vegetarian": true,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 27,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 79,
    "healthScore": 0,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 109.92,
    "extendedIngredients": [
        {
            "id": 19364,
            "aisle": "Frozen",
            "image": "caramel-sauce.jpg",
            "consistency": "SOLID",
            "name": "caramel dessert topping",
            "nameClean": "caramel sauce",
            "original": "caramel dessert topping",
            "originalName": "caramel dessert topping",
            "amount": 6,
            "unit": "servings",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 6,
                    "unitShort": "servings",
                    "unitLong": "servings"
                },
                "metric": {
                    "amount": 6,
                    "unitShort": "servings",
                    "unitLong": "servings"
                }
            }
        },
        ...,
    ],
    "id": 659782,
    "title": "Sex in a glass",
    "readyInMinutes": 45,
    "servings": 6,
    "sourceUrl": "http://www.foodista.com/recipe/3BZLKWW2/sex-in-a-glass",
    "image": "https://spoonacular.com/recipeImages/659782-556x370.jpg",
    "imageType": "jpg",
    "summary": "You can never have too many side dish recipes, so give Sex in a glass a try. This recipe serves 6. One portion of this dish contains around <b>3g of protein</b>, <b>29g of fat</b>, and a total of <b>501 calories</b>. For <b>$1.1 per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. 79 people found this recipe to be tasty and satisfying. This recipe from Foodista requires water, sugar, dulce de leche ice cream, and sugar. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is a good option if you're following a <b>gluten free and lacto ovo vegetarian</b> diet. Overall, this recipe earns a <b>not so excellent spoonacular score of 21%</b>. <a href=\"https://spoonacular.com/recipes/stained-glass-jello-also-known-as-broken-glass-jello-507424\">Stained Glass Jello (also known as Broken Glass Jello)</a>, <a href=\"https://spoonacular.com/recipes/better-than-sex-cake-1010365\">Better Than Sex Cake</a>, and <a href=\"https://spoonacular.com/recipes/better-than-sex-cake-559520\">Better Than Sex Cake</a> are very similar to this recipe.",
    "cuisines": [],
    "dishTypes": [
        "side dish"
    ],
    "diets": [
        "gluten free",
        "lacto ovo vegetarian"
    ],
    "occasions": [],
    "winePairing": {
        "pairedWines": [],
        "pairingText": "",
        "productMatches": []
    },
    "instructions": "<ol><li>To make the espresso bring water to a boil and then pour it over the espresso. Set aside to cool. When cooled add the melted ice cream</li><li>For the caramel-cream: Place 1 cup sugar and water in a 2 quart pot with a glass lid. Cover and bring to a boil over medium-high heat. Do not remove lid or stir the sugar mixture or it will begin to crystallize. The glass lid is a convenient way of watching the sugar so you know when it changes color as well as keeping the steam inside and preventing crystallization.</li><li>When the sugar begins to look caramelized watch it carefully and remove from heat when it reaches deep amber color. Be very careful as the sugar is extremely hot and also watch that it doesn't burn. It can go from amber to burnt very quickly.</li><li>Immediately off the heat pour the one cup cream into the caramel. The caramel will stiffen, sizzle and splatter so be careful. Return to a medium heat and cook until the caramel melts together with the cream.</li><li>Pour the caramel cream into the coffee and refrigerate until cold.</li><li>To assemble, fill a glass with ice, scoop two ice cream scoops into each glass.</li><li>Pour the iced espresso cream over and top with sweetened whipped cream (the other cup of cream whipped with 1 tablespoon sugar).</li><li>Garnish with caramel syrup and serve chilled.</li></ol>",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "To make the espresso bring water to a boil and then pour it over the espresso. Set aside to cool. When cooled add the melted ice cream",
                    "ingredients": [
                        {
                            "id": 19095,
                            "name": "ice cream",
                            "localizedName": "ice cream",
                            "image": "vanilla-ice-cream.png"
                        },
                        ...,
                    ],
                    "equipment": []
                }
            ]
        },
        {
            "name": "For the caramel-cream",
            "steps": [
                {
                    "number": 1,
                    "step": "Place 1 cup sugar and water in a 2 quart pot with a glass lid. Cover and bring to a boil over medium-high heat. Do not remove lid or stir the sugar mixture or it will begin to crystallize. The glass lid is a convenient way of watching the sugar so you know when it changes color as well as keeping the steam inside and preventing crystallization.When the sugar begins to look caramelized watch it carefully and remove from heat when it reaches deep amber color. Be very careful as the sugar is extremely hot and also watch that it doesn't burn. It can go from amber to burnt very quickly.Immediately off the heat pour the one cup cream into the caramel. The caramel will stiffen, sizzle and splatter so be careful. Return to a medium heat and cook until the caramel melts together with the cream.",
                    "ingredients": [
                        {
                            "id": 19074,
                            "name": "caramel",
                            "localizedName": "caramel",
                            "image": "soft-caramels.jpg"
                        },
                        ...,
                    ],
                    "equipment": [
                        {
                            "id": 404752,
                            "name": "pot",
                            "localizedName": "pot",
                            "image": "stock-pot.jpg"
                        }
                    ]
                },
                ...,
            ]
        }
    ],
    "originalId": null,
    "spoonacularSourceUrl": "https://spoonacular.com/sex-in-a-glass-659782"
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_
```json
{
  "message": "Invalid token"
}
```

_Response (403 - Forbidden)_
```json
{
  "message": "You aren't allow to access this point"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal server error"
}
```