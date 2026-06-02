export default function Footer() {
  return (
    <footer className="bg-black text-neutral-400 py-16 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        <div>
          <h4 className="text-xl font-serif text-white mb-6">AURELIUS</h4>
          <p className="text-xs">Experience the pinnacle of luxury fashion. Curated for the modern refined individual.</p>
        </div>
        <div>
          <h5 className="font-semibold text-white mb-4 uppercase text-[10px] tracking-widest">Shop</h5>
          <ul className="space-y-2 text-xs">
            <li className="hover:text-white cursor-pointer">New Arrivals</li>
            <li className="hover:text-white cursor-pointer">Best Sellers</li>
            <li className="hover:text-white cursor-pointer">Sale</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-white mb-4 uppercase text-[10px] tracking-widest">Legal</h5>
          <ul className="space-y-2 text-xs">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Shipping Info</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-white mb-4 uppercase text-[10px] tracking-widest">Newsletter</h5>
          <input type="email" placeholder="Email address" className="w-full bg-transparent border-b border-white/20 py-2 text-xs mb-2 focus:border-white focus:outline-none" />
          <button className="text-[10px] uppercase tracking-widest font-bold text-white hover:text-neutral-500">Subscribe</button>
        </div>
      </div>
    </footer>
  );
}
