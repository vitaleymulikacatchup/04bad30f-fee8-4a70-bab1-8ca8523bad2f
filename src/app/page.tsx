"use client"
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, ChefHat, Clock, Crown, Dumbbell, Flower, Handshake, Heart, HelpCircle, MapPin, MessageCircle, Phone, Sparkles, Star, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "pricing" },
            { name: "Amenities", id: "feature" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Luxe Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Discover unparalleled elegance and comfort at Grand Luxe Hotel, where every moment becomes an unforgettable memory"
          tag="5-Star Luxury"
          tagIcon={Star}
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.com"
            },
            {
              text: "View Rooms",
              href: "pricing"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/15447099/pexels-photo-15447099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel exterior"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Welcome to Grand Luxe"
          description="Nestled in the heart of the city, Grand Luxe Hotel combines timeless elegance with modern luxury. Our commitment to excellence ensures every guest experiences the finest in hospitality."
          tag="Our Story"
          tagIcon={Heart}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          bulletPoints={[
            {
              title: "Prime Location",
              description: "Located in the prestigious downtown district with easy access to major attractions",
              icon: MapPin
            },
            {
              title: "Award-Winning Service",
              description: "Recognized globally for exceptional hospitality and personalized guest experiences",
              icon: Award
            },
            {
              title: "Luxury Amenities",
              description: "World-class facilities including spa, fitness center, and fine dining restaurants",
              icon: Sparkles
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant hotel lobby"
          imagePosition="left"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Indulge in our carefully curated selection of premium facilities and services designed to exceed your expectations"
          tag="Amenities"
          tagIcon={Crown}
          features={[
            {
              title: "Spa & Wellness Center",
              description: "Rejuvenate your body and mind in our award-winning spa featuring therapeutic treatments and wellness programs",
              icon: Flower
            },
            {
              title: "Fine Dining Restaurant",
              description: "Experience culinary excellence with our Michelin-starred chefs creating extraordinary dining experiences",
              icon: ChefHat
            },
            {
              title: "24/7 Concierge Service",
              description: "Our dedicated concierge team is available around the clock to assist with all your needs and requests",
              icon: Clock
            },
            {
              title: "State-of-the-Art Fitness",
              description: "Stay active in our fully equipped fitness center with personal training services available",
              icon: Dumbbell
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Luxury Accommodations"
          description="Choose from our selection of elegantly appointed rooms and suites, each designed for ultimate comfort"
          tag="Rooms & Suites"
          plans={[
            {
              id: "deluxe",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$299/night",
              subtitle: "Perfect for business travelers",
              features: [
                "King-size bed with premium linens",
                "City skyline views",
                "Marble bathroom with rain shower",
                "24-hour room service",
                "Complimentary Wi-Fi",
                "Access to fitness center"
              ]
            },
            {
              id: "suite",
              badge: "Luxury",
              badgeIcon: Crown,
              price: "$599/night",
              subtitle: "Spacious comfort and elegance",
              features: [
                "Separate living and bedroom areas",
                "Premium city or garden views",
                "Butler service",
                "Private balcony",
                "Spa access included",
                "Premium minibar selection"
              ]
            },
            {
              id: "penthouse",
              badge: "Ultimate Luxury",
              price: "$1,299/night",
              subtitle: "The pinnacle of luxury living",
              features: [
                "Panoramic city views",
                "Private elevator access",
                "Personal chef upon request",
                "Rooftop terrace access",
                "Limousine service included",
                "Dedicated concierge"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Excellence in Numbers"
          description="Our commitment to luxury hospitality is reflected in these remarkable achievements"
          tag="Our Success"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "98%",
              description: "Guest Satisfaction Rating"
            },
            {
              id: "2",
              value: "50+",
              description: "Years of Excellence"
            },
            {
              id: "3",
              value: "15",
              description: "International Awards"
            },
            {
              id: "4",
              value: "24/7",
              description: "Dedicated Service"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Discover why discerning travelers choose Grand Luxe Hotel for their most important stays"
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "Fortune 500 Executive",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Investment Banker",
              company: "Global Finance",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Isabella Rodriguez",
              role: "Ambassador",
              company: "Diplomatic Corps",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34519511/pexels-photo-34519511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Tech Entrepreneur",
              company: "Innovation Leader",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3777565/pexels-photo-3777565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "5",
              name: "Victoria Sterling",
              role: "Fashion Designer",
              company: "Luxury Brand Owner",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34435267/pexels-photo-34435267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Global Hospitality Leaders"
          description="Join the network of premium hotels that trust our standards of excellence"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/1008208/pexels-photo-1008208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/691067/pexels-photo-691067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/12720659/pexels-photo-12720659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/16640208/pexels-photo-16640208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at Grand Luxe Hotel"
          tag="Help Center"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What is your check-in and check-out policy?",
              content: "Check-in is at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide luxury airport transportation services. Our concierge team can arrange private car service or limousine transfers upon request."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We feature multiple dining venues including our Michelin-starred restaurant, casual café, rooftop bar, and 24-hour room service for your convenience."
            },
            {
              id: "4",
              title: "Is parking available?",
              content: "We offer valet parking service for all guests. Self-parking is also available in our secure underground garage."
            },
            {
              id: "5",
              title: "What spa services do you offer?",
              content: "Our award-winning spa features therapeutic massages, facial treatments, body wraps, and wellness programs. Advance reservations are recommended."
            },
            {
              id: "6",
              title: "Do you accommodate special dietary requirements?",
              content: "Absolutely. Our culinary team can accommodate various dietary restrictions and preferences. Please inform us of any requirements when making your reservation."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get in Touch"
          tagIcon={Phone}
          title="Ready to Experience Luxury?"
          description="Contact our reservations team or subscribe to our newsletter for exclusive offers and updates about Grand Luxe Hotel"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive exclusive offers and updates. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "pricing" },
                { label: "Amenities", href: "feature" },
                { label: "Dining", href: "about" },
                { label: "Spa & Wellness", href: "feature" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "about" },
                { label: "Valet Parking", href: "faq" },
                { label: "Airport Transfer", href: "faq" },
                { label: "Event Planning", href: "contact" }
              ]
            },
            {
              title: "Experience",
              items: [
                { label: "Guest Reviews", href: "testimonial" },
                { label: "Virtual Tour", href: "about" },
                { label: "Local Attractions", href: "faq" },
                { label: "Special Offers", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 | Grand Luxe Hotel"
        />
      </div>
    </ThemeProvider>
  );
}