import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const RegisterSchema = z.object({
    name: z.string().min(3, "Nome é obrigatório").max(255),
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres")
});

type RegisterSchemaDataType = z.infer<typeof RegisterSchema>

export default function FormRegister() {

    const { handleSubmit, register, formState: { errors } } = useForm<RegisterSchemaDataType>({
        resolver: zodResolver(RegisterSchema)
    });

    const onSubmit = (data: RegisterSchemaDataType) => {
        console.log(data);
    };

    return (
        <form className="bg-black" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2 text-center">
                <h1 className="text-3xl text-white font-bold">Registro</h1>
                <p className="text-white text-xs pt-2" >Ao continuar, você concorda com nosso <a href="#">Acordo de Usuário</a> e reconhece que compreende a <a>Política de Privacidade</a></p>
            </div>
            <div className="flex flex-col gap-y-2 pt-4">
                <Button className="gap-x-2 border border-black rounded-full font-bold bg-white hover:bg-white/70 transition-all"><FcGoogle />Cadastrar com Google</Button>
                <Button className="gap-x-2 border border-black rounded-full font-bold bg-white hover:bg-white/70 transition-all"><FaGithub />Cadastrar com Github</Button>
            </div>
            <div >
                <div className="mt-4">
                    <Label className="text-white">Nome</Label>
                    <Input
                        className="bg-zinc-800/90 rounded-full mt-2 placeholder:text-zinc-600/90 focus-visible:text-white focus-visible:border-emerald-400/90"
                        type="text"
                        placeholder="Digite seu nome completo"
                        {...register("name")}
                    />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                </div>
                <div className="mt-4">
                    <Label className="text-white">E-mail</Label>
                    <Input
                        className="bg-zinc-800/90 rounded-full mt-2 placeholder:text-zinc-600/90 focus-visible:text-white focus-visible:border-emerald-400/90"
                        type="email"
                        placeholder="Digite seu melhor e-mail"
                        {...register("email")}
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>
                <div className="mt-2">
                    <Label className="text-white">Senha</Label>
                    <Input
                        className="bg-zinc-800/90 rounded-full mt-2 placeholder:text-zinc-600/90 focus-visible:text-white focus-visible:border-emerald-400/90"
                        type="password"
                        placeholder="Digite sua senha"
                        {...register("password")}
                    />
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                </div>
                <Button
                    type="submit"
                    className=" w-full rounded-full font-bold bg-emerald-400/90 mt-6 hover:bg-emerald-400/70 transition-all">
                    Cadastrar
                </Button>
            </div>
            <br />
            <div className="justify-center text-center">
                <h1 className="text-xl text-white">Já possui conta?</h1>
                <Button className=" w-full rounded-full font-bold border border-emerald-400/90 bg-transparent mt-4 text-white hover:opacity-80 transition-all">Realizar Login</Button>
            </div>
        </form >
    );
}