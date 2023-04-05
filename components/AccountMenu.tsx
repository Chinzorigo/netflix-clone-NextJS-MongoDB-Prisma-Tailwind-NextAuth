import React from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div  className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
        <div className="flex flex-col gap3 text-white ">
            <div className="px-3 group/item flex flex-row gap-3 items-center w-full ">
                <Image className="text-white text-sm rounded-md " width={25} height={25} src="/images/default-blue.png" alt="profile image" />
                <p className="text-white text-sm group-hover/item:underline">Username</p>
            </div>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4"/>
        <div onClick={() => signOut()} className="px-3 text-white text-center text-sm  hover:underline">
            Sign out of Netflix
        </div>
    </div>
  );
};

export default AccountMenu;
