import Image from "next/image";
import { FiArrowDown } from "react-icons/fi";

export default function HomeHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
      <a href="#start" aria-label="ZST Koduj — strona główna">
        <Image
          src="/zst_logo.png"
          alt="Logo ZST"
          width={158}
          height={45}
          priority
        />
      </a>
      <a
        href="#wyzwanie"
        className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold transition hover:border-violet-500 hover:text-violet-700 sm:px-5"
      >
        Pierwsze wyzwanie{" "}
        <FiArrowDown aria-hidden="true" className="ml-1 inline" />
      </a>
    </header>
  );
}
