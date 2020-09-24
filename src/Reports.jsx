import React from 'react';

const Reports=()=>{
	return(
	<div>
		<div className="frame">
			<div className="center">
				<div className="title">
					<h1>Drop file to upload</h1>
				</div>

				<div className="dropzone">
					<img src="http://100dayscss.com/codepen/upload.svg" alt="upload" className="upload-icon" />
					<input type="file" className="upload-input" />
				</div>

				<button type="button" className="btn btn-outline-danger" name="uploadbutton">Upload file</button>

			</div>
		</div>
	</div>
	);
};

export default Reports;