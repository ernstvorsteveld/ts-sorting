function sort_old() {
    fetch('./data1.json')
    .then((response) => response.json())
        .then((json) => console.log(json));
}

interface Moment {
    date: Date
    display: string
}

function create(count: number): Taxonomy[] {
    let taxonomies: Taxonomy[] = [];
    var i: number;
    for (i = 0; i < count; i++) {
        taxonomies.push({ "priority": "prio" + i, "name": "name" + i });
    }
    return taxonomies;
}

function create_and_sort(count: number): Taxonomy[] {
    let taxonomies: Taxonomy[] = create(count);

    return sort(taxonomies);
}

function compareFn(a: Taxonomy, b: Taxonomy): number {
    if (a.priority < b.priority) {
        return -1;
    }
    if (a.priority > b.priority) {
        return 1;
    }
    return 0;
}

function sort(taxonomies: Taxonomy[]): Taxonomy[] {
    let start = getNow();
    document.getElementById("start").innerHTML = start.display + ", in millis: " + start.date.getTime();
    taxonomies.sort(compareFn);
    let end = getNow();
    document.getElementById("end").innerHTML = end.display + ", in millis: " + end.date.getTime();
    document.getElementById("spent").innerHTML = (end.date.getTime() - start.date.getTime()).toLocaleString() + " millis";
    return taxonomies;
}

function getNow(): Moment {
    let new_Date: Date = new Date();
    let result: string = new_Date.toLocaleString();
    return { date: new_Date, display: result };
}