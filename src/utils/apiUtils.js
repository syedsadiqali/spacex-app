// import fetch from "isomorphic-fetch";
import dataUtils from "./dataUtils";

function fetchLaunches(searchString = " ") {
    return fetch( `https://api.spacexdata.com/v3/launches?limit=100&${searchString.slice(1)}` )
        .then( res => res.json( ) )
        .then( res => dataUtils.formatLaunchData(res) );
}

export default {fetchLaunches}
