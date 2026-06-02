import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />                
      <img
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000"
        alt="Hero Fashion"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="relative z-20 flex flex-col items-start justify-center h-full px-20">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-9xl font-serif leading-[0.9] mb-8"
        >
          Eternal<br/>
          <i className="italic">Sophistication</i>
        </motion.h1>
        <div className="flex gap-6">
          <button className="bg-white text-black px-10 py-4 text-xs uppercase tracking-widest font-medium hover:bg-neutral-200 transition-all">
            Shop Now
          </button>
          <button className="border border-white/20 px-10 py-4 text-xs text-white uppercase tracking-widest font-medium hover:bg-white/5 transition-all">
            The Film
          </button>
        </div>
      </div>
    </section>
  );
}
