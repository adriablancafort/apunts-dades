import { pb } from "$lib/pocketbase.ts";

export async function load({ params, parent }) {
    const { note_id } = params;

    const note = await pb.collection('notes').getOne(note_id);

    return {
        note,
        title: "Editar " + note.title,
        breadcrumb: "Editar Apunt"
    };
}