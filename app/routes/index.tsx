import { useLoaderData, useNavigate } from "@remix-run/react";
import LastItems from "~/components/LastItems";
import { Item } from "~/components/Shared/Card";
import PlusIcon from "~/components/Shared/Icons/PlusIcon";
import Message from "~/components/Shared/Message";
import QuickAction from "~/components/Shared/QuickAction";
import { getLastXBeers } from "~/scripts/beerFunctions";

export async function loader() {
  return await getLastXBeers(3);
}

export default function Index() {
  const lastThreeItems: Item[] = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      {lastThreeItems.length > 0 ? (
        <>
          <LastItems items={lastThreeItems} />
          <div className="quick-action-wrapper">
            <QuickAction icon={<PlusIcon />} />
          </div>
        </>
      ) : (
        <Message type="warning">
          <h2>I can't believe you've never drank a beer...</h2>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/beers/new")}
          >
            <p className="text-lg"> Let's start!</p>
          </button>
        </Message>
      )}
    </div>
  );
}
