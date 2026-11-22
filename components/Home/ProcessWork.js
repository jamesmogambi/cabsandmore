import ProcessWorkItem from "./ProcessWorkItem";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Sign up",
    description: "Download the app and create your account in minutes.",
    image: "/images/processWork/how-1-sign-up.png",
  },
  {
    title: "Choose a service",
    description: "Pick from rides, delivery, home services and more.",
    image: "/images/processWork/how-2-choose-a-service.png",
  },
  {
    title: "Book and pay",
    description: "See upfront pricing and pay securely with M-Pesa or card.",
    image: "/images/processWork/how-3-book-and-pay.png",
  },
  {
    title: "Track and enjoy",
    description: "Follow your ride or delivery live, then rate your experience.",
    image: "/images/processWork/how-4-track-and-enjoy.png",
  },
];

const ProcessWork = () => {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1140px] px-4">
        <SectionHeading
          eyebrow="Get started"
          title="How Cabs&More works"
          description="From download to done in four simple steps."
        />

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <ProcessWorkItem
              key={step.title}
              number={index + 1}
              {...step}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessWork;