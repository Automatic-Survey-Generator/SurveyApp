

export default function AuthenticationLayout({
    children // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
      <div>
        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10"></div>
        {children}
      </div>
    )
}

