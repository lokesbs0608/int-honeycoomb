import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadDropzone } from "react-uploader";



interface Props{
    onUpload:any
}

// Initialize once (at the start of your app).
const uploader = Uploader({
    apiKey: "free", // Get production API keys from Bytescale
});

// Configuration options: https://www.bytescale.com/docs/upload-widget/frameworks/react#customize
const options = { multi: true };

function DragDrop({onUpload}:Props) {
    return (
        <div className="my-3">
            <UploadDropzone
                uploader={uploader}
                options={options}
                onUpdate={(files) => onUpload(files.map((x) => x.fileUrl).join("\n"))}
                width="600px"
                height="375px"
            />
        </div>
    );
}

export default DragDrop;
