module.exports = {
  name: 'workshop-prototype',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/workshop-prototype',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
