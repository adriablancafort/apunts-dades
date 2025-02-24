import PocketBase from "pocketbase";

export const pb = new PocketBase(`${import.meta.env.VITE_POCKETBASE_ENDPOINT}`);

export function getFileUrl(element: any) {
    return `${import.meta.env.VITE_POCKETBASE_ENDPOINT}/api/files/${element.collectionId}/${element.id}/${element.file}`;
}
