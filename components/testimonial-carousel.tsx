"use client"

import Slider from "react-slick"
import Link from "next/link"

const testimonials = [
  {
    name: "VP Marketing, FMCG",
    role: "VP Marketing, FMCG",
    company: "Enterprise Loyalty",
    quote:
      "Basiq360 cracked partner activation for us—onboarding velocity tripled and LTV improved within the first quarter.",
    rating: 5,
  },
  {
    name: "Head of Sales, Building Materials",
    role: "Head of Sales, Building Materials",
    company: "Channel Growth",
    quote: "From campaigns to CRM journeys, they stitched the stack end-to-end. The results were visible week one.",
    rating: 5,
  },
  {
    name: "CMO, Retail Chain",
    role: "CMO, Retail Chain",
    company: "App Growth",
    quote: "Attribution finally made sense: our spend ties directly to installs, signups and repeat transactions.",
    rating: 5,
  },
  {
    name: "Nikhil Chavda",
    role: "IT Coordinator",
    company: "Bafit",
    quote:
      'Want to write about all things, services are very fast and genuine. All the team members are very humble and kind. Anytime, anywhere, if we got any kind of issue on our dashboard (system), all the team doing support like "one click solution". Overall, feel very good...',
    rating: 5,
  },
  {
    name: "Ravi Surelia",
    role: "IT Head",
    company: "Kelvin Pipes",
    quote:
      "We've been using Basiq360 for our dealer management and CRM needs, and the experience has been excellent. The platform is cloud-based, and packed with features that help streamline order management, sales tracking, and customer network oversight.",
    rating: 5,
  },
  {
    name: "Mudit Nanda",
    role: "Zonal Sales Head",
    company: "Bonus Locks",
    quote:
      "It's been 2 years working with them and we have a great experience! Team is super great and they are offering a great support.",
    rating: 5,
  },
]

export function TestimonialCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="testimonial-carousel-wrapper">
      <style jsx global>{`
        .testimonial-carousel-wrapper .slick-slider {
          position: relative;
          padding: 0 60px;
        }

        .testimonial-carousel-wrapper .slick-list {
          overflow: hidden;
          margin: 0 -12px;
        }

        .testimonial-carousel-wrapper .slick-track {
          display: flex !important;
          align-items: stretch;
        }

        .testimonial-carousel-wrapper .slick-slide {
          padding: 0 12px;
          height: inherit !important;
        }

        .testimonial-carousel-wrapper .slick-slide > div {
          height: 100%;
        }

        /* Enhanced navigation arrow styling for better visual appeal */
        .testimonial-carousel-wrapper .slick-prev,
        .testimonial-carousel-wrapper .slick-next {
          width: 52px;
          height: 52px;
          z-index: 10;
          background: white;
          border-radius: 50%;
          /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border: 2px solid #e2e8f0; */
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .testimonial-carousel-wrapper .slick-prev:hover,
        .testimonial-carousel-wrapper .slick-next:hover {
          background: linear-gradient(135deg, #004bab 0%, #0f6ad1 100%);
          border-color: #004bab;
          box-shadow: 0 8px 20px rgba(0, 75, 171, 0.25);
          transform: scale(1.08);
        }

        .testimonial-carousel-wrapper .slick-prev:before,
        .testimonial-carousel-wrapper .slick-next:before {
          color: #004bab;
          font-size: 50px;
          font-weight: bold;
          opacity: 1;
          transition: all 0.3s ease;
          line-height: 1;
        }

        .testimonial-carousel-wrapper .slick-prev:hover:before,
        .testimonial-carousel-wrapper .slick-next:hover:before {
          color: white;
        }

        .testimonial-carousel-wrapper .slick-prev {
          left: 0;
        }

        .testimonial-carousel-wrapper .slick-next {
          right: 0;
        }

        .testimonial-carousel-wrapper .slick-disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .testimonial-carousel-wrapper .slick-disabled:hover {
          background: white;
          border-color: #e2e8f0;
          transform: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .testimonial-carousel-wrapper .slick-disabled:hover:before {
          color: #004bab;
        }

        @media (max-width: 768px) {
          .testimonial-carousel-wrapper .slick-slider {
            padding: 0 50px;
          }

          .testimonial-carousel-wrapper .slick-prev,
          .testimonial-carousel-wrapper .slick-next {
            width: 44px;
            height: 44px;
          }

          .testimonial-carousel-wrapper .slick-prev:before,
          .testimonial-carousel-wrapper .slick-next:before {
            font-size: 22px;
          }
        }
      `}</style>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="h-full">
            <div className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-white shadow-sm h-full flex flex-col min-h-[320px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#004bab] to-[#0f6ad1] flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="text-base font-semibold text-slate-900 truncate">{testimonial.name}</div>
                  <div className="text-sm text-slate-600 truncate">{testimonial.role}</div>
                  <div className="text-xs text-slate-500 truncate">{testimonial.company}</div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed flex-grow mb-6">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div
                  className="flex items-center gap-1 text-amber-500"
                  aria-label={`${testimonial.rating} star rating`}
                >
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="text-sm text-[#004bab] font-medium hover:underline flex items-center gap-1 whitespace-nowrap"
                >
                  Book a call →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex justify-center mt-8">
        <Link
          href="/contact"
          className="rounded-2xl border-2 border-slate-300 px-8 py-3 font-semibold hover:bg-slate-50 transition-colors"
        >
          See More Reviews
        </Link>
      </div>
    </div>
  )
}
