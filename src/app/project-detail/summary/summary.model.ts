/* Define model for summary in order to populate the summary section correctly. */
export class Summary {
    public title: string; // A summary should have a title property of type string.
    public technologies: string[]; // A summary should have a technologies property that holds an array of strings.
    /* A summary should have an attributes property of type:
    { client: string, date: string, role: string, technologies: string[][], title: string }
     */
    public attributes: {client: string, date: string, role: string};
    public links: string[][]; // A summary should have a links property that holds an array of an array of strings.

    constructor(
        title: string,
        attributes: { client: string, date: string, role: string},
        links: string[][]
    ) {
        this.title = title;
        this.attributes = attributes;
        this.links = links;
    }
}
