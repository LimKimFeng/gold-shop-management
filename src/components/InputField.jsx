import React from "react";


const InputField = ({ id, label, type, value, onChange }) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
            <input type={type} id={id} value={value} onChange={onChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
    );
};

export default InputField;