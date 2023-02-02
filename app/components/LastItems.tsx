import Card, { Item } from "./Shared/Card";

type LastItemsProps = {
  items: Item[];
};

export default function LastItems({ items }: LastItemsProps) {
  return (
    <div className="lastItems">
      <h4 className="lastItems-title">Recently added</h4>
      <div className="lastItems-content">
        {items.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
