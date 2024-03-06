import React, { useState, useId } from "react";

//? Components
import Header from "../../components/Header/Header";
import ElementsSlider from "../../components/Sliders/ElementsSlider";
import TrendBooksSlider from "../../components/Sliders/TrendBooksSlider";
import ProductsSlider from "../../components/Sliders/ProductsSlider";

export default function Main() {
  //? States
  const [mainCategories, setMainCategories] = useState([
    { id: useId(), title: `All`, path: "/" },
    { id: useId(), title: `Free`, path: "/free" },
    { id: useId(), title: `Premium`, path: "/premium" },
    { id: useId(), title: `Printed Books`, path: "/printed-book" },
    { id: useId(), title: `Audio Books`, path: "/audio-books" },
    { id: useId(), title: `Kids`, path: "/kids" },
  ]);

  return (
    <>
      <Header />
      {/* Site Main Categories */}
      <ElementsSlider elemItems={mainCategories} />
      {/* TrendBooks Slider */}
      <TrendBooksSlider />
      {/* Product Sliders */}
      <ProductsSlider />
      <ProductsSlider />
      <ProductsSlider />
    </>
  );
}
