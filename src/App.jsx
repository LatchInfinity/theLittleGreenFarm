import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Bath,
  BedDouble,
  Calendar,
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  Droplets,
  Headphones,
  KeyRound,
  Mail,
  MapPin,
  Menu,
  Minus,
  ParkingCircle,
  Phone,
  Star,
  Tv,
  X,
} from 'lucide-react';

import cameraIcon from '../assets/icons/сamera.svg';
import familyIcon from '../assets/icons/family.svg';
import parkIcon from '../assets/icons/carparking.svg';
import henIcon from '../assets/icons/Hen.svg';
import poolIcon from '../assets/icons/WATERPOOL.svg';
import wifi from '../assets/icons/wifi.svg';
import petIcon from '../assets/icons/pet.svg';
import meditation from '../assets/icons/meditation-guru.svg';
import Soundproofing from '../assets/icons/Soundproofing-09.svg';
import bookingImage from '../assets/images/BookingImg.png';
import bookingBgImage from '../assets/images/BookingBgImg.png';
import blog1Image from '../assets/images/blog1.png';
import guestBgImage from '../assets/images/guestBg.png';
import heroImage from '../assets/images/hero.png';
import hotelBgImage from '../assets/images/hotelBg.png';
import logoImage from '../assets/images/logo.png';
import openAirImage from '../assets/images/openairImg.png';
import privateBookingImage from '../assets/images/PrivateBookingImg.png';
import cosyBedroomsImage from '../assets/images/RestEasy.png';
import retreatBlogImage from '../assets/images/retreatBlog.png';
import restaurantBgImage from '../assets/images/restaurenBg.png';
import section2CenterImage from '../assets/images/section2Center.png';
import section2LeftImage from '../assets/images/section2left.png';
import section2RightImage from '../assets/images/section2right.png';
import shootsBlogImage from '../assets/images/shootsBlog.png';
import slowMorningsImage from '../assets/images/slowmorningsImg.png';
import wellnessBgImage from '../assets/images/wellnessBg.png';

const assets = {
  hero: heroImage,
  phone: 'https://thelittlegreenfarm.in/wp-content/uploads/2026/08/entypo_old-phone.png',
  gallery: [section2LeftImage, section2CenterImage, section2RightImage],
  rooms: [
    privateBookingImage,
    cosyBedroomsImage,
    slowMorningsImage,
    openAirImage,
  ],
  experiences: [hotelBgImage, restaurantBgImage, wellnessBgImage],
  testimonial: guestBgImage,
  ctaBg: bookingBgImage,
  cta: bookingImage,
};

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Offers', href: '#offers' },
  { label: 'About', href: '#about' },
  { label: 'Help Center', href: '#help' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const stats = [
  { value: 40, suffix: ' ', label: 'min from Bengaluru', displayValue: '40' },
  { value: 20, suffix: ' ', label: 'Guests can be Accommodated', displayValue: '20+' },
  { value: 50, suffix: ' ', label: ' Farm Friends', displayValue: '50+' },
  { value: 0, suffix: '', label: 'You came looking for', displayValue: 'All the Quiet', compact: true },
];

const experienceTypes = [
  { title: 'Quiet.', image: assets.experiences[0], position: 'center center' },
  { title: 'Memorable.', image: assets.experiences[1], position: 'center center' },
  { title: 'Stays.', image: assets.experiences[2], position: 'bottom center' },
];

const rooms = [
  { name: 'Premium Bedrooms', price: 'Exquisite', image: assets.rooms[0] },
  { name: 'Cosy Bedrooms', price: 'Children’s', image: assets.rooms[1] },
  { name: 'Sit-Outs', price: 'Slow Morning', image: assets.rooms[2] },
  { name: 'Garden Pavilion', price: 'Open Air', image: assets.rooms[3] },
];

const amenities = [
  { title: ['Parking', 'Available'], iconImage: parkIcon },
  { title: ['Meet the Farm', 'Animals'], iconImage: henIcon },
  { title: ['Shoots &', 'Events'], iconImage: cameraIcon },
  { title: ['Pet', 'Friendly'], iconImage: petIcon },
  { title: ['Retreats &', 'Workshops'], iconImage: meditation },
  { title: ['Family & Friends', 'Getaways'], iconImage: familyIcon },
  { title: ['Private Swimming', 'Pool'], iconImage: poolIcon },
  { title: ['Wi-Fi', 'Available'], iconImage: wifi },
  { title: ['Farm Cooked', 'Meals'], iconImage: Soundproofing },
];

const testimonials = [
  {
    quote:
      'A beautiful break from the city. The quiet, the green and the animals made it feel like a real reset. We left lighter than we arrived.',
    name: 'Goutham Reddy',
    role: 'Guest review',
  },
];

const offers = [
  {
    discount: 'Private Farm Booking',
    title: 'Your Weekend, Your Way',
    description:
      'Take over the farmhouse and settle into a slower kind of plan.',
    image: section2CenterImage,
    featured: true,
  },
  {
    discount: 'For Family & Friends',
    title: 'A Green Getaway',
    image: openAirImage,
  },
  {
    discount: 'Retreats & Workshops',
    title: 'Bring Us Your Idea',
    image: retreatBlogImage,
  },
  {
    discount: 'Shoots & Celebrations',
    title: 'A Beautiful Backdrop',
    image: shootsBlogImage,
  },
];

const posts = [
  {
    title: 'Why a Farm Stay Near Bangalore Is the Reset You Need',
    excerpt: 'Slow down, step outside and discover why a day in the green can change the whole week.',
    image: blog1Image,
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ink text-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <ShowcaseGallery />
        <AboutSection />
        <StatsSection />
        <ExperienceTypes />
        <RoomsSection />
        <AmenitiesSection />
        <TestimonialsSection />
        <OffersSection />
        <BookingCta />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

function Header({ isMenuOpen, setIsMenuOpen }) {
  const menuRef = useRef(null);
  const showMenu = false;

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handlePointerDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('pointerdown', handlePointerDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-gradient-to-b from-black/70 to-transparent">
      <div className="container-shell relative flex min-h-[92px] items-stretch justify-between">
        <div className="hidden w-[44%] flex-col justify-end py-[10px] md:flex">
          {showMenu && (
            <button
              className="flex items-center gap-4 self-start font-serif text-base font-extralight uppercase tracking-[0.1em] text-white transition hover:text-cream"
              type="button"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
              Menu
            </button>
          )}
          <div className="mt-[15px] h-px w-full bg-white/30" />
        </div>

        {showMenu ? (
          <button
            className="flex h-11 w-11 items-center justify-center text-cream md:hidden"
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        ) : (
          <div className="h-11 w-11 md:hidden" aria-hidden="true" />
        )}

        <a
          href="#home"
          className="absolute left-1/2 top-[58%] flex -translate-x-1/2 -translate-y-1/2 justify-center md:right-auto"
          aria-label="The Little Green Farm"
        >
          <img
            className="h-20 w-auto object-contain md:h-28"
            src={logoImage}
            alt="The Little Green Farm"
          />
        </a>

        <a
          className="flex h-11 w-11 items-center justify-center justify-self-end text-cream md:hidden"
          href="tel:+919972709988"
          aria-label="Call The Little Green Farm"
        >
          <Phone size={22} />
        </a>

        <div className="hidden w-[44%] flex-col justify-end py-[10px] md:flex">
          <a className="flex items-center gap-[15px] self-end" href="tel:+919972709988">
            <Phone size={16} className="text-white" />
            <span className="font-sans text-lg font-light text-white">(+91) 99727 09988</span>
          </a>
          <div className="mt-[15px] h-px w-full bg-white/30" />
        </div>
      </div>

      {showMenu && (
        <nav
          ref={menuRef}
          className={`absolute left-6 right-6 top-full mt-3 max-w-[320px] border border-white/10 bg-ink/95 p-4 shadow-glow backdrop-blur md:left-8 md:right-auto md:w-[280px] ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          aria-label="Primary navigation"
        >
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="block font-serif text-[26px] font-light leading-tight text-white transition hover:text-cream md:text-[30px]"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const showAvailabilityForm = false;

  return (
    <section
      className="relative flex flex-col overflow-hidden bg-cover bg-top pt-28 md:min-h-[98vh] md:pt-[150px]"
      id="home"
      style={{ backgroundImage: `url(${assets.hero})` }}
    >
      <div className="absolute inset-0 bg-black/35" />
      <div className="container-shell relative z-10 flex flex-1 flex-col pb-14 md:pb-[100px]">
        <div className="grid items-end gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="pb-10 md:pb-16">
          <h1 className="font-serif text-[68px] font-extralight leading-[0.95] tracking-[-0.05em] md:text-[120px] lg:text-[140px]">
            Far Enough.
          </h1>
          <p className="font-serif text-[66px] font-extralight leading-none tracking-[-0.05em] text-cream md:text-[116px] lg:text-[140px]">
            Just Breathe.
          </p>
        </div>
        <p className="mt-8 max-w-[600px] font-sans text-base font-light leading-[1.3] text-white md:text-[18px] md:leading-[1.5]">
          Welcome to The Little Green Farm, a private farmhouse stay near Bangalore made for slower days, open
          skies and easy togetherness. Meet the animals, sit by the water and leave the city noise behind. Just
          far enough away to truly exhale.
        </p>
      </div>
      </div>

      {showAvailabilityForm && <AvailabilityForm />}
    </section>
  );
}

function AvailabilityForm() {
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const formatDate = (iso) => {
    if (!iso) return '';
    return new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <form className="container-shell relative z-10 mt-14 md:mt-auto" onSubmit={(event) => event.preventDefault()}>
      <div className="flex flex-col md:flex-row">
        <label className="relative flex-1 border-t border-white/30 bg-white/15 backdrop-blur-[6px] md:border-l">
          <select
            className="w-full appearance-none bg-transparent px-[22px] py-[19px] font-sans text-base font-extralight text-white outline-none"
            name="stay"
          >
            <option className="text-ink" value="">Stay</option>
            <option className="text-ink" value="standard">Standard Room</option>
            <option className="text-ink" value="deluxe">Deluxe Room</option>
            <option className="text-ink" value="presidential">Presidential Suite</option>
            <option className="text-ink" value="honeymoon">Honeymoon Suite</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white" size={18} />
        </label>

        <label
          className="relative flex-1 cursor-pointer border-t border-white/30 bg-white/15 backdrop-blur-[6px] md:border-l"
          onClick={() => checkInRef.current?.showPicker()}
        >
          <input
            className="w-full bg-transparent px-[22px] py-[19px] font-sans text-base font-extralight text-white outline-none placeholder:text-white"
            name="checkIn"
            placeholder="Check-In"
            readOnly
            value={formatDate(checkIn)}
          />
          <input
            ref={checkInRef}
            className="pointer-events-none absolute bottom-0 left-0 h-0 w-0 opacity-0"
            onChange={(event) => setCheckIn(event.target.value)}
            type="date"
          />
          <Calendar className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white" size={18} />
        </label>

        <label
          className="relative flex-1 cursor-pointer border-t border-white/30 bg-white/15 backdrop-blur-[6px] md:border-l"
          onClick={() => checkOutRef.current?.showPicker()}
        >
          <input
            className="w-full bg-transparent px-[22px] py-[19px] font-sans text-base font-extralight text-white outline-none placeholder:text-white"
            name="checkOut"
            placeholder="Check-Out"
            readOnly
            value={formatDate(checkOut)}
          />
          <input
            ref={checkOutRef}
            className="pointer-events-none absolute bottom-0 left-0 h-0 w-0 opacity-0"
            onChange={(event) => setCheckOut(event.target.value)}
            type="date"
          />
          <Calendar className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white" size={18} />
        </label>

        <label className="relative flex-1 border-t border-white/30 bg-white/15 backdrop-blur-[6px] md:border-l">
          <select
            className="w-full appearance-none bg-transparent px-[22px] py-[19px] font-sans text-base font-extralight text-white outline-none"
            name="guests"
          >
            <option className="text-ink" value="">Guests</option>
            <option className="text-ink" value="1-3">1-3 Guest</option>
            <option className="text-ink" value="4-8">4-8 Guest</option>
            <option className="text-ink" value="9-15">9-15 Guest</option>
            <option className="text-ink" value="15+">15+ Guest</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white" size={18} />
        </label>

        <button
          className="flex items-center justify-center gap-[10px] bg-cream px-6 py-6 font-sans text-sm font-medium uppercase tracking-[0.15em] text-ink transition hover:bg-gold md:flex-1"
          type="submit"
        >
          Check Availability
          <ArrowRight size={14} />
        </button>
      </div>
    </form>
  );
}

function ShowcaseGallery() {
  return (
    <section className="overflow-hidden bg-ink px-3 py-20 md:px-5 md:py-[150px]" id="about">
      <div className="mx-auto max-w-[1290px]">
        <h2 className="relative z-20 text-left font-serif text-[65px] font-extralight leading-none tracking-[-0.05em] text-white md:ml-[100px] md:text-center md:text-[80px] lg:text-[120px]">
          Experience
        </h2>

        <div className="relative z-10 mt-8 grid gap-7 md:-mt-10 md:-mb-20 md:grid-cols-3 md:gap-0">
          <div className="md:pr-[50px] md:pt-[60px]">
            <GalleryImage src={assets.gallery[0]} alt="Ibiza hotel bedroom" landscape />
          </div>
          <div className="md:px-[25px]">
            <GalleryImage src={assets.gallery[1]} alt="Ibiza hotel corridor" />
          </div>
          <div className="relative z-30 flex md:items-end md:pb-[30px] md:pl-[50px]">
            <GalleryImage src={assets.gallery[2]} alt="Ibiza hotel lounge" landscape />
          </div>
        </div>

        <h2 className="relative z-20 mt-8 text-right font-serif text-[65px] font-extralight leading-none tracking-[-0.05em] text-white md:mt-0 md:pr-[100px] md:text-center md:text-[80px] lg:text-[120px]">
          The Nature
        </h2>
      </div>
    </section>
  );
}

function GalleryImage({ src, alt, landscape = false }) {
  return (
    <div className={`w-full overflow-hidden ${landscape ? 'aspect-[2560/1707]' : 'aspect-[1707/2560]'}`}>
      <img className="h-full w-full object-cover" src={src} alt={alt} />
    </div>
  );
}

function AboutSection() {
  return (
    <section className="bg-ink pb-24 md:pb-[150px]">
      <div className="container-shell">
        <div className="mx-auto max-w-[1420px] text-left">
        <h2 className="max-w-[1320px] font-serif text-[30px] font-light leading-snug tracking-[-0.02em] text-white md:text-[44px]">
          Welcome to <span className="text-cream">The Little Green Farm</span>, a private farmhouse near
          Bangalore where the day slows down naturally.
        </h2>
        <p className="mt-8 max-w-[1400px] font-sans text-[24px] font-light leading-[1.65] text-mist md:text-[34px] md:leading-[1.75]">
          Set among trees, open lawns and gentle water, our peaceful space invites you to swap traffic and
          screens for birdsong, breezy sit-outs and unhurried conversation. Spend time with goats, ducks, love birds,
          swans and chickens; read by the pond; share a long meal with your people; or simply do very
          little, very well. Just 40 minutes from Bengaluru, the farm is made for family weekends, friend
          getaways, retreats, workshops and shoots that need more room to breathe.
        </p>
        <PrimaryLink href="#rooms">Explore The Farm</PrimaryLink>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const statsRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [counts, setCounts] = useState(() => stats.map(() => 0));

  useEffect(() => {
    const node = statsRef.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) {
      return undefined;
    }

    const duration = 1800;
    let animationFrame = 0;
    let startTime = 0;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(stats.map((stat) => Math.round(stat.value * easedProgress)));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [hasStarted]);

  return (
    <section className="bg-ink pb-16" ref={statsRef}>
      <div className="container-shell grid gap-8 border-y border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div className="flex min-h-[118px] flex-col items-center justify-center text-center" key={stat.label}>
            <div
              className={`font-serif font-extralight leading-none tracking-[-0.05em] text-white ${
                stat.compact ? 'text-[34px] md:text-[40px]' : 'text-[72px]'
              }`}
            >
              {stat.displayValue ?? counts[index]}
              <sup className="text-[34px] text-cream">{stat.suffix}</sup>
            </div>
            <p className={`${stat.compact ? 'mt-2' : 'mt-3'} text-sm font-light text-mist`}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceTypes() {
  return (
    <section className="relative bg-ink" aria-label="Hotel, Restaurant and Wellness">
      {experienceTypes.map((item, index) => (
        <ExperiencePanel item={item} index={index} key={item.title} />
      ))}
    </section>
  );
}

function ExperiencePanel({ item, index }) {
  return (
    <article
      className="sticky top-0 flex min-h-[55vh] items-center justify-center overflow-hidden bg-cover bg-no-repeat md:min-h-screen md:bg-fixed"
      style={{
        zIndex: index + 1,
        backgroundImage: `url(${item.image})`,
        backgroundPosition: item.position,
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <h2 className="relative z-10 text-center font-serif text-[44px] font-extralight leading-[1.1] tracking-[-0.05em] text-white md:text-[70px] lg:text-[80px]">
        {item.title}
      </h2>
    </article>
  );
}

function RoomsSection() {
  return (
    <section className="bg-ink pt-24 md:pt-[150px]" id="rooms">
      <div className="container-shell max-w-[1140px]">
        <div className="mb-[60px] grid items-start gap-8 lg:grid-cols-2">
          <h2 className="-mt-3 text-center font-serif text-[56px] font-extralight leading-[1.1] tracking-[-0.05em] text-white md:text-[80px] lg:text-left">
            Your Farmhouse, Your Time
          </h2>
          <div className="lg:pl-[60px]">
            <p className="text-center text-base font-light leading-8 text-mist lg:text-left">
              Book the whole farmhouse for your group. Comfortable rooms, green corners and open spaces give
              you everything you need to slow down, reconnect and make the day your own.
            </p>
            <PrimaryLink href="#offers">View The Stay</PrimaryLink>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-[45px]">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[30px]">
          {rooms.map((room) => (
            <RoomCard room={room} key={room.name} />
          ))}
        </div>
      </div>

      <div className="container-shell max-w-[1140px] py-[100px] md:py-20">
        <div className="border-t border-white/25" />
      </div>
    </section>
  );
}

function RoomCard({ room }) {
  return (
    <article className="group">
      <div className="overflow-hidden">
        <img
          className="aspect-[1000/1156] h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          src={room.image}
          alt={room.name}
        />
      </div>
      <div className="relative z-10 mx-auto h-[120px] overflow-hidden bg-transparent pt-5 text-left">
        <h3 className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-cream">{room.price}</h3>
        <p className="font-serif text-2xl font-light leading-[1.4] tracking-[-0.02em] text-white">
          {room.name}
        </p>
        {/* Hidden for now; remove `hidden` and add `flex` to reuse the room-card action. */}
        <a
          className="hidden mt-[25px] h-12 w-12 items-center justify-center rounded-full bg-cream text-ink transition duration-500 hover:bg-gold-deep"
          href="#contact"
          aria-label={`Book ${room.name}`}
          tabIndex={-1}
        >
          <ArrowUpRight size={20} />
        </a>
      </div>
    </article>
  );
}

function AmenitiesSection() {
  return (
    <section className="bg-ink py-24 md:py-[120px]" id="offers">
      <div className="container-shell max-w-[1140px]">
        <div className="mb-[60px] grid items-start gap-8 lg:grid-cols-2">
          <p className="max-w-xl text-base font-light leading-8 text-mist lg:pr-20">
            More than a farmhouse stay near Bangalore, this is a place to put the city on pause and enjoy
            the simple things.
          </p>
          <h2 className="-mt-3 text-center font-serif text-[58px] font-extralight leading-[1.1] tracking-[-0.05em] text-white md:text-[80px] lg:text-right">
            Come for the Quiet
            <span className="block">& The Little Things</span>
          </h2>
        </div>
        <div className="grid gap-[30px] md:grid-cols-3">
          {amenities.map((amenity) => (
            <AmenityCard amenity={amenity} key={amenity.title.join(' ')} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AmenityCard({ amenity }) {
  const Icon = amenity.icon;

  return (
    <article className="group min-h-[170px] border border-white/15 bg-white/[0.03] px-[25px] pb-[15px] pt-5 transition hover:border-cream">
      <h3 className="font-serif text-[22px] font-light leading-[1.3] tracking-[-0.02em] text-white">
        {amenity.title.map((line) => (
          <span className="block" key={line}>
            {line}
          </span>
        ))}
      </h3>
      {amenity.iconImage ? (
        <img
          className="mt-[50px] h-10 w-10 object-contain transition group-hover:scale-105"
          src={amenity.iconImage}
          alt=""
          aria-hidden="true"
        />
      ) : (
        <Icon className="mt-[50px] text-cream transition group-hover:scale-105" size={40} strokeWidth={1.6} />
      )}
    </article>
  );
}

function TestimonialsSection() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonial = testimonials[testimonialIndex];
  const hasMultipleTestimonials = testimonials.length > 1;

  const showPrevious = () => {
    setTestimonialIndex((currentIndex) =>
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
    );
  };

  const showNext = () => {
    setTestimonialIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
  };

  return (
    <section id="help" className="bg-ink py-20 md:py-[120px]">
      <div className="container-shell">
        <div
          className="relative min-h-[500px] overflow-hidden bg-cover bg-[65%_1%] p-8 md:min-h-[560px] md:p-14"
          style={{ backgroundImage: `url(${assets.testimonial})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <p className="font-serif text-[48px] font-extralight leading-none tracking-[-0.05em] text-white md:text-[74px]">
              What Guests Say
            </p>
            <div className="mt-4 flex items-center gap-6 md:mt-6">
              <span className="hidden h-[3px] w-[120px] bg-cream sm:block" />
              <h2 className="font-serif text-[48px] font-extralight leading-none tracking-[-0.05em] text-white md:text-[86px]">
                About the Farm
              </h2>
            </div>
          </div>
        </div>

        <div className="relative z-10 -mt-24 ml-auto max-w-[560px] md:-mt-36">
          <article className="relative border border-white/10 bg-teal p-6 shadow-glow md:p-8">
            <div className="mb-5 flex gap-1 text-cream">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="min-h-[112px] text-sm font-light leading-7 text-mist md:text-base md:leading-8">
              {testimonial.quote}
            </p>
            <div className="mt-7 flex items-end justify-between gap-6">
              <div>
                <h3 className="font-serif text-2xl font-light text-white">{testimonial.name}</h3>
                <p className="mt-1 text-sm text-cream">{testimonial.role}</p>
              </div>
              <span className="font-serif text-[70px] font-extralight leading-none text-cream/20" aria-hidden="true">
                &ldquo;
              </span>
            </div>
          </article>

          {hasMultipleTestimonials && (
            <div className="mt-6 flex justify-end gap-3">
              <button
                className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/[0.04] text-cream transition hover:bg-cream hover:text-ink"
                type="button"
                aria-label="Previous testimonial"
                onClick={showPrevious}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/[0.04] text-cream transition hover:bg-cream hover:text-ink"
                type="button"
                aria-label="Next testimonial"
                onClick={showNext}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function OffersSection() {
  return (
    <section className="bg-ink py-24 md:py-[150px]">
      <div className="container-shell max-w-[1140px]">
        <div className="mb-[60px] text-center">
          <h2 className="-mt-3 font-serif text-[56px] font-extralight leading-[1.1] tracking-[-0.05em] text-white md:text-[80px]">
            Make Space for
            <span className="block">What Matters</span>
          </h2>
        </div>
        <div className="grid gap-[30px] lg:grid-cols-[33fr_67fr]">
          <OfferCard offer={offers[0]} featured />

          <div>
            <div className="grid gap-[30px] md:grid-cols-2">
              {offers.slice(1, 3).map((offer) => (
                <OfferCard offer={offer} key={offer.title} />
              ))}
            </div>
            <div className="mt-[30px]">
              <OfferCard offer={offers[3]} wide />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferCard({ offer, featured = false, wide = false }) {
  return (
    <article
      className={`group relative flex overflow-hidden bg-cover bg-center ${
        featured ? 'min-h-[620px] lg:min-h-[690px]' : wide ? 'min-h-[290px]' : 'min-h-[320px]'
      }`}
      style={{ backgroundImage: `url(${offer.image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#04151a00] to-[#04151a]" />
      <div
        className={`relative z-10 mt-auto w-full p-[30px] text-left transition-all duration-500 ${
          featured ? '' : 'translate-y-10 group-hover:translate-y-0'
        }`}
      >
        <p className="text-sm font-medium text-cream">{offer.discount}</p>
        <h3
          className={`mt-2 font-serif font-light leading-[1.3] tracking-[-0.02em] text-white ${
            featured ? 'text-[26px]' : 'text-[26px]'
          }`}
        >
          {offer.title}
        </h3>
        {offer.description && <p className="mt-4 text-sm font-light leading-7 text-white">{offer.description}</p>}
        <a
          className={`mt-5 flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-cream transition duration-500 group-hover:bg-cream group-hover:text-ink ${
            featured ? '' : 'opacity-0 group-hover:opacity-100'
          }`}
          href="#contact"
          aria-label={`Book ${offer.title}`}
        >
          <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
}

function BookingCta() {
  return (
    <section>
      <div
        className="relative min-h-[50vh] bg-cover bg-[center_30%] bg-no-repeat md:min-h-[80vh] md:bg-fixed"
        style={{ backgroundImage: `url(${assets.ctaBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink to-ink/5" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1140px] px-6">
        <div className="grid gap-8 md:grid-cols-[38fr_62fr] md:gap-[30px]">
          <div className="-mt-[180px] md:-mt-[290px] md:pr-[30px]">
            <img
              className="aspect-[575/832] w-full object-cover"
              src={assets.cta}
              alt="Guest walking among tropical palms"
            />
          </div>

          <div className="-mt-[40px] pb-20 md:-mt-[55px] md:mr-[90px] md:flex md:flex-col md:pb-24">
            <h2 className="mb-[10px] whitespace-nowrap font-serif text-[48px] font-extralight leading-[1.1] tracking-[-0.05em] text-white md:text-[80px]">
              Bengaluru,
            </h2>
            <div className="mb-[30px] flex items-center gap-5 md:ml-[53px] md:gap-[34px]">
            
              <h3 className="font-serif text-[48px] font-extralight leading-[1.1] tracking-[-0.05em] text-cream md:text-[80px]">
              Without the Noise.
              </h3>
            </div>
            <a
              className="inline-flex min-h-[68px] items-center justify-center gap-4 bg-cream px-8 text-sm font-medium uppercase tracking-[0.2em] text-ink transition hover:bg-gold-deep md:min-h-[83px] md:min-w-[310px] md:self-end"
              href="tel:+919972709988"
            >
              Book Your Farm Stay
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="bg-ink py-24 md:py-[150px]" id="blog">
      <div className="container-shell max-w-[1140px]">
        <h2 className="font-serif text-[56px] font-extralight leading-[1.1] tracking-[-0.05em] text-white md:text-[80px]">
          Stories From the Farm
        </h2>

        <div className="mt-10 max-w-4xl">
          <article>
            <a href="#" className="block">
              <img
                className="h-[382px] w-full object-cover"
                src={posts[0].image}
                alt={posts[0].title}
              />
            </a>
            <div className="mt-[10px]">
              <h3 className="font-serif text-[28px] font-light leading-[1.4] tracking-[-0.02em] text-white transition-colors hover:text-cream md:text-[34px]">
                <a href="#">{posts[0].title}</a>
              </h3>
              <p className="mt-[10px] font-sans text-base font-extralight leading-[1.5] text-mist md:mr-[100px]">
                {posts[0].excerpt}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink pb-8 pt-16" id="contact">
      <div className="container-shell">
        <div className="mb-14 flex justify-center">
          <a href="#home" className="text-center" aria-label="The Little Green Farm">
            <span className="block font-serif text-2xl font-light leading-none tracking-[0.02em] text-white">
              THE LITTLE GREEN FARM
            </span>
            <span className="mt-2 block text-xs font-light uppercase tracking-[0.3em] text-cream/80">
              PRIVATE FARM STAY NEAR BANGALORE
            </span>
          </a>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_0.75fr_0.9fr_1.05fr]">
          <div>
            <h3 className="footer-title">About the Farm</h3>
            <p className="text-sm font-light leading-7 text-mist">
              A private farmhouse stay near Bangalore for slow weekends, shared plans and simple time in
              nature.
            </p>
          </div>
          <FooterList title="Useful Links" items={['About the Farm', 'Farm Stays', 'Retreats & Workshops', 'Contact Us']} />
          <div>
            <h3 className="footer-title">Find Us</h3>
            <ul className="space-y-4 text-sm font-light text-mist">
              <li className="flex gap-3"><MapPin size={16} className="mt-1 text-cream" /> The Little Green Farm, Bangalore, Karnataka 560011</li>
              <li className="flex gap-3"><Mail size={16} className="mt-1 text-cream" /> contact@thelittlegreenfarm.in</li>
              <li className="flex gap-3"><Phone size={16} className="mt-1 text-cream" />(+91) 99727 09988</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">
              Find Us
              <span className="block">on the Map</span>
            </h3>
            <div className="overflow-hidden border border-white/10 bg-teal">
              <iframe
                className="h-[220px] w-full"
                src="https://maps.google.com/maps?q=12.76562819915011,77.51488171270452&t=k&z=17&output=embed"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="The Little Green Farm map"
              />
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-white/15 pt-5 text-center text-xs font-light text-mist md:flex md:items-center md:justify-between md:text-left">
          
          <p>Copyright &copy; 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, items }) {
  return (
    <div>
      <h3 className="footer-title">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a className="inline-flex items-center gap-3 text-sm font-light text-mist transition hover:text-cream" href="#home">
              <Minus size={14} />
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PrimaryLink({ children, href, dark = false }) {
  return (
    <a
      className={`mt-9 inline-flex w-fit items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] transition ${
        dark ? 'text-ink hover:text-ink/65' : 'text-cream hover:text-white'
      }`}
      href={href}
    >
      {children}
      <ArrowRight size={18} />
    </a>
  );
}

function IconLink({ href, label }) {
  return (
    <a
      className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/60 text-cream transition hover:bg-cream hover:text-ink"
      href={href}
      aria-label={label}
    >
      <ArrowUpRight size={18} />
    </a>
  );
}

export default App;
