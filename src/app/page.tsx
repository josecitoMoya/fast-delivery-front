import MainLogo from "@/common/MainLogo";
import Login from "@/components/Login";
import { useCreateUserMutation } from "@/store/services/userApi";

export default function Home() {
  const {} = useCreateUserMutation();
  return (
    <main>
      <MainLogo position="w-full mt-28 flex  justify-center" />
      <Login />
    </main>
  );
}
