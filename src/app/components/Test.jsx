export default function Test() {
  <body className="bg-gray-100">
    <div className="min-h-screen bg-gray-100">
      <aside className="fixed left-0 top-0 z-20 hidden h-screen w-64 bg-white shadow-md md:block">
        <div className="border-b p-4 text-xl font-bold">MyDashboard</div>
        <nav className="space-y-2 p-4">
          <a href="#" className="block rounded px-4 py-2 hover:bg-gray-100">
            🏠 Dashboard
          </a>
          <a href="#" className="block rounded px-4 py-2 hover:bg-gray-100">
            📦 Products
          </a>
          <a href="#" className="block rounded px-4 py-2 hover:bg-gray-100">
            👥 Users
          </a>
          <a href="#" className="block rounded px-4 py-2 hover:bg-gray-100">
            ⚙️ Settings
          </a>
        </nav>
      </aside>

      <div className="md:ml-64">
        <header className="fixed left-0 right-0 top-0 z-30 flex h-16 items-center justify-between bg-white px-4 shadow-md md:left-64">
          <button className="block md:hidden" id="menuToggle">
            ☰
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Hi, Farhan</span>
            <img
              src="https://i.pravatar.cc/32"
              className="h-8 w-8 rounded-full"
              alt="avatar"
            />
          </div>
        </header>

        <main className="p-6 pt-16">
          <h2 className="mb-4 text-2xl font-bold">Welcome back!</h2>
          <div className="space-y-4">
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. (scroll
              down...)
            </p>
            <div className="h-[2000px] w-auto rounded bg-gray-200 text-black">
              Long content here...
            </div>
          </div>
        </main>
      </div>
    </div>
  </body>;
}
