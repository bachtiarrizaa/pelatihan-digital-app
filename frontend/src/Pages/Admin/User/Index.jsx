export default function UserDashboard() {
  return (
    <>
      <section class="container px-4 mx-auto">
        <div class="sm:flex sm:items-center sm:justify-between">
            <div>
                <div class="flex items-center gap-x-3">
                    <h2 class="text-lg font-medium text-gray-800">Customers</h2>

                    <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">240 vendors</span>
                </div>

                <p class="mt-1 text-sm text-gray-500">These companies have purchased in the last 12 months.</p>
            </div>

            <div class="flex items-center mt-4 gap-x-3">
                <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_3098_154395)">
                        <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_3098_154395">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

                    <span>Import</span>
                </button>

                <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <span>Add vendor</span>
                </button>
            </div>
        </div>

        <div class="mt-6 md:flex md:items-center md:justify-between">
            <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse">
                <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm">
                    View all
                </button>

                <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm hover:bg-gray-100">
                    Monitored
                </button>

                <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm hover:bg-gray-100">
                    Unmonitored
                </button>
            </div>

            <div class="relative flex items-center mt-4 md:mt-0">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </span>

                <input type="text" placeholder="Search" class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
        </div>

        <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                        <div class="flex items-center gap-x-3">
                                            <span>Name</span>
                                        </div>
                                    </th>

                                    <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                        <button class="flex items-center gap-x-2">
                                            <span>Status</span>

                                            <svg class="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                            </svg>
                                        </button>
                                    </th>

                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                        <button class="flex items-center gap-x-2">
                                            <span>Role</span>

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                            </svg>
                                        </button>
                                    </th>

                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Email address</th>

                                    <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Teams</th>

                                    <th scope="col" class="relative py-3.5 px-4">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center gap-x-3">

                                            <div class="flex items-center gap-x-2">
                                                <img class="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                                <div>
                                                    <h2 class="font-medium text-gray-800">Arthur Melo</h2>
                                                    <p class="text-sm font-normal text-gray-600">@authurmelo</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                            <h2 class="text-sm font-normal text-emerald-500">Active</h2>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Design Director</td>
                                    <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">authurmelo@example.com</td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-2">
                                            <p class="px-3 py-1 text-xs text-indigo-500 rounded-fullbg-indigo-100/60">Design</p>
                                            <p class="px-3 py-1 text-xs text-blue-500 rounded-full bg-blue-100/60">Product</p>
                                            <p class="px-3 py-1 text-xs text-pink-500 rounded-full bg-pink-100/60">Marketing</p>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-6">
                                            <button class="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none">
                                                <i class="fa-regular fa-trash-can text-lg"></i>
                                            </button>

                                            <button class="text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none">
                                                <i class="fa-regular fa-pen-to-square text-lg"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center gap-x-3">

                                            <div class="flex items-center gap-x-2">
                                                <img class="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                                                <div>
                                                    <h2 class="font-medium text-gray-800">Amelia. Anderson</h2>
                                                    <p class="text-sm font-normal text-gray-600">@ameliaanderson</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                            <h2 class="text-sm font-normal text-emerald-500">Active</h2>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Lead Developer</td>
                                    <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">ameliaanderson@example.com</td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-2">
                                            <p class="px-3 py-1 text-xs text-indigo-500 rounded-full bg-indigo-100/60">Design</p>
                                            <p class="px-3 py-1 text-xs text-blue-500 rounded-full bg-blue-100/60">Product</p>
                                            <p class="px-3 py-1 text-xs text-pink-500 rounded-full bg-pink-100/60">Marketing</p>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-6">
                                            <button class="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none">
                                                <i class="fa-regular fa-trash-can text-lg"></i>
                                            </button>

                                            <button class="text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none">
                                                <i class="fa-regular fa-pen-to-square text-lg"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center gap-x-3">

                                            <div class="flex items-center gap-x-2">
                                                <img class="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1608174386344-80898cec6beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                                                <div>
                                                    <h2 class="font-medium text-gray-800">junior REIS</h2>
                                                    <p class="text-sm font-normal text-gray-600">@junior</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                            <h2 class="text-sm font-normal text-emerald-500">Active</h2>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Products Managers</td>
                                    <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">junior@example.com</td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-2">
                                            <p class="px-3 py-1 text-xs text-indigo-500 rounded-full bg-indigo-100/60">Design</p>
                                            <p class="px-3 py-1 text-xs text-blue-500 rounded-full bg-blue-100/60">Product</p>
                                            <p class="px-3 py-1 text-xs text-pink-500 rounded-full bg-pink-100/60">Marketing</p>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-6">
                                            <button class="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none">
                                                <i class="fa-regular fa-trash-can text-lg"></i>
                                            </button>

                                            <button class="text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none">
                                                <i class="fa-regular fa-pen-to-square text-lg"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center gap-x-3">

                                            <div class="flex items-center gap-x-2">
                                                <img class="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                                                <div>
                                                    <h2 class="font-medium text-gray-800">Olivia Wathan</h2>
                                                    <p class="text-sm font-normal text-gray-600">@oliviawathan</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                            <h2 class="text-sm font-normal text-emerald-500">Active</h2>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Lead Designer</td>
                                    <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">oliviawathan@example.com</td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-2">
                                            <p class="px-3 py-1 text-xs text-indigo-500 rounded-full bg-indigo-100/60">Design</p>
                                            <p class="px-3 py-1 text-xs text-blue-500 rounded-full bg-blue-100/60">Product</p>
                                            <p class="px-3 py-1 text-xs text-pink-500 rounded-full bg-pink-100/60">Marketing</p>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-6">
                                            <button class="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none">
                                                <i class="fa-regular fa-trash-can text-lg"></i>
                                            </button>

                                            <button class="text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none">
                                                <i class="fa-regular fa-pen-to-square text-lg"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center gap-x-3">

                                            <div class="flex items-center gap-x-2">
                                                <img class="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                                                <div>
                                                    <h2 class="font-medium text-gray-800">Mia</h2>
                                                    <p class="text-sm font-normal text-gray-600">@mia</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                            <h2 class="text-sm font-normal text-emerald-500">Active</h2>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Graphic Designer</td>
                                    <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">mia@example.com</td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-2">
                                            <p class="px-3 py-1 text-xs text-indigo-500 rounded-full bg-indigo-100/60">Design</p>
                                            <p class="px-3 py-1 text-xs text-blue-500 rounded-full bg-blue-100/60">Product</p>
                                            <p class="px-3 py-1 text-xs text-pink-500 rounded-full bg-pink-100/60">Marketing</p>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center gap-x-6">
                                            <button class="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none">
                                                <i class="fa-regular fa-trash-can text-lg"></i>
                                            </button>

                                            <button class="text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none">
                                                <i class="fa-regular fa-pen-to-square text-lg"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-between mt-6">
            <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>

                <span>
                    previous
                </span>
            </a>

            <div class="items-center hidden lg:flex gap-x-3">
                <a href="#" class="px-2 py-1 text-sm text-blue-500 rounded-md bg-blue-100/60">1</a>
                <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">2</a>
                <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">3</a>
                <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">...</a>
                <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">12</a>
                <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">13</a>
                <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">14</a>
            </div>

            <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
                <span>
                    Next
                </span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </a>
        </div>
      </section>
    </>
  )
}