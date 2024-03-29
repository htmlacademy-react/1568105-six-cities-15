type OfferPriceProps = {
  price: number;
}

export default function OfferPrice ({ price }: OfferPriceProps): JSX.Element {
  return (
    <div className="offer__price">
      <b className="offer__price-value">&euro;{price}</b>
      <span className="offer__price-text">&nbsp;night</span>
    </div>
  );
}
