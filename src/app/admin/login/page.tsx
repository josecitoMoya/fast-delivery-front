import MainLogo from "@/common/MainLogo";
import Login from "@/components/Login-admin";

export default function Home() {
  return (
    <main>
      <MainLogo position="w-full mt-28 flex  justify-center" />
      <Login />
    </main>
  );
}
