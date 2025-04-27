import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./styles/cstyle.css";
import { FaSearch } from "react-icons/fa";
import ProductCard from './productcard';
import Carousel from "./carousel";
import Catagories from './catagery';

function Homepage() {
  const navigate = useNavigate();
  const [pro, setPro] = useState([]); // Stores all products
  const [searchElement, setSearchElement] = useState(localStorage.getItem("searchElement") || "");
  const [filteredElements, setFilteredElements] = useState([]); // Stores filtered products

  // Function to navigate when a card is clicked
  const handleCardClick = (item) => {
    navigate("/product", { state: item });
  };

  // Fetch product data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://e-commerse-greenhaven.onrender.com/api/v1/get");
        setPro(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Filter products dynamically based on searchElement

  useEffect(() => {
    localStorage.setItem("searchElement", searchElement);
  }, [searchElement]); // Store search term whenever it changes
  
  useEffect(() => {
    const searchValue = searchElement.toLowerCase();
    setFilteredElements(
      pro.filter((item) => 
        item.name?.toLowerCase().includes(searchValue)
      )
    );
  }, [pro, searchElement]);
   // Runs whenever `pro` or `searchElement` changes

  // Listen for `localStorage` updates and update `searchElement`
  useEffect(() => {
    const handleStorageChange = () => {
      setSearchElement(localStorage.getItem("searchElement") || "");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
  
    <div className='search_bar2' id="search_bar_id2">
                    <div className="input_text2">
                      <input type="text" placeholder='search Plants' value={searchElement} onChange={(e)=> setSearchElement(e.target.value)} />
                    </div>
                  <div className='search_button2'>
                      <button ><FaSearch />
                      </button>
                  </div>
          
                </div>
      {/* ✅ Show Default Sections When No Search */}
      <div className="main">

      {searchElement.length <= 0 ? (
        <>
          
          <Catagories />
          <div className="carousel_container">
            <Carousel />
          </div>
          <div className="intro">
            <h2>Plants</h2>
            <p>
              Plants make for the best house companions, suitable for all your moods
              and every aesthetic. Ugaoo brings you the widest variety of plants to
              choose from so you can buy plants online from the comfort of your home!
            </p>
          </div>

          {/* ✅ Show Message if No Products Available */}
          {pro.length === 0 ? (
            <h1 className="home_res">
              No Products found❗{" "}
              <span id="gotocreate">
                <Link to="/create">Create page</Link>
              </span>
            </h1>
          ) : (
            <div className="grid-container">
              {pro.map((item, index) => (
                <div key={index} className="card_container" onClick={() => handleCardClick(item)}>
                  <ProductCard products={item} />
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="grid-container">
          <div className="contains">
            <p className="home_tittle">Search Results</p>
            {filteredElements.length === 0 ? (
              <h1 className="home_res">No matching products found❗</h1>
            ) : (
              <div className="grid-container">
                {filteredElements.map((item, index) => (
                  <div key={index} className="card_container" onClick={() => handleCardClick(item)}>
                    <ProductCard products={item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      </div>
    </>
  );
}

export default Homepage;
