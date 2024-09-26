import { Routes } from '@angular/router';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { FormMaterialComponent } from './form-material/form-material.component';
import { CardComponent } from './pages/card/card.component';
import { MyServiceComponent } from './pages/my-service/my-service.component';
import { ProductCardComponent } from './pages/product-card/product-card.component';
import { RatingComponent } from './rating/rating.component';
import { CVComponent } from './cv/cv.component';
import { OrderComponent } from './order/order.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { FormArrayComponent } from './form-array/form-array.component';

export const routes: Routes = [
  {
    path: 'form',
    component: FormMaterialComponent,
  },
  {
    path: 'buttonGroup',
    component: ButtonGroupComponent,
  },
  {
    path: 'rating',
    component: RatingComponent,
  },
  {
    path: 'my-service',
    component: MyServiceComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },
  // {
  //   path: '',
  //   component: PopupComponent,
  // },
  // {
  //   path: '',
  //   component: ProductCardComponent,
  // },
  // {
  //   path: '',
  //   component: CVComponent,
  // },
  // {
  //   path: '',
  //   component: OrderComponent
  // },
  // {
  //   path: '',
  //   component: FormArrayComponent
  // },
  {
    path: '',
    component: DropDownComponent
  }
];
