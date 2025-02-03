import React, { useEffect, useState } from 'react';
import Matchcard from "../MatchCard/Match"; 

export default function Home() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  useEffect(() => {
    if(scoreA<10 && scoreB<10) {
      return;
    }
    if(scoreA === 10){
      alert("team A wins!");
    }
    if(scoreB === 10){
      alert("team A wins!");
    }
  }, [scoreA, scoreB]);


  return (
    <div className="bg-red-300 min-h-screen flex flex-col items-center justify-center p-10">
    <h1 className="text-center py-6 md:py-12 text-4xl md:text-6xl font-extrabold text-red-600 bg-white shadow-lg border-4 border-red-400 border-solid rounded-xl px-8 transition duration-300 hover:scale-105">🏆 Match Tracker ⚽</h1>

    <div className="flex flex-col md:flex-row justify-center items-center md:justify-around md:mt-10 mt-5 w-[800px] bg-gray-100 rounded-lg p-5">
      <Matchcard
        score={scoreA}
        teamName="Team A"
        increaseScore={() => setScoreA(scoreA + 1)}
        decreaseScore={() => setScoreA(scoreA - 1)}
      />
      <Matchcard
        score={scoreB}
        teamName="Team B"
        increaseScore={() => setScoreB(scoreB + 1)}
        decreaseScore={() => setScoreB(scoreB - 1)}
      />
    </div>

    <div className='flex justify-center '>
        <button className='bg-red-500 text-white py-2 px-4 my-8 rounded-md text-xl shadow-md hover:bg-red-700 cursor-pointer' onClick={()=>{setScoreA(0);setScoreB(0);}}>
          Reset Scores
        </button>
      </div>
    </div>	
  )
}
