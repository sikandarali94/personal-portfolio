/* Define model for a phase in order to populate the phases section correctly. */
export class Phase {
    public images: string[]; // A phase should have an images property that holds an array of strings.
    public heading: string; // A phase should have a phase property of string type.
    public process: string; // A phase should have a process property of string type.

    constructor(images: string[], heading: string, process: string) {
        this.images = images;
        this.heading = heading;
        this.process = process;
    }
}
