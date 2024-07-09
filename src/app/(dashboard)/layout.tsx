import Sidebar from './Sidebar'

export default function SidebarLayout({
    children // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className="grow">
            {/* Include shared UI here e.g. sidebar */}
            <div className="h-full flex ">
                <Sidebar className="w-[300px] bg-white " />
                <main className="grow">{children}</main>
            </div>
        </section>
    )
}
