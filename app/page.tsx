"use client"

import { useRouter } from "next/navigation"
import bcrypt from 'bcryptjs';
import { useEffect } from "react"

export default function page() {
    useEffect(() => {
        const payload = {
            id: "U-" + String(Date.now()).slice(-9),
            username: "admin",
            email: "admin@gmail.com",
            password: bcrypt.hashSync("password"),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
        localStorage.setItem("users", JSON.stringify(payload))
        window.location.href = "/landing-page"
    }, [])
}
