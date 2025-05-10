import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Filter, Zap, Info } from "lucide-react";
const MapSection = () => {
  return (
    <section id="find-stations" className="py-20 bg-gradient-to-b from-secondary/20 to-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Find Charging Stations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our interactive map to find charging stations near you or along your route
            </p>
          </div>
          
          <div className="bg-card rounded-xl shadow-lg overflow-hidden border">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/3 relative">
                {/* This would be replaced with an actual map component in a real implementation */}
                <div className="aspect-[16/9] lg:aspect-auto lg:h-full bg-muted relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1591389703635-e15a07b842d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Map with charging stations" 
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  
                  {/* Map pins */}
                  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md group-hover:bg-primary/30 transition-all"></div>
                      <div className="relative">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md group-hover:bg-primary/30 transition-all"></div>
                      <div className="relative">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md group-hover:bg-primary/30 transition-all"></div>
                      <div className="relative">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <Button variant="outline" className="bg-background/80 backdrop-blur-sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      Use My Location
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/3 border-t lg:border-t-0 lg:border-l">
                <Tabs defaultValue="nearby" className="w-full">
                  <div className="px-4 pt-4">
                    <TabsList className="w-full">
                      <TabsTrigger value="nearby" className="flex-1">Nearby</TabsTrigger>
                      <TabsTrigger value="route" className="flex-1">On Route</TabsTrigger>
                      <TabsTrigger value="favorites" className="flex-1">Favorites</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="nearby" className="mt-0">
                    <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto">
                      {[1, 2, 3, 4].map((i) => (
                        <Card key={i} className="hover:bg-muted/50 transition-colors">
                          <CardContent className="p-4">
                            <div className="flex items-start">
                              <div className="bg-primary/10 p-2 rounded-full mr-4">
                                <Zap className="h-5 w-5 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <h3 className="font-medium">EcoCharge Station #{i}</h3>
                                  <Badge variant={i % 2 === 0 ? "outline" : "secondary"} className="ml-2">
                                    {i % 2 === 0 ? 'Available' : 'Busy'}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">0.{i} miles away • {i} min drive</p>
                                <div className="flex items-center mt-2 text-sm">
                                  <span className="text-muted-foreground">
                                    {i === 1 ? 'Level 3 DC Fast Charging' : i === 2 ? 'Level 2 Charging' : i === 3 ? 'Tesla Supercharger' : 'CCS & CHAdeMO'}
                                  </span>
                                </div>
                                <div className="flex justify-between items-center mt-3">
                                  <span className="text-sm font-medium">
                                    ${(0.25 + (i * 0.05)).toFixed(2)}/kWh
                                  </span>
                                  <Button variant="outline" size="sm">
                                    <Info className="mr-2 h-3 w-3" />
                                    Details
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="route" className="mt-0">
                    <div className="p-4 flex items-center justify-center h-[300px] text-muted-foreground">
                      Enter your destination to see charging stations on your route
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="favorites" className="mt-0">
                    <div className="p-4 flex items-center justify-center h-[300px] text-muted-foreground">
                      You haven't saved any favorite stations yet
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default MapSection;
