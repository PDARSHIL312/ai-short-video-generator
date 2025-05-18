import Image from "next/image";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start">
      <div>
        <Image
          src="/signinimage.png"
          alt="login"
          width={500}
          height={500}
          className="h-screen w-full object-contain"
        />
      </div>
      <div className="flex items-center justify-center h-screen">
        <SignIn />
      </div>
    </div>
  );
}
