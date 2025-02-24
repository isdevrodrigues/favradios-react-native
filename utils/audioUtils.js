const [sound, setSound] = useState();
const [isPlaying, setIsPlaying] = useState(false);

async function playSound() {
    console.log('Loading sound');
    const {sound} = await Audio.Sound.createAsync({uri: 'https://pureplay.cdnstream1.com/6009_64.aac'})
    setSound(sound)

    console.log('Playing sound');
    await sound.playAsync()
    setIsPlaying(true)
}

async function stopSound() {
    console.log('Stopping sound');
    if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(null);
        setIsPlaying(false);
    }
}