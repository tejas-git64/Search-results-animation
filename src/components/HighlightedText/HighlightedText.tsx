export default function HightlightedText({
  query,
  value,
}: {
  query: string;
  value: string;
}) {
  function getHighlightedLetters() {
    if (query.trim() === "") return value;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = value.split(regex);

    return parts.map((part, idx) =>
      regex.test(part) ? (
        <span key={idx} className="bg-[#FEE3C6]">
          {part}
        </span>
      ) : (
        <span key={idx}>{part}</span>
      ),
    );
  }

  return (
    <b className="w-full text-xs font-semibold">{getHighlightedLetters()}</b>
  );
}
