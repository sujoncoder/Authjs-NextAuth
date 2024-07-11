"use server";

import { signIn, signOut } from "../../../auth";

export const doSignOut = async () => {
  await signOut();
};

export const doSignInWithGoogle = async () => {
  await signIn("google", { callbackUrl: "http://localhost:3000/" });
};

export const login = async (formData) => {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      email: formData.get("password"),
      redirect: false,
    });
  } catch (error) {
    throw error;
  }
};
