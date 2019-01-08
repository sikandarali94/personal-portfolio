/* Define model for a list in order to populate the list component correctly. */
export class List {
    public route: string; // A list should have a route property of string type.
    public technologies: string []; // A list should have a technologies property that holds an array of strings.
    public title: string; // A list should have a title property of string type.

    constructor(route: string, technologies: string[], title: string) {
        this.route = route;
        this.technologies = technologies;
        this.title = title;
    }
}
