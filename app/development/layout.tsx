export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    // <body className="flex h-screen w-screen flex-col">
      <div className=" flex h-full w-screen overflow-y-scroll">{children}</div>
    // </body>
  )
}
