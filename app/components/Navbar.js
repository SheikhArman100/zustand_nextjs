import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Avatar from "../../public/avatar.jpg";
import Logo from "../../public/logo.jpg";
import CartNumber from "./CartNumber";


const Navbar = () => {
  return (
    <div className="w-full h-[4rem] border-b-2 relative flex items-center justify-between ">
      <div className="flex items-center gap-x-2 ml-6 sm:ml-14">
        <Image
          src={Logo}
          alt="logo"
          height={800}
          width={800}
          className="h-12 w-12 rounded-full object-cover"
        />
        <Link href="/" className="text-lg font-semibold">
          Zustand
        </Link>
      </div>
      <div className="flex items-center gap-x-2 mr-6 sm:mr-14">
        {/* ------------avatar----------------------- */}
         <div className="avatar online h-10 w-10">

        <Image src={Avatar} alt="avatar" height={800} width={800} className="  rounded-full object-cover" />
         </div>
        <Link href="/cart" className="relative">
        <AiOutlineShoppingCart className="h-6 w-6"/>
        <CartNumber/>

        </Link>
      </div>
    </div>
  );
};

export default Navbar;
