import PhonesPage from './components/PhonesPage.js'

new PhonesPage(
  document.querySelector('App')
);

//
// const weddingPlaner = {
//   result: null,
//   status: 'Pending',
//   successCallbacks: [],
//   errorCallbacks: [],
//
//   then(callback) {
//     if (this.status === 'Resolved') {
//       callback(this.result);
//     } else if (this.status === 'Pending') {
//       this.successCallbacks.push(callback);
//     }
//   },
//
//   resolve(data) {
//     if (this.status !== 'Pending') return;
//
//     this.status = 'Resolved';
//     this.result = data;
//
//     for (const callback of this.successCallbacks) {
//       callback(data);
//     }
//   },
//
//   catch(callback) {
//     if (this.status === 'Rejected') {
//       callback(this.result);
//     } else if (this.status === 'Pending') {
//       this.errorCallbacks.push(callback);
//     }
//   },
//
//   reject(error) {
//     if (this.status !== 'Pending') return;
//
//     this.status = 'Rejected';
//     this.result = error;
//
//     for (const callback of this.errorCallbacks) {
//       callback(error);
//     }
//   },
// };
//
// weddingPlaner.then((data) => {
//   console.log('Success', data);
// });
//
// weddingPlaner.resolve(999);
//
//
// weddingPlaner.then((data) => {
//   console.log('Late success', data);
// });
