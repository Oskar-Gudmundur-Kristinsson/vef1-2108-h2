import { empty } from './helpers';

export default class List {
  // eslint-disable-next-line
   // eslint-disable-line

  constructor() {
    this.container = document.querySelector('.list');
  }

  populate() {
    const son = JSON.parse('lectures.json');
    const vid = document.createElement('iframe');
    vid.src = son.lectures[0].content.data;
    vid.appendChild(this.container);
  }

  load() {
    empty(this.container);
  }
}
