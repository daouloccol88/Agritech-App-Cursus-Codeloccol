"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import LandingMeteoCard from "@/components/Landing page/LandingMeteoCard";
import LandingFAOCard from "@/components/Landing page/LandingFAOCard";
import HeroSection from "@/components/Landing page/HeroSection";
import BlogSection from "@/components/Landing page/BlogSection";
import TeamsSection from "@/components/Landing page/TeamsSection";

export default function LandingPage() {
  return (
    <div>
      <section className="hero-section">
        <HeroSection />
      </section>

      <section>
        <div className="container-fluid">
          <div className="d-flex justify-content-between">
            <div>
              <h3>We are confident</h3>
            </div>
            <div className="d-flex">
              <div className="d-flex">
                <i className="bi bi-hand-thumbs-up text-light fs-2 bg-green px-3 rounded-3 pt-1"></i>
                <div className="d-flex flex-column ms-3">
                  <h4 className="text-green">98%</h4>
                  <h6 className="text-secondary">de clients satisfait</h6>
                </div>
              </div>
              <div className="d-flex ms-5">
                <i className="bi bi-house-heart-fill text-light fs-2 bg-green px-3 rounded-3 pt-1"></i>
                <div className="d-flex flex-column ms-3">
                  <h4 className="text-green">134+</h4>
                  <h6 className="text-secondary">agriculteurs formés</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 ">
              <LandingMeteoCard latitude={13.2454} longitude={2.3047} />
            </div>
            <div className="col-lg-6 col-sm-12">
              <LandingFAOCard />
            </div>
          </div>
        </div>
      </section>

      <section>
        <BlogSection />
      </section>

      <section className="mb-5">
        <div
          className="container text-white"
          style={{
            backgroundImage: `linear-gradient(
            rgba(4, 221, 94, 0.2), 
            rgba(4, 221, 94, 0.2)
            ), url("/Home%20Carroussel.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "300px",
            borderRadius: "10px",
          }}
        >
          <h1 className="mt-5 mb-5 pt-5 pb-5 text-center">Agritech-App</h1>
        </div>
      </section>

      <section>
        <TeamsSection />
      </section>
    </div>
  );
}
