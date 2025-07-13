"use client";
import ImageSlider from '../components/ImageSlider'
import ServicesSection from '../components/ServicesSection'
import ContactanosSection from '../components/ContactanosSection'
import ConocenosSection from "@/components/ConocenosSection";

export default function Home() {

  return (
    <>
      <section>
        <main className="flex min-h-screen flex-col items-center justify-center py-2">
        <ImageSlider />
        </main>
      </section>
      
      <section className='h-screen w-full'>
        <ServicesSection/>
      </section>

      <section className='h-screen w-full'>
        <ConocenosSection/>
      </section>
      
      <section className='h-screen w-full'>
        <ContactanosSection/>
      </section>
    </>
  );
}