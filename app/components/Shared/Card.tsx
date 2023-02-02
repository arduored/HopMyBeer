import { Link } from "@remix-run/react";
import Notation from "./Notation";

export type Item = {
  id: string;
  title: string;
  picture: string;
  description: string;
  note: number;
};

type ItemProps = {
  data: Item;
};

export default function Card({ data }: ItemProps) {
  return (
    <Link to={`/beers/${data.id}`} className="card-wrapper">
      <div className="card">
        <p className="card-title">{data.title}</p>
        <img
          src={data.picture}
          className="card-image"
          aria-label={data.title}
        />
        <div className="card-content">
          <p>{data.description}</p>
        </div>
        <div className="card-footer">
          <Notation value={data.note} />
        </div>
      </div>
    </Link>
  );
}
