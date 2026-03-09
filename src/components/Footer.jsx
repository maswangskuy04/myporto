function Footer() {
  return (
    <div className='relative px-6 py-6 bg-[#f8f9fa] dark:bg-[#2d2e2e] transition-colors duration-500'>
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs text-zinc-600 dark:text-zinc-300">
          &copy; {new Date().getFullYear()} Reyhan Marlizal
        </p>
      </div>
    </div>
  )
}

export default Footer
