import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import jsPDF from 'jspdf';
import logo from '../Image/a.jpg'

const CourseDetailsPage = () => {
    /*using loader data to get the details*/ 
    const details = useLoaderData()
    const { id, name, image, Description } = details;


    /*pdfGenarator*/ 
    
    const pdfGenerate = () => {
        let doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.addImage(logo, 'JPG', 65, 20, 500, 400)
        doc.addPage()
        doc.setFont('bold')
        doc.text(60, 60, 'Name')
        doc.text(60, 80, 'Email')
        doc.text(60, 100, 'Number')
        doc.setFont('Normal')
        doc.text(100, 60, ':RoBiN')
        doc.text(100, 80, ':saifsammy653@gmail.com')
        doc.text(120, 100, ':000000000000')
        doc.save('RoBiN.pdf')

    }

    return (
        <div className="container my-20 flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <h4 className="font-bold">{name}</h4>
                    </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                    <button onClick={pdfGenerate} className="btn btn-outline btn-accent">Download Pdf</button>
                </div>
            </div>
            <div className="p-4 text-center space-y-2 text-sm dark:text-gray-400">
                <p>{Description}</p>
                <Link to={`/chakout/${id}`} className="btn btn-outline btn-accent my-10">Get Premium Excess</Link>
            </div>
        </div>
    );
};

export default CourseDetailsPage;