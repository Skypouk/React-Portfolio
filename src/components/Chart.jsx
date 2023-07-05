import React, { useState, useEffect } from 'react';


const Chart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/Skypouk');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);


  if (!data) {
    return (
      <div className="pt-10">
        <div className="h-10 w-full bg-teal-500 rounded-xl border-2 border-teal-700 flex items-center justify-center text-bold text-white">
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
          Failed to Load stats from leetcode...
        </div>
      </div>
    );
  }


  const totalSolved = data.totalSolved
  const easyPercentage = ((data.easySolved / totalSolved) * 100).toFixed(1)
  const mediumPercentage = ((data.mediumSolved / totalSolved) * 100).toFixed(1)
  const hardPercentage = ((data.hardSolved / totalSolved) * 100).toFixed(1)

  return (
    <div className="">
    <div className="max-w-[1240px] mx-auto py-5 px-10">
      <div className=" text-gray-500 rounded-xl border-2 border-teal-700 shadow-xl py-5 px-5 w-full">
        <div className="flex w-full">
          <h3 className="text-lg font-semibold leading-tight flex-1">Total Problems Solved</h3>
          <div className="relative h-5 leading-none">
            <button className="text-xl text-gray-500 hover:text-gray-300 h-6 focus:outline-none">
              <i className="mdi mdi-chevron-up"></i>
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden transition-all duration-500">
          <div>
            <div className="pb-4 lg:pb-6">
              <h4 className="text-2xl lg:text-3xl text-teal-500 font-semibold leading-tight inline-block">{totalSolved}</h4>
            </div>
            <div className="pb-4 lg:pb-6">
              <div className="overflow-hidden rounded-full h-3 bg-gray-800 flex transition-all duration-500 w-full">
                <div className="h-full bg-green-500" style={{ width: `${easyPercentage}%` }}></div>
                <div className="h-full bg-blue-500" style={{ width: `${mediumPercentage}%` }}></div>
                <div className="h-full bg-red-500" style={{ width: `${hardPercentage}%` }}></div>
              </div>
            </div>
            <div className="flex -mx-4">
              <div className="w-1/3 px-4">
                <div className="text-sm">
                  <span className="inline-block w-2 h-2 rounded-full mr-1 align-middle bg-green-500">&nbsp;</span>
                  <span className="align-middle">Level Easy</span>
                </div>
                <div className="font-medium text-lg text-teal-500">
                  <span>{easyPercentage}</span>%
                </div>
              </div>
              <div className="w-1/3 px-4 border-l border-gray-700">
                <div className="text-sm">
                  <span className="inline-block w-2 h-2 rounded-full mr-1 align-middle bg-blue-500">&nbsp;</span>
                  <span className="align-middle">Level Medium</span>
                </div>
                <div className="font-medium text-lg text-teal-500">
                  <span>{mediumPercentage}</span>%
                </div>
              </div>
              <div className="w-1/3 px-4 border-l border-gray-700">
                <div className="text-sm">
                  <span className="inline-block w-2 h-2 rounded-full mr-1 align-middle bg-red-500">&nbsp;</span>
                  <span className="align-middle">Level Hard</span>
                </div>
                <div className="font-medium text-lg text-teal-500">
                  <span>{hardPercentage}</span>%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Chart;