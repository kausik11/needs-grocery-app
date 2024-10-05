import relax_home from './relax_home.png';
import fresh from './fresh.png';
import NoItemsCart from './NoItemsCart.png';
import NoSearchResult from './NoSearchResult.png';
import banner from '../assets/images/home_screen/banner.png';
import success from '../assets/images/order_accepted/success.png';
import bakery from '../assets/images/product_categories/bakery.png'
import beverages from '../assets/images/product_categories/beverages.png'
import dairy from '../assets/images/product_categories/dairy.png'
import fruits from '../assets/images/product_categories/fruits.png'
import meat from '../assets/images/product_categories/meat.png'
import oil from '../assets/images/product_categories/oil.png'
import logo from '../assets/images/logo-colour.png'
import orderpageimage from '../assets/images/onboarding-background.png'
import blankprofile from '../assets/images/profile.png'
import apple_juice from '../assets/images/products/beverages/apple_juice.png'
import coke from '../assets/images/products/beverages/coke.png'
import diet_coke from '../assets/images/products/beverages/diet_coke.png'
import orange_juice from '../assets/images/products/beverages/orange_juice.png'
import pepsi from '../assets/images/products/beverages/pepsi.png'
import sprite from '../assets/images/products/beverages/sprite.png'
import egg_red from '../assets/images/products/dairy/egg_red.png'
import egg_white from '../assets/images/products/dairy/egg_white.png'
import apple from '../assets/images/products/fruits/apple.png'
import avocado from '../assets/images/products/fruits/avocado.png'
import banana from '../assets/images/products/fruits/banana.png'
import coconut from '../assets/images/products/fruits/coconut.png'
import grape from '../assets/images/products/fruits/grape.png'
import ginger from '../assets/images/products/fruits/ginger.png'
import green_apple from '../assets/images/products/fruits/green-apple.png'
import kiwi from '../assets/images/products/fruits/kiwi.png'
import lime from '../assets/images/products/fruits/lime.png'
// import pepper from '../assets/images/products/fruits/pepper.png'
import pineapple from '../assets/images/products/fruits/pineapple.png'
// import pomegranate from '../assets/images/products/fruits/pomegranate.png'
import beef_bone from '../assets/images/products/meat/beef-bone.png'
import chicken from '../assets/images/products/meat/chicken.png'
import cookingoil from '../assets/images/products/oil/oil.png'
import coconutOil from '../assets/images/products/oil/coconut_oil.png'
import cake from '../assets/images/products/bakery/cake.png'
import bread from '../assets/images/products/bakery/bread.png'
import choclatecake from '../assets/images/products/bakery/choclatecake.png'




export const assets = {
    relax_home,
    fresh,
    NoItemsCart,
    NoSearchResult,
    banner,
    success,
    logo,
    orderpageimage,
    blankprofile,
    coconutOil,
    chicken
}

export const categories = [{
    "cat_name": "bakery",
    "cat_image": bakery
}, {
    "cat_name": "beverages",
    "cat_image": beverages
}, {
    "cat_name": "dairy",
    "cat_image": dairy
}, {
    "cat_name": "fruits",
    "cat_image": fruits
}, {
    "cat_name": "meat",
    "cat_image": meat
}, {
    "cat_name": "oil",
    "cat_image": oil
}]
//6 categories

export const items = [
    {
        "id": 1,
        "name": "Apple Juice",
        "price": 5.99,
        "category": "beverages",
        "image": apple_juice,
        "description": "Apple juice is a juice made from apples.",
        "quantity": 10,
        "bestSeller":"yes"
    },
    {
        "id": 2,
        "name": "Banana",
        "price": 1.99,
        "category": "fruits",
        "image": banana,
        "description": "Banana is a type of fruit.",
        "quantity": 20,
        "bestSeller":"yes"
    }, {
        "id": 3,
        "name": "Beef Bone",
        "price": 3.99,
        "category": "meat",
        "image": beef_bone,
        "description": "Beef bone is a type of meat.",
        "quantity": 15,
        "bestSeller":"yes"
    }, {
        "id": 4,
        "name": "coke",
        "price": 2.99,
        "category": "beverages",
        "image": coke,
        "description": "Coke is a type of beverage.",
        "quantity": 25,
        "bestSeller":"yes"
    }, {
        "id": 5,
        "name": "Diet Coke",
        "price": 4.99,
        "category": "beverages",
        "image": diet_coke,
        "description": "Diet coke is a type of beverage.",
        "quantity": 30,
        "bestSeller":"yes"
    }, {
        "id": 6,
        "name": "Red Egg",
        "price": 2.99,
        "category": "dairy",
        "image": egg_red,
        "description": "Red egg is a type of egg.",
        "quantity": 20
    }, {
        "id": 7,
        "name": "Orange Juice",
        "price": 3.99,
        "category": "beverages",
        "image": orange_juice,
        "description": "Orange juice is a type of beverage.",
        "quantity": 25
    }, {
        "id": 8,
        "name": "Apple",
        "price": 1.99,
        "category": "fruits",
        "image": apple,
        "description": "Apple is a type of fruit.",
        "quantity": 30
    }, {
        "id": 9,
        "name": "coconut",
        "price": 0.99,
        "category": "fruits",
        "image": coconut,
        "description": "Banana is a type of fruit.",
        "quantity": 40
    }, {
        "id": 10,
        "name": "Avocado",
        "price": 1.99,
        "category": "fruits",
        "image": avocado,
        "description": "Avocado is a type of fruit.",
        "quantity": 35
    }, {
        "id": 11,
        "name": "Grape",
        "price": 2.99,
        "category": "fruits",
        "image": grape,
        "description": "Grape is a type of fruit.",
        "quantity": 45
    }, {
        "id": 12,
        "name": "Ginger",
        "price": 3.99,
        "category": "fruits",
        "image": ginger,
        "description": "Ginger is a type of fruit.",
        "quantity": 50
    }, {
        "id": 13,
        "name": "Green Apple",
        "price": 5.99,
        "category": "fruits",
        "image": green_apple,
        "description": "Green Apple is a type of fruit.",
        "quantity": 55
    }, {
        "id": 14,
        "name": "Kiwi",
        "price": 4.99,
        "category": "fruits",
        "image": kiwi,
        "description": "Kiwi is a type of fruit.",
        "quantity": 60
    }, {
        "id": 15,
        "name": "Lime",
        "price": 6.99,
        "category": "fruits",
        "image": lime,
        "description": "Lime is a type of fruit.",
        "quantity": 65
    }, {
        "id": 16,
        "name": "Pineapple",
        "price": 7.99,
        "category": "fruits",
        "image": pineapple,
        "description": "Pineapple is a type of fruit.",
        "quantity": 70
    }, {
        "id": 17,
        "name": "White Egg",
        "price": 1.99,
        "category": "dairy",
        "image": egg_white,
        "description": "White egg is a type of egg.",
        "quantity": 90
    }, {
        "id": 18,
        "name": "Pepsi",
        "price": 4.99,
        "category": "beverages",
        "image": pepsi,
        "description": "Pepsi is a type of beverage.",
        "quantity": 15
    }, {
        "id": 19,
        "name": "Sprite",
        "price": 3.99,
        "category": "beverages",
        "image": sprite,
        "description": "Sprite is a type of beverage.",
        "quantity": 50
    }, {
        "id": 20,
        "name": "Chicken",
        "price": 8.99,
        "category": "meat",
        "image": chicken,
        "description": "Chicken is a type of meat.",
        "quantity": 80
    }, {
        "id": 21,
        "name": "Cooking Oil",
        "price": 50.99,
        "category": "oil",
        "image": cookingoil,
        "description": "This is a cooking mastered oil",
        "quantity": 20
    }, {
        "id": 22,
        "name": "Coconut Oil",
        "price": 60.99,
        "category": "oil",
        "image": coconutOil,
        "description": "This is a coconut oil",
        "quantity": 30
    }, {
        "id": 23,
        "name": "Cake",
        "price": 5.99,
        "category": "bakery",
        "image": cake,
        "description": "Cake is a type of bakery.",
        "quantity": 40
    }, {
        "id": 24,
        "name": "Bread",
        "price": 10.99,
        "category": "bakery",
        "image": bread,
        "description": "Bread is a type of bakery.",
        "quantity": 30
    }, {
        "id": 25,
        "name": "Choclate Cake",
        "price": 200.99,
        "category": "bakery",
        "image": choclatecake,
        "description": "Choclate cake is a type of bakery.",
        "quantity": 10
    }
]
//26 items