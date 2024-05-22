import { useState, useEffect } from "react";
import Papa from "papaparse";
import { Table } from "antd";
import LineGraph from "./components/LineGraph";

const MainTable = () => {
  const [data, setData] = useState([]);
  const [selectedYearData, setSelectedYearData] = useState(null);

  useEffect(() => {
    Papa.parse("./salaries.csv", {
      download: true,
      header: true,
      complete: (results) => {
        const csvData = results.data;

        const data = csvData.reduce((acc, record) => {
          const year = record.work_year;
          const salary = parseFloat(record.salary_in_usd);

          if (!acc[year]) {
            acc[year] = { year, totalJobs: 0, totalSalary: 0, jobTitles: {} };
          }
        //  console.log(acc[year]);
          acc[year].totalJobs += 1;
          acc[year].totalSalary += salary;

          const jobTitle = record.job_title;
          acc[year].jobTitles[jobTitle] =
            (acc[year].jobTitles[jobTitle] || 0) + 1;

          return acc;
        }, {});

        const finalData = Object.values(data).map((yearInfo) => ({
          year: yearInfo.year,
          totalJobs: yearInfo.totalJobs,
          averageSalary: yearInfo.totalSalary / yearInfo.totalJobs,
          jobTitles: Object.entries(yearInfo.jobTitles).map(
            ([jobTitle, count]) => ({
              jobTitle,
              count,
            })
          ),
        }));

        setData(finalData);
      },
    });
  }, []);

  const columns = [
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
      sorter: (a, b) => a.year - b.year,
    },
    {
      title: "Number of Total Jobs",
      dataIndex: "totalJobs",
      key: "totalJobs",
      sorter: (a, b) => a.totalJobs - b.totalJobs,
    },
    {
      title: "Average Salary in USD",
      dataIndex: "averageSalary",
      key: "averageSalary",
      sorter: (a, b) => a.averageSalary - b.averageSalary,
    },
  ];

  const expandedRowRender = (record) => {
    const nestedColumns = [
      {
        title: "Job Title",
        dataIndex: "jobTitle",
        key: "jobTitle",
      },
      {
        title: "Total Jobs",
        dataIndex: "count",
        key: "count",
      },
    ];

    return (
      <Table
        columns={nestedColumns}
        dataSource={record.jobTitles}
        pagination={false}
      />
    );
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="year"
        expandable={{ expandedRowRender }}
      />
      <LineGraph data={data} />
    </>
  );
};

export default MainTable;
