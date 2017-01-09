interface MediaStart {
    start: string;
}

interface MediaStop { 
    stop: string;
}

class Music implements MediaStart, MediaStop { //음악 
    start: string;
    stop: string;
    constructor(start: string, stop: string) {
        this.start = start;
        this.stop = stop;
    }
}

class Video implements MediaStart, MediaStop { //비디오
    start: string;
    stop: string;
    constructor(start: string, stop: string) {
        this.start = start;
        this.stop = stop;
    }
}

class Images implements MediaStart, MediaStop {//사진
    start: string;
    stop: string;
    constructor(start: string, stop: string) {
        this.start = start;
        this.stop = stop;
    }
}

let music = new Music("음악 시작", "음악 정지");
let video = new Video("비디오 시작", "비디오 정지");
let image = new Images("사진 시작", "사진 정지");

console.log(music.start, music.stop);