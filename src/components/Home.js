import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import apiUtils from "../utils/apiUtils";
import Header from "./Header";
import Sidebar from "./Sidebar";
import LaunchCard from "./launchCard";

import "./Home.css";
import Footer from "./Footer";

export default function Home() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const history = useHistory();

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
    history.push(searchString);
  };

  return (
    <div
      className="container-fluid home
    "
    >
      <Header />

      <div className="row">
        <div className="col-sm-3 col-md-2">
          <Sidebar updateSearchString={handleUpdateSearchString} />
        </div>
        <div className="col-sm-9 col-md-10 ">
          {loading ? (
            <div className="loader"></div>
          ) : (
            <div className="row">
              {launches.length > 0 ? (
                launches.map((launch) => (
                  <LaunchCard key={launch.flightNumber} launch={launch} />
                ))
              ) : (
                <p className="no-launches">
                  dang... no launches for your query...
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
