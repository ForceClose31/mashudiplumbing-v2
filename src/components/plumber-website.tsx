/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Phone,
  CheckCircle,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PlumbingWebsite() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/60183791132", "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+60183791132";
  };

  const handleEmailClick = () => {
    window.open("mailto:mashudiplumbing@gmail.com", "_blank");
  };

  const scrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-4 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero/plumber-hero-2.jpg')" }} // Ganti sesuai path gambar
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="relative">
                <img
                  src="/images/hero/plumber-hero.jpg"
                  alt="Professional Plumber"
                  className="rounded-2xl shadow-2xl w-full max-w-sm mx-auto"
                />
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-blue-800 px-4 py-2 rounded-full font-bold text-sm">
                  8 TAHUN
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <div className="inline-flex items-center bg-yellow-400 text-blue-800 px-4 py-2 rounded-full font-semibold mb-4">
                <Star className="w-4 h-4 mr-2" />
                PENGALAMAN SELAMA 8 TAHUN
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                PROFESSIONAL
                <br />
                <span className="text-yellow-300">PLUMBING SERVIS</span>
              </h1>
              <p className="text-lg lg:text-xl mb-8 leading-relaxed opacity-90 max-w-2xl">
                Kami menyediakan perkhidmatan baiki/servis/tambah paip di
                kawasan Bangi, Kajang, Cheras, Sepang, Puchong, Seri Kembangan,
                Serdang, Semenyih, Mantin
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <Button
                  onClick={handlePhoneClick}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Sekarang
                </Button>
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <Phone className="w-8 h-8 text-yellow-300" />
                <div className="text-left">
                  <p className="text-sm text-gray-200">Hubungi Kami 24/7</p>
                  <p className="text-xl lg:text-2xl font-bold">
                    +60-172-137-979
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "8+", label: "Tahun Pengalaman", icon: "🏆" },
              { number: "500+", label: "Projek Selesai", icon: "✅" },
              { number: "24/7", label: "Servis Tersedia", icon: "🕐" },
              { number: "100%", label: "Kepuasan Pelanggan", icon: "😊" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-8">
            PAKAR TUKANG PAIP (PLUMBER)
            <br />
            <span className="text-blue-600">
              KUALA LUMPUR, SELANGOR & SEREMBAN
            </span>
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Kami di{" "}
              <span className="font-bold text-blue-600">
                MASHUDIPLUMBING.COM
              </span>{" "}
              memiliki pekerja yang mempunyai kemahiran dan kepakaran dalam
              bidang masing-masing. Kepakaran yang kami berikan kepada pelanggan
              termasuk elektrikal, plumber, renovation, mengecat rumah, dan
              pelbagai lagi.
            </p>
            <p>
              Buat masa ini perkhidmatan kami meliputi kawasan{" "}
              <span className="font-semibold">
                Bangi, Kajang, Cheras, Sepang, Puchong, Seri Kembangan, Serdang,
                Semenyih, Mantin
              </span>{" "}
              dan kawasan berdekatan.
            </p>
            <p>
              <span className="font-bold text-blue-600">
                MASHUDIPLUMBING.COM
              </span>{" "}
              di tubuhkan untuk membantu warga Lembah Klang yang menghadapi
              masalah-masalah dan perlu diselesaikan dengan segera.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
              PERKHIDMATAN KAMI
            </h2>
            <p className="text-xl text-gray-600">
              Perkhidmatan tukang paip profesional untuk semua keperluan anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "TILES / JUBIN TANDAS",
                desc: "Melakukan kerja-kerja pemasangan tiles / jubin serta mozac tandas. Rekabentuk kami moden dan memenuhi citarasa anda.",
                image: "/images/services/tiles-service.jpg",
                icon: "🏠",
              },
              {
                title: "SINKI TERSUMBAT",
                desc: "Kami sedia membaiki pulih sinki atau saluran yang tersumbat di rumah anda, supaya air dapat mengalir seperti biasa.",
                image: "/images/services/sink-repair.jpg",
                icon: "🚿",
              },
              {
                title: "PAIP BOCOR",
                desc: "Membaiki dan mengenal pasti masalah paip bocor. Seperti paip sinki, paip bilik air, paip meter dan sebagainya.",
                image: "/images/services/pipe-repair.jpg",
                icon: "🔧",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white p-2 rounded-full text-2xl">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Dapatkan Quotation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Tempah Khidmat Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="/images/about/team-service.jpg"
                  alt="Our Service"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm">Emergency</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
                KAMI DATANG KE TEMPAT ANDA
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Kami beroperasi 7 hari seminggu",
                  "Kami datang terus ke rumah anda",
                  "Anda bebas memilih masa temujanji",
                  "Semua alat ganti adalah 100% genuine",
                  "Pekerja yang berpengalaman & terlatih",
                  "Pekerja akan kenal pasti masalah dahulu",
                  "Harga transparent tanpa caj tersembunyi",
                  "Jaminan untuk semua kerja yang dilakukan",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Kami
                </Button>
                <Button
                  onClick={handlePhoneClick}
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Sekarang
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              MENGAPA PILIH KAMI?
            </h2>
            <p className="text-xl text-gray-600">
              8 sebab mengapa kami adalah pilihan terbaik untuk anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💰",
                title: "HARGA BERPATUTAN",
                desc: "Harga kami berpatutan dengan nilai barangan. Yang penting produk berkualiti & terbaik.",
                color: "bg-yellow-500",
              },
              {
                icon: "🔧",
                title: "PENGALAMAN LUAS",
                desc: "Kami berpengalaman luas & terlatih dalam industri kerja tukang serta bertauliah.",
                color: "bg-blue-500",
              },
              {
                icon: "😊",
                title: "TESTIMONI POSITIF",
                desc: "Anda boleh lihat pelbagai testimoni yang positif telah diberi oleh pelanggan kami.",
                color: "bg-green-500",
              },
              {
                icon: "🏠",
                title: "ON-SITE SERVIS",
                desc: "Kami akan terus ke tempat anda untuk proses servis & kenal pasti kerosakkan.",
                color: "bg-purple-500",
              },
              {
                icon: "📞",
                title: "7 HARI SERVIS",
                desc: "Anda bebas menghubungi & membuat temujanji dgn kami pada bila-bila masa yang anda mahu.",
                color: "bg-red-500",
              },
              {
                icon: "🤝",
                title: "PEKERJA PERAMAH",
                desc: "Semua pekerja kami sangat peramah. Anda boleh berinteraksi dengan mereka.",
                color: "bg-indigo-500",
              },
              {
                icon: "📦",
                title: "PILIHAN BARANG",
                desc: "Anda boleh memilih & membuat pilihan barangan anda sendiri. Pilihan di tangan anda.",
                color: "bg-pink-500",
              },
              {
                icon: "🏅",
                title: "PRODUK BERKUALITI",
                desc: "Semua barangan kami lulus quality inspection serta di beri jaminan yang ditetapkan.",
                color: "bg-orange-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div
                  className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center bg-yellow-400 text-red-700 px-6 py-3 rounded-full font-bold text-lg mb-6">
              🚨 EMERGENCY SERVICE
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              WALAU DIMANA PUN ANDA BERADA
              <br />
              <span className="text-yellow-300">KAMI TETAP SEDIA MEMBANTU</span>
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Bantuan segera di masa sulit anda - 24 jam sehari, 7 hari seminggu
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              WhatsApp Emergency
            </Button>
            <Button
              onClick={handlePhoneClick}
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-6 h-6 mr-2" />
              Call Emergency
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              GALERI KERJA KAMI
            </h2>
            <p className="text-xl text-gray-600">
              Lihat hasil kerja berkualiti yang telah kami lakukan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                type: "image",
                src: "/images/gallery/work1.jpg",
                alt: "Kerja Tiles",
              },
              {
                type: "video",
                src: "/images/gallery/videos/demo1.mp4",
                alt: "Kerja Paip",
              },
              {
                type: "image",
                src: "/images/gallery/work2.jpg",
                alt: "Kerja Paip",
              },
              {
                type: "video",
                src: "/images/gallery/videos/demo2.mp4",
                alt: "Kerja Sinki",
              },
              {
                type: "video",
                src: "/images/gallery/videos/demo4.mp4",
                alt: "Kerja Sinki",
              },
              {
                type: "video",
                src: "/images/gallery/videos/demo3.mp4",
                alt: "Kerja Renovation",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {item.type === "video" ? (
                  <div className="relative">
                    <video
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      controls
                      onError={(e) => {
                        e.currentTarget.poster =
                          "/placeholder.svg?height=256&width=400";
                      }}
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      VIDEO
                    </div>
                  </div>
                ) : (
                  <div className="relative overflow-hidden">
                    <img
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src =
                          "/placeholder.svg?height=256&width=400";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOP Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              STANDARD OPERATION PROCEDURE (SOP)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berikut merupakan langkah-langkah mudah yang perlu anda ikut untuk
              menggunakan perkhidmatan kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1. HUBUNGI KAMI",
                desc: "Sila klik button whatsapp atau call. Beritahu kami lokasi, serta masalah anda. Kami akan cuba consult anda ditalian dahulu.",
                icon: "📞",
                color: "bg-blue-500",
                bgColor: "bg-blue-50",
              },
              {
                step: "2. ON-SITE SERVIS",
                desc: "Pekerja kami akan terus ke lokasi anda. Kami akan check dulu masalah anda. Kami akan consult anda dan anda buat keputusan.",
                icon: "🔧",
                color: "bg-green-500",
                bgColor: "bg-green-50",
              },
              {
                step: "3. PEMBAYARAN",
                desc: "Setelah anda puas hati dengan perkhidmatan kami, anda boleh buat bayaran secara tunai, kepada pekerja kami.",
                icon: "💰",
                color: "bg-yellow-500",
                bgColor: "bg-yellow-50",
              },
            ].map((sop, index) => (
              <Card
                key={index}
                className={`text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${sop.bgColor} border-2 border-transparent hover:border-gray-200`}
              >
                <div
                  className={`w-20 h-20 ${sop.color} rounded-full flex items-center justify-center text-4xl text-white mx-auto mb-6 shadow-lg`}
                >
                  {sop.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {sop.step}
                </h3>
                <p className="text-gray-600 leading-relaxed">{sop.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="contact-section"
        className="py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              HUBUNGI SEGERA!
            </h2>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Dapatkan perkhidmatan tukang paip profesional dengan harga
              berpatutan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Phone className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="font-bold text-lg mb-2">Telefon</h3>
              <p className="text-xl font-bold">+60-172-137-979</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-green-300" />
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              <p className="text-xl font-bold">+60-172-137-979</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Mail className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-sm font-bold">mashudiplumbing@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              WhatsApp Kami
            </Button>
            <Button
              onClick={handlePhoneClick}
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-12 py-4 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-6 h-6 mr-2" />
              Call Sekarang
            </Button>
          </div>

          {/* Service Areas */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 mr-2" />
              <h3 className="text-xl font-bold">KAWASAN PERKHIDMATAN</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              {[
                "Bangi",
                "Kajang",
                "Cheras",
                "Sepang",
                "Puchong",
                "Seri Kembangan",
                "Serdang",
                "Semenyih",
                "Mantin",
              ].map((area, index) => (
                <span
                  key={index}
                  className="bg-white/20 px-3 py-1 rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Badge Section */}
      <section className="bg-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-4">
              <img
                src="/images/badges/quality-badge.png"
                alt="Google 5-Star Rating"
                className="w-auto h-24"
              />
            </div>

            <div className="flex items-center gap-4">
              <img
                src="/images/badges/service-badge.png"
                alt="Certified Plumber"
                className="w-auto h-24"
              />
            </div>
          </div>
          <div className="mt-5">
            <p className="text-xl font-bold text-gray-800">
              Tukang Paip Bertauliah
            </p>
            <p className="text-sm text-gray-600">Berdaftar & Profesional</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                MASHUDI PLUMBING
              </h3>
              <p className="text-gray-400 mb-4">
                Perkhidmatan tukang paip profesional dengan pengalaman 8 tahun
                di Lembah Klang.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={handleWhatsAppClick}
                  size="sm"
                  className="bg-green-500 hover:bg-green-600"
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button
                  onClick={handlePhoneClick}
                  size="sm"
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  <Phone className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">PERKHIDMATAN</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Tiles / Jubin Tandas</li>
                <li>• Sinki Tersumbat</li>
                <li>• Paip Bocor</li>
                <li>• Pemasangan Paip Baru</li>
                <li>• Emergency Repair</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">HUBUNGI KAMI</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+60-172-137-979</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>mashudiplumbing@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>24/7 Emergency Service</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Mashudi Plumbing. Semua hak terpelihara.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
