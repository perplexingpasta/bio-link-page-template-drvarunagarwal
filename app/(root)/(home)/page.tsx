"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { HiMiniGlobeAsiaAustralia } from "react-icons/hi2";

const page = () => {
  return (
    <>
      <main className="relative mx-auto mt-8 flex max-w-[90%] flex-col items-center justify-center overflow-clip">
        {/* TOP INFO W LOGO */}
        <section className="flex flex-col justify-between text-center text-lg md:text-xl">
          <Image
            src="/images/celeste logo.png"
            alt=""
            width={500}
            height={500}
            className="mb-5 w-32 place-self-center md:mb-10 md:w-44"
          />
          <h1 className="text-3xl font-semibold md:text-4xl">
            Dr. Varun Agarwal
          </h1>
          <h1 className="mb-10 text-2xl font-light md:text-3xl">MD, DDV</h1>
          <p>Hey! 👋</p>
          <p>
            This is my digital business card. Here&apos;s everything to know
            about me.
          </p>
          <div className="my-4 border-2 border-b-black-100 md:my-8" />
        </section>

        {/* HERO + 3 BUTTONS */}
        <section>
          <Image
            src="/images/doctor.jpg"
            alt=""
            width={500}
            height={500}
            className="mx-auto my-2 w-max place-self-center rounded-2xl"
          />
          <div className="mx-auto">
            <Link
              className="my-4 flex items-center justify-center md:mt-5"
              href="tel:01274222811"
            >
              <button className="w-[90vw] rounded-xl bg-red-300 p-3 text-base transition-all duration-300 hover:bg-red-400 hover:text-white active:bg-black-100 active:text-white md:w-[80vw] md:p-3 md:px-6 lg:w-[25vw]">
                <span className="ml-4 flex items-center justify-start gap-x-4 md:ml-12 md:gap-x-6">
                  <BiPhoneCall className="text-2xl md:text-4xl" />
                  Call Now
                </span>
              </button>
            </Link>
            <Link
              className="my-4 flex items-center justify-center md:mt-5"
              href="tel:01274222811"
            >
              <button className="w-[90vw] rounded-xl bg-red-300 p-3 text-base transition-all duration-300 hover:bg-red-400 hover:text-white active:bg-black-100 active:text-white md:w-[80vw] md:p-3 md:px-6 lg:w-[25vw]">
                <span className="ml-4 flex items-center justify-start gap-x-4 md:ml-12 md:gap-x-6">
                  <FaWhatsapp className="text-2xl md:text-4xl" />
                  Text on WhatsApp
                </span>
              </button>
            </Link>
            <Link
              className="my-4 flex items-center justify-center md:mt-5"
              href="tel:01274222811"
            >
              <button className="w-[90vw] rounded-xl bg-red-300 p-3 text-base transition-all duration-300 hover:bg-red-400 hover:text-white active:bg-black-100 active:text-white md:w-[80vw] md:p-3 md:px-6 lg:w-[25vw]">
                <span className="ml-4 flex items-center justify-start gap-x-4 md:ml-12 md:gap-x-6">
                  <RiContactsLine className="text-2xl md:text-4xl" />
                  Save Contact Information
                </span>
              </button>
            </Link>
          </div>
          <div className="my-4 border-2 border-b-black-100 md:my-8" />
        </section>

        {/* VISIT */}
        <section className="flex flex-col justify-between text-center text-lg">
          <h1 className="my-2 mb-4 text-3xl font-semibold md:text-5xl">
            Visit Us
          </h1>
          <div className="mx-auto mb-2 aspect-square w-[90vw] md:w-[80vw] lg:w-[25vw]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22582.143987612282!2d-122.1565248820646!3d37.42647615735572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbae5f33774b5%3A0x6dd7ef2d054587e3!2sTerun%20Pizza!5e0!3m2!1sen!2sin!4v1735704949104!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="rounded-2xl border-0"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h1 className="my-5 text-2xl md:text-3xl">Working Hours</h1>
          <div className="mx-auto grid w-[85vw] grid-cols-2">
            <div className="text-left">
              <p>Monday</p>
              <p>Tuesday</p>
              <p>Wednesday</p>
              <p>Thursday</p>
              <p>Friday</p>
              <p>Saturday</p>
              <p>Sunday</p>
            </div>
            <div className="text-left opacity-75">
              <p>11 am to 5 pm</p>
              <p>11 am to 5 pm</p>
              <p>11 am to 5 pm</p>
              <p>11 am to 5 pm</p>
              <p>11 am to 5 pm</p>
              <p>11 am to 1 pm</p>
              <p>11 am to 1 pm</p>
            </div>
          </div>
          <div className="my-4 border-2 border-b-black-100 md:my-8" />
        </section>

        {/* SOCIAL ICONS */}
        <section className="mb-16 flex flex-row items-center justify-center space-x-4 text-3xl md:mb-24 md:space-x-6 md:text-4xl">
          <Link href="tel:01274222811">
            <IoMdMail />
          </Link>
          <Link href="tel:01274222811">
            <HiMiniGlobeAsiaAustralia />
          </Link>
          <Link href="tel:01274222811">
            <MdFacebook />
          </Link>
          <Link href="tel:01274222811">
            <AiFillInstagram />
          </Link>
          {/* <Link href="tel:01274222811">
            <IoLogoWhatsapp />
          </Link>
          <Link href="tel:01274222811">
            <IoMdContact />
          </Link> */}
        </section>
      </main>

      <footer>
        <div className="bg-black p-3 text-center font-light text-white md:p-6 md:text-lg lg:text-xl">
          {" "}
          Designed by{" "}
          <Link
            href="https://www.celesteconsulting.in/"
            className="!cursor-pointer hover:text-indigo-300"
            target="_blank"
          >
            {" "}
            Céleste Consulting ✨
          </Link>
        </div>
      </footer>
    </>
  );
};

export default page;
