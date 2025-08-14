'use client';

import HeaderTitle from '@/components/HeaderTitle';
import { PiClockCountdownDuotone } from 'react-icons/pi';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { IoCalendarOutline } from 'react-icons/io5';
import { PiListPlusDuotone } from 'react-icons/pi';
export default function Page() {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <div>
      <HeaderTitle title='Time Off Detail' />

      {/* Form Request Time Off */}
      <div className='px-4 py-2'>
        <fieldset>
          <legend className='font-bold text-gray-500'>Evidence</legend>
          <div className='grid grid-cols-3 gap-3'>
            <div className='border border-gray-300 rounded-md h-20 flex justify-center items-center'>
              <p className='text-xs'>Image-01</p>
            </div>
            <div className='border border-gray-300 rounded-md h-20 flex justify-center items-center'>
              <p className='text-xs'>Image-02</p>
            </div>
            <div className='border border-gray-300 rounded-md h-20 flex justify-center items-center'>
              <p className='text-xs'>Image-03</p>
            </div>
          </div>
        </fieldset>
        <fieldset className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
          <PiClockCountdownDuotone className='text-2xl text-gray-500' />
          <select
            defaultValue='Pick a color'
            className='select w-full bg-gray-100 text-gray-500 border-none'
          >
            <option>Time off type</option>
          </select>
        </fieldset>
        <fieldset className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
          <IoCalendarOutline className='text-2xl text-gray-500' />
          <button
            popoverTarget='rdp-popover'
            className='input bg-gray-100 w-full border-none text-gray-500'
            style={{ anchorName: '--rdp' } as React.CSSProperties}
          >
            {date ? date.toLocaleDateString() : 'Select date'}
          </button>
          <div
            popover='auto'
            id='rdp-popover'
            className='dropdown mt-3'
            style={{ positionAnchor: '--rdp' } as React.CSSProperties}
          >
            <DayPicker
              className='react-day-picker'
              mode='single'
              selected={date}
              onSelect={setDate}
            />
          </div>
        </fieldset>
        <fieldset className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
          <PiListPlusDuotone className='text-2xl text-gray-500' />
          <input
            type='text'
            placeholder='Reason'
            className='input border-none text-gray-500 bg-gray-100'
          />
        </fieldset>
      </div>
      <div className='px-4 py-3 w-full border-gray-200 fixed bottom-0 left-0 right-0 max-w-md mx-auto'>
        <button className='btn bg-green-500  hover:bg-green-600 text-white w-full'>
          Edit Request Time Off
        </button>
      </div>
    </div>
  );
}
