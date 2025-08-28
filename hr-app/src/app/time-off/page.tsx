'use client';
import { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { BsArrowRightCircle } from 'react-icons/bs';
import HeaderTitle from '@/components/HeaderTitle';
import Link from 'next/link';
import axiosInstance from '@/utils/axiosInstance';
import useAuthStore from '@/stores/authStore';
export default function Page() {
  const { token } = useAuthStore();
  const [date, setDate] = useState<Date | undefined>();
  const [requestTimeOff, setRequestTimeOff] = useState<any[]>([]);

  const onGetRequestTimeOff = async () => {
    try {
      console.log(token);
      const res = await axiosInstance.get('/api/time-off/request', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res?.data?.data);
      setRequestTimeOff(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) onGetRequestTimeOff();
  }, [token]);

  return (
    <>
      <HeaderTitle title='Time Off' />

      <div className='p-4'>
        <div className='border border-gray-300 bg-gray-200 rounded-md flex flex-col items-center py-1'>
          <h1 className='text-gray-500'>Cuti Tahunan</h1>
          <h1 className='font-bold'>12 Days</h1>
          <p className='text-xs text-blue-500'>View detail</p>
        </div>
        <div className='flex mt-3 border-b-1 border-gray-300'>
          <h1 className='flex-1 text-center border-b-3 border-gray-300 pb-1'>
            Request
          </h1>
          <h1 className='flex-1 text-center'>Delegation</h1>
        </div>
        <button
          popoverTarget='rdp-popover'
          className='input input-border mt-3 w-full'
          style={{ anchorName: '--rdp' } as React.CSSProperties}
        >
          {date ? date.toLocaleDateString() : 'July 2025 - August 2025'}
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
        <div className='mt-3'>
          {requestTimeOff?.map((timeOff: any, index: number) => {
            return (
              <div
                className='flex justify-between items-center py-1 border-b-1 border-gray-300'
                key={index}
              >
                <div>
                  <h1 className='font-bold'>{timeOff?.reason}</h1>
                  <p className='text-xs mt-2'>
                    {timeOff?.startDate} - {timeOff?.endDate}
                  </p>
                  <p className='text-yellow-500 text-xs'>{timeOff?.status}</p>
                  {
                    timeOff?.leave_request_evidences.map((image: any, index: number) => {
                      return(
                        <div key={index}>
                          <img src={image?.image} style={{width: '100px', height: '100px'}} />
                        </div>
                      )
                    })
                  }
                </div>
                <BsArrowRightCircle className='text-xl' />
              </div>
            );
          })}
        </div>
      </div>

      <div className='px-4 py-3 w-full border-gray-200 fixed bottom-0 left-0 right-0 max-w-md mx-auto'>
        <Link href='/time-off/request'>
          <button className='btn bg-green-500  hover:bg-green-600 text-white w-full'>
            Request Time Off
          </button>
        </Link>
      </div>
    </>
  );
}
