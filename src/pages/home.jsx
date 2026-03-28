import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useCreateReservation, reservationSchema } from "@/hooks/use-reservations";
import { Calendar, Clock, Users, MapPin, Phone, Mail } from "lucide-react";
import { menuData, featuredDishes } from "@/data/menuData";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};
function Home() {
  return <main className="flex-1 w-full bg-background overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
      <MenuSection />
      <ReservationSection />
      <LocationSection />
    </main>;
}
function HeroSection() {
  const scrollToReservations = () => {
    document.querySelector("#reservations")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };
  return <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
    style={{
      backgroundImage: `url('${import.meta.env.BASE_URL}images/hero-bg.png')`
    }}
  />
      {
    /* Heavy gradient overlay to ensure text readability and dark theme consistency */
  }
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
      <div className="absolute inset-0 z-0 bg-black/40" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
  >
          <p className="text-primary font-display tracking-[0.2em] uppercase text-sm mb-6 font-semibold">
            Est. 2008 · Cairo, Egypt
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-2 leading-tight">
            Premium Egyptian
          </h1>
          <h1 className="font-display italic text-4xl md:text-6xl lg:text-7xl text-primary mb-8 text-glow">
            Dining Experience
          </h1>
          <p className="text-foreground/80 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            Where ancient flavors meet contemporary elegance in an atmosphere of refined luxury.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
    onClick={scrollToReservations}
    className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(212,165,116,0.25)] hover:shadow-[0_0_30px_rgba(212,165,116,0.4)] hover:-translate-y-0.5"
  >
              Reserve a Table
            </button>
            <button
    onClick={scrollToMenu}
    className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-foreground font-medium rounded-sm hover:border-primary hover:text-primary transition-all duration-300"
  >
              Explore Menu
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5, duration: 1 }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
  >
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-display">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>;
}
function AboutSection() {
  return <section id="about" className="py-24 md:py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
  >
          <motion.div variants={fadeUp} className="order-2 lg:order-1 relative">
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
              <div className="absolute inset-0 border border-primary/20 z-10 m-4 rounded-sm pointer-events-none" />
              <img
    src={`${import.meta.env.BASE_URL}images/about-img.png`}
    alt="Elegant Egyptian food plating"
    className="w-full h-full object-cover"
  />
            </div>
            {
    /* Decorative block */
  }
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-card border border-white/5 p-6 flex flex-col justify-center text-center shadow-2xl hidden md:flex">
              <span className="font-serif text-4xl text-primary mb-2">3</span>
              <span className="font-display text-sm uppercase tracking-widest text-muted-foreground">Michelin Stars</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="order-1 lg:order-2 flex flex-col items-start">
            <span className="text-primary font-display tracking-[0.2em] uppercase text-sm mb-4">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
              A Century of Egyptian <br /><span className="italic text-primary">Culinary Tradition</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed mb-10">
              <p>
                Founded on the principles of preserving ancestral recipes while embracing modern gastronomic techniques, Khufu offers an unparalleled dining experience that honors the legacy of the pharaohs.
              </p>
              <p>
                Our executive chefs source the finest local ingredients from the fertile banks of the Nile, transforming humble street food and forgotten royal banquets into masterpieces of modern fine dining.
              </p>
            </div>
            
            <div className="w-full h-[1px] bg-border mb-8" />
            
            <div className="flex flex-wrap gap-8 md:gap-12">
              <div>
                <p className="font-serif text-3xl text-foreground mb-1">15+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-display">Years of Excellence</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-foreground mb-1">200+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-display">Signature Dishes</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
}
function FeaturedSection() {
  const dishes = featuredDishes;
  return <section className="py-24 md:py-32 bg-card relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-primary font-display tracking-[0.2em] uppercase text-sm mb-4 block">Masterpieces</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Signature Dishes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Crafted with centuries-old recipes and modern refinement.
          </p>
        </div>

        <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
  >
          {dishes.map((dish) => <motion.div
    key={dish.id}
    variants={fadeUp}
    className="group relative bg-background border border-white/5 p-4 rounded-sm hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(212,165,116,0.15)] hover:border-primary/40 cursor-pointer"
  >
              <div className="aspect-square mb-6 overflow-hidden rounded-sm bg-muted relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src={dish.img} alt={dish.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="text-center px-2 pb-4">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{dish.name}</h3>
                <p className="text-sm text-muted-foreground font-light mb-4 line-clamp-2">{dish.desc}</p>
                <span className="font-display text-lg text-primary">{dish.price}</span>
              </div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}
function MenuSection() {
  const [activeTab, setActiveTab] = useState("Mains");
  return <section id="menu" className="py-24 md:py-32 bg-background relative min-h-[800px]">
      {
    /* Decorative background element */
  }
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-display tracking-[0.2em] uppercase text-sm mb-4 block">The Selection</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Our Menu</h2>
        </div>

        {
    /* Custom Animated Tabs */
  }
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 border-b border-border/50 pb-4">
          {Object.keys(menuData).map((tab) => <button
    key={tab}
    onClick={() => setActiveTab(tab)}
    className={`relative font-serif text-xl tracking-wide pb-2 transition-colors duration-300 ${activeTab === tab ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
  >
              {tab}
              {activeTab === tab && <motion.div
    layoutId="menu-tab-indicator"
    className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-primary"
    initial={false}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
  />}
            </button>)}
        </div>

        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
    key={activeTab}
    variants={staggerContainer}
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
    className={`grid gap-6 ${activeTab === "Mains" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-2 md:grid-cols-2 lg:grid-cols-4"}`}
  >
              {menuData[activeTab].map((item, idx) => <motion.div
    key={idx}
    variants={fadeUp}
    className="bg-card border border-white/5 rounded-sm overflow-hidden hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(212,165,116,0.15)] transition-all duration-500 cursor-default group"
  >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
    src={item.img}
    alt={item.name}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
  />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors leading-tight">{item.name}</h4>
                      <span className="font-display text-primary text-lg shrink-0">{item.price}</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-light mt-2 leading-relaxed line-clamp-2">{item.desc}</p>
                  </div>
                </motion.div>)}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center mt-20">
          <button className="px-8 py-3 bg-transparent border border-primary text-primary font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Download Full Menu
          </button>
        </div>
      </div>
    </section>;
}
function ReservationSection() {
  const { toast } = useToast();
  const { mutate: createReservation, isPending } = useCreateReservation();
  const form = useForm({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      requests: ""
    }
  });
  const onSubmit = (data) => {
    createReservation(data, {
      onSuccess: () => {
        toast({
          title: "Reservation Confirmed",
          description: `We look forward to seeing you on ${data.date} at ${data.time}.`,
          variant: "default",
          className: "bg-card border-primary text-foreground"
        });
        form.reset();
      },
      onError: () => {
        toast({
          title: "Error",
          description: "There was a problem making your reservation. Please call us.",
          variant: "destructive"
        });
      }
    });
  };
  return <section id="reservations" className="py-24 md:py-32 relative flex items-center justify-center">
      {
    /* Background with texture */
  }
      <div className="absolute inset-0 bg-card/50 z-0" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 z-0 mix-blend-overlay" />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="glass-panel p-8 md:p-12 shadow-2xl rounded-sm"
  >
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Reserve Your Table</h2>
            <p className="text-muted-foreground font-light">Experience the finest Egyptian dining in an intimate setting.</p>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-foreground/80 font-medium">Full Name</label>
                <input
    {...form.register("name")}
    className="w-full bg-background border border-white/10 rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
    placeholder="John Doe"
  />
                {form.formState.errors.name && <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm text-foreground/80 font-medium">Email Address</label>
                <input
    type="email"
    {...form.register("email")}
    className="w-full bg-background border border-white/10 rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
    placeholder="john@example.com"
  />
                {form.formState.errors.email && <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-foreground/80 font-medium">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                  <input
    {...form.register("phone")}
    className="w-full bg-background border border-white/10 rounded-sm pl-10 pr-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
    placeholder="+1 234 567 8900"
  />
                </div>
                {form.formState.errors.phone && <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-foreground/80 font-medium">Party Size</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                  <select
    {...form.register("guests")}
    className="w-full bg-background border border-white/10 rounded-sm pl-10 pr-4 py-3 text-foreground appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((num) => <option key={num} value={num}>{num} {num === 1 ? "Guest" : "Guests"}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-foreground/80 font-medium">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                  <input
    type="date"
    {...form.register("date")}
    className="w-full bg-background border border-white/10 rounded-sm pl-10 pr-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all [color-scheme:dark]"
  />
                </div>
                {form.formState.errors.date && <p className="text-xs text-destructive">{form.formState.errors.date.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-foreground/80 font-medium">Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                  <select
    {...form.register("time")}
    className="w-full bg-background border border-white/10 rounded-sm pl-10 pr-4 py-3 text-foreground appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
  >
                    <option value="">Select Time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="22:00">10:00 PM</option>
                  </select>
                </div>
                {form.formState.errors.time && <p className="text-xs text-destructive">{form.formState.errors.time.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-foreground/80 font-medium">Special Requests (Optional)</label>
              <textarea
    {...form.register("requests")}
    rows={3}
    className="w-full bg-background border border-white/10 rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50 resize-none"
    placeholder="Dietary restrictions, special occasions..."
  />
            </div>

            <button
    type="submit"
    disabled={isPending}
    className="w-full py-4 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-[0_0_15px_rgba(212,165,116,0.2)] hover:shadow-[0_0_25px_rgba(212,165,116,0.4)] disabled:opacity-70 disabled:cursor-not-allowed mt-4"
  >
              {isPending ? "Confirming..." : "Confirm Reservation"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>;
}
function LocationSection() {
  return <section id="location" className="py-24 md:py-32 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="flex flex-col justify-center"
  >
            <span className="text-primary font-display tracking-[0.2em] uppercase text-sm mb-4 block">Visit Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-10">Location & Contact</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2 text-foreground">Address</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    12 Al-Azhar Street, Downtown<br />
                    Cairo, Egypt 11511
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2 text-foreground">Reservations</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    +20 2 1234 5678<br />
                    Available Mon-Sun, 10am to 10pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2 text-foreground">Private Events</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    events@khufu.eg<br />
                    For parties of 10 or more
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="h-[400px] lg:h-auto min-h-[500px] w-full bg-card rounded-sm overflow-hidden border border-white/10 relative p-2"
  >
            <div className="absolute inset-0 border border-primary/20 m-4 rounded-sm pointer-events-none z-10" />
            <iframe
    src="https://maps.google.com/maps?q=Cairo+Egypt&output=embed"
    className="w-full h-full rounded-sm"
    style={{ filter: "invert(100%) hue-rotate(180deg) brightness(95%) contrast(85%) grayscale(30%)" }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
          </motion.div>

        </div>
      </div>
    </section>;
}
export {
  Home as default
};
