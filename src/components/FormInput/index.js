function InputComponent({ label, formik, name, type, className, placeholder='' }) {

  return (
    <div className={className}>
        <label className='flex flex-row text-gray-500 text-sm mb-2' htmlFor={name}>
            {label}
            {formik.touched[name] && formik.errors[name] ? (
              <div className='text-rose-500 text-sm text-left ml-2 flex-1'>{formik.errors[name]}</div>
            ) : null}
        </label>
        <input
        dir="ltr"
        placeholder={placeholder}
        className="w-full text-left text-sm border p-2 rounded bg-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
        id={name}
        name={name}
        type={type || "text"}
        value={formik.values[name]}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        />
    </div>
  )
}

export default InputComponent;