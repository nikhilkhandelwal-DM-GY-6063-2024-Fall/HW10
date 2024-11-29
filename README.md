# HW10: Visualizing Sound

This project explores sound visualization using the p5.js sound library. The assignment is divided into two parts:

- **HW10A:** Visualizing live sound with a dynamic, interactive experience.
- **HW10B:** Creating a static visualization of recorded sound.

## HW10A: Visualizing Live Sound

### Description
In this part, we visualize live sound by analyzing both amplitude and frequency data from a song by Rufus Du Sol named Music is Better. The visualization includes a dynamic starry background and colorful, moving patterns influenced by the music.

### Features
1. **Dynamic Background:** A starry night scene where star brightness changes based on the song's amplitude.
2. **Centerpiece Visualization:** A pulsating circle at the center, with size and transparency influenced by the volume of the song.
3. **Frequency Rings:** Circular patterns around the center that react to the song's frequency spectrum.
4. **User Interactivity:** 
   - A color picker to change the visualization's base color.
   - A slider to control the size of the frequency rings.

### Song
The visualization uses a song by Rufus Du Sol named Music is Better (`song.mp3`). The amplitude and frequency data are extracted in real-time using the p5.Amplitude and p5.FFT objects.

### How It Works
- The amplitude controls the size of the pulsating circle and the brightness of stars.
- The frequency spectrum generates radial patterns around the center, with each frequency affecting the radius and color of the shapes.
- User input (color picker and slider) adds personalization.

---

## HW10B: Visualizing Recorded Sound

### Description
This part creates a static representation of an entire song by Rufus Du Sol named Music is Better using the `getPeaks()` function to map amplitude data to a waveform.

### Features
1. **Static Visualization:** A waveform representing the song's amplitude across its duration.
2. **Custom Styling:** The waveform is drawn with vibrant colors, giving a unique aesthetic.
3. **Interactive Control:** A play/pause button to toggle song playback.

### Song
This part uses a song by Rufus Du Sol named Music is Better (`songb.mp3`) of around 3 minutes. The `getPeaks()` function provides amplitude data, scaled to match the canvas width.

### How It Works
- The `getPeaks()` function generates an array of amplitude data.
- The data is mapped to create a waveform, with peaks drawn vertically across the canvas.
- The waveform acts as a static "poster" representation of the song.

---

## Tools and Libraries
- **p5.js**: For canvas-based drawing and visual effects.
- **p5.sound.js**: For sound analysis and playback.

---

## Personal Reflection
These visualizations were designed to reflect the beauty and rhythm of music, blending technical sound analysis with artistic interpretation. The interactivity and dynamic effects in HW10A make it ideal for live performances, while the static representation in HW10B offers a meaningful "snapshot" of a song.

