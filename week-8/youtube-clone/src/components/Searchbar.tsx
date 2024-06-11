export function Searchbar() {
  return (
    <div className="w-2/4">
      <div className="max-sm:hidden  sm:w-48 lg:w-96 flex text-gray-900 border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2">
        <input
          id="degault-search"
          className="w-full bg-white-500 text-gray-800 border-none outline-none"
          placeholder="Search"
          required
        />
        <button className="bg-white-500 text-gray-800 font=bold py-2 px-4 rounded inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
