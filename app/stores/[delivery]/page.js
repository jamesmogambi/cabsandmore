import DownloadSection from "@/components/Store/DownloadSection";
import PartnerSection from "@/components/Store/PartnerSection";
import StoreBanner from "@/components/Store/StoreBanner";
import StoreList from "@/components/Store/StoreList";

const page = () => {
  return (
    <div className=" flex min-h-screen flex-col justify-between ">
      <StoreBanner />
      <StoreList />
      <DownloadSection />
      <PartnerSection />
    </div>
  );
};

export default page;
