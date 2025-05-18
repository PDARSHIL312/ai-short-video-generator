import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Welcome to Next.js!</h2>
      <Button className="bg-violet-700">Click me</Button>
      <UserButton />
    </div>
  );
}
