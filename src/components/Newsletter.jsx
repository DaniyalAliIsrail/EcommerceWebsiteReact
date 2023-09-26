import React from 'react'

const Newsletter = () => {
  return (
    <>
    <div className="bg-[#e3e6f3] ">
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
    <div className="px-6 py-6 md:px-12 lg:flex lg:items-center lg:px-16">
      <div className="lg:flex-1 xl:w-0">
        <h2 className="text-2xl font-extrabold tracking-tight text-black sm:text-3xl">
          Email Newsletter
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
          Sign up for our email newsletter to stay up to date.
        </p>
      </div>
      <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
        <form className="sm:flex" id="revue-form" >
          <input
            type="email"
            autoComplete="email"
            required=""
            className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-0"
            placeholder="Enter your email"
          />
          <button
            type="submit" retun="false"
            className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-3 text-sm text-indigo-200">
          We will never send any spam emails. Promise.
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Newsletter