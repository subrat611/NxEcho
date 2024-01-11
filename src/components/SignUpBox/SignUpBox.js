import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";

// appwrite
import appwriteAuth from "@/appwrite/auth";

// zustand store
import useAuthStore from "@/store/useAuthStore";

const SignUpBox = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const router = useRouter();

  const loginStore = useAuthStore((state) => state.login);

  const signUpHandler = async (data) => {
    try {
      const session = await appwriteAuth.createAccount(data);
      
      if (session) {
        const userData = await appwriteAuth.getCurrentUser();

        if (userData) {
          loginStore(userData);
          router.push("/");
        }
      }
    } catch (err) {}
  };

  return (
    <section className="text-white">
      <div className="flex justify-center items-center h-screen">
        <div className="w-11/12 md:w-3/6 flex justify-center relative">
          <div className="absolute -top-[280px] md:-top-[260px] bg-gradient-to-r from-violet-700 to-green-700 w-[50vw] h-[50vh] blur-[150px] opacity-70 md:opacity-30 rounded-full z-0"></div>
          <form
            className="flex flex-col justify-center border rounded-md border-gray-700 bg-gray-900/70 py-10 px-5 z-10 h-full w-11/12 md:w-[400px]"
            onSubmit={handleSubmit(signUpHandler)}
          >
            <div>
              <div className="text-gray-200">
                <p className="font-semibold text-xl">Welcome to NxEcho</p>
                <p>Please sign in or sign up below.</p>
              </div>
              <div>
                <div className="flex flex-col my-3">
                  <label htmlFor="name">Name</label>
                  <input
                    placeholder="Enter your name"
                    type="text"
                    id="name"
                    {...register("name", {
                      required: true,
                    })}
                    className="mt-1 p-2 rounded-sm border border-slate-500 focus:border-violet-500 outline-none text-gray-200 bg-transparent"
                  />
                  {errors.name && (
                    <p role="alert" className="text-red-400 pt-1 pl-1">
                      Name required
                    </p>
                  )}
                </div>
                <div className="flex flex-col my-3">
                  <label htmlFor="email">Email</label>
                  <input
                    placeholder="test@gmail.com"
                    type="text"
                    id="email"
                    {...register("email", {
                      required: true,
                      validate: {
                        matchPatern: (value) =>
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                            value
                          ) || "Email address must be a valid address",
                      },
                    })}
                    className="mt-1 p-2 rounded-sm border border-slate-500 focus:border-violet-500 outline-none text-gray-200 bg-transparent"
                  />
                  {errors.email && (
                    <p role="alert" className="text-red-400 pt-1 pl-1">
                      {errors.email.message || "Email required"}
                    </p>
                  )}
                </div>
                <div className="flex flex-col my-3">
                  <label htmlFor="password">Create password</label>
                  <input
                    placeholder="password"
                    type="password"
                    id="password"
                    {...register("password", {
                      required: true,
                    })}
                    className="mt-1 p-2 rounded-sm border border-slate-500 focus:border-violet-500 outline-none text-gray-200 bg-transparent"
                  />
                  {errors.password && (
                    <p role="alert" className="text-red-400 pt-1 pl-1">
                      Password required
                    </p>
                  )}
                </div>
                <button
                  className="bg-violet-600 hover:bg-violet-700 px-3 py-2 rounded-md font-medium w-full mt-3"
                  type="submit"
                >
                  Sign up
                </button>
                <p className="text-center mt-3">
                  Already have an account?
                  <Link
                    href="/signin"
                    className="ml-2 text-violet-300 font-medium"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpBox;
