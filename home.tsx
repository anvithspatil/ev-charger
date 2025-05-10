import { 
import Header from "@/components/Header";
    Card, 
import HeroSection from "@/components/HeroSection";
    CardContent, 
import FeaturesSection from "@/components/FeaturesSection";
    CardDescription, 
import MapSection from "@/components/MapSection";
    CardHeader, 
import Footer from "@/components/Footer";
    CardTitle 
} from "@/components/ui/card";
const Home = () => {
import { Badge } from "@/components/ui/badge";
  return (
import { Separator } from "@/components/ui/separator";
    <div className="min-h-screen flex flex-col">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
      <Header />
      <main className="flex-grow">
export default function Home() {
        <HeroSection />
    return (
        <FeaturesSection />
        <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
        <MapSection />
            {/* Enhanced background elements */}
      </main>
            <div className="absolute w-96 h-96 bg-orange-600/10 rounded-full blur-3xl top-0 -right-48 animate-pulse-slow"></div>
      <Footer />
            <div className="absolute w-80 h-80 bg-orange-500/5 rounded-full blur-3xl -bottom-20 -left-20"></div>
    </div>
            <div className="absolute w-64 h-64 bg-orange-600/10 rounded-full blur-3xl top-1/4 -left-20"></div>
  );
            <div className="absolute w-full max-w-md h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent top-1/3"></div>
};
            <div className="absolute w-full max-w-md h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent bottom-1/3"></div>
            {/* Animated particles */}
export default Home;
            <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-orange-500/40 rounded-full animate-float"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-orange-400/30 rounded-full animate-float-slow"></div>
            <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-orange-500/40 rounded-full animate-float-slower"></div>
 
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTExMTEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjMjIyIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTYwIDYwTDAgME02MCAwTDAgNjAiIHN0cm9rZT0iIzIyMiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')]"></div>
 
            {/* Content container with glass effect using Card component */}
            <Card className="relative z-10 backdrop-blur-sm bg-black/20 border-orange-500/10 shadow-[0_0_15px_rgba(249,115,22,0.1)] w-full max-w-md">
                <CardHeader className="flex flex-col items-center pb-2">
                    {/* Golex Logo with animation */}
                    <div className="mb-4 relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full opacity-70 blur-md animate-pulse-slow"></div>
                        <Avatar className="h-28 w-28 border-2 border-orange-500/30">
                            <AvatarImage src="/golex.png" alt="Golex Logo" />
                            <AvatarFallback className="bg-orange-500/20 text-orange-500">GL</AvatarFallback>
                        </Avatar>
                    </div>
                    
                    <CardTitle className="text-2xl font-medium bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                        Your web app will appear here
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                        Chat with Golex AI to start building your app
                    </CardDescription>
                </CardHeader>
                
                <Separator className="bg-orange-500/10" />
                
                <CardContent className="pt-6">
                    {/* Build Animation */}
                    <div className="mb-8 relative w-40 h-24 flex items-center justify-center mx-auto">
                        {/* Code blocks animation */}
                        <div className="absolute top-0 left-0 w-10 h-6 bg-gradient-to-r from-orange-600/20 to-orange-500/30 rounded-md border border-orange-500/20 animate-float-slow"></div>
                        <div className="absolute top-4 right-4 w-12 h-6 bg-gradient-to-r from-orange-500/20 to-orange-400/30 rounded-md border border-orange-500/20 animate-float-slower"></div>
                        <div className="absolute bottom-0 left-8 w-14 h-6 bg-gradient-to-r from-orange-600/20 to-orange-500/30 rounded-md border border-orange-500/20 animate-float"></div>
                        <div className="absolute bottom-6 right-0 w-8 h-6 bg-gradient-to-r from-orange-500/20 to-orange-400/30 rounded-md border border-orange-500/20 animate-float-slow"></div>
 
                        {/* Central loading spinner */}
                        <div className="relative">
                            <div className="w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
                            <div className="absolute inset-0 border-2 border-orange-500/10 rounded-full"></div>
                        </div>
 
                        {/* Connecting lines */}
                        <div className="absolute w-full h-full">
                            <div className="absolute top-3 left-10 w-12 h-px bg-orange-500/20 animate-pulse-slow"></div>
                            <div className="absolute top-7 right-16 w-10 h-px bg-orange-500/20 animate-pulse"></div>
                            <div className="absolute bottom-3 left-22 w-8 h-px bg-orange-500/20 animate-pulse-slow"></div>
                            <div className="absolute bottom-9 right-8 w-6 h-px bg-orange-500/20 animate-pulse"></div>
                        </div>
                    </div>
 
                    {/* Message with improved typography */}
                    <div className="text-center">
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Our AI will help you create a custom web application based on
                            your requirements.
                        </p>
 
                        {/* Status indicator with Badge component */}
                        <Badge variant="outline" className="bg-black/30 border-orange-500/20 px-4 py-2 gap-2">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                            </span>
                            <span className="text-sm font-medium text-orange-400">
                                Ready to build
                            </span>
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
