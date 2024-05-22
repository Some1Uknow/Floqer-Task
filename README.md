# Salary Data Visualization Project

## Link

https://data-task-floqer.vercel.app/

## Project Overview

This project visualizes salary data from 2020 to 2024. It includes a main table summarizing the data for each year, an expandable row render showing the breakdown of job titles and their counts for the selected year, and a line graph visualizing the change in the number of jobs and average salaries over the years.

## Features

1. **Main Table**: Displays a summary of the total number of jobs and average salary per year.
2. **Expanded Row Render**: Shows a detailed breakdown of job titles and their counts for each year when a row in the main table is clicked.
3. **Line Graph**: Visualizes the trends in the number of jobs and average salaries over the years.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Ant Design**: A React UI library used for building the table and graphs.
- **Papaparse**: A library to parse CSV files.

### MainTable

This component fetches, processes, and displays the salary data. It includes the main table and the expandable row render for detailed views.

#### State Variables

- **data**: Stores the processed salary data.
- **selectedYearData**: Stores the detailed data for the selected year.

#### Functional Details

- **Data Fetching and Processing**: The component uses `Papa.parse` to fetch and parse the CSV data. The parsed data is then processed to aggregate job counts, total salaries, and job title counts for each year.
- **Main Table**: Displays the summarized data, including the year, total number of jobs, and average salary for each year.
- **Expanded Row Render**: When a row in the main table is clicked, a nested table is displayed showing the breakdown of job titles and their counts for that year.
- **Line Graph**: A line graph component visualizes the trends in the number of jobs and average salaries over the years.

## Usage

1. **Import the MainTable Component**: Import and use the `MainTable` component in your React application.
2. **CSV Data**: Ensure the CSV file containing the salary data is correctly placed and accessible.
3. **Run the Application**: Start your React application to view the salary data visualization.

## Example Scenario

Imagine you're analyzing the trends in salaries and job counts over the past few years to better understand the job market. The main table provides a quick overview of the number of jobs and average salaries each year. If you're curious about the job titles that were most common in a particular year, you can click on that year to expand the row and see the detailed breakdown of job titles and their counts. Additionally, the line graph offers a visual representation of these trends, making it easier to spot changes and patterns over time.
