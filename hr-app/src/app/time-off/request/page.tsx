'use client';
import { MdOutlineDriveFolderUpload } from 'react-icons/md';
import { PiClockCountdownDuotone } from 'react-icons/pi';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { IoCalendarOutline } from 'react-icons/io5';
import { PiListPlusDuotone } from 'react-icons/pi';
import HeaderTitle from '@/components/HeaderTitle';
export default function Page() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <>
      <HeaderTitle title='Request Time Off' />

      {/* Form Request Time Off */}
      <div className='px-4 py-2'>
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
        <fieldset className='flex items-center gap-2 py-2 border-b-1 border-gray-300 mt-1'>
          <legend className='font-bold text-xs text-gray-500'>Upload File Evidence</legend>
          <MdOutlineDriveFolderUpload className='text-2xl text-gray-500' />
          <input
            type='file'
            className='file-input w-full'
          />
        </fieldset>
      </div>
      <div className='px-4 py-3 w-full border-gray-200 fixed bottom-0 left-0 right-0 max-w-md mx-auto'>
        <button className='btn bg-green-500  hover:bg-green-600 text-white w-full'>
          Submit Request
        </button>
      </div>
    </>
  );
}
