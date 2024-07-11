import { doSignOut } from "@/app/actions";
import { MdLogout } from "react-icons/md";

const SignOut = () => {
  return (
    <form action={doSignOut}>
      <button
        type="submit"
        className="px-4 py-2 flex items-center text-white rounded-full bg-blue-500 hover:brightness-105 active:bg-blue-600"
      >
        Sign out
        <MdLogout className="w-8" />
      </button>
    </form>
  );
};

export default SignOut;
