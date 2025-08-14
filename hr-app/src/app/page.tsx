import Link from 'next/link';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { PiUserCirclePlusDuotone } from 'react-icons/pi';
import { PiClockCountdownDuotone } from 'react-icons/pi';
import { RiFileList3Line } from 'react-icons/ri';
export default function Home() {
  return (
    <div className='p-4'>
      {/* Header */}
      <div className='text-black'>
        <h1 className='text-2xl'>Good morning,</h1>
        <h1 className='text-2xl font-bold'>Defryan</h1>
        <p>Dont miss your attendance today!</p>
        <div className='bg-green-400 rounded-md mt-3 p-3'>
          <h1 className='text-white'>Shift-01</h1>
          <p className='text-white'>18 July 2025 (09:00 - 18:00)</p>
          <div className='flex gap-3'>
            <button className='flex-1 btn bg-white hover:bg-gray-100 cursor-pointer rounded-md w-full p-2 mt-3'>
              Clock-in
            </button>
            <button className='flex-1 btn bg-white hover:bg-gray-100 cursor-pointer rounded-md w-full p-2 mt-3'>
              Clock-out
            </button>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className='p-4 bg-white rounded-md mt-3'>
        <div className='grid grid-cols-4 gap-5'>
          <Link href='/attendance-log'>
            <div className='col-span-1 space-y-2 flex flex-col items-center'>
              <LiaClipboardListSolid className='text-xl text-green-600' />
              <h1 className='truncate text-xs font-bold'>Attendance</h1>
            </div>
          </Link>
          <Link href='/register-employee'>
            <div className='col-span-1 space-y-2 flex flex-col items-center'>
              <PiUserCirclePlusDuotone className='text-xl text-red-600' />
              <h1 className='text-xs break-words leading-tigh line-clamp-2 font-bold text-center'>
                Register Employee
              </h1>
            </div>
          </Link>
          <Link href='/time-off'>
            <div className='col-span-1 space-y-2 flex flex-col items-center'>
              <PiClockCountdownDuotone className='text-xl text-blue-600' />
              <h1 className='text-xs break-words leading-tigh line-clamp-2 font-bold text-center'>
                Request Time-Off
              </h1>
            </div>
          </Link>
          <div className='col-span-1 space-y-2 flex flex-col items-center'>
            <RiFileList3Line className='text-xl text-blue-600' />
            <h1 className='text-xs break-words leading-tigh line-clamp-2 font-bold text-center'>
              My Payslip
            </h1>
          </div>
        </div>
      </div>

      {/* Announcements */}
      <div className='p-4 bg-white rounded-md mt-3'>
        <div className='flex justify-between pb-3'>
          <h1 className='font-bold'>Announcements</h1>
          <h1 className='text-blue-500'>View all</h1>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex items-center'>
            <h1 className='break-words max-w-[70%]'>
              Libur Lebaran dan Cuti Bersama
            </h1>
            <p className='ml-auto text-xs'>20 Maret 2024</p>
          </div>
          <div className='flex items-center'>
            <h1 className='break-words max-w-[70%]'>Talenta Guideline</h1>
            <p className='ml-auto text-xs'>01 Januari 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
