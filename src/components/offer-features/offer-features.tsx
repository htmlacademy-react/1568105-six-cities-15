import { doFirstCap } from '../../utils';

type OfferFeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

export default function OfferFeatures ({ type, bedrooms, maxAdults }: OfferFeaturesProps): JSX.Element {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {type && doFirstCap(type)}
      </li>

      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms && `${bedrooms} Bedrooms`}
      </li>

      <li className="offer__feature offer__feature--adults">
        {`Max ${maxAdults && maxAdults} adults`}
      </li>
    </ul>
  );
}
