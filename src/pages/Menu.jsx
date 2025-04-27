import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../componets/Header'
function Menu() {
    const navigate = useNavigate()
    const menuList = [
        {
            "image": "https://realfood.tesco.com/media/images/RFO-1400x919-SweetPotXmas-b17bc38c-3ec7-4dde-8ae7-c43e39f8397f-0-1400x919.jpg",
            "category": "Starters",
            "foodItem": [
              {
                "id": 1,
                "name": "Chili Paneer",
                "price": 150,
                "image": "https://rumkisgoldenspoon.com/wp-content/uploads/2021/04/Chilli-paneer-dry.jpg"
              },
              {
                "id": 2,
                "name": "Chicken Lolipop",
                "price": 180,
                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/chicken-lollipop-recipe.jpg"
              },
              {
                "id": 3,
                "name": "French Fries",
                "price": 100,
                "image": "https://www.simplyrecipes.com/thmb/9gLozUY9B7pjNZi4N8vC0TxSkHI=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__08__oven-fries-horiz-a-1600-52a567e894fb48b5b83d60781bc8dd61.jpg"
              },
              {
                "id": 4,
                "name": "Sweet Corn",
                "price": 160,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2019/06/sweet-corn-soup-recipe-1.jpg"
              },
              {
                "id": 5,
                "name": "Veg Spring Roll",
                "price": 140,
                "image": "https://www.cookwithmanali.com/wp-content/uploads/2019/07/Veg-Spring-Roll.jpg"
              },
              {
                "id": 6,
                "name": "Hara Bhara Kabab",
                "price": 130,
                "image": "https://www.whiskaffair.com/wp-content/uploads/2020/07/Hara-Bhara-Kabab-2-3.jpg"
              },
              {
                "id": 7,
                "name": "Paneer Tikka",
                "price": 170,
                "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Paneer-Tikka-Recipe.jpg"
              },
              {
                "id": 8,
                "name": "Chicken Tikka",
                "price": 200,
                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/chicken-tikka-recipe.jpg"
              },
              {
                "id": 9,
                "name": "Fish Fingers",
                "price": 210,
                "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Fish-Fingers-Recipe.jpg"
              },
              {
                "id": 10,
                "name": "Crispy Corn",
                "price": 160,
                "image": "https://www.indianveggiedelight.com/wp-content/uploads/2022/12/crispy-corn-featured.jpg"
              },
              {
                "id": 11,
                "name": "Gobi Manchurian",
                "price": 140,
                "image": "https://www.cookwithmanali.com/wp-content/uploads/2017/04/Gobi-Manchurian.jpg"
              },
              {
                "id": 12,
                "name": "Cheese Balls",
                "price": 150,
                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/cheese-balls-recipe.jpg"
              },
              {
                "id": 13,
                "name": "Tandoori Mushroom",
                "price": 160,
                "image": "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Tandoori_Mushroom_Tikka.jpg"
              },
              {
                "id": 14,
                "name": "Egg Pakora",
                "price": 120,
                "image": "https://www.chefkunalkapur.com/wp-content/uploads/2021/09/egg-pakora-1200x900.jpg"
              },
              {
                "id": 15,
                "name": "Masala Papad",
                "price": 80,
                "image": "https://www.cookwithmanali.com/wp-content/uploads/2021/03/Masala-Papad.jpg"
              }
            ]
          }          
          ,{
            "image": "https://images6.alphacoders.com/100/thumb-1920-1002209.jpg",
            "category": "Main Course",
            "foodItem": [
              {
                "id": 16,
                "name": "Butter Chicken",
                "price": 350,
                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/butter-chicken-recipe.jpg"
              },
              {
                "id": 17,
                "name": "Paneer Butter Masala",
                "price": 280,
                "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/10/Paneer-Butter-Masala.jpg"
              },
              {
                "id": 18,
                "name": "Dal Tadka",
                "price": 180,
                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/dal-tadka-recipe.jpg"
              },
              {
                "id": 19,
                "name": "Chicken Biryani",
                "price": 320,
                "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Chicken-Biryani.jpg"
              },
              {
                "id": 20,
                "name": "Vegetable Biryani",
                "price": 250,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/05/veg-biryani-recipe-1.jpg"
              },
              {
                "id": 21,
                "name": "Paneer Lababdar",
                "price": 300,
                "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2018/06/Paneer-Lababdar.jpg"
              },
              {
                "id": 22,
                "name": "Chole Bhature",
                "price": 220,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2019/08/chole-bhature-recipe-1.jpg"
              }
            ]
          }
          ,
          {
            "image": "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Rice/Hyderabadi_Mutton_Gosht_Biryani_With_Kohinoor_Basmati_Rice-1.jpg",
            "category": "Rice & Biryani",
            "foodItem": [
              {
                "id": 23,
                "name": "Chicken Biryani",
                "price": 350,
                "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Chicken-Biryani.jpg"
              },
              {
                "id": 24,
                "name": "Mutton Biryani",
                "price": 400,
                "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Mutton-Biryani.jpg"
              },
              {
                "id": 25,
                "name": "Vegetable Biryani",
                "price": 250,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/05/veg-biryani-recipe-1.jpg"
              },
              {
                "id": 26,
                "name": "Hyderabadi Biryani",
                "price": 380,
                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/hyderabadi-biryani-recipe.jpg"
              },
              {
                "id": 27,
                "name": "Paneer Biryani",
                "price": 300,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/04/paneer-biryani-recipe.jpg"
              },
              {
                "id": 28,
                "name": "Pulao",
                "price": 180,
                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/veg-pulao-recipe.jpg"
              }
            ]
          }
          ,{
            "image": "https://www.thespruceeats.com/thmb/VFInnE8x2bW4iIy45lHlZarJgRk=/4664x3109/filters:no_upscale():max_bytes(150000):strip_icc()/naan-leavened-indian-flatbread-1957348-final-08-116a2e523f6e4ee693b1a9655784d9b9.jpg",
            "category": "Indian Breads (Roti, Naan, etc.)",
            "foodItem": [
              {
                "id": 29,
                "name": "Butter Naan",
                "price": 80,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2018/12/butter-naan-recipe-1.jpg"
              },
              {
                "id": 30,
                "name": "Garlic Naan",
                "price": 90,
                "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2017/10/Garlic-Naan.jpg"
              },
              {
                "id": 31,
                "name": "Plain Roti",
                "price": 30,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2018/08/roti-recipe-1.jpg"
              },
              {
                "id": 32,
                "name": "Tandoori Roti",
                "price": 50,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2017/05/tandoori-roti-recipe.jpg"
              },
              {
                "id": 33,
                "name": "Aloo Paratha",
                "price": 120,
                "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/09/Aloo-Paratha.jpg"
              },
              {
                "id": 34,
                "name": "Gobi Paratha",
                "price": 130,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/gobi-paratha-recipe-1.jpg"
              },
              {
                "id": 35,
                "name": "Cheese Naan",
                "price": 100,
                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/cheese-naan-recipe.jpg"
              },
              {
                "id": 36,
                "name": "Missi Roti",
                "price": 70,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2019/11/missi-roti-recipe.jpg"
              }
            ]
          }
          ,
          {
            "image": "https://www.iwmbuzz.com/wp-content/uploads/2021/02/bored-of-eating-same-food-try-this-indo-chinese-food-hakka-noodles-simple-and-easy-to-make.jpeg",
            "category": "Chinese / Indo-Chinese",
            "foodItem": [
              {
                "id": 37,
                "name": "Chili Chicken",
                "price": 250,
                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chili-chicken-recipe.jpg"
              },
              {
                "id": 38,
                "name": "Hakka Noodles",
                "price": 180,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2018/10/hakka-noodles-recipe.jpg"
              },
              {
                "id": 39,
                "name": "Veg Manchurian",
                "price": 220,
                "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/12/Veg-Manchurian-1.jpg"
              },
              {
                "id": 40,
                "name": "Chicken Fried Rice",
                "price": 240,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/04/chicken-fried-rice-recipe.jpg"
              },
              {
                "id": 41,
                "name": "Veg Fried Rice",
                "price": 200,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/04/veg-fried-rice-recipe.jpg"
              },
              {
                "id": 42,
                "name": "Spring Rolls",
                "price": 150,
                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/spring-rolls-recipe.jpg"
              },
              {
                "id": 43,
                "name": "Chili Paneer",
                "price": 220,
                "image": "https://rumkisgoldenspoon.com/wp-content/uploads/2021/04/Chilli-paneer-dry.jpg"
              },
              {
                "id": 44,
                "name": "Sweet Corn Soup",
                "price": 120,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/05/sweet-corn-soup-recipe.jpg"
              }
            ]
          }
          ,
          {
            "image": "https://sukhis.com/app/uploads/2022/04/image3-4.jpg",
            "category": "South Indian",
            "foodItem": [
              {
                "id": 45,
                "name": "Masala Dosa",
                "price": 120,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/10/masala-dosa-recipe-1.jpg"
              },
              {
                "id": 46,
                "name": "Plain Dosa",
                "price": 100,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2019/08/plain-dosa-recipe-1.jpg"
              },
              {
                "id": 47,
                "name": "Idli",
                "price": 80,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/08/idli-recipe.jpg"
              },
              {
                "id": 48,
                "name": "Sambar Vada",
                "price": 150,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/09/sambar-vada-recipe-1.jpg"
              },
              {
                "id": 49,
                "name": "Medu Vada",
                "price": 120,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2019/09/medu-vada-recipe.jpg"
              },
              {
                "id": 50,
                "name": "Rava Upma",
                "price": 100,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/08/rava-upma-recipe.jpg"
              },
              {
                "id": 51,
                "name": "Hyderabadi Biryani",
                "price": 380,
                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/hyderabadi-biryani-recipe.jpg"
              },
              {
                "id": 52,
                "name": "Coconut Rice",
                "price": 150,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/07/coconut-rice-recipe-1.jpg"
              }
            ]
          },
          {
            "image": "https://i.pinimg.com/originals/4b/34/41/4b3441971d9f42b13c2f32f207b3c3fa.jpg",
            "category": "North Indian",
            "foodItem": [
              {
                "id": 53,
                "name": "Butter Chicken",
                "price": 350,
                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/butter-chicken-recipe.jpg"
              },
              {
                "id": 54,
                "name": "Paneer Butter Masala",
                "price": 280,
                "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/10/Paneer-Butter-Masala.jpg"
              },
              {
                "id": 55,
                "name": "Aloo Gobi",
                "price": 150,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2019/12/aloo-gobi-recipe.jpg"
              },
              {
                "id": 56,
                "name": "Dal Tadka",
                "price": 180,
                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/dal-tadka-recipe.jpg"
              },
              {
                "id": 57,
                "name": "Gajar Methi Thepla",
                "price": 120,
                "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2021/02/Gajar-Methi-Thepla.jpg"
              },
              {
                "id": 58,
                "name": "Rajma",
                "price": 170,
                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/02/rajma-recipe.jpg"
              },
              {
                "id": 59,
                "name": "Aloo Paratha",
                "price": 120,
                "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/09/Aloo-Paratha.jpg"
              },
              {
                "id": 60,
                "name": "Chole Bhature",
                "price": 220,
                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2019/08/chole-bhature-recipe-1.jpg"
              }
            ]
          },
          {
            "image": "https://www.fbgcdn.com/pictures/2841cb1c-61ac-4ba4-bfb3-21c184240287.jpg",
            "category": "Continental / Western",
            "foodItem": [
              {
                "id": 61,
                "name": "Spaghetti Aglio e Olio",
                "price": 250,
                "image": "https://www.cookingclassy.com/wp-content/uploads/2017/11/spaghetti-aglio-e-olio-10.jpg"
              },
              {
                "id": 62,
                "name": "Margherita Pizza",
                "price": 300,
                "image": "https://www.simplyrecipes.com/thmb/0k6V9h1wpG6lHVt3ntcpqC9zSAA=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Margherita-Pizza-LEAD-4-50d5d22d4b2240a1b623ad9c06b29be9.jpg"
              },
              {
                "id": 63,
                "name": "Grilled Chicken Sandwich",
                "price": 180,
                "image": "https://www.delish.com/entertaining/menus/a29839494/grilled-chicken-sandwich-recipe/"
              },
              {
                "id": 64,
                "name": "Caesar Salad",
                "price": 220,
                "image": "https://www.simplyrecipes.com/thmb/0wy8smICwjjoERm8yWzUJbw3wyM=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Caesar-Salad-LEAD-1-12cdb20c197d45f4a0042c5f18c8653b.jpg"
              },
              {
                "id": 65,
                "name": "Fish and Chips",
                "price": 350,
                "image": "https://www.delish.com/entertaining/menus/a29839556/fish-and-chips-recipe/"
              },
              {
                "id": 66,
                "name": "Vegetable Risotto",
                "price": 280,
                "image": "https://www.simplyrecipes.com/thmb/lbP9ir8KLf_-6_0d9I5PjS0gEow=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Vegetable-Risotto-LEAD-4-e0b74a8a01f94f0c82fe5179d29c9e19.jpg"
              },
              {
                "id": 67,
                "name": "Beef Burger",
                "price": 250,
                "image": "https://www.simplyrecipes.com/thmb/J7dlQ2YP0XxoCmK5td5fF7kK0rw=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Burger-LEAD-6-34542077160f467f988dd7ff1305165c.jpg"
              },
              {
                "id": 68,
                "name": "Penne Alfredo",
                "price": 270,
                "image": "https://www.cookingclassy.com/wp-content/uploads/2021/06/penne-alfredo-10.jpg"
              }
            ]
          },
          {
            "image": "https://i.ytimg.com/vi/iRr7jADrwws/maxresdefault.jpg",
            "category": "Beverages (Hot/Cold)",
            "foodItem": [
              {
                "id": 69,
                "name": "Cappuccino",
                "price": 120,
                "image": "https://www.baristainstitute.com/wp-content/uploads/2020/04/cappuccino.jpg"
              },
              {
                "id": 70,
                "name": "Latte",
                "price": 150,
                "image": "https://www.coffeebeanshop.com/wp-content/uploads/2017/10/latte.jpg"
              },
              {
                "id": 71,
                "name": "Black Coffee",
                "price": 100,
                "image": "https://www.coffeebeanshop.com/wp-content/uploads/2017/10/black-coffee.jpg"
              },
              {
                "id": 72,
                "name": "Hot Chocolate",
                "price": 140,
                "image": "https://www.simplyrecipes.com/thmb/YB1C5P6r4j2hYoZmVmS9WgG2h5M=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Hot-Chocolate-LEAD-3-b5c1b5821d3f4e8a831e4d0714a46e40.jpg"
              },
              {
                "id": 73,
                "name": "Iced Tea",
                "price": 110,
                "image": "https://www.verywellfit.com/thmb/JYZiMMHdf2DCS5gYFDaGGV2vBOE=/1500x1000/filters:fill(auto,1)/verywellfit-iced-tea-59b447c65f9b58a3c5002d6b-5.jpg"
              },
              {
                "id": 74,
                "name": "Cold Coffee",
                "price": 160,
                "image": "https://www.simplyrecipes.com/thmb/NhK3lzkkprw-kwsO1U4g0nUv5uM=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Cold-Coffee-LEAD-1-6a7b6f6478a843fbb874e5d65c29ed85.jpg"
              },
              {
                "id": 75,
                "name": "Lemonade",
                "price": 90,
                "image": "https://www.simplyrecipes.com/thmb/FqJwkyh8OPLsjo8F6U1-aG0cA3w=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Lemonade-LEAD-1-e240c84d8a7f4b9fb637ce49f3b774b8.jpg"
              },
              {
                "id": 76,
                "name": "Fruit Punch",
                "price": 130,
                "image": "https://www.delish.com/entertaining/menus/a29839658/fruit-punch-recipe/"
              }
            ]
          }
,
{
    "image": "https://traditionallymodernfood.com/wp-content/uploads/2020/11/gulab-jamun-how-to-make-gulab-jamun-with-milk-powder-6-scaled.jpeg",
    "category": "Desserts",
    "foodItem": [
      {
        "id": 77,
        "name": "Gulab Jamun",
        "price": 100,
        "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/05/gulab-jamun-recipe.jpg"
      },
      {
        "id": 78,
        "name": "Chocolate Cake",
        "price": 250,
        "image": "https://www.simplyrecipes.com/thmb/4bK56gfR7E_cNY9IZP8Amztv0aA=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Chocolate-Cake-LEAD-2-c292a7e30a9447008d004ef45baf36f2.jpg"
      },
      {
        "id": 79,
        "name": "Ice Cream (Chocolate/Vaniila)",
        "price": 120,
        "image": "https://www.simplyrecipes.com/thmb/npVFOQXhxugjL2cHTkT3pQWwRnk=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Ice-Cream-LEAD-2-0f442f33b94f42a4809629f5ca57e7ed.jpg"
      },
      {
        "id": 80,
        "name": "Fruit Custard",
        "price": 150,
        "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2021/02/custard-recipe.jpg"
      },
      {
        "id": 81,
        "name": "Carrot Halwa",
        "price": 180,
        "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/gajar-halwa-recipe.jpg"
      },
      {
        "id": 82,
        "name": "Rasgulla",
        "price": 90,
        "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/rasgulla-recipe.jpg"
      },
      {
        "id": 83,
        "name": "Tiramisu",
        "price": 250,
        "image": "https://www.simplyrecipes.com/thmb/fplB3CjfZ3yM9t9l5xXAT1eDU1w=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Tiramisu-LEAD-2-fd9a4e6a7e48487f8de6b8de32063ab4.jpg"
      },
      {
        "id": 84,
        "name": "Cheesecake",
        "price": 300,
        "image": "https://www.simplyrecipes.com/thmb/9PyvXleQX6h9G1H9bXw6zN77T7M=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Cheesecake-LEAD-2-b4f6f28c0c944c6f8967412de2d09139.jpg"
      }
    ]
  }
,
{
    "image": "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?cs=srgb&dl=vegetable-salad-on-plate-1059905.jpg&fm=jpg",
    "category": "Salads",
    "foodItem": [
      {
        "id": 85,
        "name": "Caesar Salad",
        "price": 180,
        "image": "https://www.simplyrecipes.com/thmb/0wy8smICwjjoERm8yWzUJbw3wyM=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Caesar-Salad-LEAD-1-12cdb20c197d45f4a0042c5f18c8653b.jpg"
      },
      {
        "id": 86,
        "name": "Greek Salad",
        "price": 200,
        "image": "https://www.simplyrecipes.com/thmb/YoT0lz2PVfwOBy3muTdpNG-4L8M=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Greek-Salad-LEAD-1-c3f11b80801047e8bd1187b09b6788b1.jpg"
      },
      {
        "id": 87,
        "name": "Coleslaw",
        "price": 120,
        "image": "https://www.simplyrecipes.com/thmb/76Fgz1ewtnRjmA0DA1gON51Oq_A=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Coleslaw-LEAD-1-35a837062c4b47e4a47d0d4b9a88a94a.jpg"
      },
      {
        "id": 88,
        "name": "Caprese Salad",
        "price": 180,
        "image": "https://www.simplyrecipes.com/thmb/XrS2vNlOovpc_jmjSk2uLOI9UBQ=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Caprese-Salad-LEAD-1-58cfdf180bd44e5f98aaff2922d6db0a.jpg"
      },
      {
        "id": 89,
        "name": "Avocado Salad",
        "price": 220,
        "image": "https://www.simplyrecipes.com/thmb/c19mN6Fc07sIYO6Re0GFgOZ7eNw=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Avocado-Salad-LEAD-1-3788ab39b6b848c7b1d82f0c6798c7c7.jpg"
      },
      {
        "id": 90,
        "name": "Spinach Salad",
        "price": 150,
        "image": "https://www.simplyrecipes.com/thmb/0a4U8AkIf3qLOK8_d1fQvuwFPRw=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Spinach-Salad-LEAD-1-9f803a25a57c4420b56c7b849b3e98a2.jpg"
      },
      {
        "id": 91,
        "name": "Tomato Cucumber Salad",
        "price": 140,
        "image": "https://www.simplyrecipes.com/thmb/Fbb8spgF_8gT2qFc-WbVGzUzO1E=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Tomato-Cucumber-Salad-LEAD-1-b0b7009ad66c474fb6fc6743407f8f16.jpg"
      },
      {
        "id": 92,
        "name": "Beetroot Salad",
        "price": 170,
        "image": "https://www.simplyrecipes.com/thmb/-JGeiUpVQ6orFcbzqdtZLzzjm6w=/1500x1000/filters:fill(auto,1)/Simply-Recipes-Beetroot-Salad-LEAD-1-b763053e8a1446d59bcd3b2a12e330a4.jpg"
      }
    ]
  }
  
                              
    ]
    let name = localStorage.getItem("name")
  return (
    <div>
  <Header />
  <div className="h-[10vh] w-full bg-black text-white text-xl font-bold flex items-center justify-center">
    Hello {name}
  </div>

  <div className="flex flex-wrap gap-4 justify-center p-2">
    {menuList.map((i, idx) => (
      <div
        key={idx}
        onClick={() => {
          localStorage.setItem('category', JSON.stringify(i));
          navigate('/category');
        }}
        className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] h-auto flex flex-col sm:flex-row border p-2 gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
      >
        <div className="h-[200px] sm:h-auto sm:w-[30%] flex-shrink-0">
          <img
            src={i.image}
            alt={i.category}
            className="object-cover w-full h-full rounded"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full px-2">
          <p className="font-bold text-xl sm:text-2xl">{i.category}</p>
          <button className="mt-2 sm:mt-0 px-4 py-2 bg-[#211b10] text-white rounded hover:bg-[#2c2620] focus:outline-none focus:ring-2 focus:ring-blue-400">
            Menu of {i.category}
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Menu