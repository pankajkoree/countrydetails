import Image from "next/image";
import Link from "next/link";

type CardProps = {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
};

const CountryCard = ({
  name,
  flag,
  population,
  region,
  capital,
}: CardProps) => {
  return (
    <div>
      <Link href={`/${name}`}>
        <Image src={flag} alt={`${name}+Flag`} />
        <div>
          <h3>{name}</h3>
          <p>
            <b>Population: </b>
            {population}
          </p>
          <p>
            <b>Region: </b> {region}
          </p>
          <p>
            <b>Capital: </b> {capital}
          </p>
        </div>
      </Link>
    </div>
  );
};
export default CountryCard;
