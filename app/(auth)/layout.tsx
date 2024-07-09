import { Logo } from "./_components/logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen flex flex-col space-y-6 items-center justify-center">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
