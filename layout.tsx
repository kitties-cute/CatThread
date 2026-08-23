import './globals.css';

export const metadata = {
  title: 'CatThread - 2016 Community Forums',
  description: 'The premier place for internet discussion.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#eef2f5] text-[#111] font-sans antialiased m-0 p-0">
        {/* Classic 2016 Forum Header Banner */}
        <header className="bg-[#2b4c7e] text-white border-b-4 border-[#1f355c] px-6 py-4 shadow-md">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight">🐱 CatThread</h1>
            <nav className="text-sm space-x-4">
              <a href="/" className="hover:underline">Home</a>
              <a href="/members" className="hover:underline">Members</a>
              <a href="/faq" className="hover:underline">FAQ</a>
            </nav>
          </div>
        </header>

        {/* Main Content Container */}
        <main className="max-w-5xl mx-auto my-6 p-4 bg-white border border-[#ccc] shadow-sm rounded-sm">
          {children}
        </main>

        <footer className="text-center text-xs text-[#666] py-6">
          CatThread Forum Engine v1.0 • Powered by Vercel & Nostalgia
        </footer>
      </body>
    </html>
  );
}
