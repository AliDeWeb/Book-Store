import React, { useState, useId } from "react";

//? Components
import Header from "../../components/Header/Header";
import ElementsSlider from "../../components/Sliders/ElementsSlider";
import TrendBooksSlider from "../../components/Sliders/TrendBooksSlider";
import ProductsSlider from "../../components/Sliders/ProductsSlider";

export default function Main() {
  //? States
  const [mainCategoriesState, setMainCategoriesState] = useState([
    { id: useId(), title: `All`, path: "/" },
    { id: useId(), title: `Free`, path: "/free" },
    { id: useId(), title: `Premium`, path: "/premium" },
    { id: useId(), title: `Printed Books`, path: "/printed-book" },
    { id: useId(), title: `Audio Books`, path: "/audio-books" },
    { id: useId(), title: `Kids`, path: "/kids" },
  ]);
  const [trendBooksState, setTrendBooksState] = useState([
    {
      id: useId(),
      title: `The Lord of the rings`,
      price: 20,
      path: `${useId()}`,
      author: "John Amor",
    },
    {
      id: useId(),
      title: `Harry potter`,
      price: 19,
      path: `${useId()}`,
      author: "Carol state",
    },
    {
      id: useId(),
      title: `after love`,
      price: 0.99,
      path: `${useId()}`,
      author: "Rick rise",
    },
    {
      id: useId(),
      title: `houseless man`,
      price: 290.36,
      path: `${useId()}`,
      author: "lee chan",
    },
    {
      id: useId(),
      title: `A Fraction of the Whole`,
      price: 156.52,
      path: `${useId()}`,
      author: "toles ton",
    },
    {
      id: useId(),
      title: `The Gambler`,
      price: 10.2,
      path: `${useId()}`,
      author: "shane dicxon",
    },
  ]);
  const [audioBooksState, setAudioBooksStates] = useState([
    {
      title: "Refined Granite Gloves",
      author: "Geraldine Kris",
      price: "318.00",
      id: "1",
    },
    {
      title: "Luxurious Steel Table",
      author: "Harold Langosh",
      price: "456.00",
      id: "2",
    },
    {
      title: "Handcrafted Granite Ball",
      author: "Helen Kessler",
      price: "312.00",
      id: "3",
    },
    {
      title: "Refined Bronze Car",
      author: "Laurence Brekke",
      price: "807.00",
      id: "4",
    },
    {
      title: "Recycled Steel Chicken",
      author: "Melanie MacGyver",
      price: "960.00",
      id: "5",
    },
    {
      title: "Tasty Fresh Soap",
      author: "Francis Mann",
      price: "798.00",
      id: "6",
    },
    {
      title: "Gorgeous Granite Cheese",
      author: "Luis O'Reilly",
      price: "878.00",
      id: "7",
    },
    {
      title: "Gorgeous Wooden Salad",
      author: "Micheal Metz",
      price: "828.00",
      id: "8",
    },
    {
      title: "Gorgeous Bronze Shoes",
      author: "Dewey Ryan Jr.",
      price: "481.00",
      id: "9",
    },
    {
      title: "Licensed Wooden Salad",
      author: "Edmund Sipes",
      price: "257.00",
      id: "10",
    },
    {
      title: "Elegant Metal Ball",
      author: "Jason Miller",
      price: "311.00",
      id: "11",
    },
    {
      title: "Refined Metal Shoes",
      author: "Clara Hudson",
      price: "822.00",
      id: "12",
    },
    {
      title: "Oriental Metal Chicken",
      author: "Paulette Roob",
      price: "485.00",
      id: "13",
    },
    {
      title: "Unbranded Frozen Fish",
      author: "Sonya Von",
      price: "146.00",
      id: "14",
    },
    {
      title: "Sleek Rubber Chair",
      author: "Clifford Herman",
      price: "951.00",
      id: "15",
    },
    {
      title: "Oriental Metal Pizza",
      author: "Brandy Bednar",
      price: "734.00",
      id: "16",
    },
    {
      title: "Ergonomic Frozen Bacon",
      author: "Ms. Nicole Auer",
      price: "295.00",
      id: "17",
    },
    {
      title: "Bespoke Frozen Bacon",
      author: "Alexandra Nicolas",
      price: "328.00",
      id: "18",
    },
    {
      title: "Refined Concrete Chicken",
      author: "Dorothy Bayer",
      price: "167.00",
      id: "19",
    },
    {
      title: "Intelligent Bronze Table",
      author: "Anna Kreiger",
      price: "1.00",
      id: "20",
    },
    {
      title: "Oriental Steel Sausages",
      author: "Pearl Larkin",
      price: "225.00",
      id: "21",
    },
    {
      title: "Oriental Wooden Shirt",
      author: "Neal Mayer",
      price: "273.00",
      id: "22",
    },
    {
      title: "Handmade Wooden Mouse",
      author: "Abraham Hilll",
      price: "82.00",
      id: "23",
    },
    {
      title: "Fantastic Metal Salad",
      author: "Tonya Kub",
      price: "561.00",
      id: "24",
    },
    {
      title: "Electronic Frozen Pizza",
      author: "Chad Daniel",
      price: "700.00",
      id: "25",
    },
  ]);

  return (
    <div>
      <Header />
      {/* Site Main Categories */}
      <ElementsSlider elemItems={mainCategoriesState} />
      {/* TrendBooks Slider */}
      <TrendBooksSlider trends={trendBooksState} />
      {/* Product Sliders */}
      <ProductsSlider
        sectionTitle={`Audio Books`}
        productsArr={audioBooksState}
      />
      <ProductsSlider
        sectionTitle={`Free Books`}
        productsArr={audioBooksState}
      />
      <ProductsSlider
        sectionTitle={`Premium Books`}
        productsArr={audioBooksState}
      />
    </div>
  );
}
