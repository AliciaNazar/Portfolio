import { trigger, transition, style, animate } from '@angular/animations';

export const slideFromBottom = trigger('slideFromBottom', [
    transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('1s cubic-bezier(0.25, 0.8, 0.25, 1)', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('1s cubic-bezier(0.25, 0.8, 0.25, 1)', style({ transform: 'translateY(-100%)' }))
      ])
]);

export const slide1 = trigger('slide1', [
    transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('1s cubic-bezier(0.25, 0.8, 0.25, 1)', style({ transform: 'translateY(0%)' }))
    ]),
    transition(':leave', [
        animate('1s cubic-bezier(0.25, 0.8, 0.25, 1)', style({ transform: 'translateY(-100%)' }))
    ])
]);
   
export const slide2 = trigger('slide2', [
    transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('1s cubic-bezier(0.25, 0.8, 0.25, 1)', style({ transform: 'translateY(0%)' }))
    ]),
    transition(':leave', [
        animate('1s cubic-bezier(0.25, 0.8, 0.25, 1)', style({ transform: 'translateY(100%)' }))
    ])
]);
