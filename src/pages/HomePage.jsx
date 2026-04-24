function HomePage() {
  return (
    <div className="w-full rounded-3xl border border-white/25 bg-white/10 p-8 text-center text-white shadow-2xl backdrop-blur-md">
      <h1 className="welcome-text text-4xl font-bold tracking-wide sm:text-5xl md:text-6xl">
        Welcome to My macOS Portfolio
      </h1>
      <p className="mt-4 text-base text-white/80 sm:text-lg">
        Click on Projects to open the Finder-style project window.
      </p>
    </div>
  )
}

export default HomePage
