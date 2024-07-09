

export default function AuthenticationLayout({
    children // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
      <div>
        Authentication Layout
        {children}
      </div>
    )
}

