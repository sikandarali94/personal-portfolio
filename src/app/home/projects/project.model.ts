/* Define model for a project in order to populate the projects section correctly. */
export class Project {
    public date: string; // A project should have a date property of string type.
    public img: string[]; // A project should have an img property that holds an array of strings.
    public role: string; // A project should have a role property of string type.
    public subheading: string; // A project should have a subheading property of string type.
    public summary: string; // A project should have a summary property of string type.
    public technologies: string[]; // A project should have a technologies property that holds an array of strings.
    public title: string; // A project should have a title property of string type.

    constructor(date: string, img: string[], role: string, subheading: string, summary: string, technologies: string[], title: string) {
        this.date = date;
        this.img = img;
        this.role = role;
        this.subheading = subheading;
        this.summary = summary;
        this.technologies = technologies;
        this.title = title;
    }
}
