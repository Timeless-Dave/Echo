"use client"

import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// WhatsApp Chat Component
const WhatsAppChat = ({ messages, title }: { messages: any[], title: string }) => {
  return (
    <div className="relative w-full h-full bg-[#0B141A] flex items-center justify-center">
      {/* Chat Container - Positioned to the right */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-80 max-w-sm bg-[#0B141A] opacity-40 md:opacity-60">
        {/* WhatsApp Header */}
        <div className="bg-[#202C33] px-4 py-3 flex items-center space-x-3 rounded-t-lg">
          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-semibold">
              {title.charAt(0)}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-white text-sm font-medium">{title}</h3>
            <p className="text-gray-400 text-xs">online</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="bg-[#0B141A] px-4 py-6 space-y-3 h-80 overflow-hidden rounded-b-lg">
          {messages.slice(0, 5).map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sent ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-3 py-2 rounded-lg ${
                  message.sent
                    ? "bg-[#005C4B] text-white"
                    : "bg-[#202C33] text-white"
                }`}
              >
                <p className="text-xs">{message.text}</p>
                <div className="flex items-center justify-end mt-1 space-x-1">
                  <span className="text-xs text-gray-400">{message.time}</span>
                  {message.sent && (
                    <svg className="w-2 h-2 text-gray-400" viewBox="0 0 16 15">
                      <path
                        fill="currentColor"
                        d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.063-.51z"
                      />
                      <path
                        fill="currentColor"
                        d="M12.776 3.316l-.478-.372a.365.365 0 0 0-.51.063L6.432 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.063-.51z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HeroChatCarousel() {
  // ===== TIMING SETTINGS =====
  // Each slide displays for exactly 2 seconds (autoplaySpeed: 2000)
  // Transition duration is 1 second (speed: 1000)
  // Infinite smooth looping with no pause on hover
  const settings = {
    dots: false,
    infinite: true,               // Enables infinite looping
    speed: 1000,                   // Transition duration: 0.5 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,               // Enables automatic sliding
    autoplaySpeed: 2000,          // Each slide shows for 2 seconds
    pauseOnHover: false,           // No pause on hover - continuous play
    arrows: false,
    fade: false,                  // Slide effect (not fade)
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Smooth easing curve
  }

  // Chat mockup data - 4 realistic Nigerian university scenarios
  const chatScenarios = [
    {
      title: "Dr. Adebayo",
      messages: [
        {
          text: "Come to my office tomorrow morning",
          sent: false,
          time: "14:23",
        },
        {
          text: "What about sir?",
          sent: true,
          time: "14:25",
        },
        {
          text: "Your project defense result. You scored 45%",
          sent: false,
          time: "14:26",
        },
        {
          text: "But sir, I prepared very well",
          sent: true,
          time: "14:27",
        },
        {
          text: "If you want to pass, bring ₦500,000 tomorrow. Cash only.",
          sent: false,
          time: "14:28",
        },
      ],
    },
    {
      title: "Roommate",
      messages: [
        {
          text: "Bro, those Black Axe guys came again",
          sent: false,
          time: "22:15",
        },
        {
          text: "What did they want this time?",
          sent: true,
          time: "22:16",
        },
        {
          text: "₦5,000 each for 'hostel protection fee'",
          sent: false,
          time: "22:17",
        },
        {
          text: "They said pay by Friday or face consequences",
          sent: false,
          time: "22:18",
        },
        {
          text: "This cultist harassment needs to stop",
          sent: true,
          time: "22:20",
        },
      ],
    },
    {
      title: "Anonymous Friend",
      messages: [
        {
          text: "I need to tell someone what happened last night",
          sent: true,
          time: "01:42",
        },
        {
          text: "What's wrong? Are you okay?",
          sent: false,
          time: "01:43",
        },
        {
          text: "I was assaulted in Block C dormitory",
          sent: true,
          time: "01:45",
        },
        {
          text: "Oh my God! Did you report it?",
          sent: false,
          time: "01:46",
        },
        {
          text: "Who will believe me? He's a final year student",
          sent: true,
          time: "01:47",
        },
      ],
    },
    {
      title: "Student Rep",
      messages: [
        {
          text: "I reported my lecturer to the VC committee",
          sent: true,
          time: "09:15",
        },
        {
          text: "What happened?",
          sent: false,
          time: "09:16",
        },
        {
          text: "Sexual harassment during project supervision",
          sent: true,
          time: "09:17",
        },
        {
          text: "They dismissed my case. Said I lack evidence",
          sent: true,
          time: "09:18",
        },
        {
          text: "The system is designed to protect them, not us",
          sent: true,
          time: "09:20",
        },
      ],
    },
  ]

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-gradient-to-br from-echo-trust via-echo-trust/90 to-echo-trust/80">
      {/* Carousel - No custom CSS overrides, relying on React Slick settings */}
      <Slider {...settings} className="w-full h-full">
        {chatScenarios.map((scenario, index) => (
          <div key={index} className="w-full h-[70vh] md:h-[80vh]">
            <WhatsAppChat
              messages={scenario.messages}
              title={scenario.title}
            />
          </div>
        ))}
      </Slider>

      {/* Enhanced overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-echo-trust/95 via-echo-trust/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

      {/* Main Content - Left side */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            {/* Main Hero Heading - Balanced hierarchy */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
                <span className="block text-white drop-shadow-2xl">
                  Speak Out Safely
                </span>
                <span className="block text-lg md:text-xl font-medium text-white/80 mt-1 drop-shadow-md">
                  Your voice. Your shield.
                </span>
              </h1>
            </div>

            {/* Supporting Tagline with Refined Anonymous Emphasis */}
            <div className="mb-6 space-y-3">
              <p className="text-lg md:text-xl text-white/90 font-medium drop-shadow-lg leading-relaxed">
                Break the silence. Expose the truth. Stay protected.
              </p>
              
              <div className="flex flex-wrap items-center gap-2 text-base md:text-lg text-white/80 font-medium">
                <span>Report</span>
                <span className="relative">
                  <span className="text-xl md:text-2xl font-black text-white animate-pulse bg-gradient-to-r from-white/20 to-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/30 shadow-lg transform hover:scale-105 transition-all duration-300">
                    Anonymously
                  </span>
                </span>
                <span className="text-white/60 mx-1">•</span>
                <span className="text-white/80">Get Justice</span>
                <span className="text-white/60 mx-1">•</span>
                <span className="text-white/80">Make Change</span>
              </div>
            </div>

            {/* Description with better readability */}
            <div className="mb-8 space-y-2">
              <p className="text-base md:text-lg text-white/75 leading-relaxed drop-shadow-md">
                Secure platform for Nigerian university students to expose campus incidents.
              </p>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Your identity stays protected. Your voice creates impact.
              </p>
            </div>
            
            {/* Refined CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
              <a href="/submit" className="group bg-white text-echo-trust px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl">
                <span className="flex items-center justify-center gap-2">
                  <span>Report</span>
                  <span className="font-semibold">
                    Anonymously
                  </span>
                </span>
              </a>
              
              <a href="/reports" className="border-2 border-white/70 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-echo-trust transition-all transform hover:scale-105 shadow-xl">
                View Reports
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicator dots - Synced with 2-second timing */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {chatScenarios.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white/40 animate-pulse"
            style={{
              animationDelay: `${index * 0.5}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </div>
  )
} 