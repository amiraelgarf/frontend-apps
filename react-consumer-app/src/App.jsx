import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import OmarComp from './omarComp/omarComp';
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
  ToggleSwitch,
} from '@amiraelgarf/custom-frontend-library-react';

import { IxCard } from "@siemens/ix-react";

function App() {
  const [messages, setMessages] = useState('');
  const messagesEndRef = useRef(null);

  const logEvent = useCallback((componentName, eventName, detail) => {
    const timestamp = new Date().toLocaleTimeString();
    setMessages((prevMessages) => prevMessages + `[${timestamp}] ${componentName} - ${eventName}: ${JSON.stringify(detail)}\n`);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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

  const sampleColumns = [
    { header: 'ID', field: 'id', width: 80, sortable: true, filterable: false },
    {
      header: 'Full Name',
      field: 'name',
      width: 200,
      sortable: true,
      filterable: true,
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
    <div className="wrapper">
      <ToggleSwitch></ToggleSwitch>
      <h1>Stencil Components with ix-card</h1>

      <IxCard variant="outline" class="output-example">
        <div className="card-content-wrapper">
          <h2>Event Output</h2>
          <div id="output-messages">
            <pre id="messages">{messages}</pre>
            <div ref={messagesEndRef} />
          </div>
        </div>
      </IxCard>

      <IxCard variant="outline" class="grid-example">
        <div className="card-content-wrapper">
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
      </IxCard>

      <IxCard variant="outline" class="chart-example">
        <div className="card-content-wrapper">
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
      </IxCard>
      
      <IxCard variant="outline" class="chart-example">
        <div className="card-content-wrapper">
          <h2>D3 Bar Chart Example</h2>
          <D3BarChart
            chartData={barChartData}
            width={0}
            height={0}
          />
        </div>
      </IxCard>

      <IxCard variant="insight" selected={false}>
        <div className="card-content-wrapper">
          <h2>My Button</h2>
          <MyButton label="Primary Button" variant="primary" onMyClick={(e) => logEvent('my-button', 'myClick', { label: e.detail.label })} />
          <MyButton label="Secondary Button" variant="secondary" onMyClick={(e) => logEvent('my-button', 'myClick', { label: e.detail.label })} />
          <MyButton label="Outline Button" variant="outline" onMyClick={(e) => logEvent('my-button', 'myClick', { label: e.detail.label })} />
          <MyButton label="Disabled Button" variant="primary" disabled={true} onMyClick={(e) => logEvent('my-button', 'myClick', { label: e.detail.label })} />
        </div>
      </IxCard>
      
      <IxCard variant="filled">
        <div className="card-content-wrapper">
          <h2>Checkbox Input</h2>
          <CheckboxInput name="newsletter" value="subscribe" label="Subscribe to Newsletter" checked={true} onMyChange={(e) => logEvent('checkbox-input', 'myChange', e.detail)} />
          <CheckboxInput name="notifications" value="disabled" label="Disable Notifications" disabled={true} onMyChange={(e) => logEvent('checkbox-input', 'myChange', e.detail)} />
        </div>
      </IxCard>

      <IxCard variant="outline" selected={true}>
        <div className="card-content-wrapper">
          <h2>Radio Button</h2>
          <RadioButton name="color" value="red" label="Red" onMyChange={(e) => logEvent('radio-button', 'myChange', e.detail)} />
          <RadioButton name="color" value="green" label="Green" disabled={true} onMyChange={(e) => logEvent('radio-button', 'myChange', e.detail)} />
        </div>
      </IxCard>

      <IxCard variant="insight">
        <div className="card-content-wrapper">
          <h2>Date Input</h2>
          <DateInput
            name="myDate"
            label="Select a Date"
            value="2025-07-29"
            min="2025-01-01"
            max="2025-12-31"
            placeholder="YYYY-MM-DD"
            onMyChange={(e) => logEvent('date-input', 'myChange', { value: e.detail })}
          />
          <DateInput
            name="anotherDate"
            label="Event Date (Disabled)"
            disabled={true}
            value="2025-08-15"
            onMyChange={(e) => logEvent('date-input', 'myChange', { value: e.detail })}
          />
        </div>
      </IxCard>

      <IxCard variant="filled">
        <div className="card-content-wrapper">
          <h2>Time Input</h2>
          <TimeInput name="workStartTime" label="Work Start Time" min="08:00" max="09:30" step="15" onMyChange={(e) => logEvent('time-input', 'myChange', { value: e.detail })} />
          <TimeInput name="unavailableTime" label="Unavailable" value="13:00" disabled={true} onMyChange={(e) => logEvent('time-input', 'myChange', { value: e.detail })} />
          <TimeInput name="alarmTime" label="Set Alarm" value="07:30" onMyChange={(e) => logEvent('time-input', 'myChange', { value: e.detail })} />
        </div>
      </IxCard>

      <IxCard variant="outline">
        <div className="card-content-wrapper">
          <h2>Range Input</h2>
          <RangeInput name="volume" label="Volume" value="50" min="0" max="100" step="5" onMyChange={(e) => logEvent('range-input', 'myChange', { value: e.detail })} />
          <RangeInput name="zoom" label="Zoom Level" value="20" min="10" max="100" disabled={true} onMyChange={(e) => logEvent('range-input', 'myChange', { value: e.detail })} />
        </div>
      </IxCard>

    </div>
  );
}

export default App;