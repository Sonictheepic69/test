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
        a.m('P0').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0,0,0), 0);
        a.m('P0').rotation.x = 0;
        a.m('P0').rotation.y = 0;
        a.m('P0').rotation.z = 0;
        a.m('P0').position.x = 0;
        a.m('P0').position.y = 0;
        a.m('P0').position.z = 0;
        a.m('P0').scaling.x = 2;
        a.m('P0').scaling.y = 2;
        a.m('P0').scaling.z = 2;
    },
    physics_update: function() {},
    render_update: function() {}
}
