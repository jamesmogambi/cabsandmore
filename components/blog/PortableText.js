const decorateMarks = (children, marks, markDefs) => {
  let result = children;

  if (marks) {
    marks.forEach((mark) => {
      if (mark === "strong") {
        result = <strong className="font-bold">{result}</strong>;
      } else if (mark === "em") {
        result = <em className="italic">{result}</em>;
      }
    });
  }

  return result;
};

const renderSpan = (span, markDefs) => {
  const { text, marks } = span;
  const decorated = decorateMarks(text, marks, markDefs);
  return <span key={span._key}>{decorated}</span>;
};

const renderBlock = (block) => {
  const { style, children, markDefs, listItem } = block;

  const content = children.map((child) => renderSpan(child, markDefs));

  switch (style) {
    case "h2":
      return (
        <h2 key={block._key} className="mt-10 text-[26px] font-bold leading-tight text-[#111827] first:mt-0 md:text-[30px]">
          {content}
        </h2>
      );
    case "h3":
      return (
        <h3 key={block._key} className="mt-8 text-[21px] font-bold text-[#111827] first:mt-0">
          {content}
        </h3>
      );
    case "blockquote":
      return (
        <blockquote key={block._key} className="mt-7 border-l-4 border-[#26C165] pl-5 text-[18px] italic leading-relaxed text-[#4b5563]">
          “{content}”
        </blockquote>
      );
    default:
      return (
        <p key={block._key} className="mt-5 text-[17px] leading-[1.8] text-[#374151] first:mt-0">
          {content}
        </p>
      );
  }
};

const renderList = (blocks, listType) => {
  const listItems = blocks.map((block) => {
    const items = block.children.map((child) => renderSpan(child, block.markDefs));
    return (
      <li key={block._key} className="mt-1 text-[17px] leading-[1.7] text-[#374151]">
        {items}
      </li>
    );
  });

  const listClass =
    listType === "bullet"
      ? "list-disc space-y-2 pl-6"
      : "list-decimal space-y-2 pl-6";

  return (
    <>
      {listType === "bullet" ? (
        <ul className={`mt-5 ${listClass} text-[17px] leading-[1.7] text-[#374151]`}>
          {listItems}
        </ul>
      ) : (
        <ol className={`mt-5 ${listClass} text-[17px] leading-[1.7] text-[#374151]`}>
          {listItems}
        </ol>
      )}
    </>
  );
};

const PortableText = ({ blocks }) => {
  if (!blocks || blocks.length === 0) return null;

  const elements = [];
  let currentList = [];
  let currentListType = null;

  blocks.forEach((block) => {
    if (block._type !== "block") return;

    if (block.listItem) {
      if (!currentList || currentListType !== block.listItem) {
        if (currentList.length > 0) {
          elements.push(renderList(currentList, currentListType));
        }
        currentList = [];
        currentListType = block.listItem;
      }
      currentList.push(block);
    } else {
      if (currentList.length > 0) {
        elements.push(renderList(currentList, currentListType));
        currentList = [];
        currentListType = null;
      }
      elements.push(renderBlock(block));
    }
  });

  if (currentList.length > 0) {
    elements.push(renderList(currentList, currentListType));
  }

  return <div>{elements}</div>;
};

export default PortableText;
