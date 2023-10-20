'use client';
const Grid = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
      {props.items.map((item, index) => (
        <div key={index} className="p-4 shadow-md rounded-md">
          <img src={item.image} alt={item.title} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default Grid;
