// wise fukc tracker
import React, { useEffect } from "react";

const Sub = () => {
    let WDOT = window.WDOT;

    useEffect(() => {
        let screen = {};
        screen["page_id"] = "Sub";
        WDOT.logScreen(screen);
    }, []);

    console.log("서부 페이지 클릭했슈?")
    return (
        <div className='sibulmandu' style={{ background: 'blue' }}>
            <h2 style={{ color: 'pink' }}>こんにちは嫌いな人</h2>
        </div>
    )
}

export default Sub;