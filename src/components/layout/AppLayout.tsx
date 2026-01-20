'use client'

import { ReactNode } from "react"

interface AppLayoutProps {
  children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex justify-center">
      <div className="w-full max-w-md flex flex-col">
        {children}
      </div>
    </div>
  )
}

export default AppLayout