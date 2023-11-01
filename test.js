// window.isMapLoaded=!0;n=document.createElement("script");n.type="text/javascript",n.src='https://sonictheepic69.github.io/test/test.js',n.onload=document.getElementsByTagName("head")[0].appendChild(n)
var map = {
    title: "Test",
    song: "env2",
    maker: "Sonictheepic69",
    spawn: [0, 0.5, 0],
    init: function () {
      a.p([0, 0, 0], [0, 0, 0], [5, 2, 100], "ffffff", 0, 0, 0.6, true, false, false, false);
    },
    post: function() {
        a.u('P0')
    },
    section_id: 0,
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0, 0, 0], [0, 0, 0], [2, 2, 2]);
    },
    physics_update: function() {},
    render_update: function() {}
}
