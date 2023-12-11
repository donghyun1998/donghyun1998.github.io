import Category from "@/app/Category";

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-row min-h-max min-w-max">
      <Category/>
      <div className="flex w-full h-full overflow-y-scroll">
          {children}
        </div>
    </div>
  )
}
