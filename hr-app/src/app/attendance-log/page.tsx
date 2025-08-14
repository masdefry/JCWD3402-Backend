'use client';
import HeaderTitle from '@/components/HeaderTitle';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { IoCalendarOutline } from "react-icons/io5";
export default function Page() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <>
      <HeaderTitle title='Attendance Log' />
      <div className='flex mt-3 border-b-1 border-gray-300'>
        <h1 className='flex-1 text-center border-b-3 border-gray-300 pb-1'>
          Logs
        </h1>
        <h1 className='flex-1 text-center'>Attendance</h1>
        <h1 className='flex-1 text-center'>Shift</h1>
      </div>
      <div className='px-4 flex items-center gap-3 mt-3'>
        <IoCalendarOutline className='text-2xl' />
        <button
          popoverTarget='rdp-popover'
          className='input input-border w-full bg-gray-100'
          style={{ anchorName: '--rdp' } as React.CSSProperties}
        >
          {date ? date.toLocaleDateString() : 'July 2025'}
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
      </div>
    </>
  );
}
