import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
// import dynamic from "next/dynamic";
// import HomeEmblaCarousel from "../../../components/ui/HomeEmbla";
// // import { Metadata } from "next";

// const DynamicAbout = dynamic(() => import("@/components/About"));
// const DynamicWhy = dynamic(() => import("@/components/ui/WhyChooseUsCards"));
// const DynamicGoogleReviews = dynamic(
//   () => import("@/components/ui/GoogleReviewsCarousel"),
// );
// const DynamicContact = dynamic(() => import("@/components/HomepageContact"), {
//   ssr: false,
// });

const page = () => {
  return (
    <>
      {/* <div> */}
      <main className="relative mt-24 flex flex-col items-center justify-center overflow-clip">
        {/* HERO */}
        {/* <section className="relative">
          <HomeEmblaCarousel />
          <div className="hero-overlay text-white lg:h-[60vh] absolute inset-0 flex flex-col items-start justify-end p-3 pb-6 md:p-4 lg:ml-10 lg:justify-center">
            <p className="mb-1 text-lg font-semibold md:text-2xl lg:text-3xl">
              Your Beautiful Self
            </p>
            <p className="md:text-xl lg:text-2xl">
              Visit Dr. Varun Agarwal today to start your healthy skin journey!
            </p>
          </div>
        </section> */}

        {/* STATS */}
        {/* <section>
          <div className="mx-auto my-5 grid max-w-[90%] md:max-w-[85%] grid-cols-3 gap-x-3 rounded-3xl border-4 px-3 py-5 md:my-16 md:gap-x-16">
            <div className="flex flex-col items-center text-center">
              <p className="text-xl font-semibold md:text-3xl">20+</p>
              <h3 className="md:text-2xl">Years of Experience</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-xl font-semibold md:text-3xl">1,200+</p>
              <h3 className="md:text-2xl">Procedures Done</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-xl font-semibold md:text-3xl">3,000+</p>
              <h3 className="md:text-2xl">Happy Patients</h3>
            </div>
          </div>
        </section> */}

        {/* ABOUT THE DOCTOR */}
        {/* <section className="mx-auto max-w-[90%] md:mb-12 md:max-w-[85%] rounded-3xl lg:w-full
         bg-gray-200">
          <DynamicAbout />
        </section> */}

        {/* WHY CHOOSE US */}
        {/* <section className="mx-auto mb-12 mt-7 block max-w-[90%] rounded-3xl bg-red-500 py-6 pl-4 md:hidden">
          <h1 className="text-2xl font-semibold md:text-3xl">Why Choose Us</h1>
          <DynamicWhy />
        </section> */}

        {/* GOOGLE TESTIMONIALS */}
        {/* <section>
          <DynamicGoogleReviews />
        </section> */}

        {/* CONTACT US */}
        {/* <section className="w-full max-w-[90%] md:max-w-[85%] lg:mt-10">
          <DynamicContact />
        </section> */}
      </main>
      {/* </div> */}

      <main className="relative mx-auto -mt-12 flex max-w-[90%] flex-col items-center justify-center overflow-clip">
        {/* TOP INFO W LOGO */}
        <section className="flex flex-col justify-between text-center text-lg">
          <Image
            src="/images/celeste logo.png"
            alt=""
            width={500}
            height={500}
            className="mb-8 w-32 place-self-center"
          />
          <h1 className="mb-4 text-3xl font-semibold">Dr. Varun Agarwal</h1>
          <p>Hey! 👋</p>
          <p>
            This is my digital business card. Here&apos;s everything to know
            about me.
          </p>
          <div className="my-4 border-2 border-b-black-100" />
        </section>

        {/* HERO + 3 BUTTONS */}
        <section>
          <Image
            src="/images/doctor.jpg"
            alt=""
            width={500}
            height={500}
            className="my-2 w-max place-self-center rounded-2xl"
          />
          <div className="mx-auto w-max">
            <Link
              className="my-4 flex items-center justify-center md:mt-12 lg:ml-12 lg:justify-normal"
              href="tel:01274222811"
            >
              <button className="w-[90vw] rounded-xl bg-red-300 p-3 text-base transition-all duration-300 hover:bg-red-400 hover:text-white active:bg-black-100 active:text-white md:p-3 md:px-6">
                <span className="ml-4 flex items-center justify-start gap-x-4">
                  <BiSolidPhoneCall className="text-2xl" />
                  Call Now
                </span>
              </button>
            </Link>
            <Link
              className="my-4 flex items-center justify-center md:mt-12 lg:ml-12 lg:justify-normal"
              href="tel:01274222811"
            >
              <button className="w-[90vw] rounded-xl bg-red-300 p-3 text-base transition-all duration-300 hover:bg-red-400 hover:text-white active:bg-black-100 active:text-white md:p-3 md:px-6">
                <span className="ml-4 flex items-center justify-start gap-x-4">
                  <FaWhatsapp className="text-2xl" />
                  Text on WhatsApp
                </span>
              </button>
            </Link>
            <Link
              className="my-4 flex items-center justify-center md:mt-12 lg:ml-12 lg:justify-normal"
              href="tel:01274222811"
            >
              <button className="w-[90vw] rounded-xl bg-red-300 p-3 text-base transition-all duration-300 hover:bg-red-400 hover:text-white active:bg-black-100 active:text-white md:p-3 md:px-6">
                <span className="ml-4 flex items-center justify-start gap-x-4">
                  <IoMdContact className="text-2xl" />
                  Save Contact Information
                </span>
              </button>
            </Link>
          </div>
          <div className="my-4 border-2 border-b-black-100" />
        </section>
      </main>
    </>
  );
};

export default page;
