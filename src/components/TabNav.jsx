
const TabNav = ({ tabs, selected, onSelect }) => {
  return (
    <div className="flex justify-center space-x-4 mb-8 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onSelect(tab)}
          className={`flex-shrink-0 px-6 py-2 rounded-full transition ${
            tab === selected
              ? "bg-black text-white"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNav;
