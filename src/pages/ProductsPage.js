import { domUtils } from "../common/dom.utils";
import { yi } from "../common/yi";

const { html } = domUtils;
export default function ProductPages() {
  return html(
    `<div class="w-full lg:px-12 px-6 py-32 bg-gray-800 text-white">`,
    html(`<div class="max-w-[1300px] mx-auto">`, Banner(), ProductPreview())
  );
}

function Banner() {
  const { content, img, title } = data.banner;
  const imgURL = yi.getIMGURL(img);
  return html(`
  <div class="bg-yellow-400 flex gap-4 justify-between px-10 py-8 items-center rounded-2xl">
    <div class="text-black">
      <h2 class="text-[max(2.1vw,20px)] font-semibold mb-4">${title}</h2>
      <div class="text-gray-700 text-[max(1.2vw,14px)]">${content}</div>
    </div>
    <img src="${imgURL}" class="w-[max(34vw,260px)] md:block hidden"/>
  `);
}

function ProductPreview() {
  const div = html(`
<div class="sm:px-6 py-10">
  <div class="justify-between items-center flex mb-6">
    <p class="text-white font-semibold sm:text-lg text-xs">Showing 11 Products</p>
    <div class="bg-gray-300 rounded-full flex gap-2 px-6 py-2 sm:text-lg text-xs">
      <label class="text-gray-500 font-medium" for="sortBy">Sort by:</label
      ><select
        id="sortBy"
        class="bg-transparent outline-none text-black font-semibold"
      >
        <option value="high">High pricing</option>
        <option value="low">Low pricing</option>
      </select>
    </div>
  </div>
    `);
  div.append(ProductPanel());
  return div;
  function ProductPanel() {
    const div = html(`<div class="flex sm:flex-row flex-col">`);
    div.append(Filters(), Products());
    return div;
  }
  function Filters() {
    return html(`<div class="sm:w-[240px] w-full h-full mb-6 flex-shrink-0">
  <nav class="bg-gray-100 px-4 py-4 rounded-xl text-black">
    <div class="bg-white px-2 py-2 shadow rounded-lg mb-4">
      <div class="flex cursor-pointer justify-between items-center">
        <h2 class="font-semibold">Brands</h2>
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
          class="lucide lucide-chevron-up"
        >
          <path d="m18 15-6-6-6 6"></path>
        </svg>
      </div>
      <ul
        class="flex-col gap-1 mt-2 py-2 border-t-2 border-gray-100 text-gray-500 font-medium flex"
      >
        <li>
          <input class="mr-2" id="tesla" type="checkbox" value="Tesla" /><label
            for="tesla"
            >Tesla</label
          >
        </li>
        <li>
          <input class="mr-2" id="audi" type="checkbox" value="Audi" /><label
            for="audi"
            >Audi</label
          >
        </li>
        <li>
          <input
            class="mr-2"
            id="porsche"
            type="checkbox"
            value="Porsche"
          /><label for="porsche">Porsche</label>
        </li>
      </ul>
    </div>
    <div class="bg-white px-2 py-2 shadow rounded-lg mb-4">
      <div class="flex cursor-pointer justify-between items-center">
        <h2 class="font-semibold">Product Type</h2>
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
          class="lucide lucide-chevron-up"
        >
          <path d="m18 15-6-6-6 6"></path>
        </svg>
      </div>
      <ul
        class="flex-col gap-1 mt-2 py-2 border-t-2 border-gray-100 text-gray-500 font-medium flex"
      >
        <li>
          <input
            class="mr-2"
            id="luxury"
            type="checkbox"
            value="Luxury"
          /><label for="luxury">Luxury</label>
        </li>
        <li>
          <input
            class="mr-2"
            id="sports"
            type="checkbox"
            value="Sports"
          /><label for="sports">Sport</label>
        </li>
        <li>
          <input
            class="mr-2"
            id="family"
            type="checkbox"
            value="Family"
          /><label for="family">Family</label>
        </li>
      </ul>
    </div>
    <div class="bg-white px-2 py-2 shadow rounded-lg mb-4">
      <div class="flex cursor-pointer justify-between items-center">
        <h2 class="font-semibold">Price</h2>
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
          class="lucide lucide-chevron-up"
        >
          <path d="m18 15-6-6-6 6"></path>
        </svg>
      </div>
      <ul
        class="flex-col gap-1 mt-2 py-2 border-t-2 border-gray-100 text-gray-500 font-medium flex"
      >
        <li>
          <input
            class="mr-2"
            id="100"
            type="checkbox"
            value="$100.000 - $199.999"
          /><label for="100">$100.000 - $199.999</label>
        </li>
        <li>
          <input
            class="mr-2"
            id="200"
            type="checkbox"
            value="$200.000 - $299.999"
          /><label for="200">$200.000 - $299.999</label>
        </li>
        <li>
          <input
            class="mr-2"
            id="300"
            type="checkbox"
            value="$300.000 - $399.999"
          /><label for="300">$300.000 - $399.999</label>
        </li>
        <li>
          <input
            class="mr-2"
            id="400"
            type="checkbox"
            value="$400.000 - $499.999"
          /><label for="400">$400.000 - $499.999</label>
        </li>
        <li>
          <input
            class="mr-2"
            id="500"
            type="checkbox"
            value="$500.000+"
          /><label for="500">$500.000+</label>
        </li>
      </ul>
    </div>
    <button
      class="w-full h-full bg-yellow-400 rounded-md font-semibold px-2 py-2 transition-all duration-300 hover:shadow-lg hover:bg-yellow-600 hover:-translate-y-1 hover:scale-105"
    >
      Clear
    </button>
  </nav>
</div>
`);
  }
  function Product({ brand, name, price, img }) {
    return html(`<div
      class="ItemFeatureLuxuryCar cursor-pointer group flex flex-col relative p-3 rounded-2xl bg-gray-700 w-full h-full text-white hover:text-yellow-500 *:transition-all *:duration-500"
    >
      <h2 class="font-medium text-2xl !text-white">${brand}</h2>
      <p class="text-sm">${name}</p>
      <img
        alt=""
        src="${yi.getIMGURL(img)}"
        class="w-[80%] mx-auto my-6 group-hover:scale-[1.1]"
      />
      <p class="mt-auto font-bold text-2xl">$${price}</p>
      <button
        class="absolute right-0 bottom-0 p-3 bg-blue-600 rounded-tl-2xl rounded-br-2xl group-hover:scale-[1.1]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-archive h-6 w-6"
        >
          <rect width="20" height="5" x="2" y="3" rx="1"></rect>
          <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
          <path d="M10 12h4"></path>
        </svg>
      </button>
    </div>`);
  }
  function Products() {
    return html(
      `<div class="w-full sm:pl-6"></div>`,
      html(
        `<div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10"></div>`,
        ...data.products.map(Product)
      )
    );
  }
}

const data = {
  banner: {
    title: "Our Electric Vehicle Collection",
    content: `Welcome to YiDIElectro's Electric Vehicle Collection! Explore our diverse range of electric vehicles designed to meet your transportation needs while promoting sustainability and innovation.`,
    img: "offer.png",
  },
  products: [
    {
      brand: "Tesla",
      name: "Model X",
      price: "298900",
      priceRange: "$200.000 - $299.999",
      img: "featured1.png",
      year: 2021,
      energy: "Electric",
      km: 280,
      mode: "Automatic",
      productType: "Family",
    },
    {
      brand: "Tesla",
      name: "Model 3",
      price: "453900",
      priceRange: "$400.000 - $499.999",
      img: "featured2.png",
      year: 2023,
      energy: "Electric",
      km: 290,
      mode: "Automatic",
      productType: "Family",
    },
    {
      brand: "Audi",
      name: "E-tron",
      price: "875800",
      priceRange: "$500.000+",
      img: "featured3.png",
      year: 2022,
      energy: "Electric",
      km: 300,
      mode: "Automatic",
      productType: "Luxury",
    },
    {
      brand: "Porsche",
      name: "Eron",
      price: "275800",
      priceRange: "$200.000 - $299.999",
      img: "featured4.png",
      year: 2022,
      energy: "Electric",
      km: 300,
      mode: "Automatic",
      productType: "Sports",
    },
    {
      brand: "Porsche",
      name: "Eon",
      price: "135800",
      priceRange: "$100.000 - $199.999",
      img: "featured5.png",
      year: 2022,
      energy: "Electric",
      km: 300,
      mode: "Family",
      productType: "Family",
    },
    {
      brand: "Porsche",
      name: "Darkar",
      price: "346900",
      priceRange: "$300.000 - $399.999",
      img: "popular1.png",
      year: 2024,
      energy: "Electric",
      km: 360,
      mode: "Automatic",
      productType: "Sport",
    },
    {
      brand: "Porsche",
      name: "Porsche 911",
      price: "523900",
      priceRange: "$500.000+",
      img: "popular2.png",
      year: 2022,
      energy: "Electric",
      km: 280,
      mode: "Automatic",
      productType: "Luxury",
    },
    {
      brand: "Porsche",
      name: "Lron",
      price: "175800",
      priceRange: "$100.000 - $199.999",
      img: "popular3.png",
      year: 2022,
      energy: "Electric",
      km: 300,
      mode: "Automatic",
      productType: "Sports",
    },
    {
      brand: "Porsche",
      name: "Cayenne",
      price: "166900",
      priceRange: "$100.000 - $199.999",
      img: "popular4.png",
      year: 2022,
      energy: "Electric",
      km: 310,
      mode: "Automatic",
      productType: "Luxury",
    },
    {
      brand: "Porsche",
      name: "Carrera T",
      price: "311900",
      priceRange: "$300.000 - $399.999",
      img: "popular5.png",
      year: 2022,
      energy: "Electric",
      km: 280,
      mode: "Automatic",
      productType: "Sports",
    },
    {
      brand: "Porsche",
      name: "Whikar",
      price: "413900",
      priceRange: "$400.000 - $499.999",
      img: "offer.png",
      year: 2022,
      energy: "Electric",
      km: 280,
      mode: "Automatic",
      productType: "Sports",
    },
  ],
};
