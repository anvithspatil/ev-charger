import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Battery, Zap, Clock, CreditCard, Smartphone } from "lucide-react";
const features = [
  {
    icon: <MapPin className="h-10 w-10" />,
    title: "Find Nearby Stations",
    description: "Locate charging stations near you or along your planned route with our interactive map."
  },
  {
    icon: <Battery className="h-10 w-10" />,
    title: "Compatibility Check",
    description: "Filter stations based on your EV model to ensure compatibility with charging connectors."
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Real-time Availability",
    description: "Check current availability status and estimated waiting times before you arrive."
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: "Pricing Information",
    description: "View detailed pricing information and payment options for each charging station."
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile Notifications",
    description: "Receive alerts when your vehicle is fully charged or when a station becomes available."
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Charging Speed",
    description: "Compare charging speeds and find the fastest option for your specific EV model."
  }
];
const FeaturesSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How ChargeFinder Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform makes finding and using EV charging stations simple and convenient
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-card-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
