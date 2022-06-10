import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [sliders, setSliders] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const url = `sliders.json`;
    const getSlider = async () => {
      const request = await fetch(url);
      const response = await request.json();
      console.log(response);
      setSliders(response);
    }; getSlider();
  }, []);

  return (
    <div className="App">
      {
        sliders.map((slider, index) => <div
          key={slider?._id}
          className="img-container"
        >
          {
            (index === current) &&
            <>
              <div className='left-arrow'
                onClick={() => setCurrent(!(current === 0) ? current - 1 : sliders.length - 1) }
              >
                <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
              </div>
              <img src={slider?.img} alt="slider_image" />
              <div className='right-arrow'
                onClick={() => setCurrent(current === sliders.length - 1 ? 0 : current + 1) }
              >
                <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
              </div>
            </>
          }
        </div>)
      }
    </div>
  );
}

export default App;
