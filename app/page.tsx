import { Header } from "./components/header/header";
import { HeroSection } from "./components/heroSection/heroSection";
import Description from "./components/description/description";
import { GalleryList } from "./components/gallery/gallery";
import TrackingDetails from "./components/trackingDetails/trackingDetails";
import SliderGallery from "./components/slidesGallery/slidesGallery";
import { Footer } from "./components/footer/footer";
import ContactForm from "./components/contactForm/contactForm";

export default function Home() {
  return (
    <>
      <Header />

      <HeroSection />

      <Description />
      {/* <GalleryList /> */}
      <SliderGallery />

      <TrackingDetails />
      <ContactForm />
      <Footer />

      {/* Responsive media: video on desktop (md+), image on mobile */}
      {/* {
      (() => {
        const mp4Src: string = typeof truckMp4 === "string" ? truckMp4 : (truckMp4 as any)?.src ?? (truckMp4 as any)?.default ?? "";
        const webmSrc: string = typeof truckWebm === "string" ? truckWebm : (truckWebm as any)?.src ?? (truckWebm as any)?.default ?? "";
        const imgSrc: string = typeof truckImg === "string" ? truckImg : (truckImg as any)?.src ?? (truckImg as any)?.default ?? "";

        return (
          <div className="w-full flex items-center justify-center py-6">
            <div className="w-36 h-36">
              <video className="hidden md:block w-full h-full object-contain" autoPlay muted loop playsInline>
                {webmSrc && <source src={webmSrc} type="video/webm" />}
                {mp4Src && <source src={mp4Src} type="video/mp4" />}
                Your browser does not support the video tag.
              </video>
              <img src={imgSrc} alt="My App logo" className="block md:hidden w-full h-full object-contain" />
            </div>
          </div>
        );
      })()
    } */}
    </>
  );
}
