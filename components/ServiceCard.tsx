
interface ServiceCardProps {
    title: string;
    description: string;
    highlight1: string;
    highlight2: string;
    highlight3: string;
}

export default function Card({ title, description, highlight1, highlight2, highlight3  }: ServiceCardProps) { 
    return (
        <div className="bg-gradient-to-br from-yellow-700 to-yellow-200 text-zinc-900 p-5 rounded-xl shadow-xl hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
            <h2 className="text-xl text-center font-bold">{title}</h2>
            <p className="mt-2">{description}</p>
            <ul className="list-disc list-inside mt-4">
                <li>{highlight1}</li>
                <li>{highlight2}</li>
                <li>{highlight3}</li>
            </ul>
        </div>
    )
}