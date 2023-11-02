import React from "react";

const SelectItem = ({ item, selectItems }) => {
  // const handleSelect = () => {
  //   const updated = selectItems.map((obj) => {
  //     console.log(obj, obj.id, item.id);
  //     if (obj.id === item.id) {
  //       if (!item.isSelected) {
  //         item.isSelected = true;
  //       }
  //     }
  //     return obj;
  //   });
  //   console.log(updated);
  // };
  return (
    <li
      className="group text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white"
      id="listbox-option-0"
      role="option"
      // onClick={handleSelect}
    >
      <div className="flex items-center">
        {/* Selected: "font-semibold", Not Selected: "font-normal" */}
        <span className="font-normal ml-3 block truncate">{item?.title}</span>
      </div>

      {/* icons  */}
      {item?.isSelected && (
        <span className="text-indigo-600 group-hover:text-white absolute inset-y-0 right-0 flex items-center pr-4">
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      )}
    </li>
  );
};

export default SelectItem;
