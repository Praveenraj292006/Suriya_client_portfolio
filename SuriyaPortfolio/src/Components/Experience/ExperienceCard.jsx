import { CircleCheck } from "lucide-react";

export default function ExperienceCard({
    year,
    title,
    company,
    duration,
    highlights,
}) 

{
    
    return (
        <div
            className="
            experience-card
            group
            bg-white
            rounded-[32px]
            p-8
            border
            border-slate-200
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-2xl
            "
        >
            <span
                className="
                inline-block
                px-4
                py-2
                rounded-full
                bg-emerald-100
                text-emerald-700
                text-sm
                font-medium
                "
            >
                {year}
            </span>

            <h3 className="text-2xl font-semibold mt-6">
                {title}
            </h3>

            <p className="text-slate-500 mt-1">
                {company}
            </p>

            <div className="space-y-4 mt-8">

                {highlights.map((item) => (
                    <div
                        key={item}
                        className="flex items-center gap-3"
                    >
                        <CircleCheck
                            size={18}
                            className="text-emerald-500"
                        />

                        <span>{item}</span>

                    </div>
                ))}

            </div>

            <div
                className="
                mt-10
                pt-6
                border-t
                border-slate-200
                flex
                justify-between
                items-center
                "
            >
                <span className="text-sm text-slate-500">
                    Duration
                </span>

                <span className="font-medium">
                    {duration}
                </span>

            </div>

        </div>
    );
}