import { Instagram, Facebook, Twitter } from "lucide-react";
function Footer() {
  return <footer className="bg-[#0f0f0f] pt-20 pb-10 border-t border-primary/20 relative overflow-hidden">
      {
    /* Subtle background glow */
  }
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex flex-col group cursor-pointer mb-6">
              <span className="font-serif text-3xl font-bold tracking-wider text-foreground">
                KHUFU
              </span>
              <span className="font-display text-xs text-primary tracking-[0.3em] uppercase mt-1">
                Restaurant
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Where ancient flavors meet contemporary elegance. A culinary journey through Egypt's rich heritage.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-xl mb-6 text-foreground">Contact</h4>
            <address className="not-italic text-muted-foreground text-sm space-y-3 flex flex-col items-center md:items-start">
              <p>12 Al-Azhar Street, Downtown</p>
              <p>Cairo, Egypt 11511</p>
              <p className="text-primary mt-2">+20 2 1234 5678</p>
              <p className="hover:text-primary transition-colors cursor-pointer">reservations@khufu.eg</p>
            </address>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-xl mb-6 text-foreground">Hours</h4>
            <div className="text-muted-foreground text-sm space-y-3 flex flex-col items-center md:items-start">
              <p>Monday - Thursday</p>
              <p className="text-foreground">5:00 PM - 11:30 PM</p>
              <div className="w-12 h-[1px] bg-border my-2" />
              <p>Friday - Sunday</p>
              <p className="text-foreground">12:00 PM - 12:00 AM</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <p className="text-muted-foreground text-sm">
            © {(/* @__PURE__ */ new Date()).getFullYear()} Khufu Restaurant. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => <a
    key={i}
    href="#"
    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
  >
                <Icon className="w-4 h-4" />
              </a>)}
          </div>
        </div>
      </div>
    </footer>;
}
export {
  Footer
};
