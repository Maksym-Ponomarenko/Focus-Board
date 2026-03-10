import type { Metadata } from "next";
import React from "react";
import './globals.css'
import Header from "@/components/Header/Header";
import Providers from "@/app/provider";
import TasksHydrator from "@/hooks/TasksHydrator";

export const metadata: Metadata = {
  title: "Focus Board",
  description: " Created by Maksym Ponomarenko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <Providers >
          <html lang="en">
          <body >
          <Header/>
          <TasksHydrator/>
          {children}
          </body>
          </html>
      </Providers>

  );
}
