import ProcessWorkItem from "./ProcessWorkItem";

const ProcessWork = () => {
  return (
    <div className="mb-14">
      <div className="max-w-[1140px] m-auto ">
        <h2 className="text-center text-[32px] mb-7">How does Fox-jek Work</h2>

        <div className="space-y-8">
          <div className="flex flex-wrap justify-center">
            <ProcessWorkItem
              title={"Login OR Register"}
              description={"Download the app and create accounts in a few min."}
              image="https://foxjekapp24.startuptrinity.com/assets/front/img/png/1.png"
            />
            <ProcessWorkItem
              title="Choose Service"
              description="Choose from our range of services to book ride/delivery/services done."
              image="https://foxjekapp24.startuptrinity.com/assets/front/img/png/2.png"
            />
            <ProcessWorkItem
              title="Book Service"
              description="See your estimated cost in advance.A convenient way to pay with a card, cash or wallet."
              image="https://foxjekapp24.startuptrinity.com/assets/front/img/png/3.png"
            />
          </div>
          <div className="flex flex-wrap justify-center">
            <ProcessWorkItem
              title="Track Your Service"
              description={
                "Track your ride/service/delivery in real-time. Get in-app and real-time chat notifications."
              }
              image="https://foxjekapp24.startuptrinity.com/assets/front/img/png/4.png"
            />
            <ProcessWorkItem
              image="https://foxjekapp24.startuptrinity.com/assets/front/img/png/5.png"
              title="It s Completed"
              description={
                "Get the services done. Rate and share your reviews of your experience with service providers."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessWork;
