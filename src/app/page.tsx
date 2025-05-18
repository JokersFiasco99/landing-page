'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";

// Client component for interactive elements
const InteractiveElements = dynamic(() => import("../components/interactive-elements"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-100">
      <InteractiveElements />
      <div className="container mx-auto px-4 py-8">
        {/* Navbar */}
        <nav className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold bg-neutral-100 px-6 py-3 rounded-xl shadow-[5px_5px_10px_#d1d1d1,_-5px_-5px_10px_#ffffff]">
            Brand
          </div>
          <ul className="hidden md:flex space-x-8">
            {["Home", "Features", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="font-medium px-4 py-2 rounded-xl transition-all duration-300 hover:shadow-[5px_5px_10px_#d1d1d1,_-5px_-5px_10px_#ffffff] active:shadow-[inset_3px_3px_5px_#d1d1d1,_inset_-3px_-3px_5px_#ffffff]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero Section */}
        <section id="home" className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] py-16">
          <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold mb-6 text-neutral-800">
              ✨ Neumorphic Design ✨
            </h1>
            <p className="text-xl mb-8 text-neutral-600">
              Experience the future of user interfaces with our soft, minimal design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-neutral-800 text-white shadow-[5px_5px_10px_#d1d1d1,_-5px_-5px_10px_#ffffff] hover:translate-y-[-3px] transition-all"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="bg-neutral-100 shadow-[5px_5px_10px_#d1d1d1,_-5px_-5px_10px_#ffffff] hover:translate-y-[-3px] transition-all"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div id="neumorphic-circle" className="w-64 h-64 rounded-full bg-neutral-100 shadow-[15px_15px_30px_#d1d1d1,_-15px_-15px_30px_#ffffff] relative overflow-hidden">
              <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-white to-neutral-200 opacity-70"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 text-center">
          <h2 className="text-4xl font-bold mb-16 text-neutral-800">Key Features 🔥</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🚀", title: "Fast & Efficient", description: "Optimized for speed and performance across all devices. ⚡" },
              { icon: "🎨", title: "Beautiful Design", description: "Modern neumorphic UI that stands out from the crowd. ✨" },
              { icon: "🔒", title: "Secure & Reliable", description: "Built with security in mind to protect your data. 🔐" }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="bg-neutral-100 shadow-[8px_8px_16px_#d1d1d1,_-8px_-8px_16px_#ffffff] hover:translate-y-[-10px] transition-all duration-300 border-none"
              >
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-800">{feature.title}</h3>
                  <p className="text-neutral-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="pricing" className="py-20 text-center">
          <div className="max-w-3xl mx-auto bg-neutral-100 p-16 rounded-2xl shadow-[8px_8px_16px_#d1d1d1,_-8px_-8px_16px_#ffffff]">
            <h2 className="text-4xl font-bold mb-4 text-neutral-800">Ready to Get Started? 🎉</h2>
            <p className="text-xl mb-8 text-neutral-600">Join thousands of satisfied customers today. 💪</p>
            <Button
              size="lg"
              className="bg-neutral-800 text-white shadow-[5px_5px_10px_#d1d1d1,_-5px_-5px_10px_#ffffff] hover:translate-y-[-3px] transition-all"
            >
              Sign Up Now 🤝
            </Button>
          </div>
        </section>

        {/* Skeuomorphic Note Section */}
        <section id="note" className="py-20 flex justify-center">
          <div className="note-paper max-w-lg w-full">
            <h3 className="text-2xl font-bold mb-4 text-neutral-800">A Personal Touch ✍️</h3>
            <p className="text-neutral-700 leading-relaxed">
              Skeuomorphic elements like this lined notepad evoke familiar, tangible experiences while still fitting within a modern UI. 📝
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-16 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-neutral-800">Brand</h3>
              <p className="text-neutral-600">Bringing neumorphic design to the world since 2023.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-neutral-800">Links</h3>
              <ul className="space-y-2 text-neutral-600">
                {["Home", "Features", "Pricing", "Contact"].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-neutral-900 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-neutral-800">Contact</h3>
              <p className="text-neutral-600">Email: info@example.com</p>
              <p className="text-neutral-600">Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="text-center pt-6 border-t border-neutral-300">
            <p className="text-neutral-600">&copy; 2023 Brand. All rights reserved. 💖</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
