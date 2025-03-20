const Button = () => {
  return (
    <>
      <div
        className={`flex items-center gap-6 text-xl text-center rounded-xl text-black w-60 px-2 py-4 bg-amber-200 opacity-100 cursor-pointer`}
      >
        <svg
          className="ml-[1rem]"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M10.138 1.815A3 3 0 0 1 14 4.688v14.624a3 3 0 0 1-3.862 2.873l-6-1.8A3 3 0 0 1 2 17.512V6.488a3 3 0 0 1 2.138-2.873zM15 4a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-3a1 1 0 0 1-1-1m6 12a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-3a1 1 0 1 1 0-2h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1M9 11a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2z"
              clip-rule="evenodd"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12h5m0 0l-2-2m2 2l-2 2"
            />
          </g>
        </svg>
        Explore Gates
      </div>
    </>
  );
};

export default Button;
