import HeaderTitle from '@/components/HeaderTitle';
import {
  PiIdentificationCardDuotone,
  PiPhoneListDuotone,
  PiClockAfternoonDuotone,
  PiUserCircleGearDuotone,
} from 'react-icons/pi';
import { AiTwotoneMail } from 'react-icons/ai';
export default function Page() {
  return (
    <>
      <HeaderTitle title='Register Employee' />

      <div className='p-4'>
        <div className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
          <PiIdentificationCardDuotone className='text-2xl text-gray-500' />
          <input
            type='text'
            placeholder='Full Name'
            className='input border-none text-gray-500 bg-gray-100 w-full focus:outline-none focus:ring-0'
          />
        </div>
        <div className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
          <AiTwotoneMail className='text-2xl text-gray-500' />
          <input
            type='text'
            placeholder='Email'
            className='input border-none text-gray-500 bg-gray-100 w-full focus:outline-none focus:ring-0'
          />
        </div>
        <div className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
          <PiPhoneListDuotone className='text-2xl text-gray-500' />
          <input
            type='text'
            placeholder='Phone Number'
            className='input border-none text-gray-500 bg-gray-100 w-full focus:outline-none focus:ring-0'
          />
        </div>
        <div className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
          <PiClockAfternoonDuotone className='text-2xl text-gray-500' />
          <select className='select focus:outline-none focus:ring-0 bg-gray-100 border-none w-full text-gray-500'>
            <option>Employee Shift</option>
            <option>Shift-01</option>
          </select>
        </div>
        <div className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
          <PiUserCircleGearDuotone className='text-2xl text-gray-500' />
          <select className='select focus:outline-none focus:ring-0 bg-gray-100 border-none w-full text-gray-500'>
            <option>Employee Role</option>
            <option>HR</option>
          </select>
        </div>

        <div className='px-4 py-3 w-full border-gray-200 fixed bottom-0 left-0 right-0 max-w-md mx-auto'>
          <button className='btn bg-green-500  hover:bg-green-600 text-white w-full'>
            Create Employee
          </button>
        </div>
      </div>
    </>
  );
}
