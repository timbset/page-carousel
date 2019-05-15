// For checking that bundle does not contain secure parts
global.MY_SECURE_VAR = 'MY_SECURE_VAR';

export default async () => {
  return [
    '/view1?content=Test1',
    '/view1?content=Test2',
  ];
};
