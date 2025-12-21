import { Routes } from '@angular/router';
import { RegisterationFormComponent } from './Component/registeration-form/registeration-form.component';
import { LoginComponent } from './Component/login/login.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { authGuard } from './Gaurd/auth.guard';
import { CreateUserComponent } from './Admin/create-user/create-user.component';
import { AddProductComponent } from './User/add-product/add-product.component';
import { UproductDialogComponent } from './Dialog/uproduct-dialog/uproduct-dialog.component';

export const routes: Routes = [
      {
            path:'register',component:RegisterationFormComponent
      },
      {path:'',component:LoginComponent},
      {
      path:'createuser',component:CreateUserComponent
      },
      {path:'admin',component:AdminDashboardComponent,canActivate:[authGuard]},
      {path:'prod',component:AddProductComponent,canActivate:[authGuard]},
      {path:'mat',component:UproductDialogComponent}
];
