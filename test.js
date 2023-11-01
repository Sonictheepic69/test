var map = {
    title: "Test",
    song: "env2",
    maker: "Sonictheepic69",
    spawn: [0, 0.5, 0],
    init: function () {
      a.p([0, 0, 0], [0, 0, 0], [5, 2, 100], "ffffff", 0, 0, 0.6, true, false, false, false);
    },
    post: function() {
        a.m('P0').unfreezeWorldMatrix();
        a.m('P0').material = decorations.materials.moving_mat;
    },
    section_id: 0,
    reset: function() {
        this.section_id = 0;
        a.m('C0').rotationQuaternion = BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0,0,0), 0);
        a.m('C0').rotation.x = 0;
        a.m('C0').rotation.y = 0;
        a.m('C0').rotation.z = 0;
        a.m('C0').position.x = -1.81;
        a.m('C0').position.y = 9.11;
        a.m('C0').position.z = -42.45;
        a.m('C0').scaling.x = 2;
        a.m('C0').scaling.y = 2;
        a.m('C0').scaling.z = 2;
    },
    physics_update: function() {},
    render_update: function() {}
}
