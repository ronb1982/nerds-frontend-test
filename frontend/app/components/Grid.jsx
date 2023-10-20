'use client';
const Grid = () => {
  const gridItems = [
    { title: 'Item 1', image: '/images/item1.jpg' },
    { title: 'Item 2', image: '/images/item2.jpg' },
    { title: 'Item 3', image: '/images/item3.jpg' },
    { title: 'Item 4', image: '/images/item4.jpg' },
    { title: 'Item 5', image: '/images/item5.jpg' },
    { title: 'Item 6', image: '/images/item6.jpg' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
      {gridItems.map((item, index) => (
        <div key={index} className="bg-white p-4 shadow-md rounded-md">
          <img src={item.image} alt={item.title} className="w-full h-auto" />
          <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Grid;
