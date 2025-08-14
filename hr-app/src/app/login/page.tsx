import { PiIdentificationCardDuotone } from 'react-icons/pi';
import { PiPasswordDuotone } from 'react-icons/pi';

export default function Page() {
  return (
    <>
      <div className='p-10'>
        <div className='text-black'>
          <h1 className='text-3xl'>Welcome Back</h1>
          <p className='font-bold text-gray-500'>
            Your day starts here — let’s make it productive!
          </p>
        </div>

        <div className='mt-3'>
          <div className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
            <PiIdentificationCardDuotone className='text-2xl text-gray-500' />
            <input
              type='text'
              placeholder='Email or Username'
              className='input border-none text-gray-500 bg-gray-100 w-full focus:outline-none focus:ring-0'
            />
          </div>
          <div className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
            <PiPasswordDuotone className='text-2xl text-gray-500' />
            <input
              type='text'
              placeholder='Password'
              className='input border-none text-gray-500 bg-gray-100 w-full focus:outline-none focus:ring-0'
            />
          </div>
          <button className='btn bg-green-500  hover:bg-green-600 text-white w-full mt-5'>
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}
