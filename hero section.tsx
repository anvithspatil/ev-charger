import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Zap } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
const HeroSection = () => {
  const [location, setLocation] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      setIsDialogOpen(true);
    }
  };
  return (
    <section className="min-h-screen pt-16 bg-gradient-to-b from-background via-background to-secondary/20 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl top-1/4 -right-48 animate-float"></div>
      <div className="absolute w-80 h-80 bg-accent/5 rounded-full blur-3xl bottom-1/4 -left-20 animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Zap className="h-12 w-12 text-primary animate-pulse-glow" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Find EV Charging Stations
            <span className="block text-primary mt-2">Anywhere, Anytime</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Locate the nearest electric vehicle charging stations with real-time availability, 
            pricing, and compatibility information for your specific EV model.
          </p>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Enter your location or zip code" 
                className="pl-10 h-12 bg-card border-input"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12">
              <Search className="mr-2 h-4 w-4" />
              Find Stations
            </Button>
          </form>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2"></span>
              50,000+ Charging Stations
            </span>
            <span className="flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
              Real-time Availability
            </span>
            <span className="flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-chart-3 mr-2"></span>
              Compatible with All EV Models
            </span>
          </div>
        </motion.div>
      </div>
      {/* Search Results Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Charging Stations near {location}</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">EcoCharge Station #{i}</h3>
                    <p className="text-sm text-muted-foreground">123 Main St, {location}</p>
                    <div className="flex items-center mt-2 text-sm">
                      <span className="bg-accent/20 text-accent-foreground px-2 py-1 rounded-full text-xs mr-2">
                        {i === 1 ? '4/6 Available' : i === 2 ? '2/4 Available' : '1/2 Available'}
                      </span>
                      <span className="text-muted-foreground">
                        {i === 1 ? 'Level 3 DC Fast Charging' : i === 2 ? 'Level 2 Charging' : 'Tesla Supercharger'}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-2">
                    Details
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" className="w-full">
                View All Results
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
export default HeroSection;
