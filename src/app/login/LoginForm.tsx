"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "./actions";

export default function LoginForm() {
    const [state, loginAction] = useActionState(login, undefined);

    return (
        <form action={loginAction} className="flex max-w-[300px] flex-col gap-2 bg-gray-800 p-4 rounded-md">

            <div className="flex flex-col gap-2">
                <input id="email" name="email" placeholder="Email" type="email" className="p-2 rounded-md bg-gray-700 text-white" />
            </div>
            {state?.errors?.email && (
                <p className="text-red-500">{state.errors.email}</p>
            )}

            <div className="flex flex-col gap-2">
                <input id="password" name="password" placeholder="Password" type="password" className="p-2 rounded-md bg-gray-700 text-white" />
            </div>
            {state?.errors?.password && (
                <p className="text-red-500">{state.errors.password}</p>
            )}

            <SubmitButton />
        </form>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} type="submit">
            Login
        </button>
    )
}