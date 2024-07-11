import { doSignInWithGoogle } from "@/app/actions";

const SignIn = () => {
  return (
    <form action={doSignInWithGoogle}>
      <button
        type="submit"
        className="px-4 py-2 text-white rounded-full bg-blue-500 hover:brightness-105 active:bg-blue-600"
      >
        SignIn with google
      </button>
    </form>
  );
};

export default SignIn;
