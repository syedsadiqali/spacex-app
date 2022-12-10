import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apiUtils from "../utils/apiUtils";
import Header from "./Header";
import Sidebar from "./Sidebar";

import "./Home.css";
import Footer from "./Footer";
import LaunchesList from "./launchesList";

export default function Home() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  let navigate = useNavigate();
  
  useEffect(() => {
    const fetchLaunches = async () => {
      const res = await apiUtils.fetchLaunches(location.search);
      setLaunches(res);
      setLoading(false);
    };

    fetchLaunches();
  }, [location.search]);

  const handleUpdateSearchString = (searchString) => {
    setLoading(true);
    navigate(searchString);
  };

  return (
    <div className="custom-container home">
      <div className="custom-row max-width-xl">
        <Header />
      </div>
      <div className="custom-row max-width-xl">
        <div className="sidebar-col">
          <Sidebar updateSearchString={handleUpdateSearchString} />
        </div>
        <div className="main-area-col ">
          <LaunchesList loading={loading} launches={launches} />
        </div>
      </div>
      <div className="custom-row max-width-xl">
        <Footer />
      </div>
    </div>
  );
}
