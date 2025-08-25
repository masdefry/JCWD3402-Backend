'use client';
import HeaderTitle from '@/components/HeaderTitle';
import {
  PiIdentificationCardDuotone,
  PiPhoneListDuotone,
} from 'react-icons/pi';
import {
  PiUserCircleDuotone,
  PiBuildingDuotone,
  PiBagDuotone,
  PiClockUserDuotone,
} from 'react-icons/pi';
import { useFormik } from 'formik';
import { AiTwotoneMail } from 'react-icons/ai';
import axiosInstance from '@/utils/axiosInstance';
import { registerEmployeeValidationSchema } from './_schemas/registerEmployeeValidationSchema';
import useAuthStore from '@/stores/authStore';
import { useState } from 'react';
import withAuthGuard from '@/hoc/authGuard';

function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { token } = useAuthStore();
  const onHandleRegisterEmployee = async ({
    fullName,
    phoneNumber,
    email,
    employmentStatus,
    departmentId,
    positionId,
    workShiftId,
  }: any) => {
    try {
      setIsLoading(true);
      await axiosInstance.post(
        '/api/auth/register',
        {
          fullName,
          phoneNumber,
          email,
          employmentStatus,
          departmentId,
          positionId,
          workShiftId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false)
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      employmentStatus: '',
      departmentId: '',
      positionId: '',
      workShiftId: '',
    },
    validationSchema: registerEmployeeValidationSchema,
    onSubmit: ({
      fullName,
      phoneNumber,
      email,
      employmentStatus,
      departmentId,
      positionId,
      workShiftId,
    }) => {
      onHandleRegisterEmployee({
        fullName,
        phoneNumber,
        email,
        employmentStatus,
        departmentId,
        positionId,
        workShiftId,
      });
    },
  });

  return (
    <>
      <HeaderTitle title='Register Employee' />

      <form
        onSubmit={formik?.handleSubmit}
        className='p-4'
      >
        <div className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
          <PiIdentificationCardDuotone className='text-2xl text-gray-500' />
          <input
            type='text'
            placeholder='Full Name'
            name='fullName'
            value={formik?.values.fullName}
            onChange={formik?.handleChange}
            className='input border-none text-gray-500 bg-gray-100 w-full focus:outline-none focus:ring-0'
          />
        </div>
        <div className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
          <AiTwotoneMail className='text-2xl text-gray-500' />
          <input
            type='text'
            name='email'
            value={formik?.values.email}
            onChange={formik?.handleChange}
            placeholder='Email'
            className='input border-none text-gray-500 bg-gray-100 w-full focus:outline-none focus:ring-0'
          />
        </div>
        <div className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
          <PiPhoneListDuotone className='text-2xl text-gray-500' />
          <input
            type='text'
            name='phoneNumber'
            value={formik?.values.phoneNumber}
            onChange={formik?.handleChange}
            placeholder='Phone Number'
            className='input border-none text-gray-500 bg-gray-100 w-full focus:outline-none focus:ring-0'
          />
        </div>
        <div className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
          <PiUserCircleDuotone className='text-2xl text-gray-500' />
          <select
            name='employmentStatus'
            value={formik?.values.employmentStatus}
            onChange={formik?.handleChange}
            className='select focus:outline-none focus:ring-0 bg-gray-100 border-none w-full text-gray-500'
          >
            <option>Employment Status</option>
            <option value={'PERMANENT'}>Permanent</option>
            <option value={'CONTRACT'}>Contract</option>
            <option value={'INTERN'}>Internship</option>
            <option value={'PART_TIME'}>Part Time</option>
          </select>
        </div>
        <div className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
          <PiBuildingDuotone className='text-2xl text-gray-500' />
          <select
            name='departmentId'
            value={formik?.values.departmentId}
            onChange={formik?.handleChange}
            className='select focus:outline-none focus:ring-0 bg-gray-100 border-none w-full text-gray-500'
          >
            <option>Departements</option>
            <option value={1}>Academic Web Development</option>
            <option value={2}>Employee Relation</option>
            <option value={3}>Human Capital</option>
          </select>
        </div>
        <div className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
          <PiBagDuotone className='text-2xl text-gray-500' />
          <select
            name='positionId'
            value={formik?.values.positionId}
            onChange={formik?.handleChange}
            className='select focus:outline-none focus:ring-0 bg-gray-100 border-none w-full text-gray-500'
          >
            <option>Positions</option>
            <option value={1}>Lecturer</option>
            <option value={2}>Academic</option>
            <option value={3}>Senior HR </option>
            <option value={4}>Junior HR </option>
          </select>
        </div>
        <div className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
          <PiClockUserDuotone className='text-2xl text-gray-500' />
          <select
            name='workShiftId'
            value={formik?.values.workShiftId}
            onChange={formik?.handleChange}
            className='select focus:outline-none focus:ring-0 bg-gray-100 border-none w-full text-gray-500'
          >
            <option>Workshifts</option>
            <option value={1}>Shift 1</option>
          </select>
        </div>

        <div className='px-4 py-3 w-full border-gray-200 fixed bottom-0 left-0 right-0 max-w-md mx-auto'>
          <button
            disabled={isLoading}
            type='submit'
            className='btn bg-green-500  hover:bg-green-600 text-white w-full'
          >
            {isLoading? 'Loading...' : 'Create Employee'}
          </button>
        </div>
      </form>
    </>
  );
}

export default withAuthGuard(Page, ['HR'], ['MANAGER', 'STAFF'])