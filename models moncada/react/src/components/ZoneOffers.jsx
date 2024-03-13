import { Link, Route } from 'wouter';
import Promociones from '../pages/Promociones';
import '../sass/ZoneOffers.css';
import { useState } from 'react';

function ZoneOffers() {

  const [viewZoneOffers, setViewZoneOffers] = useState(false);



  if (viewZoneOffers) return <Promociones></Promociones>;

  return (
    <>
      <div
        onClick={() => setViewZoneOffers(!viewZoneOffers)}
        className='zoneOffers'>

        <Link to='/Promociones'>
          <p>
            zona de promociones
          </p>
          <div>
            <p className="line-row"></p>
            <p className="line-row"></p>
            <p className="line-row"></p>
          </div>
        </Link>
      </div>
      <Route component={Promociones} path='/:keyword'></Route>
    </>
  );
}

export default ZoneOffers;
