"use client";
import { useRouter } from "next/navigation";

const UserCard = ({ name, image }) => {
  let router = useRouter();
  return (
    <div className="w-44 mx-auto cursor-pointer">
      <div
        className="w-44 h-44 rounded-3xl flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden"
        onClick={() => router.push("/movies")}
      >
        <img
          draggable={false}
          className="w-max h-max object-contain"
          src={image}
          alt=""
        />
      </div>
      <div className="mt-1  text-2xl font-extrabold text-indigo-600 text-center group-hover:text-white">
        {name}
      </div>
    </div>
  );
};
export default UserCard;
