import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API + "/office")
      .then((res) => res.json())
      .then((result) => {
        console.log(result); // ดูข้อมูลที่ได้จาก API
        setData(result); // บันทึกข้อมูลใน State
      })
      .catch((error) => console.error("❌ Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>ข้อมูลจากตาราง `tbl_e_office`</h1>
      {data.length > 0 ? (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>No</th>
              <th>doc_moit</th>
              <th>doc_npost</th>
              <th>doc_section</th>
              <th>doc_sub</th>
              <th>doc_file</th>
              <th>dateCreate</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.no}</td>
                <td>{item.doc_moit}</td>
                <td>{item.doc_npost}</td>
                <td>{item.doc_section}</td>
                <td>{item.doc_sub}</td>
                <td>
                  <a
                    href={`upload/${item.doc_file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.doc_file}
                  </a>
                </td>
                <td>{item.dateCreate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
