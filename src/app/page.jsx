import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center w-full text-4xl text-blue-900 font-bold py-4 items-center h-full">
        main page 
      </div>
      <Link href="users" className="text-2xl text-green-900 font-bold ml-5">
        Users
      </Link>
    </>
  );
}
