import React from "react";
import Footer from "./Footer";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col mt-10 min-h-screen">
      <div className="px-36 flex-grow">
        <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
        <p className="text-gray-600 mb-6">
          Memiliki pertanyaan lebih lanjut seputar PaDi UMKM? Silakan
          menghubungi Kami secara langsung.
        </p>
      </div>

      <div className="flex flex-col px-36 md:flex-row gap-6 mb-10">
        <div className="p-6 shadow rounded-lg w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-4">
            Layanan Informasi Pengguna
          </h3>
          <p className="mb-2 flex items-center">
            <Mail className="mr-2" />
            <span className="font-semibold">Email: </span>
            <a href="mailto:cs@padiumkm.id" className="text-blue-600">
              cs@padiumkm.id
            </a>
          </p>
          <p className="mb-2 flex items-center">
            <Phone className="mr-2" />
            <span className="font-semibold">Whatsapp: </span>
            <a href="https://wa.me/6281290007820" className="text-blue-600">
              +62 812 9000 7820
            </a>
          </p>
          <p className="text-gray-500 font-bold">
            Senin - Jumat | 08:00 - 17:00 WIB
          </p>
        </div>

        <div className="p-6 shadow rounded-lg w-full md:w-1/2">
          <div className="mb-2">
            <h3 className="text-xl font-semibold mb-4">Kantor Kami</h3>
            <p className="mb-2">PaDi UMKM Headquarters</p>
            <p className="text-gray-600">
              Gedung Telkom Direktorat Business and Technology
              <br />
              Jln. Prof. Dr. Soepomo No. 139, Jakarta Selatan, DKI Jakarta,
              12810 Indonesia
            </p>
          </div>
          <h3 className="text-xl font-semibold mb-4 mt-4">
            Ikuti Media Sosial Kami
          </h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-blue-600 flex items-center"
              aria-label="Facebook"
            >
              <Facebook className="mr-2" />
              Facebook
            </a>
            <a
              href="https://twitter.com"
              className="text-blue-400 flex items-center"
              aria-label="Twitter"
            >
              <Twitter className="mr-2" />
              Twitter
            </a>
            <a
              href="https://instagram.com"
              className="text-pink-600 flex items-center"
              aria-label="Instagram"
            >
              <Instagram className="mr-2" />
              Instagram
            </a>
            <a
              href="https://youtube.com"
              className="text-red-600 flex items-center"
              aria-label="YouTube"
            >
              <Youtube className="mr-2" />
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="px-36 mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.042131415892!2d107.58926129229269!3d-6.873423436961501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e767e572539b%3A0xd9d0847b9cbb3fb8!2sTelkom%20Direktorat%20Digital%20Business!5e1!3m2!1sid!2sid!4v1724899614208!5m2!1sid!2sid"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="shadow rounded-lg w-full"
          title="Telkom Direktorat Digital Business"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
