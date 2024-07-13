import Navbar from "../components/navbar";
import Image from "next/image";
import DayState from "../components/day-state";
import Link from "next/link";


export default function HabitManager() {

    const habits = {
        "beber 5L de água": {
            "2024-06-13": true,
            "2024-06-12": false,
            "2024-06-11": true
        },
        "academia": {
            "2024-06-13": true,
            "2024-06-12": false,
            "2024-06-11": true
        },
        "estudar programação": {
            "2024-06-13": true,
            "2024-06-12": false,
            "2024-06-11": true
        }
    };

    const today = new Date();
    const todayWeekDay = today.getDay();
    const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

    const sortedWeekDays = weekDays.slice(todayWeekDay).concat(weekDays.slice(0, todayWeekDay));

    return (
        <div>
            <Navbar />
            <main className="container relative flex flex-col gap-8 px-4 pt-16">
                {habits === null ||
                    (Object.keys(habits).length === 0 && (
                        <h1 className="mt-20 text-4xl font-light text-white text-center">
                            Você não tem hábitos cadastrados
                        </h1>
                    ))}
                {habits != null && Object.entries(habits).map(([habit, habitStreak]) => (
                    <div key={habit} className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-light text-white">{habit}</span>
                            <button>
                                <Image
                                    src="/icons/trash.svg"
                                    alt="Remover hábito"
                                    width={20}
                                    height={20} />
                            </button>
                        </div>
                        <div>
                            <section className="bg-neutral-800 rounded grid grid-cols-7 p-2">
                                {sortedWeekDays.map((day) => (
                                    <div key={day} className="flex flex-col last:font-bold">
                                        <span className="text-xs text-white font-sans text-center">
                                            {day}
                                        </span>
                                        <DayState day={true} />
                                    </div>
                                ))}
                            </section>
                        </div>
                    </div>
                ))}

                <Link href="/new-habit">
                    <button className="fixed text-center bottom-10 w-2/3 left-1/2 -translate-x-1/2 text-neutral-900 bg-[#45EDAD] text-2xl p-2 rounded">
                        Novo Hábito
                    </button>
                </Link>

            </main>
        </div>
    )
}
