export function MobileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-muted">
      <div className="mx-auto min-h-screen max-w-md bg-background p-4">
        {children}
      </div>
    </main>
  )
}