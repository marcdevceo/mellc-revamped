import Link from "next/link";

interface ButtonProps {
  button_name: string;
  href: string;
}   

export default function Button({button_name, href}: ButtonProps) {
  return (
    <Link href={href}>
        <button
        className="bg-zinc-600 text-zinc-200 font-bold py-2 px-4 mt-5 rounded-lg hover:bg-zinc-200 hover:text-zinc-700 transition duration-300 ease-in-out transform"
        >
        {button_name}
        </button>
    </Link>
  );
}