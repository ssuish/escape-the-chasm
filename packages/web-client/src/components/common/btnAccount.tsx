import React from 'react';
import { FaPowerOff } from "react-icons/fa6";

interface BtnAccountProps {
    onClick: () => void;
    disabled?: boolean;
}

const BtnAccount: React.FC<BtnAccountProps> = ({ onClick, disabled = false }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`bg-linear-to-b from-gray-500 to-gray-700 h-15 w-15 rounded-xl border-4 border-white-100 mt-10 ml-10`}
      >
        <FaPowerOff size={50} className="p-1.5 hover:opacity-50 hover:bg-gray-900 rounded-xl active:p-2 cursor-pointer"/>
      </button>
    );
};

export default BtnAccount;