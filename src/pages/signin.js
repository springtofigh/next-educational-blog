import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputComponent from '@/components/FormInput';
import Link from 'next/link';
import Layout from '@/containers/Layout';
import Head from 'next/head';

// Initial values
const initialValues = {
    email: '',
    password: ''
}

// Validation schema
const validationSchema = Yup.object({
    email: Yup.string().email('ایمیل نامعتبر است').required('لطفا ایمیل را وارد کنید'),
    password: Yup.string()
    .required("لطفا رمز عبور را وارد نمائید")
    .min(8, "پسورد شما خیلی کوتاه است - رمز عبور باید حداقل ۸ کرکتر باشد"),
})



function RegisterForm() {
    // onSubmit
    const onSubmit = (values) => {
        const { email, password } = values
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
                <h2 className='font-bold text-2xl text-violet-700 mb-4'>ورود</h2>
                <InputComponent label='ایمیل' name='email' formik={formik} />
                <InputComponent label='رمز عبور' name='password' type='password' formik={formik} />
                <button
                type='submit'
                disabled={!formik.isValid}
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