import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';

import {
  MyButton,
  CustomGrid,
  D3BarChart,
  MultiAxisChart,
  CheckboxInput,
  RadioButton,
  DateInput,
  TimeInput,
  RangeInput,
} from '@amiraelgarf/custom-frontend-library-react';

function App() {
  const [messages, setMessages] = useState('');
  const messagesEndRef = useRef(null);

  // Function to log events to the messages area
  const logEvent = useCallback((componentName, eventName, detail) => {
    const timestamp = new Date().toLocaleTimeString();
    setMessages((prevMessages) => prevMessages + `[${timestamp}] ${componentName} - ${eventName}: ${JSON.stringify(detail)}\n`);
  }, []);

  // Effect to scroll to the bottom of the messages area when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Sample data for the AG Grid component
  const sampleData = [
    { id: 2, name: 'Bob Johnson', age: 24, city: 'London', status: 'Inactive' },
    { id: 1, name: 'Alice Smith', age: 30, city: 'New York', status: 'Active' },
    { id: 3, name: 'Charlie Brown', age: 35, city: 'Paris', status: 'Active' },
    { id: 4, name: 'Diana Prince', age: 29, city: 'Tokyo', status: 'Pending' },
    { id: 5, name: 'Eve Adams', age: 42, city: 'Berlin', status: 'Active' },
    { id: 6, name: 'Frank White', age: 28, city: 'Sydney', status: 'Inactive' },
    { id: 7, name: 'Grace Hall', age: 31, city: 'Rome', status: 'Active' },
    { id: 8, name: 'Harry King', age: 22, city: 'Madrid', status: 'Active' },
    { id: 9, name: 'Ivy Lee', age: 38, city: 'Beijing', status: 'Pending' },
    { id: 10, name: 'Jack Green', age: 45, city: 'Moscow', status: 'Active' },
    { id: 11, name: 'Karen Black', age: 27, city: 'Cairo', status: 'Active' },
    { id: 12, name: 'Liam Blue', age: 33, city: 'Dubai', status: 'Inactive' },
  ];

  // Column definitions for the AG Grid component
  const sampleColumns = [
    { header: 'ID', field: 'id', width: 80, sortable: true, filterable: false },
    {
      header: 'Full Name',
      field: 'name',
      width: 200,
      sortable: true,
      filterable: true,
      // renderCell is a function, which might need to be handled carefully by the Stencil wrapper
      // If the wrapper doesn't directly support functions for renderCell, you might need to adjust
      renderCell: (params) => {
        return params.data.status === 'Active' ? `<strong>${params.value}</strong>` : params.value;
      },
    },
    { header: 'Age', field: 'age', width: 100, sortable: true, filterable: 'agNumberColumnFilter' },
    { header: 'City', field: 'city', width: 150, sortable: true, filterable: true },
    {
      header: 'Status',
      field: 'status',
      width: 120,
      sortable: true,
      filterable: true,
      renderCell: (params) => {
        let color = '';
        switch (params.value) {
          case 'Active': color = 'green'; break;
          case 'Inactive': color = 'red'; break;
          case 'Pending': color = 'orange'; break;
          default: color = 'gray';
        }
        return `<span style="color: ${color}; font-weight: bold;">${params.value}</span>`;
      },
    },
  ];

  // Data for the D3 Bar Chart
  const barChartData = [
    { name: 'Jan', value: 65 }, { name: 'Feb', value: 59 }, { name: 'Mar', value: 80 },
    { name: 'Apr', value: 81 }, { name: 'May', value: 56 }, { name: 'Jun', value: 75 },
    { name: 'Jul', value: 90 },
  ];

  // Data for the Multi-Axis Chart
  const multiAxisCategories = ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];
  const multiAxisSeries = [
    { name: 'Column A', type: 'column', data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5] },
    { name: 'Column B', type: 'column', data: [10, 19, 27, 26, 34, 35, 40, 38] },
    { name: 'Line C', type: 'line', data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6] },
  ];
  const multiAxisYAxes = [
    { seriesName: 'Column A', title: 'Columns' },
    { seriesName: 'Line C', title: 'Line', opposite: true },
  ];
  const multiAxisColors = ['#004D73', '#93DCED', '#FFC328'];

  return (
    <>
      <div className="wrapper">
        <h1>Stencil Components in React</h1>

        <div id="output-messages" className="component-example">
          <h2>Event Output</h2>
          <pre id="messages">{messages}</pre>
          <div ref={messagesEndRef} /> {/* For auto-scrolling */}
        </div>

        <div className="component-example grid-example">
          <h2>AG Grid Stencil Component Example</h2>
          <CustomGrid
            data={sampleData}
            columns={sampleColumns}
            pagination={true}
            pageSize={5}
            striped={true}
            hoverEffect={true}
            resizableColumns={true}
            sortable={true}
            filterable={true}
            emptyMessage="No records found for your criteria."
            loading={false}
            onGridRowClick={(event) => {
              console.log('Row Clicked:', event.detail);
              logEvent('CustomGrid', 'gridRowClick', event.detail);
            }}
            onGridPageChange={(event) => logEvent('CustomGrid', 'gridPageChange', event.detail)}
            onGridSortChange={(event) => logEvent('CustomGrid', 'gridSortChange', event.detail)}
            onGridFilterChange={(event) => logEvent('CustomGrid', 'gridFilterChange', event.detail)}
          />
        </div>

        <div className="component-example chart-example">
          <h2>D3 Bar Chart Example</h2>
          <D3BarChart
            chartData={barChartData}
            width={0} 
            height={0} 
          />
        </div>

        <div className="component-example chart-example">
          <h2>Multi-Axis Chart Example</h2>
          <MultiAxisChart
            chartTitle="Default Multi-Axis Chart"
            chartHeight={350}
            categories={multiAxisCategories}
            series={multiAxisSeries}
            yAxes={multiAxisYAxes}
            colors={multiAxisColors}
          />
        </div>

        <div className="component-example">
          <h2>My Button</h2>
          <MyButton
            label="Primary Button"
            variant="primary"
            onMyClick={(e) => logEvent('MyButton', 'myClick', { label: 'Primary Button' })}
          />
          <MyButton
            label="Outline Button"
            variant="outline"
            size="small"
            onMyClick={(e) => logEvent('MyButton', 'myClick', { label: 'Outline Button' })}
          />
          <MyButton
            label="Disabled Button"
            disabled={true} // Use boolean true for disabled prop
            onMyClick={(e) => logEvent('MyButton', 'myClick', { label: 'Disabled Button' })}
          />
        </div>

        <div className="component-example">
          <h2>Checkbox Input</h2>
          <CheckboxInput
            name="newsletter"
            value="subscribe"
            label="Subscribe to Newsletter"
            checked={true} // Use boolean true for checked prop
            onMyChange={(e) => logEvent('CheckboxInput', 'myChange', e.detail)}
          />
          <CheckboxInput
            name="notifications"
            value="disabled"
            label="Disable Notifications"
            disabled={true}
            onMyChange={(e) => logEvent('CheckboxInput', 'myChange', e.detail)}
          />
        </div>

        <div className="component-example">
          <h2>Radio Button</h2>
          <RadioButton
            name="color"
            value="red"
            label="Red"
            onMyChange={(e) => logEvent('RadioButton', 'myChange', e.detail)}
          />
          <RadioButton
            name="color"
            value="green"
            label="Green"
            disabled={true}
            onMyChange={(e) => logEvent('RadioButton', 'myChange', e.detail)}
          />
        </div>

        <div className="component-example">
          <h2>Date Input</h2>
          <DateInput
            name="birthDate"
            label="Date of Birth"
            onMyChange={(e) => logEvent('DateInput', 'myChange', { value: e.detail })}
          />
          <DateInput
            name="disabledDate"
            label="Disabled Date"
            value="2024-01-01"
            disabled={true}
            onMyChange={(e) => logEvent('DateInput', 'myChange', { value: e.detail })}
          />
        </div>

        <div className="component-example">
          <h2>Time Input</h2>
          <TimeInput
            name="meetingTime"
            label="Meeting Time"
            value="14:30"
            min="09:00"
            max="19:00" // Corrected from "7:00" to "19:00" for a valid 24-hour format
            step="900"
            onMyChange={(e) => logEvent('TimeInput', 'myChange', { value: e.detail })}
          />
          <TimeInput
            name="disabledTime"
            label="Disabled Time"
            value="10:00"
            disabled={true}
            onMyChange={(e) => logEvent('TimeInput', 'myChange', { value: e.detail })}
          />
        </div>

        <div className="component-example">
          <h2>Range Input</h2>
          <RangeInput
            name="volume"
            label="Volume"
            value="50"
            min="0"
            max="100"
            step="5"
            onMyChange={(e) => logEvent('RangeInput', 'myChange', { value: e.detail })}
          />
          <RangeInput
            name="zoom"
            label="Zoom Level"
            value="20"
            min="10"
            max="100"
            disabled={true}
            onMyChange={(e) => logEvent('RangeInput', 'myChange', { value: e.detail })}
          />
        </div>
      </div>
    </>
    
  );
}

export default App;
