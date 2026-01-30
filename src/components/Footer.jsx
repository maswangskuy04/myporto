function Footer() {
  return (
    <div className='px-6 py-6 bg-[#f5f3f0] dark:bg-[#231f20] transition-colors duration-500'>
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs text-zinc-600 dark:text-zinc-300">
          &copy; {new Date().getFullYear()} Reyhan Marlizal
        </p>
      </div>
    </div>
  )
}

export default Footer
