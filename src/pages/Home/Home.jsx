import { Navbar, Hero, DataCovid, ProvinsiTable, FormCovid, Footer } from "../../components";
import data from '../../constants/provinces';
import { useState } from 'react';

function HomePage() {
  const [dataProvinsi, setDataProvinsi] = useState(data.provinces);
  return (
    <div>
      <nav className="hp:sticky hp:top-0 hp:z-[5]" id="navbar">
        <Navbar/>
      </nav>
      <section id="hero-section">
        <Hero />
      </section>
      <section className="bg-[#F8F9FA]" id="data-section">
        <DataCovid/>
      </section>
      <section id="table-section">
        <ProvinsiTable dataProvinsi={dataProvinsi} />
      </section>
      <section className="bg-[#F8F9FA]" id="form-section">
        <FormCovid dataProvinsi={dataProvinsi} setDataProvinsi={setDataProvinsi} />
      </section>
      <footer className="bg-primary" id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
