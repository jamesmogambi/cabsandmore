import { Lightbulb } from "lucide-react";

const PostContent = ({ blocks }) => {
  return (
    <div>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="mt-10 text-[26px] font-bold leading-tight text-[#111827] first:mt-0 md:text-[30px]"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={index}
                className="mt-8 text-[21px] font-bold text-[#111827] first:mt-0"
              >
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p
                key={index}
                className="mt-5 text-[17px] leading-[1.8] text-[#374151] first:mt-0"
              >
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul
                key={index}
                className="mt-5 list-disc space-y-2 pl-6 text-[17px] leading-[1.7] text-[#374151]"
              >
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol
                key={index}
                className="mt-5 list-decimal space-y-2 pl-6 text-[17px] leading-[1.7] text-[#374151]"
              >
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="mt-7 border-l-4 border-[#26C165] pl-5 text-[18px] italic leading-relaxed text-[#4b5563]"
              >
                “{block.text}”
              </blockquote>
            );
          case "callout":
            return (
              <div
                key={index}
                className="mt-7 flex gap-3 rounded-2xl border border-[#26C165]/20 bg-[#F0FBF4] p-5"
              >
                <Lightbulb
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#1b7f45]"
                  aria-hidden="true"
                />
                <p className="text-[16px] leading-relaxed text-[#1f4d33]">
                  {block.text}
                </p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default PostContent;