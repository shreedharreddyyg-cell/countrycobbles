"use client";

import { useState } from "react";

export default function PortfolioManager() {

const [file,setFile] = useState(null);
const [uploading,setUploading] = useState(false);

const handleFileChange = (e) => {
const selectedFile = e.target.files[0];
setFile(selectedFile);
};

const handleUpload = async () => {

if(!file){
alert("Please select an image first");
return;
}

setUploading(true);

const formData = new FormData();
formData.append("file",file);

const response = await fetch("/api/portfolio/upload",{
method:"POST",
body:formData
});

const result = await response.json();

setUploading(false);

if(result.success){
alert("Image uploaded successfully");
}else{
alert("Upload failed");
}

};

return(

<div>

<h1 className="text-3xl font-semibold mb-8">
Portfolio Manager
</h1>

<div className="bg-white p-6 rounded-xl shadow-sm max-w-md">

<input
type="file"
accept="image/*"
onChange={handleFileChange}
className="mb-4 block"
/>

<button
onClick={handleUpload}
className="bg-black text-white px-6 py-2 rounded"
>

{uploading ? "Uploading..." : "Upload Image"}

</button>

</div>

</div>

);

}