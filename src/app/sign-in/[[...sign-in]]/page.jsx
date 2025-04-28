import { SignIn, SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex items-center justify-center p3">
      <SignIn />
    </div>
  );
};

export default Page;
