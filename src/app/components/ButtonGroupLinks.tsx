const ButtonGroupLinks = () => {
  return (
    <div>
      <a
        href="#"
        className="px-4 py-2 bg-black outline-none text-slate-200 font-medium border-b border-l border-gray-500 text-sm rounded-s-lg hover:bg-slate-800 focus:z-10 focus:ring-2 focus:ring-blue-700  "
      >
        Profile
      </a>
      <a
        href="#"
        className="px-4 py-2 bg-black text-slate-200 font-medium text-sm border-b border-l border-gray-500 hover:bg-slate-800 focus:z-10 focus:ring-2 focus:ring-blue-700"
      >
        Setting
      </a>

      <a
        href="#"
        className="px-4 py-2 bg-black text-slate-200 font-medium text-sm border-b border-l border-gray-500 hover:bg-slate-800 focus:z-10 focus:ring-2 focus:ring-blue-700 rounded-e-lg"
      >
        Message
      </a>
    </div>
  );
};
export default ButtonGroupLinks;
