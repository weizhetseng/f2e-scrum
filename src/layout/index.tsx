import React from 'react'

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full relative h-dvh flex flex-col bg-black">
      {children}
      <footer className="text-primary_green py-3 text-center">
        © 2022 The F2E | UI Design - EG | F2E - Wei Zhe Tseng
      </footer>
    </div>
  )
}

export default Layout
