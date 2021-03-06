/* Define model for a project in order to populate the projects section correctly. */
export class Project {
    public attributes: string[][]; // A project should have an attributes property that holds an array of an array of strings.
    public role: string; // A project should have a role property of string type.
    public subheading: string; // A project should have a subheading property of string type.
    public summary: string; // A project should have a summary property of string type.
    public technologies: string[]; // A project should have a technologies property that holds an array of strings.
    public title: string; // A project should have a title property of string type.
    public img: string[]; // A project should have an img property that holds an array of strings.
    public route: string; // A project should have a route property of string type.

    constructor(
        attributes: string[][],
        role: string,
        subheading: string,
        summary: string,
        technologies: string[],
        title: string,
        img: string[],
        route: string
    ) {
        this.attributes = attributes;
        this.role = role;
        this.subheading = subheading;
        this.summary = summary;
        this.technologies = technologies;
        this.title = title;
        this.img = img;
        this.route = route;
    }
}
