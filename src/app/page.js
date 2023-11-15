import Image from "next/image";
import LoginBtn from "@/components/Auth/LoginBtn";

export default function Home() {
  return (
    <>
      <div className="index-container">
        <Image className="logo" src="/images/pl_logo.png" width={350} height={350} alt="PerpetuaLove Logo" unoptimized />
        <h1 className="index-header">PerpetuaLove.</h1>
        <LoginBtn />
      </div>
    </>
  )
}
