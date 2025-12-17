import Image from "next/image";
import { Header } from "./components/header/header";
import { VideoPlayer } from "./components/videoPlayer/videoPlayer";
import CallButton from "./components/callButton/callButton";
import Description from "./components/description/description";
import { GalleryList } from "./components/gallery/gallery";
import TrackingDetails from "./components/trackingDetails/trackingDetails";
import SliderGallery from "./components/slidesGallery/slidesGallery";
import { Footer } from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* video container: position relative so h1 can be absolutely placed over the video */}
      <div className="relative">
        <VideoPlayer />
        <h1 className="absolute top-[60px] left-1/2 -translate-x-1/2 w-100 uppercase text-center text-[#1d1d1b] text-lg md:text-2xl font-bold px-2">
          Перевозка негабаритных и тяжеловесных грузов
        </h1>
        <p className="absolute bottom-[150px] left-1/2 -translate-x-1/2 w-90 uppercase text-center text-white text-md font-bold">
          Узнайте стоимость перевозки вашего груза
        </p>
        <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2">
          <CallButton />
        </div>
      </div>

      <Description />
      <GalleryList />
      <TrackingDetails />
      <SliderGallery />
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
