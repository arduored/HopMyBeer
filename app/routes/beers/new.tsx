import { useLoaderData, useNavigate } from "@remix-run/react";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";

export async function loader() {
  return ["Stout", "Pale Ale", "IPA", "NEIPA"];
}

type FormValue = {
  name: string;
  proof: number;
  description?: string;
  style: string;
};

const resolver: Resolver<FormValue> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
          name: {
            type: "required",
            message: "Common! Give this beer a sweet name.",
          },
        }
      : {},
  };
};

export default function NewBeer() {
  const navigate = useNavigate();
  const styles: string[] = useLoaderData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({ resolver });

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    console.log(data);
  };

  return (
    <div className="form-wrapper">
      <div className="form-header">
        <h2 className="form-title"> You have found a new gem?</h2>
        <div className="form-subtitle">Lets add it to your collection</div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-section">
          <label className="form-section-label">On the beer itself</label>
          <div className="input-group span3">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              {...register("name")}
              placeholder="Black Ale"
            />
          </div>
          <div className="input-group span2">
            <label htmlFor="style">Beer Style</label>
            <select id="style" {...register("style")} placeholder="Stout">
              {styles.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group start3">
            <label htmlFor="proof">Alcool Proof</label>

            <input
              id="proof"
              type="number"
              {...register("proof")}
              placeholder="8"
            />
          </div>
        </div>

        <div className="form-section">
          <label className="form-section-label">What's the brewery?</label>
          <div className="input-group">
            <label htmlFor="breweryName">Name</label>
            <input id="breweryName" type="text" />
          </div>
          <div className="input-group span3">
            <label htmlFor="location">Location</label>
            <input id="location" type="text" />
          </div>
        </div>
        <button type="reset" className="btn" onClick={() => navigate(-1)}>
          Cancel
        </button>
        <button type="submit" className="btn btn-success float-right">
          Save
        </button>
      </form>
    </div>
  );
}
