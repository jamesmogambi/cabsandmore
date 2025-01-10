import AddWalletSection from "@/components/AddWalletSection";
import WalletHistory from "@/components/WalletHistory";

const page = () => {
  return (
    <div className="space-y-7">
      <AddWalletSection />
      <WalletHistory />
    </div>
  );
};

export default page;
