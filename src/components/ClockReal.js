import React, { useEffect, useState } from 'react'

function ClockReal() {
  const[time, setTime]= useState(new Date());
  useEffect(()=>{
    const intervalID = setInterval(()=>{
      setTime(new Date());},1000);
      return () => {
        clearInterval(intervalID);
      };
  }, []);
  
  const hours= time.getHours();
  const minutes= time.getMinutes();
  const seconds= time.getSeconds();
  const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div>
      {clockStr}
    </div>
  )
}
export default ClockReal