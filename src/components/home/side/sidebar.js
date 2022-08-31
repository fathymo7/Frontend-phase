import SidebarLink from "./sidebarLink";
import logo from "../../../assets/logo.png";
import profile from "../../../assets/profile.png";

import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  UserIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";
const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoveranimation p-0 xl:ml-24">
        <img src={logo} alt="website icon" width={30} height={30} />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
      </div>

      <div className="text-white flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto">
        <img
          src={profile}
          alt="profile first letter"
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">Fathy Mohsen</h4>
          <p className="text-[#6e767d]">@fathymohsen7</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
};
export default Sidebar;
