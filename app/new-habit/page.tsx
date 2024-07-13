import Navbar from "../components/navbar";


export default function NewHabit() {
    return (
        <main className="container relative flex flex-col gap-8 px-12 pt-16">
            <Navbar />

            <h1 className="text-4xl font-light text-center text-white">Novo hábito</h1>

            <form className="flex flex-col gap-4 mt-4">
                <input type="text" name="habit" id="habit"
                    className="p-2 text-xl text-white rounded bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
                />

            </form>

            <button className="bg-[#45EDAD] text-neutral-800 text-2xl p-2 rounded mt-8">cadastrar</button>
            <button className="bg-neutral-800 text-[#F85858] text-2xl p-2 rounded">cancelar</button>
        </main>
    )
}
