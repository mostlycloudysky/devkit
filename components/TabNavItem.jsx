import React from "react";
const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
 
 const handleClick = () => {
   setActiveTab(id);
 };

 function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
 
return (
    <>
        <a
        className={classNames(
            activeTab === id ? 'text-gray-900 ' : 'text-gray-500 hover:text-gray-700',
            'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10 rounded-l-lg cursor-pointer'
          )}
        onClick={handleClick}
        >
        <span className=" font-bold">{title}</span>
        <span area-hidden="true" 
        className={classNames(
            activeTab === id  ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-transparent',
            'absolute inset-x-0 bottom-0 h-0.5'
        )} />

        </a>
    </>
 );
};
export default TabNavItem;