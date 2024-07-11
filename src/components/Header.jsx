import Image from "next/image";
import { auth } from "../../auth";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const Header = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      {session?.user ? (
        <div className="flex justify-center items-center space-x-4 my-4  ">
          <p className="text-2xl font-semibold">{session?.user?.name}</p>
          <Image
            src={session?.user?.image}
            width={32}
            height={32}
            alt={session?.user?.name}
            className="rounded-full ring-2 ring-fuchsia-300"
          />
          <SignOut />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center space-y-4 my-20">
          <p className="text-xl text-slate-400">Please SignIn</p>
          <SignIn />
        </div>
      )}
    </div>
  );
};

export default Header;
