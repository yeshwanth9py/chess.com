// import React from 'react';
import img from "../assets/chess board.png";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="pt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex justify-center">
            <img src={img} className="max-w-96"/>
          </div>
          <div className="pt-16">
            <div className="flex justify-center">
              <h1 className="text-4xl font-bold text-white">
                Play chess online on #1 Site!!!
              </h1>
            </div>
            <div className="mt-4 flex justify-center">
              <Button onClick={() => navigate("/game")} >Play Online</Button>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Landing