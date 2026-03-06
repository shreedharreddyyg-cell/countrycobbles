import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req){

const data = await req.formData();
const file = data.get("file");

if(!file){
return Response.json({success:false});
}

const bytes = await file.arrayBuffer();
const buffer = Buffer.from(bytes);

const filePath = path.join(
process.cwd(),
"public/uploads/portfolio",
file.name
);

await writeFile(filePath,buffer);

return Response.json({
success:true,
file:`/uploads/portfolio/${file.name}`
});

}