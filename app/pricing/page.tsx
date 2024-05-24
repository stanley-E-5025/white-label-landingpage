import * as React from "react";

export default function Home() {
  return (
    <>
      <main className="relative flex flex-col p-[10px]">
        <section
          id="pricing-section"
          className="bg-white dark:bg-gray-900 py-16 h-screen flex flex-col justify-center items-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Choose Your Plan
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
                Select the plan that best fits your needs and start leveraging
                our powerful features.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Free Plan
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Full access for the first month. Card required for sign-up.
                </p>
                <div className="mt-4">
                  <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
                    $0
                  </span>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-300">
                    / month
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-2 text-base text-gray-500 dark:text-gray-300">
                      Full access for 1 month
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-2 text-base text-gray-500 dark:text-gray-300">
                      Requires card for sign-up
                    </span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600">
                    Get Started
                  </button>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Standard Plan
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Access to essential features.
                </p>
                <div className="mt-4">
                  <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
                    $9.99
                  </span>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-300">
                    / month
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-2 text-base text-gray-500 dark:text-gray-300">
                      Access to essential features
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-2 text-base text-gray-500 dark:text-gray-300">
                      Email support
                    </span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600">
                    Get Started
                  </button>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Premium Plan
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Full access to all features and priority support.
                </p>
                <div className="mt-4">
                  <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
                    $19.99
                  </span>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-300">
                    / month
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-2 text-base text-gray-500 dark:text-gray-300">
                      Full access to all features
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-2 text-base text-gray-500 dark:text-gray-300">
                      Priority support
                    </span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
