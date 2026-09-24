import React from 'react';
import { Search, ChevronDown, Globe, Mail } from 'lucide-react';

export default function RealEstateHome() {
  return (
    <div className="min-h-screen font-sans text-[var(--text)] bg-[var(--void)]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="text-2xl font-serif">Aethelred</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-[var(--text-secondary)]">Properties</a>
          <a href="#" className="hover:text-[var(--text-secondary)]">Buy</a>
          <a href="#" className="hover:text-[var(--text-secondary)]">Rent</a>
          <a href="#" className="hover:text-[var(--text-secondary)]">Sell</a>
          <a href="#" className="hover:text-[var(--text-secondary)]">About</a>
          <a href="#" className="hover:text-[var(--text-secondary)]">Contact</a>
        </div>
        <button className="bg-[var(--accent-dark)] text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-black transition-colors">
          List Your Property
        </button>
      </nav>

      {/* Hero Section */}
      <div className="px-10 pb-10">
        <div className="relative rounded-2xl overflow-hidden h-[600px] flex flex-col justify-between p-12"
             style={{ 
               backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')",
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-0"></div>
          
          <div className="relative z-10 max-w-2xl mt-12">
            <h1 className="text-6xl font-serif text-white leading-tight mb-6">
              Find a place worth coming home to.
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-lg leading-relaxed">
              Discover curated luxury properties that redefine modern living. Your journey to an exceptional home begins here.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-[var(--accent-dark)] text-white px-6 py-3 rounded text-sm font-medium hover:bg-black transition-colors">
                Explore Properties
              </button>
              <button className="bg-white/90 backdrop-blur text-[var(--text)] px-6 py-3 rounded text-sm font-medium hover:bg-white transition-colors">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Floating Search Bar */}
        <div className="relative z-20 max-w-5xl mx-auto -mt-16 bg-white rounded-xl shadow-[var(--shadow-elevated)] p-4 flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center gap-4 px-4 border-r border-[var(--border)]">
            <div className="flex flex-col flex-1">
              <span className="text-xs text-[var(--text-secondary)] mb-1">Location</span>
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[var(--text-secondary)]" />
                <input type="text" placeholder="Location" className="text-sm outline-none w-full bg-transparent font-medium" />
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col px-4 border-r border-[var(--border)]">
            <span className="text-xs text-[var(--text-secondary)] mb-1">Property Type</span>
            <div className="flex items-center justify-between cursor-pointer">
              <span className="text-sm font-medium">Property Type</span>
              <ChevronDown className="w-4 h-4 text-[var(--text-secondary)]" />
            </div>
          </div>
          
          <div className="flex-1 flex flex-col px-4 border-r border-[var(--border)]">
            <span className="text-xs text-[var(--text-secondary)] mb-1">Price Range</span>
            <div className="flex items-center justify-between cursor-pointer">
              <span className="text-sm font-medium">Price Range</span>
              <ChevronDown className="w-4 h-4 text-[var(--text-secondary)]" />
            </div>
          </div>
          
          <div className="flex-1 flex flex-col px-4">
            <span className="text-xs text-[var(--text-secondary)] mb-1">Bedrooms</span>
            <div className="flex items-center justify-between cursor-pointer">
              <span className="text-sm font-medium">Bedrooms</span>
              <ChevronDown className="w-4 h-4 text-[var(--text-secondary)]" />
            </div>
          </div>
          
          <button className="bg-[var(--accent-dark)] text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-black transition-colors ml-2">
            Search
          </button>
        </div>
      </div>

      <div className="px-10 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          
          {/* Main Properties Row */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="rounded-xl overflow-hidden mb-4 relative aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Modern House" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur px-2.5 py-1 text-xs font-medium rounded">For Sale</span>
                  <span className="bg-white/90 backdrop-blur px-2.5 py-1 text-xs font-medium rounded">Featured</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-1">Exclusive Modern Houses</h3>
              <p className="text-[var(--text-secondary)] text-sm mb-3">Locations Here</p>
              <div className="flex items-center gap-4 text-sm font-medium">
                <span>$78,900</span>
                <span className="text-[var(--text-secondary)]">3 Beds</span>
                <span className="text-[var(--text-secondary)]">3 Baths</span>
                <span className="text-[var(--text-secondary)]">Area 3</span>
              </div>
            </div>
            
            <div>
              <div className="rounded-xl overflow-hidden mb-4 relative aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="City Apartments" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur px-2.5 py-1 text-xs font-medium rounded">For Sale</span>
                  <span className="bg-white/90 backdrop-blur px-2.5 py-1 text-xs font-medium rounded">New</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-1">Luxurious city Apartments</h3>
              <p className="text-[var(--text-secondary)] text-sm mb-3">Location, City</p>
              <div className="flex items-center gap-4 text-sm font-medium">
                <span>$74,000</span>
                <span className="text-[var(--text-secondary)]">2 Beds</span>
                <span className="text-[var(--text-secondary)]">3 Baths</span>
                <span className="text-[var(--text-secondary)]">Area 3</span>
              </div>
            </div>
          </div>

          {/* Explore by Lifestyle */}
          <section>
            <h2 className="font-serif text-4xl mb-8">Explore by Lifestyle</h2>
            <div className="grid grid-cols-4 gap-4">
              {[
                { name: "Luxury Apartments", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                { name: "Modern Houses", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                { name: "Waterfront Properties", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                { name: "Investment Properties", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="rounded-xl overflow-hidden aspect-[3/4] mb-3">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="font-medium text-sm">{item.name}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* About the Agency */}
          <section className="pt-8">
            <h2 className="font-serif text-4xl mb-8">About the Agency</h2>
            <div className="grid grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Agent 1" className="rounded-xl w-full h-48 object-cover" />
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Agent 2" className="rounded-xl w-full h-48 object-cover" />
                </div>
                <div className="pt-8">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Agent 3" className="rounded-xl w-full h-64 object-cover" />
                </div>
              </div>
              
              <div>
                <h3 className="font-serif text-2xl mb-4">Our Estate Agency Description</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="border border-[var(--border)] rounded-lg p-4 text-center">
                    <div className="font-serif text-3xl mb-1">15+</div>
                    <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">Years Experience</div>
                  </div>
                  <div className="border border-[var(--border)] rounded-lg p-4 text-center">
                    <div className="font-serif text-3xl mb-1">850+</div>
                    <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">Properties Sold</div>
                  </div>
                  <div className="border border-[var(--border)] rounded-lg p-4 text-center">
                    <div className="font-serif text-3xl mb-1">24</div>
                    <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">Cities</div>
                  </div>
                </div>
                <button className="bg-[var(--accent-dark)] text-white px-6 py-3 rounded text-sm font-medium hover:bg-black transition-colors">
                  Meet Our Team
                </button>
              </div>
            </div>
          </section>

        </div>

        {/* Right Column (Sidebar) */}
        <div className="lg:col-span-4 flex flex-col gap-10">
          <div className="flex justify-between items-end mb-2">
            <h2 className="font-serif text-3xl">Properties</h2>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center hover:bg-black hover:text-white transition-colors">{"<"}</button>
              <button className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center hover:bg-black hover:text-white transition-colors">{">"}</button>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 h-[1000px] overflow-hidden relative">
            {/* Fade out mask at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--void)] to-transparent z-10 pointer-events-none"></div>
            
            {[1, 2, 3].map((item, i) => (
              <div key={i} className="flex gap-4 group cursor-pointer">
                <div className="w-40 h-32 rounded-lg overflow-hidden shrink-0 relative">
                  <img src={`https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sig=${i}`} alt="Property" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 left-2">
                    <span className="bg-white/90 backdrop-blur px-1.5 py-0.5 text-[10px] font-medium rounded">For Sale</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-serif text-lg mb-1 leading-tight">Luxurious City Apartments</h4>
                  <p className="text-[var(--text-secondary)] text-[11px] mb-2">Location, City</p>
                  <div className="flex items-center gap-3 text-[11px] font-medium">
                    <span>$10,000</span>
                    <span className="text-[var(--text-secondary)]">2 Beds</span>
                    <span className="text-[var(--text-secondary)]">3 Baths</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="pt-8">
            <h2 className="font-serif text-3xl mb-8">Testimonials</h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                { name: "Anna Marie", text: "A approachable, professional and communicative team. Our transaction was entirely stress-free." },
                { name: "Ahmed Demir", text: "Their curated luxury properties consistently exceed expectations. Highly recommended." }
              ].map((test, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-[var(--border)]">
                  <p className="text-sm text-[var(--text-secondary)] mb-4 italic">"{test.text}"</p>
                  <div className="flex items-center gap-3">
                    <img src={`https://i.pravatar.cc/150?img=${40+i}`} alt="User" className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="font-medium text-sm">{test.name}</div>
                      <div className="text-[10px] text-[var(--text-secondary)] uppercase">Location</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Editorial */}
      <section className="px-10 py-16 bg-white border-y border-[var(--border)]">
        <div className="flex justify-between items-end mb-8">
          <h2 className="font-serif text-4xl">Featured Property/Editorial</h2>
        </div>
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden aspect-video">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Featured Property" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-serif text-4xl mb-4">Spectacular luxury property</h3>
            <div className="flex gap-4 text-sm font-medium mb-6">
              <span className="text-[var(--text-secondary)]">2 Beds</span>
              <span className="text-[var(--text-secondary)]">3 Baths</span>
              <span className="text-[var(--text-secondary)]">Area 3</span>
            </div>
            <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
              Discover curated luxury properties that redefine modern living. Your journey to an exceptional home begins here. This stunning property offers breathtaking views and unparalleled comfort for the most discerning buyers.
            </p>
            <button className="bg-[var(--accent-dark)] text-white px-6 py-3 rounded text-sm font-medium hover:bg-black transition-colors">
              View Property
            </button>
          </div>
        </div>
      </section>

      {/* Footer / Subscribe */}
      <div className="bg-[#1E1D19] text-white pt-24 pb-8">
        <div className="max-w-xl mx-auto text-center mb-24">
          <h2 className="font-serif text-4xl mb-4">Stay ahead of the market</h2>
          <p className="text-white/60 text-sm mb-8">Discover curated luxury properties that redefine modern living. Your journey to an exceptional home begins here.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Email address" className="flex-1 bg-white/10 border border-white/20 rounded-md px-4 py-3 text-sm outline-none focus:border-white transition-colors" />
            <button className="bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <div className="px-10 border-t border-white/10 pt-12 flex justify-between items-start">
          <div className="text-2xl font-serif">Aethelred</div>
          <div className="flex gap-24">
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a href="#" className="hover:text-white">Properties</a>
              <a href="#" className="hover:text-white">Buy</a>
              <a href="#" className="hover:text-white">Rent</a>
              <a href="#" className="hover:text-white">Sell</a>
            </div>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a href="#" className="hover:text-white">Contact</a>
              <a href="#" className="hover:text-white">Contact-action</a>
              <a href="#" className="hover:text-white">Testimonials</a>
              <a href="#" className="hover:text-white">Careers</a>
            </div>
          </div>
          <div className="flex gap-4">
            <Globe className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
            <Mail className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
