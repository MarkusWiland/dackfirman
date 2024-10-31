'use client'
import { ComboboxDemo } from "./_components/comboBox";
import { useState } from "react";

export default  function Home() {

  const cars = [
    { value: "none", label: "Inget valt" }, 
    { value: "BMW", label: "BMW" },
    { value: "Audi", label: "Audi" },
    { value: "Mercedes", label: "Mercedes" },
    { value: "Volvo", label: "Volvo" },
    { value: "Toyota", label: "Toyota" },
    { value: "Honda", label: "Honda" },
    { value: "Ford", label: "Ford" },
    { value: "Chevrolet", label: "Chevrolet" },
    { value: "Tesla", label: "Tesla" },
    { value: "Hyundai", label: "Hyundai" },
    { value: "Nissan", label: "Nissan" },
    { value: "Kia", label: "Kia" },
    { value: "Volkswagen", label: "Volkswagen" },
    { value: "Subaru", label: "Subaru" },
    { value: "Mazda", label: "Mazda" },
    { value: "Porsche", label: "Porsche" },
    { value: "Ferrari", label: "Ferrari" },
    { value: "Lamborghini", label: "Lamborghini" },
    { value: "Jaguar", label: "Jaguar" },
    { value: "Land Rover", label: "Land Rover" }
  ];
  const bultCirkel = [
    { value: "98", label: "98" },
    { value: "100", label: "100" },
    { value: "105", label: "105" },
    { value: "108", label: "108" },
    { value: "110", label: "110" },
    { value: "112", label: "112" },
    { value: "114.3", label: "114.3" },
    { value: "115", label: "115" },
    { value: "118", label: "118" },
    { value: "120", label: "120" },
    { value: "127", label: "127" },
    { value: "130", label: "130" },
    { value: "135", label: "135" },
    { value: "139.7", label: "139.7" },
    { value: "150", label: "150" },
    { value: "160", label: "160" },
    { value: "165.1", label: "165.1" },
    { value: "180", label: "180" },
    { value: "Annat", label: "Annat" }
  ];
  const antalBultar = [
    { value: "none", label: "Inget valt" }, 
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "8", label: "8" },
    { value: "Annat", label: "Annat" },
    { value: "Centrumbult", label: "Centrumbult" }
  ];
  const diameter = [
    { value: "12", label: "12" },
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16", label: "16" },
    { value: "17", label: "17" },
    { value: "18", label: "18" },
    { value: "19", label: "19" },
    { value: "20", label: "20" },
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "Annat", label: "Annat" }
  ];
  const dackbredd = [
    { value: "135", label: "135" },
    { value: "145", label: "145" },
    { value: "155", label: "155" },
    { value: "165", label: "165" },
    { value: "175", label: "175" },
    { value: "185", label: "185" },
    { value: "195", label: "195" },
    { value: "205", label: "205" },
    { value: "215", label: "215" },
    { value: "225", label: "225" },
    { value: "235", label: "235" },
    { value: "245", label: "245" },
    { value: "255", label: "255" },
    { value: "265", label: "265" },
    { value: "275", label: "275" },
    { value: "285", label: "285" },
    { value: "295", label: "295" },
    { value: "305", label: "305" },
    { value: "315", label: "315" },
    { value: "325", label: "325" },
    { value: "335", label: "335" },
    { value: "345", label: "345" },
    { value: "355", label: "355" },
    { value: "365", label: "365" },
    { value: "375", label: "375" },
    { value: "385", label: "385" },
    { value: "395", label: "395" },
    { value: "Annat", label: "Annat" }
  ];
  const dacktyp = [
    { value: "Sommar", label: "Sommar" },
    { value: "Vinter friktion", label: "Vinter friktion" },
    { value: "Vinter dubbat", label: "Vinter dubbat" },
    { value: "R-Däck", label: "R-Däck" },
    { value: "C-Däck", label: "C-Däck" }
  ];
  const falgbredd = [
    { value: "4.5", label: "4.5" },
    { value: "5", label: "5" },
    { value: "5.5", label: "5.5" },
    { value: "6", label: "6" },
    { value: "6.5", label: "6.5" },
    { value: "7", label: "7" },
    { value: "7.5", label: "7.5" },
    { value: "8", label: "8" },
    { value: "8.5", label: "8.5" },
    { value: "9", label: "9" },
    { value: "9.5", label: "9.5" },
    { value: "10", label: "10" },
    { value: "10.5", label: "10.5" },
    { value: "11", label: "11" },
    { value: "11.5", label: "11.5" },
    { value: "12", label: "12" },
    { value: "12.5", label: "12.5" },
    { value: "13", label: "13" },
    { value: "Annat", label: "Annat" }
  ];
  const lan = [
    { value: "Blekinge", label: "Blekinge" },
    { value: "Dalarna", label: "Dalarna" },
    { value: "Gotland", label: "Gotland" },
    { value: "Gävleborg", label: "Gävleborg" },
    { value: "Halland", label: "Halland" },
    { value: "Jämtland", label: "Jämtland" },
    { value: "Jönköping", label: "Jönköping" },
    { value: "Kalmar", label: "Kalmar" },
    { value: "Kronoberg", label: "Kronoberg" },
    { value: "Norrbotten", label: "Norrbotten" },
    { value: "Skåne", label: "Skåne" },
    { value: "Stockholm", label: "Stockholm" },
    { value: "Södermanland", label: "Södermanland" },
    { value: "Uppsala", label: "Uppsala" },
    { value: "Värmland", label: "Värmland" },
    { value: "Västerbotten", label: "Västerbotten" },
    { value: "Västernorrland", label: "Västernorrland" },
    { value: "Västmanland", label: "Västmanland" },
    { value: "Västra Götaland", label: "Västra Götaland" },
    { value: "Örebro", label: "Örebro" },
    { value: "Östergötland", label: "Östergötland" }
  ];
  const [filters, setFilters] = useState({});
  const [data, setData] = useState([]);

  // Hantera ändringar av filter
  const handleFilterChange = async (filterName: string, filterValue: string) => {
    console.log("filters", filters)
    console.log("filterName", filterName)
    console.log("filterValue", filterValue)
    const newFilters = { ...filters, [filterName]: filterValue };
    setFilters(newFilters);

    // Anropa API-routen med de aktuella filtren
    const queryString = new URLSearchParams(newFilters).toString();
    const response = await fetch(`/api/cars?${queryString}`);
    const result = await response.json();
    setData(result); // Uppdatera data med resultaten från API
  };
  return (
    <section className="max-w-screen-2xl mx-auto">
        <div>
          <h1>hej</h1>
        </div>
        <ComboboxDemo
        lists={cars}
        title="Bilmärke"
        onSelect={(value: string) => handleFilterChange("bilmarke", value.toUpperCase())}
      />
      <ComboboxDemo
        lists={bultCirkel}
        title="Bultcirkel"
        onSelect={(value: string) => handleFilterChange("bultcirkel", value.toUpperCase())}
      />
      <ComboboxDemo
        lists={antalBultar}
        title="Antal Bultar"
        onSelect={(value: string) => handleFilterChange("antalBultar", value.toUpperCase())}
      />
      <ComboboxDemo
        lists={diameter}
        title="Diameter"
        onSelect={(value: string) => handleFilterChange("diameter", value.toUpperCase())}
      />
      <ComboboxDemo
        lists={dackbredd}
        title="Däckbredd"
        onSelect={(value: string) => handleFilterChange("dackbredd", value.toUpperCase())}
      />
      <ComboboxDemo
        lists={dacktyp}
        title="Däcktyp"
        onSelect={(value: string) => handleFilterChange("dacktyp", value.toUpperCase())}
      />
      <ComboboxDemo
        lists={falgbredd}
        title="Fälgbredd"
        onSelect={(value: string) => handleFilterChange("falgbredd", value.toUpperCase())}
      />
      <ComboboxDemo
        lists={lan}
        title="Län"
        onSelect={(value: string) => handleFilterChange("lan", value.toUpperCase())}
      />
         <ul>
      {data.length === 0 && <p>0 resultat.</p>}
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </section>
  );
}
