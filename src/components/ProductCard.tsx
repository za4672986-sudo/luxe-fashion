import { Product } from '../types';
import { motion } from 'motion/react';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative bg-[#0d0d0d] border border-white/10 p-4 transition-all"
    >
      <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-neutral-900 border border-white/5">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${product.hoverImage ? 'group-hover:opacity-0' : ''}`}
        />
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        )}
        <button className="absolute bottom-4 left-4 right-4 bg-white text-black py-3 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest text-[9px] font-medium">
          Quick Add
        </button>
      </div>
      <div className="flex justify-between items-end">
        <h3 className="text-xs uppercase tracking-wider font-light text-white">{product.name}</h3>
        <p className="text-xs font-serif text-neutral-400">${product.price.toFixed(0)}</p>
      </div>
    </motion.div>
  );
}
