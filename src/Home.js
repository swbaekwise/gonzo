// wise fukc tracker
import React, { useEffect } from "react";
import { WDOTInitialization } from "dop-website-sdk";

const Home = () => {
    useEffect(() => {
        WDOTInitialization.setConfig({
            serviceNumber: 99999,
            dotAccessToken: "Wisetracker access token string",
            combackUserLimitDays: 14,
            dotEndPoint: "The endpoint of data receiving",
            adClkEndPoint: "The endpoint of data receiving",
            includeUrl: "Regular expression of analysis websites",
            excludeUrl: "",
            referrerExpire: 7
        });
        WDOTInitialization.init();
    }, []);

    let WDOT = window.WDOT;

    console.log("호무 페이지 클릭했슈?")
    return (
        <div className='sibulmandu' style={{ background: 'yellow' }}>
            <h2 style={{ color: 'green' }}>こんにちは嫌いな人</h2>
        </div>
    )
}

export default Home;