import React from 'react';
import {HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar} from '@syncfusion/ej2-react-richtexteditor';

const Prescription=()=>{
	return(
	<div>
		<RichTextEditorComponent>
			<h2><center>Hospital +</center></h2>
			<p>Doctor's Name: </p>
			<p>Patient's Name: </p>
			<p>Age: </p>
			<p>Previous Conditions: </p>
			<p>Current Conditions/ Symptoms: </p>
			<p>Conclusion: </p>
			<p>Advice: </p>
			<p>Medicines: </p>
			<p>Date: </p>
			<button className="btn btn-danger">Save</button>
			<Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
        </RichTextEditorComponent>
	</div>
	);
};

export default Prescription;