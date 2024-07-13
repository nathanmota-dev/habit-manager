import Navbar from "../components/navbar";


export default function HabitManager() {

    const habits = {};

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
            </main>
        </div>
    )
}
