import React from "react";
import { Avatar } from "../../types/Avatar";

export interface AvatarCardProps {
  avatar: Avatar;
  onSelect: () => void;
  isSelected: boolean;
}

const AvatarCard: React.FC<AvatarCardProps> = ({
  avatar,
  onSelect,
  isSelected,
}) => {
  return (
    <div
      className={`
        border-5 ${isSelected ? "border-blue-500" : "border-gray-400"}
        bg-gradient-to-b from-gray-500 to-gray-900 p-5 
        h-[350px] w-[250px] text-center cursor-pointer rounded-lg
        transition-all duration-300
      `}
      onClick={onSelect}
    >
      <div className="h-[250px] overflow-hidden flex items-center justify-center">
        <img
          src={avatar.image_url}
          alt={avatar.name}
          className="max-h-full w-auto"
        />
      </div>
      <p className="mt-3 font-bold text-lg text-white">{avatar.name}</p>
    </div>
  );
};

export default AvatarCard;
