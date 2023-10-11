import { Quicksand } from "next/font/google";
const quicksand = Quicksand({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className={`bg-gray-600 ${quicksand.className}`}>
      <div className="w-full max-w-screen-xl p-4 mx-auto ">
        <div className="flex flex-col items-center justify-center gap-10">
          <h3 className="font-medium tracking-wider text-white text-md">
            © 2023 Prelo
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
