import { CardComponent } from "../types/component.types";

const Card: CardComponent = ({ data }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 my-4">
      <div className="p-2">
        <img
          className="rounded-t-lg"
          src={data.airline[0].logo}
          alt={data.airline[0].name}
        />
      </div>
      <div className="p-5">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.name}
        </h5>
        <a
          href={"http://" + data.airline[0].website}
          target="_blank"
          rel="noreferrer"
          className="font-normal text-blue-700 dark:text-gray-400"
        >
          {data.airline[0].name}
        </a>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {data.airline[0].country}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {data.airline[0].slogan}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Trips : {data.trips}
        </p>
      </div>
    </div>
  );
};

export default Card;
