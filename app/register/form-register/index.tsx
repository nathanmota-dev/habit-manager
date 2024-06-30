"use client"

import { useState } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";


const RegisterSchema = z.object({
    name: z.string().min(3, "Nome é obrigatório").max(255),
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres")
});

type RegisterSchemaDataType = z.infer<typeof RegisterSchema>

export default function FormRegister() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<Partial<RegisterSchemaDataType>>({}); // o Partial torna as propriedades do não obrigatórias, o erro pode existir ou não

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const formData: RegisterSchemaDataType = { name, email, password };
        const result = RegisterSchema.safeParse(formData); // o safeParse é uma função que valida o objeto com base no schema

        if (!result.success) {
            const validationErrors: Partial<RegisterSchemaDataType> = {};
            result.error.errors.forEach((error) => {
                const field = error.path[0] as keyof RegisterSchemaDataType;
                validationErrors[field] = error.message;
            });
            setErrors(validationErrors);
        } else {
            console.log(result.data);
            // process form data
        }
    }

    return (
        <form className="bg-black" onSubmit={handleSubmit}>
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <span className="text-red-500">{errors.name}</span>}
                </div>
                <div className="mt-4">
                    <Label className="text-white">E-mail</Label>
                    <Input
                        className="bg-zinc-800/90 rounded-full mt-2 placeholder:text-zinc-600/90 focus-visible:text-white focus-visible:border-emerald-400/90"
                        type="email"
                        placeholder="Digite seu melhor e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="text-red-500">{errors.email}</span>}
                </div>
                <div className="mt-2">
                    <Label className="text-white">Senha</Label>
                    <Input
                        className="bg-zinc-800/90 rounded-full mt-2 placeholder:text-zinc-600/90 focus-visible:text-white focus-visible:border-emerald-400/90"
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <span className="text-red-500">{errors.password}</span>}
                </div>
                <Link href="/api/auth/register">
                    <Button
                        type="submit"
                        className=" w-full rounded-full font-bold bg-emerald-400/90 mt-6 hover:bg-emerald-400/70 transition-all">
                        Cadastrar
                    </Button>
                </Link>
            </div>
            <br />
            <div className="justify-center text-center">
                <h1 className="text-xl text-white">Já possui conta?</h1>
                <Link href="/login">
                    <Button className=" w-full rounded-full font-bold border border-emerald-400/90 bg-transparent mt-4 text-white hover:opacity-80 transition-all">Realizar Login</Button>
                </Link>
            </div>
        </form >
    );
}