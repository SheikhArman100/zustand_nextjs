import Image from "next/image";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import CardButton from "./CardButton";

const Card = ({ id, image, rating,price, title, type }) => {
  
  return (
    <div
      className="h-[10rem] sm:h-[14rem] aspect-[7/8] md:aspect-[6.5/8] rounded-md  glassEffect"
      key={id}
    >
      <div className="relative w-full h-[80%] ">
         <Image
        src={image}
        priority
        className="w-full h-full rounded-md object-cover"
        alt="card image"
        width="800"
        height="800"
      />
      <div>
        
      </div>
       <div className=" absolute top-0 left-0 w-full h-full p-2 hover:glassEffect flex flex-col group rounded-md ">
        <div className="flex items-start justify-between">
           <div className="flex items-center gap-x-1 bg-white text-black p-1 rounded">
            <p className="text-xs font-medium">{rating}</p>
            <AiFillStar className="h-4 w-4 text-yellow-500" />
          </div>
          <AiOutlineHeart className="h-6 w-6 font-bold text-white" />
        </div>
        <CardButton  image={image} title={title} type={type}  price={price} />
         
      </div>
      

      </div>
     

      <div className="flex items-start justify-between gap-x-1 px-1 py-2">
        <div className="flex flex-col items-start">
          <h5 className="text-xs font-bold line-clamp-1">{title}</h5>
          <h6 className="text-xs ">{type}</h6>
        </div>
        <h5 className="text-sm font-bold">৳{price}</h5>
      </div>
     

      
      
    </div>
  );
};

export default Card;
