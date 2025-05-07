import Link from "next/link";

interface ButtonProps {
  button_name: string;
  href: string;
}   

export default function Button({button_name, href}: ButtonProps) {
  return (
    <Link href={href}>
        <button
        className="bg-yellow-700 text-white font-bold py-4 px-6 mt-5 rounded-xl hover:bg-yellow-200 hover:text-zinc-800 transition duration-300 ease-in-out transform"
        >
        {button_name}
        </button>
    </Link>
  );
}