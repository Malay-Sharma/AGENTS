"use client"

import Header from "@/components/Header"
import { Authenticated } from "convex/react";

export default function DashboardPage({
    children,
}:{
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen">
            <Authenticated>
                <h1>Sidebar</h1>
                {/* <Sidebar /> */}
            </Authenticated>

            <div className="flex-1 flex flex-col min-w-0">
                <Header />
                <main>{children}</main>
            </div>
        </div>

    )

}