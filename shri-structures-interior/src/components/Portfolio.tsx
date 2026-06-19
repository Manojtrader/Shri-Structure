import { motion } from 'motion/react';

const photos = [
  {
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGlnzzjfwp6IKPtOVgpxfz0-WYFQAfr_RjsHZhrlaehruie6ilMO1ojhfIBG9_G6K2CdRXUmuiEK2Kjj5teNbTjd42JjImBgxIHghVshF1ZK2fOjuy26J37fGMVJWlaNbLKokhEKQ=w1200",
    title: "Modern Facade Design",
    span: "col-span-1 row-span-2"
  },
  {
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEbNLyoYt2Nnk18jaPfFy8qMsHK-nHx84M0q7bv8wGHpcLTUHFDLMYV8HoG488-oQV4cZOewq31wyRzYE4Nhql8ZkQBC4Z8hVW4P40TbCzDNxEPXE5syaDuhO_Pg8pqG3rW1uFX=w1200",
    title: "Structural Engineering",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHAz33hBd2eI9DjF4PggnGXh4i2H2Y2L8c3hJckrFPbt9a46Mathv9ZfMXiCYW5I5Pr06J_Dzgis6X8-sTDHK-wELG0WdzPTvy0hUjTB8gyApjYyBtLO5ADnVbmtrBGhtDdfmBKZQ=w1200",
    title: "Interior Construction",
    span: "col-span-1 row-span-2"
  },
  {
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFFjeRdPeyAk4bWHLofGbecZ7SkhgmPe8-EhPaiC1p7cdJLosFuo6uyilbcKTGCkA2yuj6_knGVT38zV4P-cMfwGR9aiQz3A2dWd90AfYnLlJLClHDB8QDc_d5Vr16j6HC0N_8=w1200",
    title: "Custom Home Build",
    span: "col-span-1 row-span-1"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-amber-500" />
              <span className="text-amber-500 font-medium tracking-widest uppercase text-sm">Our Work</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif text-white block"
            >
              Featured Projects
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-sm md:text-right"
          >
            A glimpse into our recent construction, remodeling, and interior design across Ludhiana.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {photos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-sm group ${item.span}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.url})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-8 h-px bg-amber-500 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
