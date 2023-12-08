import Category from "@/app/Category";

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-row">
      <Category/>
      <div className="w-full">{children}</div>
    </div>
  )
}
