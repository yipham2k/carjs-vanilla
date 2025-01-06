import { html } from "../common/dom.utils";

export default function Navbar() {
  return html(
    `
<nav
  id="navBar"
  class="flex fixed w-full justify-between items-center z-[99999] lg:px-12 lg:py-6 px-6 py-3 text-default"
>
  <a
    class="font-bold text-3xl tracking-wider cursor-pointer flex gap-2"
    translate="no"
    href="/app"
    >YiDi-Electro</a
  >
`,
    html(`<ul
    class="md:flex justify-start items-center lg:gap-16 md:gap-8 hidden text-lg"
  >
    <li><a class="" href="/home">Home</a></li>
    <li>
      <a class="text-yellow-400 font-semibold" href="/products">Products</a>
    </li>
    <li><a class="" href="/about">About</a></li>
    <li><a class="" href="/contact">Contact</a></li>
  </ul>`),
    html(`<div
    class="absolute top-[110%] left-6 lg:left-12 text-white bg-black/80 rounded-md"
  >
    <input
      class="px-4 py-2 bg-transparent placeholder:text-gray-600 outline-none"
      placeholder="Search..."
      value=""
    />
    <ul class="px-4 py-2 hidden"></ul>
  </div>
  <div class="md:flex hidden items-center lg:gap-6 md:gap-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-circle-help h-6 w-6 cursor-pointer"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
      <path d="M12 17h.01"></path>
    </svg>
    <div class="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-globe h-6 w-6 cursor-pointer"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
        <path d="M2 12h20"></path></svg
      ><select
        class="absolute text-black rounded-md px-2 py-1 top-[150%] left-1/2 -translate-x-1/2 block"
      >
        <option value="English">English</option>
        <option value="Vietnamese">Vietnamese</option>
      </select>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-circle-user-round h-6 w-6 cursor-pointer"
    >
      <path d="M18 20a6 6 0 0 0-12 0"></path>
      <circle cx="12" cy="10" r="4"></circle>
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  </div>
 `),
    html(`
<button class="md:hidden block">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-menu"
  >
    <line x1="4" x2="20" y1="12" y2="12"></line>
    <line x1="4" x2="20" y1="6" y2="6"></line>
    <line x1="4" x2="20" y1="18" y2="18"></line>
  </svg>
</button>`)
  );
}

function NavLink() {}
