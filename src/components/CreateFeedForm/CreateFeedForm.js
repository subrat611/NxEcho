import Image from "next/image";
import { useForm } from "react-hook-form";

// store
import useAuthStore from "@/store/useAuthStore";

const CreateFeedForm = () => {
  const { name } = useAuthStore((state) => state.userData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createPost = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(createPost)}
      className="border border-gray-700 px-3 pb-4 pt-5 rounded-md flex flex-col bg-gray-900/40"
    >
      <div className="flex items-center">
        <Image
          width={50}
          height={50}
          src="/profile-image.jpg"
          className="rounded-full object-cover w-[50px] h-[50px]"
          alt="profile-image"
        />
        <p className="ml-2 capitalize">{name}</p>
      </div>
      <textarea
        placeholder="Share your thoughts..."
        className="focus:border-violet-500 outline-none text-gray-200 bg-transparent px-2 mt-2 post-scroll"
      />
      <button
        className="bg-violet-600 hover:bg-violet-700 px-8 py-2 rounded-md font-medium mt-4 self-end"
        type="submit"
      >
        Post
      </button>
    </form>
  );
};

export default CreateFeedForm;
