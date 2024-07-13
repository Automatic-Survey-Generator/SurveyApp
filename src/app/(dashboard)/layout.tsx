

export default function SidebarLayout({
    children // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className="h-full">
            {/* Include shared UI here e.g. sidebar */}
            <div className="h-full ">
                <main className="h-full">{children}</main>
            </div>
        </section>
    )
}
