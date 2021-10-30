import React from "react";

export function numberWithCommas(x) {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}


export function renderChangePercent(percent){
    if (percent > 0) {
        return <span className="percent-raised">{percent}% &uarr;</span>
    } else if (percent < 0) {
        return <span className="percent-fallen">{percent}% &darr;</span>
    } else {
        return <span>{percent}</span>
    }
}

export function handleResponse(response) {
    if(response.ok){
        return response.json();
    }
    return Promise.reject(response);
}
