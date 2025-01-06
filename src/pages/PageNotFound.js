import { domUtils } from "../common/dom.utils";

export default function PageNotFound() {
  return domUtils.html(`
    <div class="w-full lg:px-12 px-6 py-32 bg-gray-800 text-white min-h-[100vh]">
      <div class="max-w-[1300px] mx-auto">
        <h1 class="font-bold text-3xl text-center mt-8">Not found (404)</h1>
    `);
}
