"use client";
import ImageSlider from '../components/ImageSlider'
import ServicesSection from '../components/ServicesSection'
import ContactanosSection from '../components/ContactanosSection'
import ConocenosSection from "@/components/ConocenosSection";

export default function Home() {

  return (
    <>
      <section className=''>
        <main className="flex min-h-screen flex-col items-center justify-center">
        <ImageSlider />
        </main>
      </section>
      
      <section className='flex flex-col items-center justify-center'>
                  <ServicesSection/>

      </section>

      <section className='flex flex-col items-center justify-center'>
        <ConocenosSection/>

      </section>
      
      <section className='flex flex-col items-center justify-center'>
        <ContactanosSection/>
      </section>
    </>
  );
}