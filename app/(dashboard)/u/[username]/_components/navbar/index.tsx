import { Actions } from "./actions";
import { Logo } from "./logo";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] bg-navbar px-2 lg:px-4 flex justify-between items-center shadow-sm backdrop-filter backdrop-blur-md">
      <Logo />
      <Actions />
    </nav>
  );
};
