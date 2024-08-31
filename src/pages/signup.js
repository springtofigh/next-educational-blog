import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputComponent from '@/components/FormInput';
import Link from 'next/link';
import Layout from '@/containers/Layout';
import Head from 'next/head';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useAuthActions } from '@/context/AuthContext';

// Initial values
const initialValues = {
    email: '',
    password: '',
    phoneNumber:'',
    name:'',
    confirmPassword:'',
}

// Validation schema
const validationSchema = Yup.object({
    name: Yup.string()
    .required("نام و نام خانوادگی را وارد")
    .min(6, "نام و نام‌خانوادگی باید حداقل ۶ کرکتر باشد"),
    phoneNumber: Yup.string()
    .required("شماره موبایل را وارد کنید")
    .matches(/^[0-9]{11}$/,"شماره موبایل باید ۱۱ رقم باشد")
    .nullable(),
    email: Yup.string().email('ایمیل نامعتبر است').required('لطفا ایمیل را وارد کنید'),
    password: Yup.string()
    .required("لطفا رمز عبور را وارد نمائید")
    .min(8, "پسورد شما خیلی کوتاه است - رمز عبور باید حداقل ۸ کرکتر باشد"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "رمز عبور را مجدد وارد نمائید")
    .required("رمز تکرار شده هم‌خوانی ندارد"),
});




function RegisterForm() {
    const router = useRouter();
    const dispatch = useAuthActions();
    // onSubmit
    const onSubmit = (values) => {
        const { name, email, password, phoneNumber } = values
        dispatch({type:'SIGNUP', payload: { name, email, password, phoneNumber }})
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
        validationOnMount: true
    });

  return (
    <Layout>
        <Head>
            <title></title>
        </Head>
        <div className='container mx-auto md:max-w-md px-4 md:px-4'>
            <form onSubmit={formik.handleSubmit} className='flex flex-col space-y-4'>
                <h2 className='font-bold text-2xl text-violet-700 mb-4'>ثبت نام</h2>
                <InputComponent label='نام و نام‌خانوادگی' name='name' formik={formik} />
                <InputComponent label='ایمیل' name='email' formik={formik} />
                <InputComponent label='شماره موبایل' name='phoneNumber' type='tel' placeholder='۰۹۱۲۳۴۵۶۷۸۹' formik={formik} />
                <InputComponent label='رمز عبور' name='password' type='password' formik={formik} />
                <InputComponent label='تکرار رمز' name='confirmPassword' type='password' formik={formik} />
                <button
                type='submit'
                disabled={!formik.isValid}
                className='w-full py-2 bg-violet-800 text-white rounded-lg'
                >
                    ثبت نام
                </button>
                <Link href='/signin'>
                <p className='mt-4 py-4 cursor-pointer'>از قبل اکانت دارید؟ وارد شوید</p>
                </Link>
            </form>
        </div>
    </Layout>
  )
}

export default RegisterForm;