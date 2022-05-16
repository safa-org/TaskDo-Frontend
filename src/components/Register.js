import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";

function Register() {
  return (
    <div>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8 border-2 p-6 rounded-lg">
          <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <div></div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />

            <p className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
              Choose your role
            </p>
            <div class="flex">
              <div class="flex items-center mr-4">
                <input
                  id="Headmaster"
                  type="radio"
                  value=""
                  name="role-group"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="Headmaster"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Headmaster
                </label>
              </div>
              <div class="flex items-center mr-4">
                <input
                  id="teacher"
                  type="radio"
                  value=""
                  name="role-group"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="teacher"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Teacher
                </label>
              </div>
            </div>
            <p className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
              Choose your department
            </p>
            <div class="flex">
              <div class="flex items-center mr-4">
                <input
                  id="mechanical"
                  type="radio"
                  value=""
                  name="department-group"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="mechanical"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Mechanical
                </label>
              </div>
              <div class="flex items-center mr-4">
                <input
                  id="Civil"
                  type="radio"
                  value=""
                  name="department-group"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="Civil"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Civil
                </label>
              </div>
              <div class="flex items-center mr-4">
                <input
                  id="CSE"
                  type="radio"
                  value=""
                  name="department-group"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="CSE"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  CSE
                </label>
              </div>
              <div class="flex items-center mr-4">
                <input
                  id="ECE"
                  type="radio"
                  value=""
                  name="department-group"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="ECE"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  ECE
                </label>
              </div>
              <div class="flex items-center mr-4">
                <input
                  id="EEE"
                  type="radio"
                  value=""
                  name="department-group"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="EEE"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  EEE
                </label>
              </div>
            </div>
            <form>
              <div class="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required=""
                  />
                </div>
                {/* <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Flowbite"
                    required=""
                  />
                </div> */}
              </div>
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required=""
                />
              </div>
              <div class="mb-6">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required=""
                />
              </div>
              <div class="mb-6">
                <label
                  for="confirm_password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required=""
                />
              </div>
              <button
                type="submit"
                class="text-white block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register
              </button>
            </form>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
