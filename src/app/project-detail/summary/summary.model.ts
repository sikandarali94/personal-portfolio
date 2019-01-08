/* Define model for summary in order to populate the summary section correctly. */
export class Summary {
    /* A summary should have an attributes property of type:
    { client: string, date: string, role: string, technologies: string[][], title: string }
     */
    public attributes: { client: string, date: string, role: string, technologies: string[][], title: string };
    public links: string[][]; // A summary should have a links property that holds an array of an array of strings.

    constructor(
        attributes: { client: string, date: string, role: string, technologies: string[][], title: string },
        links: string[][]
    ) {
        this.attributes = attributes;
        this.links = links;
    }
}
