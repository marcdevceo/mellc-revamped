import Image from 'next/image';

interface CardProps {
    title: string;
    description: string;
    image: string;
}

export default function Card({ title, description, image }: CardProps) { 
    return (
        <div className="bg-zinc-200 text-zinc-900 p-5 rounded-xl shadow-xl mb-14 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
            <h2 className="text-xl text-center font-bold">{title}</h2>
            <div className="flex justify-center mb-5">
                <Image 
                    src={image}
                    alt={title}
                    width={50}
                    height={50}
                    className="mt-2 rounded-lg"
                />
            </div>
            <p className="mt-2">{description}</p>
        </div>
    )
}