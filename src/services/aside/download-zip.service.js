
import JSZip from "jszip";
import { saveAs } from "file-saver";

export const downloadZip = async ({ imageThumbnails }) => {
    const selected = imageThumbnails.filter(x => x.selected);
    const blobs = [];
    for (let image of selected) {
        const response = await fetch(image.fileurl.replace("https", "http"));
        const blob = await response.blob();
        blobs.push({
            name: image.name,
            blob,
        });
    }
    var zip = new JSZip();
    var img = zip.folder("light-box-images");
    blobs.forEach(blob => {
        img.file(blob.name, blob.blob, { base64: true });
    });
    const content = await zip.generateAsync({ type: "blob"} );
    saveAs(content, "light-box-images.zip");
}
