import React, { useEffect, useState } from 'react'

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(() =>{
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (isChecked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', true);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', false);
    }
  }, [isChecked]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <label className='fixed top-5 right-5 themeSwitcherTwo inline-flex select-none items-center'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <span className='hidden label md:flex items-center text-base font-bold text-white dark:text-transparent'>
          Light
        </span>
        <span
          className={`cursor-pointer slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-slate-900' : 'bg-slate-50'
          }`}
        >
          <span
            className={`cursor-pointer dot h-6 w-6 rounded-full bg-violet-400 duration-200 ${
              isChecked ? 'translate-x-[28px]' : ''
            }`}
          ></span>
        </span>
        <span className='hidden label md:flex items-center text-base font-bold text-transparent dark:text-white'>
          Dark
        </span>
      </label>
    </>
  )
}

export default ToggleButton
