"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const onError = (errors, e) => console.log(errors, e)

  const {
    register,
    formState: {
      errors
    },
    handleSubmit,    
  } = useForm();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    setError(false);
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      console.log("RES", res);
      router.replace("modulos");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 bg-gradient-to-br from-cyan-600 to-sky-900">
      <div className="flex min-h-full flex-col justify-center px-2 py-4 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image className="mx-auto h-30 w-auto" src="/brand.png"
            width={200} height={100}
            alt="WOMEX Logo" />
          <h1 className="p-0 text-6xl text-center text-blue-300">WOMEX<span className="text-sm">v0.9</span></h1>
          <h2 className="mt-2 text-center text-2xl leading-9 tracking-tight text-blue-300">Ingresa en tu cuenta</h2>
        </div>
      </div>

      <form className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-100">Email address</label>
            <div className="mt-2">
              {errors.email && <p className="text-red-500">e-mail requerido</p>}
              <input {...register("email", { required: true })}
                id="email" name="email" type="email" autoComplete="email" required 
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-100">Contraseña</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-blue-300 hover:text-indigo-500">Olvidaste tu contraseña?</a>
              </div>
            </div>
            <div className="mt-2">
              {errors.password && <p className="text-red-500">Password requerido</p>}
              <input {...register("password", { required: true })}
                id="password" name="password" type="password" autoComplete="current-password" required 
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
{error && <span className="text-red-500">{error}</span>}
          <div>
            <button
              className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-blue-800 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
          </div>
        </div>
      </form>
    </main>
  );
}