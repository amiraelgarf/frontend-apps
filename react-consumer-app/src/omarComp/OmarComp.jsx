import React, { useState, useEffect, useRef, useCallback } from 'react';
import "./OmarComp.css"

import {
    MyDropdownMenu,
    MyList,
    MyTextField,
    RightClickMenu,
    HistogramChart,
    BubbleChart,
    ScatterPlot
} from '@amiraelgarf/custom-frontend-library-react';

function OmarComp() {

    const textFieldArgs={
        textInPlaceholder: 'Enter your name here',
        lablelText: 'Enter Name: ',
        ColorOfLable: 'blue',
        Theme: 'VIQ-DarkTheme',
        variantSize: 'small',
        IsRequeredToFill: false,
        size: 30,
        disable: false,
    }
/////////////////////////////////////////////////////////////////////////////////////////////
    const listArgs={
        items: ['Item 1', 'Item 2', 'Item 3','Item 4','Item 5'],
        theme: 'VIQ-DarkTheme',
        spaceBetweenItems: 6,
        direction: 'row',
        wrap: true,
    }
/////////////////////////////////////////////////////////////////////////////////////////////
    const dropDownArg={
        options: ['Option 1', 'Option 2', 'Option 3'],
        valeOfeachOption: ['value1', 'value2', 'value3'],
        theme: 'Siemens-LightTheme',
        variantSize: 'medium',
    }
/////////////////////////////////////////////////////////////////////////////////////////////
    const rightClickArgs={
        theItems: [
            { idItem: 'file', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=F', textData: 'File', hasChildren: true, children: [
                { idItem: 'new', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=N', textData: 'New', functionality: () => console.log('New File!') },
                { idItem: 'open', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=O', textData: 'Open', functionality: () => console.log('Open File!') },
                { isDivisor: true },
                { idItem: 'save', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=S', textData: 'Save', functionality: () => console.log('Save File!') },
            ]},
            { idItem: 'edit', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=E', textData: 'Edit', hasChildren: true, children: [
                { idItem: 'cut', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=C', textData: 'Cut', functionality: () => console.log('Cut!') },
                { idItem: 'copy', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=C', textData: 'Copy', functionality: () => console.log('Copy!') },
                { idItem: 'paste', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=P', textData: 'Paste', functionality: () => console.log('Paste!') },
            ]},
            { isDivisor: true },
            { idItem: 'help', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=?', textData: 'Help', functionality: () => console.log('Help clicked!') },
        ],
    }
/////////////////////////////////////////////////////////////////////////////////////////////
    const sampleStudentGrades= [
        { name: "Student 1", semester1: 78, semester2: 82 },
        { name: "Student 2", semester1: 85, semester2: 88 },
        { name: "Student 3", semester1: 92, semester2: 95 },
        { name: "Student 4", semester1: 64, semester2: 70 },
        { name: "Student 5", semester1: 71, semester2: 75 },
        { name: "Student 6", semester1: 88, semester2: 91 },
        { name: "Student 7", semester1: 53, semester2: 62 },
        { name: "Student 8", semester1: 79, semester2: 83 },
        { name: "Student 9", semester1: 95, semester2: 97 },
        { name: "Student 10", semester1: 68, semester2: 73 },
        { name: "Student 11", semester1: 82, semester2: 85 },
        { name: "Student 12", semester1: 76, semester2: 80 },
        { name: "Student 13", semester1: 89, semester2: 92 },
        { name: "Student 14", semester1: 61, semester2: 68 },
        { name: "Student 15", semester1: 73, semester2: 77 },
        { name: "Student 16", semester1: 84, semester2: 87 },
        { name: "Student 17", semester1: 57, semester2: 65 },
        { name: "Student 18", semester1: 91, semester2: 94 },
        { name: "Student 19", semester1: 67, semester2: 72 },
        { name: "Student 20", semester1: 80, semester2: 84 },
        { name: "Student 21", semester1: 74, semester2: 79 },
        { name: "Student 22", semester1: 83, semester2: 86 },
        { name: "Student 23", semester1: 69, semester2: 74 },
        { name: "Student 24", semester1: 90, semester2: 93 },
        { name: "Student 25", semester1: 58, semester2: 66 },
        { name: "Student 26", semester1: 77, semester2: 81 },
        { name: "Student 27", semester1: 86, semester2: 89 },
        { name: "Student 28", semester1: 63, semester2: 69 },
        { name: "Student 29", semester1: 94, semester2: 96 },
        { name: "Student 30", semester1: 72, semester2: 76 },
    ];

    const histogramArgs={
        myWidth: 800,
        myHight: 500,
        nameOfChart: 'Grade Distribution (Semesters 1 & 2)',
        binCount: 10,
        data: sampleStudentGrades,
    }
/////////////////////////////////////////////////////////////////////////////////////////////
    const bubbleArgs={
        myHeight: 350,
        myTitle: 'Population by Country',
        xTitle: 'Country',
        yTitle: 'Population',
    }
/////////////////////////////////////////////////////////////////////////////////////////////
    const scatterArgs={
        myHight: 600,
        myWidth: 800,
        nameOfSactter: "Sample Scatter Plot",
        colorOfPoint: "red",
        xTitle: "X Axis",
        yTitle: "Y Axis",
        xTicks: 30,
        yTicks: 10
    }
/////////////////////////////////////////////////////////////////////////////////////////////
  return (
        <div>
            <hr className="Separator"></hr>
            <div className="component-section text-field-section"> 
                <MyTextField {...textFieldArgs} ></MyTextField>
            </div>

            <div className="component-section list-section"> 
                <h3>My List</h3>
                <MyList {...listArgs}></MyList>
            </div>

            <div className="component-section dropdown-section"> 
                <h3>My Dropdown Menu</h3>
                <MyDropdownMenu {...dropDownArg}></MyDropdownMenu>
            </div>

            <RightClickMenu {...rightClickArgs} className='right-click-section'>
                <h3>Right Click is working anywhere in this section</h3>
             </RightClickMenu>
                
            <div className="component-section histogram-section"> 
                <h3>Histogram Chart</h3>
                <HistogramChart {...histogramArgs}> </HistogramChart>
            </div>

            <div className="component-section bubble-chart-section"> 
                <h3>Bubble Chart</h3>
                <BubbleChart {...bubbleArgs}></BubbleChart>
            </div>

            <div className="component-section scatter-plot-section"> 
                <h3>Scatter Plot</h3>
                <ScatterPlot {...scatterArgs}></ScatterPlot>
            </div>
        </div>
    )
}

export default OmarComp