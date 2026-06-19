import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Mahommad Hadish",
    time: "3 weeks ago",
    text: "My home desig best interior and plan",
    rating: 5,
  },
  {
    name: "ajitpal singh",
    time: "2 years ago",
    text: "Very professional and technical person, architect. Explains each and every technical information in detail.",
    rating: 5,
  },
  {
    name: "Vikas Kumar Mehta",
    time: "2 years ago",
    text: "Nice person, good designer",
    rating: 5,
  },
  {
    name: "DeEp Ak",
    time: "4 months ago",
    text: "Good designer",
    rating: 5,
  },
  {
    name: "Haripal Singh",
    time: "a year ago",
    text: "Best deal Architect his dealing very Nice. All type of architect plan",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-amber-500" />
            <span className="text-amber-500 font-medium tracking-widest uppercase text-sm">Testimonials</span>
            <div className="w-8 h-px bg-amber-500" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-white mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="text-white font-medium text-lg ml-2">5.0</span>
            <span className="text-zinc-400">(257 reviews)</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-950 p-8 rounded-sm relative"
            >
              <Quote className="absolute top-6 right-8 text-zinc-800" size={40} />
              <div className="flex text-amber-500 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-zinc-300 mb-6 italic leading-relaxed min-h-[80px]">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-amber-500 font-serif text-lg">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{review.name}</h4>
                  <p className="text-zinc-500 text-xs">{review.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
