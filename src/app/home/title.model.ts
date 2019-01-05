/* Here we define the structure of the data we should have to populate the title section of the home page of our app. */
export class Title {
    public motto: string; // A title should have a motto property of string type.
    public subheading: string; // A title should have a subheading property of string type.
    public img: string; // A title should have a img property of string type.
    public links: string[]; // A title should have a links property that holds an array of strings.

    constructor(motto: string, subheading: string, img: string, links: string[]) {
        this.motto = motto;
        this.subheading = subheading;
        this.img = img;
        this.links = links;
    }
}
