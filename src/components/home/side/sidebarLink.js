const SidebarLink = ({ text, Icon, active }) => {
  return (
    <div
      className={`text-white flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${
        active && "font-bold"
      }`}
    >
      <Icon className="h-7 text-white" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
};
export default SidebarLink;
