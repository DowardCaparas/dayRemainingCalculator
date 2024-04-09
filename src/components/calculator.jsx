import React, { useState } from 'react';

const Hero = () => {
  const [remainingDays, setRemainingDays] = useState('');
  const [subscriptionValue, setSubscriptionValue] = useState('30');

  const handleSubscriptionChange = (event) => {
    setSubscriptionValue(event.target.value);
  };

  const reset = () => {
    document.getElementById('dateStarted').value = ''; // Clear Date Started input
    document.getElementById('dateReported').value = ''; // Clear Date Reported input
    setRemainingDays(''); // Reset remaining days state
  };

  const calculateRemainingDays = () => {
    const dateStarted = new Date(document.getElementById('dateStarted').value);
    const dateReported = new Date(document.getElementById('dateReported').value);

    const diffTime = Math.abs(dateReported - dateStarted);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    setRemainingDays(diffDays);
  };

  return (
    <section className="flex justify-center items-center h-screen max-sm:p-5">

      <div className="bg-white max-w-md rounded-md flex flex-col p-5 justify-center gap-2 ">
        <h1 className='font-medium mb-2'>Gawa ng pogi para kay Sophia Joyce Ganda</h1>

        <div className="flex justify-between items-center gap-4">

          {/* Days value */}
          <span>Days:</span>
          <input type="text" id="days" value={subscriptionValue} className="bg-slate-200 rounded p-2 w-1/2" readOnly />
          <span>Subscription:</span>

          {/* Subscription */}
          <select name="days" id="subscription" className="rounded p-3 w-1/2 cursor-pointer" value={subscriptionValue} onChange={handleSubscriptionChange}>
            <option value="30">1 month</option>
            <option value="60">2 months</option>
            <option value="90">3 months</option>
            <option value="120">4 months</option>
            <option value="150">5 months</option>
          </select>
        </div>

        {/* Date Started */}
        <span className='text-sm mt-3'>Date Started:</span>
        <input type="date" id="dateStarted" className="bg-slate-200 rounded p-2 mb-6" required/>

        {/* Date Reported */}
        <span className='text-sm mt-3'>Date Reported:</span>
        <input type="date" id="dateReported" className="bg-slate-200 rounded p-2" required/>

        {/*Remaining days */}
        <h2 id="remainingdaystxt" className="py-4 font-semibold">
          Remaining days: {subscriptionValue - remainingDays}
        </h2>

        {/* Day used */}
        <h2 id="remainingdaystxt" className="py-4 font-semibold">
          Day used: {remainingDays}
        </h2>

        <div className='font-bold flex flex-col text-gray-900 gap-2'>

          {/* Calculate Remaining days */}
          <button id="calcDays" className="bg-green-400 rounded p-2 hover:bg-green-300 active:bg-green-500" onClick={calculateRemainingDays}>
            Calculate remaining days
          </button>

          {/*Set value to default */}
          <button className='bg-red-400 rounded p-2 hover:bg-red-300 active:bg-red-500' onClick={reset}>
            Reset
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
