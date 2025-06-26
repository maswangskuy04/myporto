import { Icon } from '@iconify/react'

function Footer() {
  return (
    <footer className="bg-[#f8f9fa] dark:bg-[#0d0d0d] text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gray-600 dark:text-white mb-2">Reyhan Marlizal</h3>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Building scalable solutions, one line of code at a time.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="text-gray-400 dark:text-gray-600 hover:text-gray-500 hover:dark:text-gray-400">About</a></li>
            <li><a href="#skills" className="text-gray-400 dark:text-gray-600 hover:text-gray-500 hover:dark:text-gray-400">Skills</a></li>
            <li><a href="#projects" className="text-gray-400 dark:text-gray-600 hover:text-gray-500 hover:dark:text-gray-400">Projects</a></li>
          </ul>
        </div>

        <div className='flex flex-col space-y-2'>
          <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Contact</h4>
          <p className="flex gap-2 text-sm text-gray-500">
            <Icon icon="fluent-color:mail-16" className='text-xl' />
            reyhanmarlizal@gmail.com
            </p>
          <p className="flex gap-2 text-sm text-gray-500">
            <Icon icon="fluent-color:location-ripple-16" className='text-xl' />
            Indonesia
            </p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-400 dark:border-gray-700 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Reyhan Marlizal. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer