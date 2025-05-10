import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MapPin, Battery, Zap, Search } from "lucide-react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Find Stations", href: "#find-stations" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Zap className="h-8 w-8 text-primary mr-2" />
            <span className="font-bold text-xl">ChargeFinder</span>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="hidden md:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <MapPin className="mr-2 h-4 w-4" />
              Find Nearby
            </Button>
          </div>
          
          {/* Mobile navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card text-card-foreground">
                <nav className="mt-8">
                  <ul className="space-y-4">
                    {navItems.map((item, index) => (
                      <li key={index}>
                        <a 
                          href={item.href}
                          className="text-foreground hover:text-foreground/80 text-lg block py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <MapPin className="mr-2 h-4 w-4" />
                      Find Nearby
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
