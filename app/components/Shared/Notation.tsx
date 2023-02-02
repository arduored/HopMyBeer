import BeerIcon from "./Icons/BeerIcon";

export default function Notation({ value }: { value: number }) {
  const notationIcons = new Array(5).fill(0);
  return (
    <div className="notation">
      {notationIcons.map((_, id) => (
        <div key={id} className={id < value ? "beer-good" : ""}>
          <BeerIcon />
        </div>
      ))}
    </div>
  );
}
