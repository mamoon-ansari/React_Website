import * as React from "react";

const bull = <span className="inline-block mx-0.5 transform scale-80">•</span>;

const card = (
  <React.Fragment>
    <div className="p-4">
      <p className="text-sm text-gray-500">Word of the Day</p>
      <h2 className="text-2xl font-bold">
        A{bull}B{bull}C{bull}D
      </h2>
      <p className="text-sm text-gray-500 mb-3">adjective</p>
      <p className="text-sm">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </p>
    </div>
    <div className="p-2">
      <button className="text-sm text-black-500 bg-gray-300! hover:text-blue-700">
        Learn More
      </button>
    </div>
  </React.Fragment>
);

export default function Card1() {
  return (
    <div className="min-w-[275px]">
      <div className="border border-gray-300 rounded-lg">{card}</div>
    </div>
  );
}
