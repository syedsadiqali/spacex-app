import React from "react";
import LaunchCard from "./launchCard";

export default function LaunchesList(props) {
  return props.loading ? (
    <div className="loader"></div>
  ) : (
    <div className="custom-row">
      {props.launches.length > 0 ? (
        props.launches.map((launch) => (
          <LaunchCard key={launch.flightNumber} launch={launch} />
        ))
      ) : (
        <p className="no-launches">dang... no launches for your query...</p>
      )}
    </div>
  );
}
