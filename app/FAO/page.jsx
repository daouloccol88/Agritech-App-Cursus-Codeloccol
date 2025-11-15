"use client";
import { useEffect, useState } from "react";
import UpperSection from "@/components/UpperSection";
import Loader from "@/components/Loader";
import xml2js from "xml2js";

export default function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL =
    "https://nsi-release-ro-statsuite.fao.org/rest/data/FAO,DF_SDG_2_C_1,1.0/A.AG_FPA_COMM.562.........?startPeriod=2021&endPeriod=2024&dimensionAtObservation=AllDimensions";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const xml = await res.text();

        const parser = new xml2js.Parser({ explicitArray: true });
        const json = await parser.parseStringPromise(xml);

        const dataset =
          json["message:GenericData"]["message:DataSet"][0]["generic:Obs"];

        const cleaned = dataset.map((item) => ({
          product:
            item["generic:Attributes"]?.[0]?.["generic:Value"]?.[8]?.["$"]
              ?.value ?? "—",
          year:
            item["generic:Attributes"]?.[0]?.["generic:Value"]?.[7]?.["$"]
              ?.value ?? "—",
          value: item["generic:ObsValue"]?.[0]?.["$"]?.value ?? "—",
        }));

        setData(cleaned);
      } catch (err) {
        console.log("❌ XML parsing failed:", err);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div>
        <section className="mb-5 mt-5">
          <UpperSection actualPage={"Indicateurs FAO"} />
        </section>
        <Loader loadedElement={"Indicateurs FAO"} />
      </div>
    );

  // -------------------------
  // 📌 Extract unique years
  // -------------------------
  const allYears = [...new Set(data.map((d) => d.year))].sort();

  // -------------------------
  // 📌 Group by product
  // -------------------------
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.product]) acc[item.product] = {};
    acc[item.product][item.year] = item.value;
    return acc;
  }, {});

  return (
    <div>
      <section className="mb-5 mt-5">
        <UpperSection actualPage={"Indicateurs FAO"} />
      </section>

      <div style={{ padding: "20px" }}>
        <h2>Indicator 2.c.1 - Indicator of (food) price anomalies</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>Product</th>
              {allYears.map((year) => (
                <th style={thStyle} key={year}>
                  {year}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Object.keys(groupedData).map((product) => (
              <tr key={product}>
                <td style={tdStyle}>{product}</td>

                {allYears.map((year) => (
                  <td style={tdStyle} key={year}>
                    {groupedData[product][year] ?? "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --------------------
// Table styling
// --------------------
const thStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  backgroundColor: "#f5f5f5",
  fontWeight: "bold",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "10px",
};
