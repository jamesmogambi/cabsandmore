import Image from "next/image";

const PartnerSection = () => {
  return (
    <div>
      <div className="max-w-[1140px] m-auto mt-14 mb-10 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            src="https://foxjekapp24.startuptrinity.com/assets/front/img/png/become-partner.png?v=0.2"
            quality={100}
            height={500}
            width={454}
          />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-0">
          <h2 className="text-[40px]">Become a Partner</h2>
          <div className="space-y-10 mt-6">
            <p className="text-[#777777] max-w-[540px] ">
              Download the Wiki Store app and expand your business with online
              platforms. You can sign up for the app with information like name,
              email, and contact details.
            </p>
            <p className="text-[#777777] max-w-[540px] ">
              You can add your store details such as store name, product
              details, timing, delivery radius, estimated delivery time,
              packaging charges, food details, and promo code from the store
              admin panel.
            </p>
            <p className="text-[#777777] max-w-[540px] ">
              After the admin approves your store request, you will get the
              delivery request and you will able to see all the delivery and
              customer details. You can manage new order requests with the
              accept or decline option. Also, you can promote your business
              within the app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
