interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}
interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const {
    song,
    details:{author}
} = audioPlayer

console.log(`${song} - ${author}`);

const [, , trunk='No hay personaje'] = ['Goku', 'Vegeta', 'Trunk']
// const trunk = dbz[3] || 'No hay personaje'


console.log('personaje 3 =', trunk);

export {}