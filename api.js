const departments = [
  { id: "a-1", name: "Фортепіано", photo:'/img/pexels-cottonbro-studio-5650529.jpg', background:'./src/assets/img/bg-2.jpg' },
  { id: "a-2", name: "Струнно-смичкові інструменти", photo:'/img/pexels-pixabay-210854.jpg' },
  { id: "a-3", name: "Духові інструменти", photo:'/img/pexels-teddy-yang-2254140.jpg'},
  { id: "a-4", name: "Ударні інструменти", photo:'/img/pexels-josh-sorenson-995301.jpg' },
  { id: "a-5", name: "Народні інструменти", photo:'/img/pexels-pixabay-33597.jpg' },
  { id: "a-6", name: "Вокал", photo:'/img/pexels-dmitry-demidov-3783471.jpg' },
  { id: "a-7", name: "Музично - теоретичний відділ", photo:'/img/bg.jpg' }
];

export const getDepartments = () => {
  return departments;
};

export const getDepartmentById = (departmentId) => {
  return departments.find((department) => department.id === departmentId);
};

const bands = [
  { id: "q-1", name: "Оркестр народної музики 'Барвисті Візерунки'", photo:'./src/assets/img/pexels-dmitry-demidov-3783471.jpg' },
  { id: "q-2", name: "Фортепіанний дует 'Но-Та'", photo:'./src/assets/img/pexels-dmitry-demidov-3783471.jpg' },
  { id: "q-3", name: "Дитячий хор", photo:'./src/assets/img/pexels-dmitry-demidov-3783471.jpg' },
  { id: "q-4", name: "Ансамбль скрипалів", photo:'./src/assets/img/pexels-dmitry-demidov-3783471.jpg' },
  { id: "q-5", name: "Ансамбль флейтистів", photo:'./src/assets/img/pexels-dmitry-demidov-3783471.jpg' },
  { id: "q-6", name: "Вокальний дует", photo:'./src/assets/img/pexels-dmitry-demidov-3783471.jpg' },
  { id: "q-7", name: "Фольклорний ансамбль", photo:'./src/assets/img/pexels-dmitry-demidov-3783471.jpg' },
  { id: "q-8", name: "Ансамбль гітаристів", photo:'./src/assets/img/pexels-dmitry-demidov-3783471.jpg' }
];

export const getBands = () => {
  return bands;
};

export const getBandById = (bandId) => {
  return bands.find((band) => band.id === bandId);
};