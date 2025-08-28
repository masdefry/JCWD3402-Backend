'use client';
import { MdOutlineDriveFolderUpload } from 'react-icons/md';
import { PiClockCountdownDuotone } from 'react-icons/pi';
import { useState } from 'react';
import { DateRange, DayPicker } from 'react-day-picker';
import { IoCalendarOutline } from 'react-icons/io5';
import { PiListPlusDuotone } from 'react-icons/pi';
import HeaderTitle from '@/components/HeaderTitle';
import { useFormik } from 'formik';
import axiosInstance from '@/utils/axiosInstance';
import useAuthStore from '@/stores/authStore';
export default function Page() {
  const { token } = useAuthStore();
  const onHandleLeaveRequest = async ({
    startDate,
    endDate,
    reason,
    files,
  }: any) => {
    try {
      console.log(files);
      const fd = new FormData();
      fd.append('startDate', startDate);
      fd.append('endDate', endDate);
      fd.append('reason', reason);
      files?.forEach((file: File) => {
        fd.append('evidence', file);
      });

      await axiosInstance.post('/api/time-off/request', fd, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      selectedDate: { from: undefined, to: undefined } as DateRange,
      reason: '',
      files: [],
    },
    onSubmit: ({ selectedDate, reason, files }) => {
      onHandleLeaveRequest({
        startDate: selectedDate?.from,
        endDate: selectedDate?.to,
        reason,
        files,
      });
    },
  });

  return (
    <>
      <HeaderTitle title='Request Time Off' />

      {/* Form Request Time Off */}
      <form
        onSubmit={formik?.handleSubmit}
        className='px-4 py-2'
      >
        <fieldset className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
          <IoCalendarOutline className='text-2xl text-gray-500' />
          <button
            type='button'
            popoverTarget='rdp-popover'
            className='input bg-gray-100 w-full border-none text-gray-500'
            style={{ anchorName: '--rdp' } as React.CSSProperties}
          >
            {formik?.values?.selectedDate?.from
              ? `${formik?.values?.selectedDate?.from?.toLocaleDateString()} - ${formik?.values?.selectedDate?.to?.toLocaleDateString()}`
              : 'Select date'}
          </button>
          <div
            popover='auto'
            id='rdp-popover'
            className='dropdown mt-3'
            style={{ positionAnchor: '--rdp' } as React.CSSProperties}
          >
            <DayPicker
              className='react-day-picker'
              mode='range'
              selected={formik?.values?.selectedDate}
              onSelect={(date) => {
                formik?.setFieldValue('selectedDate', date);
              }}
            />
          </div>
        </fieldset>
        <fieldset className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
          <PiListPlusDuotone className='text-2xl text-gray-500' />
          <input
            name='reason'
            type='text'
            value={formik?.values?.reason}
            onChange={formik?.handleChange}
            placeholder='Reason'
            className='input border-none text-gray-500 bg-gray-100'
          />
        </fieldset>
        <fieldset className='flex items-center gap-2 py-2 border-b-1 border-gray-300 mt-1'>
          <legend className='font-bold text-xs text-gray-500'>
            Upload File Evidence
          </legend>
          <MdOutlineDriveFolderUpload className='text-2xl text-gray-500' />
          <input
            name='files'
            type='file'
            className='file-input w-full'
            multiple
            onChange={(e) => {
              formik?.setFieldValue('files', Array?.from(e.target.files || []));
            }}
          />
        </fieldset>
        <div className='px-4 py-3 w-full border-gray-200 fixed bottom-0 left-0 right-0 max-w-md mx-auto'>
          <button
            type='submit'
            className='btn bg-green-500  hover:bg-green-600 text-white w-full'
          >
            Submit Request
          </button>
        </div>
      </form>
    </>
  );
}
