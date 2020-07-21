import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        fetchAdvice();
    }, []);

    const fetchAdvice = () => {
        axios
            .get(`https://api.adviceslip.com/advice`)
            .then((response) => {
                const { advice } = response.data.slip;
                setAdvice(advice);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="app">
            <div className="app__card">
                <h1 className="app__heading">{advice}</h1>
                <button className="app__button" onClick={fetchAdvice}>
                  <span>GIVE ME ADVICE</span>
                </button>
            </div>
        </div>
    );
};

export default App;
