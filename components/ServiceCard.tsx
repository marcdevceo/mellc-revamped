
interface ServiceCardProps {
    title: string;
    description: string;
    highlight: string[];
}

export default function Card({ title, description, highlight  }: ServiceCardProps) { 
    return (
        <div className="flex flex-col justify-between bg-gradient-to-br from-yellow-700 to-yellow-200 text-zinc-900 p-5 rounded-xl shadow-xl hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
            <div>
                <h2 className="text-xl text-center font-bold">{title}</h2>
                <p className="mt-2">{description}</p>
            </div>
            <ul className="mt-4">
                {highlight.map((item, index) => (
                    <li key={index} className="list-disc list-inside italic">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}