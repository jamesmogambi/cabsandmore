import Image from "next/image";
import Link from "next/link";

const DownloadSection = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="max-w-[1140px] mt-24 m-auto flex flex-col md:flex-row px-4 md:px-0">
        <div className="w-full md:w-1/2">
          <h2 className="text-[40px] mb-6">Download Fox-jek App</h2>
          <div className="space-y-8">
            <p className="text-[#777777]">
              As a customer, you can download the Wiki customer app to get your
              transport, delivery, and provider services like a tutor,
              electrician, beautician, plumber, and more in Panama. You can
              register into apps with your social media account or personal
              information.
            </p>
            <p className="text-[#777777]">
              After successful login, you can see the list of services, offers,
              additional features and more. You have the option to search for
              services based on your requirements. After selecting services, you
              have the option to filter restaurants or service providers based
              on offer details, rating & review, prices, etc.
            </p>
            <p className="text-[#777777]">
              After selecting a service, you can place a ride/delivery/service
              request. Also, you can pay for your services with different
              payment options like cash, card or in-app wallet. You can manage
              your profile details, see your history and invite friends.
            </p>
          </div>

          <div className="flex my-10 gap-2">
            <Link href="">
              <Image
                src={"/images/google-play-badge-black.png"}
                height={66}
                width={200}
                quality={100}
              />
            </Link>
            <Link href="">
              <Image
                src={"/images/app-store-badge-black.png"}
                height={66}
                width={200}
                quality={100}
              />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={
              "https://foxjekapp24.startuptrinity.com/assets/front/img/png/mockup-new.png?v=0.3"
            }
            height={500}
            width={272}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
