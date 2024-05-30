import React, { useEffect } from 'react';
import 'C:\\Users\\Darknessly\\Desktop\\planetickets\\resources\\css\\app.css'; 

const Panes = () => {
  useEffect(() => {
    const panes = document.querySelectorAll('.pane');
    let activePaneIndex = 0;

    panes.forEach((pane, index) => {
      pane.addEventListener('click', () => {
        panes[activePaneIndex].classList.remove('active');
        activePaneIndex = index;
        panes[activePaneIndex].classList.add('active');
      });
    });
  }, []);

  return (
    <div className="m-3  rounded-xl antialiased bg-gradient-to-b flex flex-col font-sans from-black items-stretch justify-center p-2 to-gray-900 sm:flex-row sm:items-center">
      <div className="flex flex-col flex-grow items-stretch max-w-2xl min-w-md w-full sm:flex-row sm:h-72 sm:overflow-hidden">
        {paneData.map((pane, index) => (
          <div
            key={index}
            className={`cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all ${
              index === 0 ? 'active' : ''
            }`}
          >
            <div
              className={`absolute background bg-center bg-cover bg-${pane.color}-500 bg-${pane.color}-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10`}
            ></div>
            <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
            <div className="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30">
              <div className={`bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-${pane.color}-500 w-10`}>
                <i className={`fas fa-${pane.icon}`}></i>
              </div>
              <div className="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                <div className="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">
                  {pane.title}
                </div>
                <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">
                  {pane.subtitle}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const paneData = [
  { color: 'red', icon: 'walking', title: 'Imagine', subtitle: 'Chase your dreams' },
  { color: 'yellow', icon: 'apple-alt', title: 'Build', subtitle: 'Realize your vision' },
  { color: 'green', icon: 'tree', title: 'Explore', subtitle: 'Discover the world' },
  { color: 'blue', icon: 'tint', title: 'Adapt', subtitle: 'Embrace the times' },
  { color: 'purple', icon: 'palette', title: 'Inspire', subtitle: 'Share your potential' },
];

export default Panes;
