import React, { Component, useState, useEffect } from 'react'
import TVTuseList from './components/TVTuseList';
import axios from "axios";

export default function App() {
  const [TVTuseList, setTVTuseList] = useState([]);

  const TVTGetstudent = async () => {
    try {
      const response = await axios.get("https://666a5f3e7013419182cf06fd.mockapi.io/api/tvt1/:endpoint");
      setTVTuseList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    TVTGetstudent();
  }, []);

  return (
    <div className='container border mt-5 p-3'>
      <h1 className='text-center my-3'>XỬ LÝ CHỨC NĂNG CỦA -hook -api</h1>
      <hr />
      <TVTuseList renderTVTuseList={TVTuseList} />
    </div>
  )
}