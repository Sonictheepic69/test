// window.isMapLoaded=1;n=document.createElement("script");n.type="text/javascript",n.src='https://sonictheepic69.github.io/test/test.js',n.onload=document.getElementsByTagName("head")[0].appendChild(n);window.isMapLoaded=!0;g=document.createElement("audio");g.type="audio/mpeg",g.src='https://sonictheepic69.github.io/test/envBloom.mp3',g.onload=document.getElementsByTagName("head")[0].appendChild(g)
// window.isMapLoaded=1;n=document.createElement("script");n.type="text/javascript",n.src='https://sonictheepic69.github.io/test/test.js',n.onload=document.getElementsByTagName("head")[0].appendChild(n)
var map = {
    title: "Test",
    song: "bloom",
    maker: "Sonictheepic69",
    spawn: [0, 0.5, 0],
    init: function() {
      a.p([0, 0, 0], [0, 0, 0], [5, 2, 100], "ffffff", 0, 0, 0.6, true, false, false, false);
    },
    post: function() {
        a.u('P0');
    },
    section_id: 0,
    section_update: function() {

    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0, 0, 0], [0, 0, 0], [5, 2, 100]);
    },
    physics_update: function() {},
    render_update: function() {}
}
