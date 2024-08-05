export const TransBtn = ({ title, path }) => {
  return (
    <button className="m-4">
      <a
        href={path}
        className={`bg-transparent border-2 transition-all hover:bg-white hover:text-dark-bg border-white text-white w-36 text-2xl flex items-center justify-center p-2 rounded-full`}
      >
        {title}
      </a>
    </button>
  );
};

const Btn = ({ title, path }) => {
  return (
    <button className="m-4">
      <a
        href={path}
        className={`bg-white transition-all hover:bg-gray-300 text-black w-36 text-2xl flex items-center justify-center p-2 rounded-full`}
      >
        {title}
      </a>
    </button>
  );
};

export default Btn;
