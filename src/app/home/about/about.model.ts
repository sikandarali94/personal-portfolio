/* Define model for about in order to populate the about section correctly. */
export class About {
    public description: string; // An about should have a description property of string type.
    public technologies: string[]; // An about should have a technologies property that holds an array of strings.
    public title: string; // An about should have a title property of string type.

    constructor(description: string, technologies: string[], title: string) {
        this.description = description;
        this.technologies = technologies;
        this.title = title;
    }
}
