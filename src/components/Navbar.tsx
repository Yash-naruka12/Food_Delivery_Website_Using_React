import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "./CartCountBadge";

const Navbar = () =>{
  return (
    <div className="container hidden lg:block">
      <div className="flex justify-between items-center pt-8">
        <h1 className="text-4xl font-medium">logo</h1>
        <div className="relative w-full max-w-[500px]">
          <input
            className="bg-[#f2f3f5] border-none outline-none px-6 py-2 rounded-[30px] w-full"
            type="text"
            placeholder="Search Product..."
          />
          <BsSearch className="absolute top-0 right-0 mt-3 mr-4 cursor-pointer" />
        </div>

        <div className="flex gap-4 cursor-pointer">
          <div className="icon__wrapper">
            <AiOutlineUser />
          </div>
          <div className="icon__wrapper relative">
            <AiOutlineShoppingCart />
            <CartCountBadge size="w-[20px] h-[20px]"  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
