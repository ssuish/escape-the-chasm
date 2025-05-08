import React from 'react';

interface BtnAccountProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

const BtnAccount: React.FC<BtnAccountProps> = ({ label, onClick, disabled = false }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`bg-linear-to-b from-gray-500 to-gray-700 h-15 w-15 rounded-xl border-4 border-white-100 mt-10 ml-10`}
      >
        {label}
      </button>
    );
};

export default BtnAccount;