import { Routes } from '@angular/router';
import { RegisterationFormComponent } from './Component/registeration-form/registeration-form.component';
import { LoginComponent } from './Component/login/login.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { authGuard } from './Gaurd/auth.guard';
import { CreateUserComponent } from './Admin/create-user/create-user.component';
import { AddProductComponent } from './User/UserDashboard/add-product.component';
import { UproductDialogComponent } from './Dialog/uproduct-dialog/uproduct-dialog.component';
import { OrderComponent } from './User/order/order.component';
import { ForgetpasswordComponent } from './User/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './User/resetpassword/resetpassword.component';
import { MyordersComponent } from './User/myorders/myorders.component';
import { PaymentComponent } from './User/payment/payment.component';

export const routes: Routes = [
      {path:'register',component:RegisterationFormComponent},
      {path:'',component:LoginComponent},
      {path:'createuser',component:CreateUserComponent},
      {path:'myorders',component:MyordersComponent},
      {path:'admin',component:AdminDashboardComponent,canActivate:[authGuard]},
      {path:'prod',component:AddProductComponent,canActivate:[authGuard]},
      {path:'mat',component:UproductDialogComponent},
      {path:'orderprod',component:OrderComponent},
      {path:'forgetpassword',component:ForgetpasswordComponent},
      {path:'resetpassword',component:ResetpasswordComponent},
      {path:'payment/:id',component:PaymentComponent},
      { path: 'payment', component: PaymentComponent }
];
