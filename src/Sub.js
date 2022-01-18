// wise fukc tracker
import React, { useEffect, useState } from "react";
import { Route, Link, Routes, BrowserRouter as Router } from 'react-router-dom'
import Modal from "../src/Modal";

const Sub = (props) => {
    let WDOT = window.WDOT;
    console.log('Sub.js', WDOT);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        try {
            let event = {};
            event["event"] = "w_click_popup";
            event["popup_name"] = "당첨 인원 무제한 커피쿠폰 최대 3장 드려요!";
            event["placement"] = "1";
            if (typeof WDOT != 'undefined') {
                WDOT.logEvent(event);
                console.log(event);
            }
        } catch (e) {
            console.log(e);
            console.log("🔴클릭이벤트 측정 실패")
        } finally {
            setModalOpen(true);
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className='sibulmandu' style={{ background: 'black', padding: '40px' }}>
            <h2 style={{ color: 'pink' }}>こんにちは嫌いな人</h2>
            <div>
                <Link
                    to="/"
                    style={{ textDecoration: 'none', color: 'white', fontSize: "20px" }}
                >home
                </Link>
            </div>
            <br />
            <div>
                <button
                    style={{ background: "pink", fontSize: "20px" }}
                    onClick={openModal}>click!
                </button>
                <Modal open={modalOpen} close={closeModal} header="Modal heading">
                    <main> {props.children} </main>
                </Modal>
            </div>
        </div>
    )
}

export default Sub;