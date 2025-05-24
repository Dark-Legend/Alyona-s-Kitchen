
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
        const navbarItems = [{route:"/",title:"Home"},{route:"/menu",title:"Menu"},{route:"/cart", title:"Cart"},{route:"/checkout", title:"Checkout"}]
  return (
    <header className="p-2.5 border border-solid border-gray-300 shadow flex items-center flex-col gap-5 md:flex-row md:justify-between md:px-5 md:py-3">
      <p className="font-bold text-2xl text-black">
        Alyona's <span className="text-[#E67E22]">Kitchen </span>
      </p>
      <div className="flex items-center gap-5">
        {navbarItems?.map((nav, i) => (
          <NavLink
            to={nav.route}
            className={({ isActive }) =>
              isActive
                ? "bg-amber-700 hover:bg-amber-600 text-white py-1 px-3 rounded"
                : "text-black"
            }
            key={i}
          >
            {nav?.title}
          </NavLink>
        ))}
      </div>
    </header>
  );
}