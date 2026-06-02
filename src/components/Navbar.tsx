import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-black/60 border-b border-white/10">
      <div className="text-2xl font-serif tracking-tighter text-white">AURELIUS</div>
      <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-neutral-400 font-medium">
        {['Home', 'Collection', 'Men', 'Women', 'Shoes'].map((item) => (
          <a key={item} href="#" className="hover:text-white transition-colors">
            {item}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-6 text-neutral-400">
        <Search className="w-5 h-5 cursor-pointer hover:text-white" />
        <User className="w-5 h-5 cursor-pointer hover:text-white" />
        <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-white" />
        <Menu className="w-5 h-5 md:hidden cursor-pointer" />
      </div>
    </nav>
  );
}
