import React, { useEffect, useState } from 'react'

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    if (isChecked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isChecked]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <span className='label flex items-center text-base font-bold text-black dark:text-transparent'>
          Light
        </span>
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              isChecked ? 'translate-x-[28px]' : ''
            }`}
          ></span>
        </span>
        <span className='label flex items-center text-base font-bold text-transparent dark:text-white'>
          Dark
        </span>
      </label>
    </>
  )
}

export default ToggleButton
