'use client';
import { PiIdentificationCardDuotone } from 'react-icons/pi';
import { PiPasswordDuotone } from 'react-icons/pi';
import { useFormik } from 'formik';
import { loginValidationSchema } from './_schemas/loginValidationSchema';
import axiosInstance from '@/utils/axiosInstance';
import useAuthStore from '@/stores/authStore';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { setAuth } = useAuthStore();
  const router = useRouter();
  const onHandleLogin = async ({ email, password }: any) => {
    try {
      const res = await axiosInstance.post('/api/auth/login', {
        email,
        password,
      });

      setAuth({
        fullName: res?.data?.fullName,
        token: res?.data?.data?.token,
        department: res?.data?.data?.department,
        position: res?.data?.data?.position,
      });
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: ({ email, password }) => {
      onHandleLogin({
        email,
        password,
      });
    },
  });

  return (
    <>
      <div className='p-10'>
        <div className='text-black'>
          <h1 className='text-3xl'>Welcome Back</h1>
          <p className='font-bold text-gray-500'>
            Your day starts here — let’s make it productive!
          </p>
        </div>

        <form
          onSubmit={formik?.handleSubmit}
          className='mt-3'
        >
          <div className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
            <PiIdentificationCardDuotone className='text-2xl text-gray-500' />
            <input
              type='text'
              name='email'
              value={formik?.values?.email}
              onChange={formik?.handleChange}
              placeholder='Email or Username'
              className='input border-none text-gray-500 bg-gray-100 w-full focus:outline-none focus:ring-0'
            />
          </div>
          {formik?.errors.email && formik?.touched?.email && (
            <div id='feedback'>{formik?.errors.email}</div>
          )}
          <div className='flex items-center gap-2 py-2 border-b-1 border-gray-300'>
            <PiPasswordDuotone className='text-2xl text-gray-500' />
            <input
              type='password'
              name='password'
              value={formik?.values?.password}
              onChange={formik?.handleChange}
              placeholder='Password'
              className='input border-none text-gray-500 bg-gray-100 w-full focus:outline-none focus:ring-0'
            />
          </div>
          {formik?.errors.password && formik?.touched?.password && (
            <div id='feedback'>{formik?.errors.password}</div>
          )}
          <button
            type='submit'
            className='btn bg-green-500  hover:bg-green-600 text-white w-full mt-5'
          >
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}
