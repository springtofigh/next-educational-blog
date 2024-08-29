import { Formik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';
import Layout from '@/containers/Layout';
import Head from 'next/head';

function RegisterForm() {
  return (
    <Layout>
        <Head>
            <title></title>
        </Head>
        <div className='container mx-auto md:max-w-md px-4 md:px-4'>
            <form className='flex flex-col'>
                <h2 className='font-bold text-2xl text-violet-700 mb-4'>ورود</h2>

                <button
                className='w-full py-2 bg-violet-800 text-white rounded-lg'
                >
                    ورود
                </button>
                <Link href='/signup'>
                <p className='mt-4 py-4 cursor-pointer'>هنوز ثبت نام نکردی؟ ثبت نام</p>
                </Link>
            </form>
        </div>
    </Layout>
  )
}

export default RegisterForm;