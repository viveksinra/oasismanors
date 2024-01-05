'use client';
import "../amenityStle.css";
import React, { useState,useEffect } from 'react'
import Header from "../../Components/Header/Header";
import { TopAbstract } from "../../MyApp";
import {Button,Grid, Typography,Tab,Tabs,  Chip, Avatar,MobileStepper , Container, Divider,} from '@mui/material/';
import { FcDebt,FcInternal,FcNext,FcPrevious  } from "react-icons/fc";
import Footer from "../../Components/Footer/Footer";


function SimpleMenu() {
  const [days] = useState(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]);
  const [allWeek] = useState(["Week 1", "Week 2", "Week 3", "Week 4"])
  const [menuTab, setMenutab]=useState(0);
  const [actWeekData, setActWeek] = useState([]);
  const [week1Data] = useState([{breakfast:{day:"Monday",slot1:["Apple Juice","Oatmeal","Hard Boiled Egg","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Orange Juice","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]}, lightMeal:{day:"Monday",slot1:["Tomato Juice","Pea meal", "Bacon on Bun","Creamy Coleslaw Mustard","Pineapple Slices","Coffee"],slot2:["Tuna Salad Plate","Triple Bean Salad","Wheat Roll","Margarine","Blueberry Custard","2% Milk","Hot Tea"]},mainMeal:{day:"Monday",slot1:["Vegetarian Lasagna Cauliflower","Margarine","Brownie Coffee","Soft Garlic Stick"],slot2:["Chicken with","Mushroom Sauce","Sauteed Spinach","Mashed Potatoes","Chilled Apricots","2% Milk","Hot Tea"]} },
  {breakfast:{day:"Tuesday",slot1:["Prune Juice","Cream of Wheat","Cheddar Cheese","Raisin Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Fresh Banana","Assorted Cold Cereal","Peanut Butter","Whole Wheat Toast","White Toast","Hot Tea"]}, lightMeal:{day:"Tuesday",slot1:["LS Beef","Vegetable Soup","Soda Crackers","Egg Salad on Wheat","Marinated Cucumbers","Strawberries & Topping","Coffee"],slot2:["Turkey Noodle Bake","Diced Beets","Whole Wheat Bread","Margarine","Orange Sherbet","2% Milk","Hot Tea"]},mainMeal:{day:"Tuesday",slot1:["Veal Parmesan","Sliced Carrots","Parslied New Potatoes","Margarine","Blonde Bars","Coffee","Wheat Roll"],slot2:["Stir Fry Pork","Seasoned Green Peas","Fluffy Rice","Chilled Diced Pears","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Wednesday",slot1:["Cranberry Juice","Oatmeal","Scrambled Eggs","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Orange Juice","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]}, lightMeal:{day:"Wednesday", slot1:["Navy Bean Soup","Soda Crackers","Macaroni & Cheese","Garden Salad","Wheat Roll","Margarine","Peach Halves Coffee"],slot2:["Sloppy Joe on Bun","Buttered Corn","Jellied Jewels","2% Milk","Hot Tea"]},mainMeal:{day:"Wednesday",slot1:["Lemon Pepper Cod","Stewed Tomatoes","Whipped Potatoes","Margarine","Raspberry Jelly Roll","Coffee","Buttered WW Bread",],slot2:["Crispy Herb Chicken","Steamed Broccoli","Baked Potato","Cinnamon Apple Sauce","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Thursday",slot1:["Grape Juice","Cream of Wheat","Cottage Cheese Cup","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]}, lightMeal:{day:"Thursday",slot1:["LS Chicken","Noodle Soup","Soda Crackers","Roast Beef on Wheat","Green Pepper Stew","Chilled Plums","Coffee"],slot2:["Spanish Omelet","Sauteed Mushrooms","Whole Wheat Bread","Margarine","Lemon Chiffon","2% Milk","Hot Tea"]},mainMeal:{day:"Thursday",slot1:["Turkey Dijonnaise","Fresh Cut Green Beans","Herb Roasted Potatoes","Margarine","Nanaimo Bar","Coffee","Wheat Roll"],slot2:["Farmers Sausage","Buttered Cabbage","Mashed Potatoes","Mandarin","Oranges","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Friday",slot1:["Orange Juice","Cinnamon","Oatmeal","Poached Egg","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Stewed Prunes","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]}, lightMeal:{day:"Friday",slot1:["LS Pepper Pot Soup","Soda Crackers","Fish ‘n Chips","Vinaigrette Coleslaw","Diced Fresh Melon","Coffee"],slot2:["Cottage Cheese &","Fruit Plate","Spinach Salad","Mini Croissant","Margarine","Raspberry Mousse","2% Milk","Hot Tea"]},mainMeal:{day:"Friday",slot1:["Swiss Steak","Seasoned Green Peas","Mashed Potatoes","Margarine","Butterscotch","Square Coffee","White Roll"],slot2:["Lemon Chicken Thighs","Seasoned","Zucchini","Parisienne Potatoes","Fruit Cocktail","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Saturday",slot1:["Cranberry Juice","Cream of Wheat","Bran Muffin","Vanilla Yogurt","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Assorted Cold Cereal","Peanut Butter","Whole Wheat Toast","White Toast","Hot Tea"]},lightMeal:{day:"Saturday",slot1:["Soda Crackers","LS Barley Beef Soup","Cheese Sandwich","Marinated Tomatoes","Whole Wheat Bread","Margarine","Strawberries","Coffee"],slot2:["Breakfast Ham","Blueberries","Pancakes","Syrup","Vanilla Ice Cream","2% Milk","Hot Tea"]},mainMeal:{day:"Saturday",slot1:["Braised Veal Tips","Asparagus","Spears","Rice Pilaf","Margarine","Iced Chocolate Cake","Coffee","Wheat Roll"],slot2:["Turkey Cutlet","Wax Beans","Scalloped","Potatoes","Chilled Apple Slices","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Sunday",slot1:["Prune Juice","Oatmeal","Bacon","Scrambled Eggs","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Orange Sections","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]},lightMeal :{day:"Sunday",slot1:["Soda Crackers","Cream of Celery", "Soup","BBQ Chicken","Mixed Green Salad","Whole Wheat Bread","Potato Salad","Margarine","Fresh Watermelon","Coffee"],slot2:["Italian Beef Sandwich","Succotash","Butterscotch","Pudding","2% Milk","Hot Tea"]},mainMeal:{day:"Sunday",slot1:["Pork Roast Buttered","Brussels Sprouts","Garlic Mashed Potatoes","Margarine","Key Lime","Meringue Pie Slice","Coffee","White Roll"],slot2:["Battered Pollock","Baked Squash","Roasted Red Skin Potatoes","Stewed Rhubarb","2% Milk","Hot Tea"]}},
])
const [week2Data] = useState([{breakfast:{day:"Monday",slot1:["Pineapple Juice","Cream of Wheat","Cheddar Cheese","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Orange Juice","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]}, lightMeal:{day:"Monday",slot1:["Soda Crackers","LS Italian","Wedding Soup","Farmers Sausage","Cabbage & Apple Salad","Whole Wheat Bread","Perogies in LoCal Sour Cream","Margarine","Diced Fresh Melon","Coffee"],slot2:["Crab Salad","Croissant","Carrot Raisin Salad","Custard Pie","2% Milk","Hot Tea"]},mainMeal:{day:"Monday",slot1:["Turkey Fricassee","Fancy Blend","Vegetables","Mash Potatoes","Margarine","Strawberry","Shortcake","Coffee","Biscuit"],slot2:["Veal Piccata","Seasoned Spinach","Buttered Egg","Noodles","Mandarin","Oranges","2% Milk","Hot Tea"]} },
  {breakfast:{day:"Tuesday",slot1:["Apple Juice","Oatmeal","Poached Egg","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Stewed Prunes","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]}, lightMeal:{day:"Tuesday",slot1:["LS Garden","Vegetable Soup","Soda Crackers","Chicken Strips","Corn Salad","Whole Wheat Bread","Crispy Potato Cubes","Margarine","Plum Sauce","Sliced Pears","Coffee"],slot2:["Shaved Ham Sandwich","Romain w/ Mustard","Vinaigrette","Strawberry Ice Cream","2% Milk","Hot Tea"]},mainMeal:{day:"Tuesday",slot1:["Meat Loaf","Herbed Green Beans","Mashed Potatoes","Margarine","Cherry","Cheesecake","Coffee"],slot2:["Wheat Roll", "Deli Salad Platter","Pea Salad","Fresh Grapes","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Wednesday",slot1:["Prune Juice","Cream of Wheat","French Toast","Margarine","Syrup","2% Milk","Coffee"],slot2:["Orange Juice","Assorted Cold Cereal","Peanut Butter","Whole Wheat Toast","Jelly/Honey/PB","Hot Tea"]}, lightMeal:{day:"Wednesday", slot1:["Cabbage Beef Soup","Soda Crackers","Turkey Salad on Rye","Pickled Beets","Chilled Pineapple","Coffee"],slot2:["Pepper Basil Frittata","Whole Wheat Bread","Sweet Potato Fries","Margarine","Very Berry Mousse","2% Milk","Hot Tea"]},mainMeal:{day:"Wednesday",slot1:["Pork Chopette","Steam Broccoli","O’Brien Potatoes","Margarine","Brown Gravy","Apple Pie","Coffee"],slot2:["White Roll","Baked Basa","Asparagus Spears","Mashed Potatoes","Chilled Apricots","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Thursday",slot1:["Cranberry Juice","Cinnamon Oatmeal","Sausage Patty","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Orange Juice","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]}, lightMeal:{day:"Thursday",slot1:["Potato Vegetable Soup","Soda Crackers","Tuna Noodle","Casserole Sunrise","Vegetables","Whole Wheat Bread","Margarine","Cherries Jubilee Coffee"],slot2:["Sliced Chicken","Sandwich","Mandarin Salad","Chocolate Pudding","2% Milk","Hot Tea"]},mainMeal:{day:"Thursday",slot1:["Zucchini Parmigiana","Bake Caesar Salad","Margarine","Luscious Lemon Square","Coffee"],slot2:["Garlic Toast","Minute Steak","Peppers &","Mushrooms","Baked Potato","Sour Cream","Fresh Watermelon","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Friday",slot1:["Apple Juice","Cream of Wheat","Hard Boiled Egg","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Orange Sections","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]}, lightMeal:{day:"Friday",slot1:["LS Chicken","Rice Soup","Soda Crackers","Hot Dog on Bun Coleslaw","Peaches & Cream","Coffee"],slot2:["Cheese Omelet","Garden Salad","Corn Muffin","Vege Baked Beans","Margarine","Strawberry","Banana","Yogurt Parfait","2% Milk","Hot Tea"]},mainMeal:{day:"Friday",slot1:["Turkey a la King","Buttered Brussels Sprouts","Puff Pastry","Shell Margarine","Frosted Eclair","Coffee"],slot2:["Wheat Roll","Veal Marengo","Baby Lima Beans","Herbed Potatoes","Fresh Fruit Cup","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Saturday",slot1:["Grape Juice","Oatmeal","Vanilla Yogurt","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Orange Juice","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]},lightMeal:{day:"Saturday",slot1:["Soda Crackers","LS Minestrone Soup","Hamburger on Bun","Buttered Corn","Sliced Tomato","Lettuce Leaf","Fruit Cocktail","Coffee"],slot2:["Salmon Salad on Wheat","Spinach Salad","Margarine","Tangerine Mousse","2% Milk","Hot Tea"]},mainMeal:{day:"Saturday",slot1:["Baked Ham in Pineapple Juice","Green and Gold Beans","Au Gratin Potatoes","Margarine","Date Square","Coffee"],slot2:["White Roll","Chicken","Cacciatore","Cauliflower","Garlic Noodles","Mango","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Sunday",slot1:["Prune Juice","Cream of Wheat","Bacon","Scrambled Eggs","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Stewed Prunes","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]},lightMeal :{day:"Sunday",slot1:["LS Clam Chowder","Soda Crackers","Cheddar & Swiss Plate","Raisin Bran Muffin","Margarine","Cinnamon Applesauce","Coffee"],slot2:["Hot Turkey Sandwich","Seasoned Green Peas","Berry Trifle","2% Milk","Hot Tea"]},mainMeal:{day:"Sunday",slot1:["Roast Beef","Parsley Carrots","Mashed Potatoes","Margarine","Banana Cream","Pie Slice","Coffee"],slot2:["Wheat Roll","Krunchie Perch","Glazed Parsnips","Rice Pilaf","Tropical Fruit","2% Milk","Hot Tea"]}},
])
const [week3Data] = useState([{breakfast:{day:"Monday",slot1:["Apple Juice","Oatmeal","Cottage Cheese","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Orange Juice","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]}, lightMeal:{day:"Monday",slot1:["Soda Crackers","Country Bean &","Veg Soup","Shaker Pork on Bun","Creamed Corn","Mandarin Oranges","Coffee"],slot2:["Herbed Oatmeal","Marinated Zucchini","Whole Wheat Bread","Hash Brown Potatoes","Margarine","Broken Glass Jellies","2% Milk","Hot Tea"]},mainMeal:{day:"Monday",slot1:["Chalet Chicken","w/Sauce","Diced Beets","Parisienne","Potatoes","Margarine","Frosted Vanilla Cake","Coffee"],slot2:["Spaghetti & Meat Sauce","Light Caesar Salad","Cantaloupe Wedges","2% Milk","Hot Tea","Garlic Bread"]} },
  {breakfast:{day:"Tuesday",slot1:["Cranberry Juice","Cream of Wheat","Scrambled Eggs","Whole Wheat Toast","Apple Jelly","Margarine","2% Milk","Coffee"],slot2:["Fresh Banana","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]}, lightMeal:{day:"Tuesday",slot1:["Soda Crackers","Cream of Mushroom Cup Soup","Pastrami on Rye","Sweet-n-Sour Coleslaw","Chilled Peach Slices","Coffee"],slot2:["Vege Stuffed Pepper Sauteed Mushrooms","Whole Wheat Bread","Sliced Potatoes","Margarine","Ice Cream","Sandwich","2% Milk","Hot Tea"]},mainMeal:{day:"Tuesday",slot1:["Turkey Tetrazzini","Country Trio Vegetables","Margarine","Chocolate Cream Pie Slice","Coffee","Wheat Roll"],slot2:["Multigrain Tilapia","Streamed Broccoli","Boiled Mini Red Potato","Rhubarb","Pineapple Compote","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Wednesday",slot1:["Pineapple Juice","Oatmeal","Vanilla Yogurt","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Orange Juice","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]}, lightMeal:{day:"Wednesday", slot1:["LS Barley Beef Soup","Soda Crackers","Zesty Shrimp Pasta Salad","Cauliflower &","Peppers","Mini Croissant","Margarine","Fruit Cocktail","Coffee"],slot2:["Chicken Salad on 12 Grain Lettuce","Tomato Salad","Mandarin Chiffon","2% Milk","Hot Tea"]},mainMeal:{day:"Wednesday",slot1:["Pork Roast Buttered","Brussels Sprouts","Potato Wedges","Margarine","Mustard Sauce","Apple Crisp","Coffee","White Roll"],slot2:["Beef Stroganoff","Green Beans Seasoned","Egg Noddles","Chilled Sweet Cherries","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Thursday",slot1:["Grape Juice","Cream of Wheat","Poached Egg","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Orange Sections","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]}, lightMeal:{day:"Thursday",slot1:["Soda Crackers","V8 Juice","Slice Ham Plate","Creamy Cucumber Onions","Whole Wheat Bread","Tangy Pasta Salad","Margarine","Slice Apricots","Coffee"],slot2:["Turkey Pot Pie","Spinach Salad","French Cream","Cheesecake","2% Milk","Hot Tea"]},mainMeal:{day:"Thursday",slot1:["Crunchy Baked Cod","Baked Tomato","Dutchess Potatoes","Margarine","Frosted Brownie","Coffee","Wheat Roll"],slot2:["Veal Paprika","Scandinavian Vegetables","Polenta","Chilled Plums","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Friday",slot1:["Orange Juice","Oatmeal","Pancakes","Sausage Link","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Prune Juice","Assorted Cold Cereal","Peanut Butter","Whole Wheat Toast","White Toast","Hot Tea"]}, lightMeal:{day:"Friday",slot1:["LS Cream of Turkey Soup","Soda Crackers","Tuna Salad on Wheat","Relish Plate","Pineapple Slices","Coffee"],slot2:["Grilled Cheese on Wheat","Caesar Salad","Margarine","Lemon Mousse","2% Milk","Hot Tea"]},mainMeal:{day:"Friday",slot1:["Liver & Onions","Seasoned Green Peas","Whipped Potatoes","Margarine","Banana Cake","Coffee","Wheat Roll"],slot2:["Herb Baked","Chicken Breast","Squash Medley","Roasted New Potatoes","Mixed Berries","2% Milk","Hot Tea"],}},
  {breakfast:{day:"Saturday",slot1:["Cranberry Juice","Cream of Wheat","Hard Boiled Egg","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Stewed Prunes","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]},lightMeal:{day:"Saturday",slot1:["Soda Crackers","Chicken Noodle Soup","Egg Salad Plate","Beet & Onion Salad","Whole Wheat Bread","Margarine","Chilled Apple Slices","Coffee"],slot2:["Pork Pepper &","Onion Panini","Mixed Green","Salad w/Dressing","Creme Caramel","2% Milk","Hot Tea"]},mainMeal:{day:"Saturday",slot1:["Scalloped Turkey","Buttered Corn","Herb Mashed Potatoes","Margarine","Peanut Butter","Bar Coffee","White Roll"],slot2:["Italian Baked","Fish","Sauteed Spinach","Garlic Noodles","Citrus Fruit","Medley","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Sunday",slot1:["Pineapple Juice","Cinnamon","Oatmeal","Bacon","Scrambled Eggs","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Orange Juice","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]},lightMeal :{day:"Sunday",slot1:["Soda Crackers","French Onion Soup","Grilled Chicken","Sandwich",'Tomato Salad',"Fresh Watermelon","Coffee"],slot2:["Cheese Baked","Ziti","Romaine & Onion Salad","Bread Stick","Margarine","Banana Pudding","2% Milk","Hot Tea"]},mainMeal:{day:"Sunday",slot1:["Braised Beef Brisket","Baby Carrots","Oven-browned Potatoes","Margarine","Blueberry Crumble","Coffee","Wheat Roll"],slot2:["Honey Mustard","Pork Bites Buttered"," Red Cabbage","Chilled Pear Halves","2% Milk","Hot Tea"]}},
])
const [week4Data] = useState([{breakfast:{day:"Monday",slot1:["Grape Juice","Cream of Wheat","Cheddar Cheese","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Orange Juice","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]}, lightMeal:{day:"Monday",slot1:["Soda Crackers","LS Veggie","Florentine Soup","Ham & Potato Casserole","Cauliflower","Wheat Roll","Margarine","Peach Halves","Coffee"],slot2:["Turkey Club Sandwich on Wheat","Tossed Salad /w Dressing","Tropical Fruit Chiffon","2% Milk","Hot Tea"]},mainMeal:{day:"Monday",slot1:["Pasta Primavera","Spinach Salad","Margarine","Boston Cream Pie","Coffee","Whole Wheat Bread"],slot2:["Chili Con Carne","Niagara Mix Vegetables","Strawberries & Topping","2% Milk","Hot Tea","Whole Wheat Dinner Roll"]} },
  {breakfast:{day:"Tuesday",slot1:["Apple Juice","Oatmeal","Poached Egg","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Fresh Banana","Assorted Cold Cereal","Peanut Butter","Whole White Toast","Hot Tea"]}, lightMeal:{day:"Tuesday",slot1:["Soda Crackers","LS Vegetable","Rice Soup","Cold Cut Sandwich","Mixed Green Salad w/Dressing","Mango","Coffee"],slot2:["Fish Cakes","Triple Bean Salad","Whole Wheat Bread","Margarine","Baked Custard","2% Milk","Hot Tea"]},mainMeal:{day:"Tuesday",slot1:["Roast Chicken","Steamed Broccoli","Chive Whipped Potatoes","Margarine","Black Forest Cake","Coffee","Wheat Roll"],slot2:["Sweet-n-Sour","Pork Chop Buttered","Brussels Sprouts","Parslied Potatoes","Cinnamon","Applesauce","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Wednesday",slot1:["Pineapple Juice","Cream of Wheat","Cottage Cheese","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Orange Juice","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]}, lightMeal:{day:"Wednesday", slot1:["Soda Crackers","Cream Broccoli Soup","Sliced Turkey Plate","Tomato & Onion","Salad","Wheat Roll","Margarine","Fruit Cocktail","Coffee"],slot2:["Wieners & Beans","Cucumber Slices","Toast Points","Cherry Gelatin w/Whip","2% Milk","Hot Tea"]},mainMeal:{day:"Wednesday",slot1:["Salisbury Steak & Gravy Cauliflower & Peppers","Mashed Potatoes","Margarine","Lemon Tart","Coffee"],slot2:["Whole Wheat Bread","Egg Foo Yung","Oriental","Vegetables","Fried Rice","Mandarin","Oranges","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Thursday",slot1:["Prune Juice","Cinnamon","Oatmeal","Hard Boiled Egg","Whole Wheat Toast","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Orange Sections","Assorted Cold Cereal","Peanut Butter","White Toast","Hot Tea"]}, lightMeal:{day:"Thursday",slot1:["Tomato Soup","Soda Crackers","Grilled Cheese on Wheat", "Marinated Carrots","Wheat Roll","Margarine","Pineapple Tidbits","Coffee"],slot2:["Chunky Chicken Salad Plate","Mixed Greens Salad Strawberry Ice Cream","2% Milk","Hot Tea"]},mainMeal:{day:"Thursday",slot1:["Glazed Ham Buttered Corn","Scalloped Potatoes","Margarine","Date Square","Coffee","White Roll"],slot2:["Baked Haddock","Grilled Zucchini","Paprika Potatoes","Chilled Apricots","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Friday",slot1:["Grape Juice","Cream of Wheat","French Toast","Margarine","Syrup","2% Milk","Coffee"],slot2:["Orange Juice","Assorted Cold Cereal","Peanut Butter","Whole Wheat Toast","White Toast","Jelly / Jam","Hot Tea"]}, lightMeal:{day:"Friday",slot1:["LS Turkey","Veg Soup","Soda Crackers","Shrimp Creole","Seasoned Green Peas","Whole Wheat Bread","Fluffy Rice","Margarine","Melon Slices","Coffee"],slot2:["Corned Beef on Wheat","Marinated Mushrooms","Vanilla Mousse","2% Milk","Hot Tea"]},mainMeal:{day:"Friday",slot1:["Lamb Stew & Vegetables", "Wax Beans & Peppers","Parmesan","Potatoes","Margarine","Macaroon Madness Bar","Coffee","Wheat Roll"],slot2:["Pork Roast","Seasoned Spinach","Mashed Potatoes","Fruit Cocktail","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Saturday",slot1:["Orange Juice","Oatmeal","Vanilla Yogurt","Bran Muffin","Margarine","Jelly / Jam","2% Milk","Coffee"],slot2:["Stewed Prunes","Assorted Cold Cereal","Peanut Butter","White/Wheat Toast","Hot Tea"]},lightMeal:{day:"Saturday",slot1:["LS Italian","Wedding Soup Soda Crackers Salami On Wheat w/Pickles","Chickpea Salad","Blushing Pears","Coffee"],slot2:["Cheese Pizza","Caesar Salad","Whole Wheat Bread","Margarine","Raspberry","Sherbet","2% Milk","Hot Tea"]},mainMeal:{day:"Saturday",slot1:["Lemon Pepper","Chicken Leg","Green Beans","Oregano","Roasted Red Skin Potatoes","Margarine","Blueberry","Crumble","Coffee","Rye Bread"],slot2:["Beef Shepherd’s Pie","Sliced Beets","German Potato Salad","Fresh Apple Slices","2% Milk","Hot Tea"]}},
  {breakfast:{day:"Sunday",slot1:["Cranberry Juice","Cream of Wheat","Bacon","Scrambled Eggs","Whole Wheat Toast","Margarine","2% Milk","Coffee"],slot2:["Orange Juice","Assorted Cold Cereal","Peanut Butter","White Toast","Jelly / Jam","Hot Tea"]},lightMeal :{day:"Sunday",slot1:["LS Chicken","Noodle Soup","Soda Crackers","Pork Pot Pie Stewed","Tomatoes Garlic Toast","Margarine","Fresh Grapes","Coffee"],slot2:["Salmon Salad on Wheat","Creamy Coleslaw","Chocolate Pudding","2% Milk","Hot Tea"]},mainMeal:{day:"Sunday",slot1:["Roast Turkey Breast","Glazed Carrots","Dijon Mashed Potatoes","Margarine","Peach Pie Slice","Coffee","Wheat Roll"],slot2:["Beef Tips in Gravy","Calico Corn","Potato Pancakes","Chilled Plums",'2% Milk',"Hot Tea"]}},
])
useEffect(() => {
  switch (menuTab) {
    case 0:
      setActWeek(week1Data)
      break;
    case 1:
      setActWeek(week2Data); 
      break;
    case 2:
      setActWeek(week3Data); 
      break;  
    case 3:
      setActWeek(week4Data); 
      break;  
    default:
      break;
  }
}, [menuTab])

  return (
    <main style={{background:"#fff"}}>
    <Header/>
    <TopAbstract/>
       <div id="menuBg">
        <Container>
        <Typography sx={{padding:"10px",border:"10px", fontSize:{xs:"20px",md:"30px"},fontFamily:'Courgette',color:"blueviolet"}} variant="h4">Sample Menu</Typography>
        <Button
            size="small"
            endIcon={ <FcInternal  />}
            variant="contained"
            href="https://res.cloudinary.com/oasismanor/image/upload/v1704185736/oasis%20Web%20asset/zno1fkslz1rampmdjxee.pdf"
          >
            Download Full Menu
          
          </Button>
        </Container>
       </div>
       <Container>
       <Tabs value={menuTab} onChange={(e,v)=>setMenutab(v)} aria-label="Menu Tab">
        {allWeek.map((w,i)=><Tab key={i} value={i} label={w}/>)}
        </Tabs>
        <br/> 
        <Grid container>
          <Grid item xs={12}> <Divider><Typography color="darkcyan" sx={{fontFamily:'Courgette',fontSize:{xs:"22px",md:"24px"}}}>Breakfast</Typography> </Divider> </Grid>
          {actWeekData.map((m,i)=> <Grid key={i} item xs={12} md={1.71} sx={{border:"1px solid #c2c2c2", minHeight:"270px"}}>
          <div style={{background:"#85d7db"}}> <Typography align="center">{m.breakfast.day}</Typography> </div>
          <ul style={{listStyle:"none", padding:"8px 4px 4px 8px"}}>
            {m.breakfast.slot1.map((l,j)=> <li key={j}><Typography color="black" variant="body2">{l} </Typography> </li> )} <Divider sx={{marginTop:"5px",marginBottom:"5px"}}/> 
            {m.breakfast.slot2.map((l,j)=> <li key={j}><Typography color="black" variant="body2">{l} </Typography> </li> )}
            </ul>
             </Grid>)}
            <Grid item xs={12}><br/> </Grid>
            <Grid item xs={12}> <Divider><Typography color="forestgreen" sx={{fontFamily:'Courgette',fontSize:{xs:"22px",md:"24px"}}}>Light Meal</Typography> </Divider> </Grid>
             {actWeekData.map((m,i)=> <Grid key={i} item xs={12} md={1.71} sx={{border:"1px solid #c2c2c2",minHeight:"270px"}}>
            <div style={{background:"#62f7a3"}}> <Typography align="center">{m.lightMeal.day}</Typography> </div>
            <ul style={{listStyle:"none", padding:"8px 4px 4px 8px"}}>
            {m.lightMeal.slot1.map((l,j)=> <li key={j}><Typography color="black" variant="body2">{l} </Typography> </li> )} <Divider sx={{marginTop:"5px",marginBottom:"5px"}}/> 
            {m.lightMeal.slot2.map((l,j)=> <li key={j}><Typography color="black" variant="body2">{l} </Typography> </li> )}
            </ul>
             </Grid>)}
             <Grid item xs={12}><br/> </Grid>
            <Grid item xs={12}> <Divider><Typography color="green" sx={{fontFamily:'Courgette',fontSize:{xs:"22px",md:"24px"}}}>Main Meal</Typography> </Divider> </Grid>
             {actWeekData.map((m,i)=> <Grid key={i} item xs={12} md={1.71} sx={{border:"1px solid #c2c2c2", minHeight:"270px"}}>
            <div style={{background:"#08ce22"}}> <Typography align="center">{m.mainMeal.day}</Typography> </div>
            <ul style={{listStyle:"none", padding:"8px 4px 4px 8px"}}>
            {m.mainMeal.slot1.map((l,j)=> <li key={j}><Typography color="black" variant="body2">{l} </Typography> </li> )} <Divider sx={{marginTop:"5px",marginBottom:"5px"}}/> 
            {m.mainMeal.slot2.map((l,j)=> <li key={j}><Typography color="black" variant="body2">{l} </Typography> </li> )}
            </ul>
             </Grid>)}
        </Grid>
        <br/>
        <center>  <Button
            size="small"
            endIcon={ <FcInternal  />}
            href="https://res.cloudinary.com/oasismanor/image/upload/v1704185736/oasis%20Web%20asset/zno1fkslz1rampmdjxee.pdf"
            variant="outlined"
          >
            Download Full Menu
          
          </Button></center>
      
          <br/>
        <MobileStepper
        variant="text"
        steps={allWeek.length}
        position="static"
        activeStep={menuTab}
        nextButton={
          <Button
            size="small"
            onClick={()=>setMenutab(e=>e+1)}
            endIcon={ <FcNext />}
            disabled={menuTab === allWeek.length - 1}
          >
            Next Week
          
          </Button>
        }
        backButton={
          <Button size="small" startIcon={<FcPrevious />}  onClick={()=>setMenutab(e=>e-1)} disabled={menuTab === 0}>
          
            Previous Week
          </Button>
        }
      />


        </Container>
        
    <Footer/>
    </main>
  )
}



function MenuView() {
  return (
    <div>page</div>
  )
}


export default SimpleMenu