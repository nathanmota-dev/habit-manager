import FormLogin from "./form-login";

export default function Login() {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-black lg:bg-emerald-600/90">
            <div className="md:max-w-[530px] w-[90%] bg-black p-20 rounded-2xl">
                <FormLogin />
            </div>
        </div>
    )
}