import CountryCard from "./components/CountryCard";
import countryData from "./countriesData";

export default function Home() {
  console.log(countryData);
  return (
    <div className="grid lg:grid-cols-4">
      {countryData.map((country) => (
        <CountryCard
          key={country.name.official}
          name={country.name.official}
          flag={country.flags.svg}
          population={country.population}
          region={country.region}
          capital={country.capital?.[0]}
        />
      ))}
    </div>
  );
}
