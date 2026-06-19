import { motion } from 'motion/react';
import { 
  Home, Ruler, ShieldCheck, Droplet, Hammer, CheckSquare, Wrench, Pickaxe, 
  Building2, Building, PlusSquare, Warehouse, Factory, Blocks, Map,
  HardHat, ClipboardList, Box, Square, Waves, RefreshCw, Bath, 
  Utensils, Settings, Tent, PaintBucket, Umbrella, Droplets, Grid, Sofa, 
  Layers, LayoutGrid, ArrowRightLeft
} from 'lucide-react';

const mainServices = [
  { icon: Home, title: "Building Construction", desc: "Complete end-to-end building and custom home construction services." },
  { icon: Ruler, title: "Civil Eng. Consulting", desc: "Expert technical architectural planning and civil engineering." },
  { icon: Hammer, title: "Home Renovations", desc: "Kitchen, bathroom remodeling, and general interior transformations." },
  { icon: ShieldCheck, title: "Structural Repairs", desc: "Interior and exterior structural repairs to secure your property." },
  { icon: Droplet, title: "Basement Waterproofing", desc: "Foundation drainage, water and moisture control services." },
  { icon: Pickaxe, title: "Site Excavation", desc: "Professional demolition and construction site excavation." },
  { icon: Wrench, title: "Concrete & Steel", desc: "Concrete construction, steel building construction, and slab foundations." },
  { icon: CheckSquare, title: "Finishing & Tile Work", desc: "Tile work installation, flooring fitting, and drywall repair." },
];

const categorizedServices = [
  {
    category: "Construction & Building",
    items: [
      { name: "Building construction", icon: Building2 },
      { name: "New building construction", icon: Building },
      { name: "Custom home building", icon: Home },
      { name: "Home addition construction", icon: PlusSquare },
      { name: "Home building", icon: Home },
      { name: "Metal building construction", icon: Warehouse },
      { name: "Steel building construction", icon: Factory },
      { name: "Concrete construction", icon: Blocks },
      { name: "Road construction", icon: Map }
    ]
  },
  {
    category: "Engineering & Site Prep",
    items: [
      { name: "Civil engineering consulting", icon: HardHat },
      { name: "Construction management", icon: ClipboardList },
      { name: "Construction site excavation", icon: Pickaxe },
      { name: "Demolition", icon: Hammer },
      { name: "Crawl space foundation construction", icon: Box },
      { name: "Slab foundation construction", icon: Square },
      { name: "Foundation drainage", icon: Waves }
    ]
  },
  {
    category: "Renovation & Structural",
    items: [
      { name: "Home renovations", icon: RefreshCw },
      { name: "Bathroom remodelling", icon: Bath },
      { name: "Kitchen remodelling", icon: Utensils },
      { name: "Exterior structural repairs", icon: Wrench },
      { name: "Interior structural repairs", icon: Settings },
      { name: "Roof repair", icon: Tent },
      { name: "Exterior painting", icon: PaintBucket }
    ]
  },
  {
    category: "Finishing & Interiors",
    items: [
      { name: "Basement waterproofing", icon: Umbrella },
      { name: "Water and moisture control services", icon: Droplets },
      { name: "Drywall repair", icon: Grid },
      { name: "Interior decorating", icon: Sofa },
      { name: "Floor fitting", icon: Layers },
      { name: "Flooring repair", icon: Hammer },
      { name: "Tile work installation", icon: LayoutGrid },
      { name: "Tile work replacement", icon: ArrowRightLeft }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-900 border-t border-zinc-800 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-96 h-96 rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-amber-500 font-medium tracking-widest uppercase text-sm">Our Expertise</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight"
          >
            Mastering Every <br className="hidden md:block" /> Phase of Construction
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg font-light max-w-2xl mx-auto"
          >
            From civil engineering and architectural planning to premium finishing, we bring structural integrity and classic aesthetics to every project.
          </motion.p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-zinc-950 p-8 rounded-sm group hover:bg-zinc-800/50 border border-zinc-800/50 hover:border-amber-500/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:-translate-y-0 transition-transform duration-500" />
              
              <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 group-hover:border-amber-500/50 rounded-sm flex items-center justify-center mb-8 transition-colors duration-500">
                <service.icon size={26} className="text-amber-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4 group-hover:text-amber-500 transition-colors duration-300">{service.title}</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Categorized Service Directory */}
        <div className="mt-32 pt-20 border-t border-zinc-800/50">
          <div className="mb-16">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif text-white mb-6"
            >
              Complete Service Directory
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "60px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 bg-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {categorizedServices.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <h4 className="text-white font-medium text-lg mb-6 flex items-center gap-3">
                  <span className="w-full text-amber-500">{section.category}</span>
                </h4>
                <ul className="space-y-4">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 group">
                      <item.icon size={16} className="text-zinc-600 group-hover:text-amber-500 mt-0.5 shrink-0 transition-colors duration-300" />
                      <span className="text-zinc-400 text-sm font-light leading-snug group-hover:text-zinc-200 transition-colors duration-300">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
