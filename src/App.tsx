/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { featuredProducts } from './data';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="font-sans text-white bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      
      <main className="py-20 px-8 max-w-7xl mx-auto">
        <section className="mb-20">
          <h2 className="text-4xl font-serif text-center mb-12">Featured Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="bg-neutral-900/50 p-16 text-center border border-white/5">
            <h3 className="text-2xl font-serif mb-4">Our Commitment</h3>
            <p className="max-w-xl mx-auto text-neutral-400">Discover our dedication to quality, craftsmanship, and timeless style. Every piece is curated to tell a story.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
