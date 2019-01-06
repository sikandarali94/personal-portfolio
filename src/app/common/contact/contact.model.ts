/* Define model for contact in order to populate the contact section correctly. */
export class Contact {
    headings: string[]; // A contact should have a headings property that holds an array of strings.
    links: string[][]; // A contact should have a links property that holds an array of an array of strings.

    constructor(headings: string[], links: string[][]) {
        this.headings = headings;
        this.links = links;
    }
}
